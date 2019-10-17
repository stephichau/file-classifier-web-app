import os
from mongoengine import *
from .db import get_collection, create_fs_cursor
from sheet_maker import main as make


class Course(Document):
  name = StringField(max_length=200, required=True)
  semester = IntField(min_value = 0, max_value = 2, required=True)
  year = StringField(max_length=5, required=True)
  professor = StringField(max_length=200, required=True)

class Answer(Document):
  # delete all answer sheets when deleting the course
  course = ReferenceField(Course, reverse_delete_rule=CASCADE)

  upper_bound = IntField(min_value = 1, required = True)
  lower_bound = IntField(min_value = 0, required=True)
  evaluation = StringField(max_length=100, required=True)
  template = FileField(required=True)
  answer_file = FileField(required=True)


def create_course(data: dict) -> bool:
  _course = Course()
  _course.name = str(data['name']).lower()
  _course.semester = int(data['semester'])
  _course.year = str(data['year']).lower()
  _course.professor = str(data['professor'])
  return True if _course.save() else return False


def create_answer_sheet(_data: dict) -> bool:
  ans_sheets = get_collection('answer_sheets')
  fs = create_fs_cursor()
  sheet = _data

  if make.main(_data):
    COURSE_NAME = _data['course']
    EVALUATION = _data['evaluation']
    ANSWER_SHEETS_DIR_PATH = f'{os.getcwd()}/ANSWER_SHEETS/{COURSE_NAME}_{EVALUATION}/compilation.pdf'

    # stores file in mongodb
    with open(ANSWER_SHEETS_DIR_PATH, 'rb') as pdf:
      file_id=fs.put(pdf)
      sheet['file_id'] = file_id
      ans_sheets.insert_one(sheet)

    return True

def create_course(_data: dict) -> bool:
  courses = get_collection('course')
  data = {
    'name': str(_data['name']).lower(),
    'semester': str(_data['semester']).lower(),
    'year': str(_data['year']).lower(),
    ''
  }

  

def get_all_answers():
  cursor = get_collection('answer_sheet')
  return cursor.find()
  

def get_answer_by_id(_id: int):
  cursor = get_collection('answer_sheet')
  sheet = cursor.find({'id': _id})
  if sheet:
    return sheet





