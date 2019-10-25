import React, { useState } from 'react';
import {
  storiesOf
} from '@storybook/react';
import ClassifyFilesForm from './index';
import config from './config';
import { createStyles } from '@material-ui/core';

const categoryName = 'AssembledComponents/Forms';

storiesOf(categoryName, module).add('ClassifyFilesForm', () => {
  const [state, setState] = useState({
    files: [],
  });
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
    classifyFiles: {
      title: 'Formulario para clasificar una evaluación',
      course: 'Curso',
      year: 'Año',
      section: 'Sección',
      semester: 'Semestre',
      sheetId: 'Google Sheet ID',
    },
  };
  
  const options = [
    {
      label: 'SCANS/IIC2333/p1-mt-2019-2',
      value: 'SCANS/IIC2333/p1-mt-2019-2',
    },
    {
      label: 'SCANS/IIC2333/p2-mt-2019-2',
      value: 'SCANS/IIC2333/p2-mt-2019-2',
    },
    {
      label: 'SCANS/IIC2333/p3-mt-2019-2',
      value: 'SCANS/IIC2333/p3-mt-2019-2',
    },
  ];

  const defaultProps = {
    config: config({
      onChange,
      state,
      i18n,
      classes,
      defaultValue: {},
      setState,
      options,
    }),
    title: 'Formulario para clasificar una evaluación',
    i18n: {
      cancel: 'Cancelar',
      submit: 'Crear',
    },
  };
  return <ClassifyFilesForm {...defaultProps} />;
});

