import os
from mongoengine import *
from .db import get_collection, create_fs_cursor
from sheet_maker import main as make

connect(os.getenv('MONGODB'))

class Course(Document):
  name = StringField(max_length=200, required=True)
  semester = IntField(min_value = 0, max_value = 2, required=True)
  year = StringField(max_length=5, required=True)
  instructor = StringField(max_length=200, required=True)
  section = IntField(required=True)

class Answer(Document):
  # delete all answer sheets when deleting the course
  course = ReferenceField(Course, reverse_delete_rule=CASCADE)
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
  _course = Course.objects(
    name = str(data['course']).lower(),
    semester = int(data['semester']),
    year = str(data['year']).lower(),
    instructor = str(data['instructor']).lower(),
    section = int(data['section'])
  )
  return _course if _course else False

def delete_course_doc(data: dict):
  _course = get_course_doc(data)
  _temp = _course
  if _course:
    _course.delete()
    return _temp
  return False

def get_answer_doc(data: dict):
  pass

def create_answer_doc(data: dict):
  _course = get_course_doc(data)
  _template = None
  print(_course)
  if _course:
    print(stri(data['lower_bound']))
    _answer = Answer()
    _answer.course = _course,
    _answer.lower_bound = int(data['lower_bound']),
    _answer.upper_bound = int(data['upper_bound']),
    _answer.evaluation = str(data['evaluation']).lower()

    print(_answer)
    _answer_sheet = create_answer_sheet(data)
    print(_answer_sheet)

    _answer.answer_file.put(_answer_sheet) 
    _answer.template.put(_answer_sheet)

    if _answer.save():
      return _answer
    return False
    # return _answer if _answer.save() else False

def create_answer_sheet(_data: dict) -> bool:
  sheet = _data
  if make.main(_data):
    COURSE_NAME = _data['course']
    EVALUATION = _data['evaluation']
    ANSWER_SHEETS_DIR_PATH = f'{os.getcwd()}/ANSWER_SHEETS/{COURSE_NAME}_{EVALUATION}/compilation.pdf'

    # stores file in mongodb
    return open(ANSWER_SHEETS_DIR_PATH, 'rb')
      # file_id=fs.put(pdf)
      # sheet['file_id'] = file_id
      # ans_sheets.insert_one(sheet)
