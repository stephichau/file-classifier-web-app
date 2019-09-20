#!/usr/bin/python3
# -*- coding: latin-1 -*-
import os
import sys
# import psycopg2
import json
from bson import json_util
from pymongo import MongoClient
from flask import Flask, request, session, g, redirect, url_for, abort, \
     render_template, flash


def create_app():
    app = Flask(__name__, template_folder="../../frontend/public", static_folder="../../frontend/public")
    return app

app = create_app()

# REPLACE WITH YOUR DATABASE NAME
# MONGODATABASE = "myDatabase"
# MONGOSERVER = "localhost"
# MONGOPORT = 27017
# client = MongoClient(MONGOSERVER, MONGOPORT)
# mongodb = client[MONGODATABASE]


@app.route("/")
def home():
    return render_template('index.html')


if __name__ == "__main__":
    app.run()
