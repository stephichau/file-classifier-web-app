from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources=r'/*')

from app import routes
from app import views
