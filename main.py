from app import app


# from flask import Flask, escape, request
# from mongoengine import connect

# def create_app():
#   app = Flask(__name__)
#   return app

# def connect_db():
#   return connect('classifier_api')

# @app.route('/')
# def hello():
#     name = request.args.get("name", "World")
#     return f'Hello, {escape(name)}!'

# if __name__ == "__main__":
#   app = create_app()
#   print(connect_db())
#   app.run()