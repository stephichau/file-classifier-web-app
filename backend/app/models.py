from mongoengine import *
import uuid

class Course(Document):
  name = StringField(max_length=200, required=True)
  uuid = UUIDField(binary=False, default=uuid.uuid4)
  semester = IntField(min_value = 0, max_value = 2, required=True)
  year = StringField(max_length=5, required=True)
  instructor = StringField(max_length=200, required=True)
  section = IntField(required=True)

class Answer(Document):
  # delete all answer sheets when deleting the course
  course = ReferenceField(Course, reverse_delete_rule=CASCADE)
  uuid = UUIDField(binary=False, default=uuid.uuid4)
  upper_bound = IntField(min_value = 1, required = True)
  lower_bound = IntField(min_value = 0, required=True)
  evaluation = StringField(max_length=100, required=True)
  template = FileField(required=True)
  answer_file = FileField(required=True)