import React, { useState } from 'react';
import {
  storiesOf
} from '@storybook/react';
import SheetMakerForm from './index';
import config from './mock-config';
import { createStyles } from '@material-ui/core';

const categoryName = 'AssembledComponents/Forms';

storiesOf(categoryName, module).add('SheetMakerForm', () => {
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
    sheetMaker: {
      course: 'Sigla del Curso',
      evaluation: 'Evaluación',
      year: 'Año',
      semester: 'Semestre',
      section: 'Sección',
      instructor: 'Apellido del Instructor',
      lowerBound: 'Límite inferior',
      upperBound: 'Límite superior',
      template: 'Nombre del archivo de template',
      copies: 'Copias por alumno',      
    },
  };
  const defaultProps = {
    config: config({
      onChange,
      state,
      i18n,
      classes,
    }),
    title: 'Formulario para crear hojas de respuestas',
    i18n: {
      cancel: 'Cancelar',
      submit: 'Crear',
    },
  };
  return <SheetMakerForm {...defaultProps} />;
});

