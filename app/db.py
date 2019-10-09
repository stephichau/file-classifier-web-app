import os
from mongoengine import *
connect(os.getenv('DB'))

