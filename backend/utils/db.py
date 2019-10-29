import os
from pymongo import MongoClient

def create_db_client():
  _mongoport = int(os.getenv('MONGOPORT'))
  return MongoClient(os.getenv('MONGOSERVER'), _mongoport)

def create_db_cursor():
  return create_db_client()[os.getenv('MONGODB')]

def create_fs_cursor():
  _db = create_db_cursor()
  return gridfs.GridFS(_db)

def get_collection(collection: str):
  return create_db_cursor()[collection]