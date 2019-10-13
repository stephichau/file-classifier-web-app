import os

from pymongo import MongoClient

def create_db_client():
  mongoport = int(os.getenv('MONGOPORT'))
  return MongoClient(os.getenv('MONGOSERVER'), mongoport)

def create_db_cursor():
  return create_db_client()[os.getenv('MONGODB')]

def get_collection(collection: str):
  return create_db_cursor()[collection]
  



