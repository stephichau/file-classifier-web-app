from flask_restful import Resource, Api, abort, reqparse
from flask import jsonify, request
from werkzeug.datastructures import FileStorage
from mongoengine import *

from pathlib import Path
import os
import json

from app import app
from .models import Course, Answer
from .answer_maker import maker

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

  def abort_if_answer_doesnt_exist(self, answer):
    if answer is None:
      abort(400, message="Answer doesnt exists")
  
  def abort_if_answer_couldnt_be_deleted(self):
    abort(400, message="Answer couldnt be deleted")

  def get(self, answer_id):
    answer = Answer.objects(uuid=answer_id).first()
    self.abort_if_answer_doesnt_exist(answer)
    return jsonify({'answer': dict_transformation(answer)})

  def delete(self, answer_id):
    answer = Answer.objects(uuid=answer_id).first()
    self.abort_if_answer_doesnt_exist(answer)
    if answer:
      answer.delete()
      return jsonify({'answer': answer_id})
    return self.abort_if_answer_couldnt_be_deleted()

  def put(self, answer_id):
    self.parser.add_argument('upper_bound', type=int, location='form', required=True)
    self.parser.add_argument('lower_bound', type=int, location='form', required=True)
    self.parser.add_argument('evaluation', type=int, location='form', required=True)
    self.parser.add_argument('template', type=FileStorage, location='form', required=True)

    args = self.parser.parse_args()

    answer = Answer.objects(uuid=answer_id).first()
    self.abort_if_answer_doesnt_exist(answer)

    answer.upper_bound = args['upper_bound']
    answer.lower_bound = args['lower_bound']
    answer.evaluation = args['evaluation']
    
    if answer.save():
      return jsonify({'answer': dict_transformation(answer)})

class AnswersList(Resource):
  def __init__(self):
    self.parser = reqparse.RequestParser()

  def abort_if_answer_cant_be_created(self):
    abort(400, message="Answer couldn't be created")

  def get(self,course_id):
    course = Course.objects(uuid=course_id).first()
    answers = Answer.objects(course=course).all()
    abort_if_course_doesnt_exist(course)    
    return jsonify({'answers': dict_transformation(answers)})

  def post(self,course_id):
    self.parser.add_argument('template', type=FileStorage, location='files', required=True)
    self.parser.add_argument('upper_bound', type=int, location='form', required=True)    
    self.parser.add_argument('lower_bound', type=int, location='form', required=True)
    self.parser.add_argument('evaluation', type=str, location='form', required=True)
    self.parser.add_argument('copies', type=int, location='form', required=True)
    args = self.parser.parse_args()
    app.logger.debug(args)

    # Search for course
    course = Course.objects(uuid=course_id).first()
    abort_if_course_doesnt_exist(course)

    # Define template dir where the templates will be stored in filesystem
    template_dir = Path(app.config['DATA_DIR']) / course.year \
                   / str(course.semester) / course.name / str(course.section) \
                   / args['evaluation'] / 'templates'

    if not template_dir.exists():
      # Create file directory with parents
      template_dir.mkdir(parents=True)

    # Define answer dir where the templates will be stored in filesystem
    answer_dir = Path(app.config['DATA_DIR']) / course.year \
                  / str(course.semester) / course.name / str(course.section) \
                  / args['evaluation'] / 'answers'

    if not answer_dir.exists():
      # Create file directory with parents
      answer_dir.mkdir(parents=True)

    template_file = args['template']
    template_filepath = template_dir / template_file.filename

    app.logger.debug(template_filepath)

    template_file.save(str(template_filepath))

    # Data for sheet_maker function. There are more data needed than necessary
    data = {
      'course': course.name,
      'upper_bound': args['upper_bound'],
      'lower_bound': args['lower_bound'],
      'evaluation': args['evaluation'],
      'copies': args['copies'],
      'template_dir': str(template_dir),
      'answer_dir': str(answer_dir),
      'template': template_filepath,
      'semester': course.semester,
      'section': course.section,
      'year': course.year,
      'instructor': course.instructor,
      'ocr': 'qr'
    }

    if maker(data):
      # This is also define on maker function. TODO: define this in the data dict
      answer_filename = f'{data["course"]}_{data["lower_bound"]}_{data["upper_bound"]}.pdf'
      answer_file = Path(answer_dir / answer_filename).open(mode='rb')

      answer = Answer(
        course = course,
        upper_bound = args['upper_bound'],
        lower_bound = args['lower_bound'],
        evaluation = args['evaluation'],
        template = args['template'],
        answer_file = answer_file,

      )

      # answer.answer_file.put(answer_file)
      if answer.save():
        return jsonify({'answer': dict_transformation(answer)}) 
      return self.abort_if_answer_cant_be_created()


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