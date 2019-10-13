from .db import create_db_cursor, get_collection
from sheet_maker import main as make

def create_answer_sheet(_data: dict) -> bool:
  ans_sheets = get_collection('answer_sheets')
  sheet = _data
  if make.main(_data):
    return True

  # ans_sheets.insert_one(sheet)



