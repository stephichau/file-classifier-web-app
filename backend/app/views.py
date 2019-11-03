from flask_restful import Resource, Api, abort, reqparse
from flask import jsonify, request
from app import app
from .models import Course, Answer
from mongoengine import *
import werkzeug
import os
import json

connect(os.getenv('MONGODB'))
api = Api(app)


def dict_transformation(qset):
  # Extracted from
  # https://stackoverflow.com/questions/43629181/converting-mongoengine-objects-to-json#44332720
  return json.loads(qset.to_json())

def abort_if_course_doesnt_exist(course):
  if course is None:
    abort(404, message="Course doesn't exists")

class Courses(Resource):
  def __init__(self):
    self.parser = reqparse.RequestParser()
  
  def abort_if_course_cant_be_deleted(self):
    abort(400, message="Course couldn't be deleted")
    
  def abort_if_course_cant_be_modified(self):
    abort(400, message="Course couldn't be modified" )

  def get(self, course_id):
    course = Course.objects(uuid=course_id).first()
    abort_if_course_doesnt_exist(course)
    return jsonify({'course': dict_transformation(course)})
    
  def delete(self, course_id):
    course = Course.objects(uuid=course_id).first()
    abort_if_course_doesnt_exist(course)
    if course:
      course.delete()
      return jsonify({'course': course_id})
    return self.abort_if_course_cant_be_deleted()
  
  def put(self,course_id):
    self.parser.add_argument('course', type=str, location='json', required=True)
    self.parser.add_argument('year', type=str, location='json', required=True)
    self.parser.add_argument('semester', type=int, location='json', required=True)
    self.parser.add_argument('section', type=str, location='json', required=True)
    self.parser.add_argument('instructor', type=str, location='json', required=True)
    args = self.parser.parse_args()
    course = Course.objects(uuid=course_id).first()
    self.abort_if_course_doesnt_exist(course) 
    course.name = args['course']
    course.year = args['year']
    course.semester = args['semester']
    course.section = args['section']
    course.instructor = args['instructor']
    if course.save():
      return jsonify({'course': dict_transformation(course)})
    return self.abort_if_course_cant_be_modified()

class CoursesList(Resource):
  def __init__(self):
    self.parser = reqparse.RequestParser(bundle_errors=True)
    self.parser.add_argument('course', type=str, location='json', required=True)
    self.parser.add_argument('year', type=str, location='json', required=True)
    self.parser.add_argument('semester', type=int, location='json', required=True)
    self.parser.add_argument('section', type=str, location='json', required=True)
    self.parser.add_argument('instructor', type=str, location='json', required=True)
  
  def abort_if_course_cant_be_created(self):
    abort(400, message="Course couldn't be created")

  def get(self):
    courses = Course.objects()
    response = {'courses': dict_transformation(courses)}
    return response
  
  def post(self):
    args = self.parser.parse_args()
    course = Course(
      name=args['course'],
      year=args['year'],
      semester=args['semester'],
      section=args['section'],
      instructor=args['instructor']
    )
    if course.save():
      return {'course': dict_transformation(course)}
    return self.abort_if_course_cant_be_created() 

class Answers(Resource):
  def __init__(self):
    self.parser = reqparse.RequestParser(bundle_errors=True)
    self.parser.add_argument('course_uuid', type=str, location='json', required=True)
    self.parser.add_argument('upper_bound', type=int, location='json', required=True)
    self.parser.add_argument('lower_bound', type=str, location='json', required=True)
    self.parser.add_argument('evaluation', type=int, location='json', required=True)
    self.parser.add_argument('section', type=str, location='json', required=True)
    self.parser.add_argument('instructor', type=str, location='json', required=True)

  def get(self):
    return {'course': 'course_data'}

  def put(self):
    pass

  def delete(self):
    pass 

class AnswersList(Resource):
  def __init__(self):
    self.parser = reqparse.RequestParser()

  def get(self,course_id):
    print(course_id)
    course = Course.objects(uuid=course_id).first()
    answers = Answer.objects(course=course).all()
    abort_if_course_doesnt_exist(course)    
    return jsonify({'answers': dict_transformation(answers)})

  def post(self,course_id):
    self.parser.add_argument('template', type=werkzeug.FileStorage, location='files', required=True)
    self.parser.add_argument('upper_bound', type=str, location='form', required=True)    
    self.parser.add_argument('lower_bound', type=int, location='form', required=True)
    self.parser.add_argument('evaluation', type=str, location='form', required=True)
    args = self.parser.parse_args()
    app.logger.debug(args)
    # Search for course
    course = Course.objects(uuid=course_id).first()
    abort_if_course_doesnt_exist(course)

    # Create template file in filesystem
    print(app.config['DATA_DIR'])
    



    answer = Answer(
      course = course,
      upper_bound = args['upper_bound'],
      lower_bound = args['lower_bound'],
      evaluation = args['evaluation'],
      template = args['template']
    )



class Users(Resource):
  def get(self):
    pass

  def put(self):
    pass

  def post(self):
    pass

  def delete(self):
    pass 

class UsersList(Resource):
  def get(self):
    pass

  def post(self):
    pass

## Course resources
api.add_resource(Courses, '/courses/<string:course_id>')
api.add_resource(CoursesList, '/courses')

## Answer resources
api.add_resource(Answers, '/courses/<string:course_id>/answers/<string:answer_id>')
api.add_resource(AnswersList, '/courses/<string:course_id>/answers')


##User resources
# api.add_resource(Users, '/users/<string:user_id>')
# api.add_resources(UsersList, '')