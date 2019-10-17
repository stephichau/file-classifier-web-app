from app import app
from flask import render_template, jsonify, request
# from flask_httpauth import HTTPBasicAuth
from werkzeug.security import generate_password_hash, check_password_hash
from .api import create_answer_sheet, get_all_answers, get_answer_by_id


@app.route('/answers', methods=['GET'])
def get_answers():
  response = get_all_answers()
  if response:
    return response, 200
  else:
    return response, 500

@app.route('/answers/<int:answer_id>', methods=['GET'])
def get_answer(answer_id):
  response = get_answer_by_id(12):
  if response:
    return response, 200
  else:
    return response, 500

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







