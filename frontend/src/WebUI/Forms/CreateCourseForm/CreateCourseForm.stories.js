import React, { useState } from 'react';
import {
  storiesOf
} from '@storybook/react';
import CreateCourseForm from './index';
import config from './config';
import { createStyles } from '@material-ui/core';

const categoryName = 'AssembledComponents/Forms';

storiesOf(categoryName, module).add('CreateCourseForm', () => {
  const [state, setState] = useState({});
  const onChange = ({
    name,
    value
  }) => {
    setState({
      ...state,
      [name]: value,
    })
  };
  const classes = createStyles({
    textField: {
      width: 'auto',
      height: 20,
    },
  })
  const i18n = {
    createCourse: {
      title: 'Formulario para crear un curso',
      course: 'Sigla del curso',
      year: 'Año',
      section: 'Sección',
      semester: 'Semestre',
      instructor: 'Apellido del profesor',
      files: 'Preguntas',
      courseName: 'Nombre del curso',
    },
  };
 
  const defaultProps = {
    config: config({
      onChange,
      state,
      i18n,
      classes,
      defaultValue: {},
    }),
    title: 'Formulario para crear un curso',
    i18n: {
      cancel: 'Cancelar',
      submit: 'Crear',
    },
  };
  return <CreateCourseForm {...defaultProps} />;
});

