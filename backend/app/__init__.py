from flask import Flask
from flask_cors import CORS
from pathlib import Path
import os

app = Flask(__name__)
app.config.update(
  FLASK_ENV=os.getenv('FLASK_ENV'),
  TEMPLATES_DIR=Path(os.path.dirname(os.path.realpath(__file__))).parent / 'TEMPLATES',
  ANSWERS_DIR=Path(os.path.dirname(os.path.realpath(__file__))).parent / 'ANSWER_SHEETS',
  DATA_DIR=Path(os.path.dirname(os.path.realpath(__file__))).parent / 'DATA'
)

CORS(app, resources=r'/*')

# from app import routes
from app import views
