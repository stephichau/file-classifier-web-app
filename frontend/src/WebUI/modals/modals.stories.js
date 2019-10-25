import React from 'react';
import { storiesOf } from '@storybook/react';
import Typography from '@material-ui/core/Typography';
import GenericModal from './GenericModal';
import SheetMakerModal from './SheetMakerModal';
import CreateCourseModal from './CreateCourseModal';
import ClassifyFilesModal from './ClassifyFilesModal';

const categoryName = 'ElementalComponents/Modals';


storiesOf(categoryName, module)
  .add('Generic', () => {

  return (
    <GenericModal>
      <Typography>
        hey hey hey
      </Typography>
    </GenericModal>
  );
});

storiesOf(categoryName, module)
  .add('SheetMakerModal', () => {
  const defaultProps = {
    onSubmit: () => {},
    onCancel: () => {},
    title: 'Formulario para crear hojas de respuestas',
    i18n: {
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
      form: {
        cancel: 'Cancelar',
        submit: 'Crear',
      }
    },
  }
  return (
    <SheetMakerModal {...defaultProps} />
  );
});


storiesOf(categoryName, module)
  .add('CreateCourseModal', () => {
  const defaultProps = {
    onSubmit: () => {},
    onCancel: () => {},
    title: 'Formulario para crear un curso',
    i18n: {
      createCourse: {
        title: 'Formulario para crear un curso',
        course: 'Curso',
        year: 'Año',
        section: 'Sección',
        semester: 'Semestre',
        instructor: 'Apellido del profesor',
      },
      form: {
        cancel: 'Cancelar',
        submit: 'Crear',
      }
    },
  }
  return (
    <CreateCourseModal {...defaultProps} />
  );
});



storiesOf(categoryName, module)
  .add('ClassifyFilesModal', () => {
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
    onSubmit: () => {},
    onCancel: () => {},
    title: 'Formulario para correr el clasificador',
    i18n: {
      classifyFiles: {
        title: 'Formulario para clasificar una evaluación',
        course: 'Curso',
        year: 'Año',
        section: 'Sección',
        semester: 'Semestre',
        sheetId: 'Google Sheet ID',
      },
      form: {
        cancel: 'Cancelar',
        submit: 'Crear',
      }
    },
    options,
  }
  return (
    <ClassifyFilesModal {...defaultProps} />
  );
});