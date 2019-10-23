import io
from app import app
from flask import render_template, jsonify, request, send_file
from .api import ( 
                   
                  create_course_doc, get_course_doc, delete_course_doc,
                  create_answer_doc, get_answer_doc, delete_answer_doc,
                  download_answer_sheet,
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

@app.route('/course/answer', methods=['GET'])
def get_answer():
  _data = request.json
  _answer = doc_to_json(get_answer_doc(_data))
  response = {'answer': _answer}
  if _answer:
    return response, 200
  return response, 500

@app.route('/course/answer', methods=['POST'])
def create_answer():
  _data = request.json
  _answer = doc_to_json(create_answer_doc(_data))
  response = {'answer': _answer}
  if _answer:
    return response, 200
  return response, 500

@app.route('/course/answer', methods=['DELETE'])
def delete_answer():
  _data = request.json
  _answer = doc_to_json(delete_answer_doc(_data))
  response = {'answer': _answer}
  if _answer:
    return response, 200
  return response, 500

@app.route('/course/answer/download')
def download_answer():
  _data = request.json
  _answer_sheet = download_answer_sheet(_data)
  if _answer_sheet:
    return send_file(io.BytesIO(_answer_sheet), 
                     attachment_filename='answer_sheet.pdf',
                     mimetype='application/pdf') 






