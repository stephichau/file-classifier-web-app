from app import app
from flask import render_template, jsonify, request
from flask_httpauth import HTTPBasicAuth
from werkzeug.security import generate_password_hash, check_password_hash

@app.route('/make', methods=['POST'])
def make():
  data = request
  print(data.data)
  response = {'name': 'cristobal', 'pass': 123123}
  return jsonify(response)




