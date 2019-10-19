import React from 'react';
import { storiesOf } from '@storybook/react';
import Typography from '@material-ui/core/Typography';
import GenericModal from './GenericModal';
import SheetMakerModal from './SheetMakerModal';
import CreateCourseModal from './CreateCourseModal';

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
      sheetMaker: {
        course: 'Sigla del Curso',
        year: 'Año',
        semester: 'Semestre',
        section: 'Sección',
        instructor: 'Apellido del Instructor',
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