# Flask Classifier

## Requisitos
<!-- * MongoDB corriendo, conectada con la aplicación usando el nombre de la database.
-->
* 🍃 [MongoDB](https://www.mongodb.com/download-center?jmp=nav#community)
* ⚗ [Flask](http://flask.pocoo.org/docs/0.11/installation/)

* Instalar requerimientos:
```
pip3 install -r requirements.txt
```

* Instalar usando Virtualenv
```shell
pip install virtualenv

virtualenv -p python3.7 venv

pip3 -r install -r requirements.txt

# Para activar el entorno
source venv/bin/activate

# Desactivar el entorno
deactivate

```

## Develop
2. Iniciar la aplicación:
```shell
python3 -m -p 5000 flask run
```

## Rutas
### Courses
- GET /courses
- GET /course
  - Params:
  - Response example:

- POST /course
  - Params:
  - Response example:

- DELETE /course/
  - Params:
  - Response example:

### Answer
- GET /course/answer
  - Params:
  - Response example:

- POST /course/answer
  - Params:
  - Response: example:

- DELETE /course/answer
  - Params:
  - Response: example

### Hojas de respuesta
