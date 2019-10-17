import os
from .db import get_collection, create_fs_cursor
from sheet_maker import main as make

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
  courses = get_collection('courses')
  
  

def get_all_answers():
  cursor = get_collection('answer_sheet')
  return cursor.find()
  

def get_answer_by_id(_id: int):
  cursor = get_collection('answer_sheet')
  sheet = cursor.find({'id': _id})
  if sheet:
    return sheet





