from app import app
from flask import render_template, jsonify, request
# from flask_httpauth import HTTPBasicAuth
from werkzeug.security import generate_password_hash, check_password_hash
from .api import create_answer_sheet

@app.route('/make', methods=['POST'])
def make():
  # Call to sheet maker in order to create pdf
  _data = request.json 
  _created = create_answer_sheet(_data)
  response = {'sucess': _created}
  if _created:
    return response, 200 
  else:
    return response, 500 





