from app import app
from flask import render_template, jsonify, request
from .api import ( 
                  create_answer_sheet, get_all_answers, 
                  get_answer_by_id, create_course_doc, 
                  get_course_doc, delete_course_doc,
                  doc_to_json
)

@app.route('/', methods=['GET'])
def index():
  return 'Hello World'

@app.route('/course', methods=['GET'])
def get_course():
  _data = request.json
  _course = doc_to_json(get_course_doc(_data))
  response = {'course': _course}
  if _course:
    return response, 200
  return response, 500
  
@app.route('/course', methods=['POST'])
def create_course():
  _data = request.json
  _created = doc_to_json(create_course_doc(_data))
  response = {'course': _created}
  if _created:
    return response, 200
  return response, 500

@app.route('/course', methods=['DELETE'])
def delete_course():
  _data = request.json
  _deleted = doc_to_json(delete_course_doc(_data))
  response = {'course': _deleted}
  if _deleted:
    return response, 200
  return response, 500

@app.route('/answers', methods=['GET'])
def get_answers():
  response = get_all_answers()
  if response:
    return response, 200
  return response, 500

@app.route('/answers/<int:answer_id>', methods=['GET'])
def get_answer(answer_id):
  pass

@app.route('/answer/create', methods=['POST'])
def create_answer():
  # Call to sheet maker in order to create pdf
  _data = request.json 
  _created = create_answer_sheet(_data)
  response = {'success': _created}
  if _created:
    return response, 200 
  else:
    return response, 500 

@app.route('/answer/<int:answer_id>', methods=['DELETE'])
def delete_answer(answer_id):
  pass

@app.route('/answer/download/<int:answer_id>')
def download_answer(answer_id):
  pass







