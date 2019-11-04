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

## Almacenamiento de archivos
Todos los archivos cargados en la aplicación estarán guardados en la BD y en una carpeta de `DATA` dentro del servidor, de esta forma existe flexibilidad para poder acceder a los archivos de ambas maneras.

### Estructura de carpeta `DATA`
La estructura de carpetas dentro de la carpeta `DATA` es la siguiente:
```
- DATA
  - years
    - semesters
      - courses
        - course_sections
          - evaluations
            - answers
            - templates
```
Todos los archivos correspondientes a los distintos cursos serán ubicados dentro de las carpetas `answers` y `templates`. Se considera obviamente las distintas versiones de cursos para distintos años y semestres.

## Rutas
### Courses
- GET /courses
  - Form: None
  - Response Example
  ```
  {
    "courses": [
        {
            "_id": {
                "$oid": "5dbf2861bd589341f46b893f"
            },
            "name": "IIC2333",
            "uuid": "77cd13f9-91a8-44ad-b8d3-8d4841f1a17b",
            "semester": 2,
            "year": "2019",
            "instructor": "Ruz",
            "section": 1
        },
        {
            "_id": {
                "$oid": "5dbf8aadbd58936eed3361e5"
            },
            "name": "IIC2333",
            "uuid": "b159dc85-fb1d-4851-99f9-f7acd938a843",
            "semester": 1,
            "year": "2019",
            "instructor": "cristian ruz",
            "section": 1
        }
    ]
  }
  ```

- GET /courses/:id
  - Form: None
  - Response example:
  ```
  {
  "course": {
    "_id": {
      "$oid": "5dbf8aadbd58936eed3361e5"
    },
    "instructor": "cristian ruz",
    "name": "IIC2333",
    "section": 1,
    "semester": 1,
    "uuid": "b159dc85-fb1d-4851-99f9-f7acd938a843",
    "year": "2019"
    }
  }
  ```

- POST /courses
  - Form:
  ```
  {
    "course": "IIC2333",
    "semester": 1,
    "year": 2019,
    "section": 1,
    "instructor": "cristian ruz",
  }
  ```
  - Response example:
  ```
  {
    "course": {
        "_id": {
            "$oid": "5dbf8b5bbd58936eed3361e6"
        },
        "name": "IIC2333",
        "uuid": "c9a69950-67ab-4c3b-8da8-a47eab1e32f3",
        "semester": 1,
        "year": "2018",
        "instructor": "cristian ruz",
        "section": 1
    }
  }
  ```

- DELETE /courses/:id
  - Form: None
  - Response example:
  ```
  {
    'course': uuid_deleted_course(:id)
  }

  ```


### Answer
- GET /courses/:course_id/answers
  - Form: None
  - Response example:
  ```
  {
  "answers": [
      {
        "_id": {
          "$oid": "5dbf8681bd58936a0b24acb3"
        },
        "answer_file": {
          "$oid": "5dbf8681bd58936a0b24aca1"
        },
        "course": {
          "$oid": "5dbf2861bd589341f46b893f"
        },
        "evaluation": "midterm",
        "lower_bound": 1,
        "template": {
          "$oid": "5dbf8681bd58936a0b24aca0"
        },
        "upper_bound": 123,
        "uuid": "bdbf6c0a-52ab-4527-b4c4-be39c302c176"
      },
      {
        "_id": {
          "$oid": "5dbf86afbd58936e9b9ce969"
        },
        "answer_file": {
          "$oid": "5dbf86afbd58936e9b9ce957"
        },
        "course": {
          "$oid": "5dbf2861bd589341f46b893f"
        },
        "evaluation": "midterm",
        "lower_bound": 1,
        "template": {
          "$oid": "5dbf86afbd58936e9b9ce956"
        },
        "upper_bound": 123,
        "uuid": "119c58d0-050c-49ec-a8ee-143a06e16b89"
      }
    ]
  }
  ```

- GET /courses/:course_id/answers/:answer_id
  - NO IMPLEMENTADO TODAVIA
  - Form:
  - Response example:

- POST /course/:course_id/answer
  - Form:
  ```
  {
    "template": template_filename.png(pdf),
    "upper_bound": 75,
    "lower_bound": 1,
    "evaluation": "midterm" 
  }
  ```
  - Response: example:
  ```
  {
    "answer": {
      "_id": {
        "$oid": "5dbf895dbd58936eed3361e4"
      },
      "answer_file": {
        "$oid": "5dbf895dbd58936eed3361d8"
      },
      "course": {
        "$oid": "5dbf2861bd589341f46b893f"
      },
      "evaluation": "midterm",
      "lower_bound": 1,
      "template": {
        "$oid": "5dbf895dbd58936eed3361d7"
      },
      "upper_bound": 75,
      "uuid": "a6b1e04c-9b47-4c26-8576-c360d081e80b"
    }
  }
  ```

- DELETE /course/:course_id/answers/:answer_id
  - NO IMPLEMENTADO TODAVIA
  - Form: None
  - Response example

### Hojas de respuesta
