from flask_restful import Resource, Api, abort, reqparse
from flask import jsonify, request
from app import app
from .models import Course, Answer
import json

api = Api(app)


def dict_transformation(qset):
  # Extracted from
  # https://stackoverflow.com/questions/43629181/converting-mongoengine-objects-to-json#44332720
  return json.loads(qset.to_json())
  

def course_validator(data):
  fields = ['course', 'semester', 'year', 'instructor', 'section']
  for field in fields:
    if field not in data.keys():
      return False
  return True



class Courses(Resource):

  def __init__(self):
    self.parser =   reqparse.RequestParser()
    

  def abort_if_course_doesnt_exist(self, course):
    if course is None:
      abort(404, message="Course doesn't exists")

  def get(self, course_id):
    course = Course.objects(uuid=course_id).first()
    self.abort_if_course_doesnt_exist(course)
    response = {'course': dict_transformation(course)}
    return jsonify(response)

  def post(self, course_id):
    print(request.json)


  def delete(self, course_id):
    pass 

class AllCourses(Resource):
  def get(self):
    courses = Course.objects()
    response = {'courses': dict_transformation(courses)}
    return response

class Answers(Resource):
  def get(self):
    return {'course': 'course_data'}

  def put(self):
    pass

  def post(self):
    pass

  def delete(self):
    pass 

class User(Resource):
  def get(self):
    pass

  def put(self):
    pass

  def post(self):
    pass

  def delete(self):
    pass 


api.add_resource(Courses, '/coursee/<string:course_id>')
api.add_resource(AllCourses, '/coursess')
# api.add_resource(Answers, '/coursess/string:id/answer/string:answer_id')
api.add_resource(Answers, '/answers/')
