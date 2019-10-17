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


def create_course_doc(data: dict) -> bool:
  _course = Course()
  _course.name = str(data['course']).lower()
  _course.semester = int(data['semester'])
  _course.year = str(data['year']).lower()
  _course.instructor = str(data['instructor'])
  _course.section = int(data['section'])
  return True if _course.save() else False

def get_course_doc(data: dict):
  _course = Course.objects(
    name = str(data['course']).lower(),
    semester = int(data['semester']),
    year = str(data['year']).lower(),
    instructor = str(data['instructor']),
    section = int(data['section'])
  )
  return _course.to_json() if _course else {}



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

def get_all_answers():
  pass
  

def get_answer_by_id(_id: int):
  pass




