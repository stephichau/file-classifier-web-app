import React from 'react';
import { toast } from 'react-toastify';
import get from 'loadsh/get';
import { LoadingToast } from '../../../WebUI/Toast';
import actions from '../../../store/actions';
import config from './section-config';

export default ({
  history,
  showAnswerSheetModal,
  submitAnswerSheet,
  hideModal,
  generic,
  ...restOfProps
}) => {

  let {
    answerSheet: {
      POST_ANSWER_SHEET_REQUEST: POST_ANSWER_SHEET,
    },
  } = actions;

  const { location } = history;
  const courseName = location.pathname.split('/').pop() || '';
  const sheetMakerProps = {
    sheetMaker: {
      title: 'Crear hojas de respuestas',
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
    },
  };

  const loadToast = () => toast(<LoadingToast content="En Proceso" />, { closeButton: false });

  const options = config({
    sheetMakerProps,
    showAnswerSheetModal,
    hideModal,
    loadToast,
    submitAnswerSheet,
  });

  POST_ANSWER_SHEET = POST_ANSWER_SHEET.replace('_REQUEST', '');

  const isLoading = get(generic, `${POST_ANSWER_SHEET}.loading`) || false;

  return {
    ...restOfProps,
    generic,
    courseName,
    options,
    isLoading,
  };
}
