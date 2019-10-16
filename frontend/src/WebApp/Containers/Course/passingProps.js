import React, { useEffect, useState } from 'react';
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

  const {
    answerSheet: {
      POST_ANSWER_SHEET,
    },
  } = actions;

  const [toastId, setToastId] = useState(null);

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

  const loadToast = (toastId = null, restOfProps = {}) => {
    if (toastId) return toast.update(toastId, restOfProps);
    return toast(<LoadingToast content="En Proceso" />, { closeButton: false });
  };

  if (generic[[POST_ANSWER_SHEET]]) {
    if (!generic[POST_ANSWER_SHEET].loading) hideModal();
    if (generic[POST_ANSWER_SHEET].payload) loadToast(toastId, { type: 'success', closeButton: false, render: 'Creando hojas...' })
    if (generic[POST_ANSWER_SHEET].error) loadToast(toastId, { type: 'error', closeButton: false, render: 'Hubo un error. Intente nuevamente' })
  }

  const options = config({
    sheetMakerProps,
    showAnswerSheetModal,
    loadToast,
    submitAnswerSheet,
    toastLoaded: setToastId,
  });


  const isLoading = get(generic, `${POST_ANSWER_SHEET}.loading`) || false;

  return {
    ...restOfProps,
    generic,
    courseName,
    options,
    isLoading,
  };
}
