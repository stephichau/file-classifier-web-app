import os
from mongoengine import *
connect(os.getenv('DB'))

class Year(Document):
  year = StringField(required=True, max_length=4)
  meta = {'allow_inheritance': True}

class Semester(Year):
  semester = StringField(required=True)
  meta = {'allow_inheritance': true}

class Course(Semester):
  code = StringField(required=True)
  meta = {'allow_inheritance': true}

class Section(Course):
  section = StringField(required=True)
  meta = {'allow_inheritance': true}

class Exam(Course):
  examType = StringField(required=True)

