import os
import uuid
from mongoengine import *
from .db import get_collection, create_fs_cursor
from sheet_maker import main as make

connect(os.getenv('MONGODB'))

class Course(Document):
  name = StringField(max_length=200, required=True)
  uuid = UUIDField(binary=False, default=uuid.uuid4)
  semester = IntField(min_value = 0, max_value = 2, required=True)
  year = StringField(max_length=5, required=True)
  instructor = StringField(max_length=200, required=True)
  section = IntField(required=True)

class Answer(Document):
  # delete all answer sheets when deleting the course
  course = ReferenceField(Course, reverse_delete_rule=CASCADE)
  uuid = UUIDField(binary=False, default=uuid.uuid4)
  upper_bound = IntField(min_value = 1, required = True)
  lower_bound = IntField(min_value = 0, required=True)
  evaluation = StringField(max_length=100, required=True)
  template = FileField(required=True)
  answer_file = FileField(required=True)

def doc_to_json(doc):
  try:
    return doc.to_json()
  except:
    return {}

def create_course_doc(data: dict) -> bool:
  _course = Course()
  _course.name = str(data['course']).lower()
  _course.semester = int(data['semester'])
  _course.year = str(data['year']).lower()
  _course.instructor = str(data['instructor']).lower()
  _course.section = int(data['section'])
  return _course if _course.save() else False

def get_course_doc(data: dict):
  if 'uuid' in data:
    _course = Course.objects(uuid = data['uuid']).first()
  else:
    _course = Course.objects(
      name = str(data['course']).lower(),
      semester = int(data['semester']),
      year = str(data['year']).lower(),
      instructor = str(data['instructor']).lower(),
      section = int(data['section'])
    ).first()
  return _course if _course else False

def delete_course_doc(data: dict):
  if 'uuid' in data:
    _course = Course.objects(uuid = data['uuid']).first()
    if _course:
      _course.delete()
      return data 
  return {} 

def get_answer_doc(data: dict):
  if 'uuid' in data:
    _answer = Answer.objects(uuid=data['uuid']).first()
    return _answer
  return {}

def create_answer_doc(data: dict):
  _course = get_course_doc(data)
  if _course:
    _answer = Answer()
    _answer.course = _course
    _answer.lower_bound = int(data['lower_bound'])
    _answer.upper_bound = int(data['upper_bound'])
    _answer.evaluation = str(data['evaluation']).lower()

    _answer_sheet_path, _status = create_answer_sheet(data)
    if _status:
      _answer_file = open(_answer_sheet_path, 'rb')
      _answer.answer_file.put(_answer_file) 
      _answer.template.put(_answer_file)

    if _answer.save():
      return _answer
  return {}

def delete_answer_doc(data: dict):
  if 'uuid' in data:
    _answer = Answer.objects(uuid=data['uuid']).first()
    if _answer:
      _answer.delete()
      return _answer
    return {}

def download_answer_sheet(data: dict):
  if 'uuid' in data:
    _answer = Answer.objects(uuid=data['uuid']).first()
    if _answer:
      _file = _answer.answer_file.read()
      return _file
  return {}

def create_answer_sheet(data: dict):
  if make.main(data):
    COURSE_NAME = data['course']
    EVALUATION = data['evaluation']
    ANSWER_SHEETS_DIR_PATH = f'{os.getcwd()}/ANSWER_SHEETS/{COURSE_NAME}_{EVALUATION}/compilation.pdf'
    return ANSWER_SHEETS_DIR_PATH, True
  return '', False


