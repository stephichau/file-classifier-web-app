import React, { useState } from 'react';
import { toast } from 'react-toastify';
import get from 'loadsh/get';
import { LoadingToast } from '../../../WebUI/Toast';
import actions from '../../../store/actions';
import config from './section-config';

export default ({
  history,
  showAnswerSheetModal,
  submitAnswerSheet,
  generic,
  ...restOfProps
}) => {

  const {
    answerSheet: {
      POST_ANSWER_SHEET,
    },
    classifier: {
      POST_CLASSIFIER_FORM,
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
    },
  };

  const loadToast = (toastId = null, restOfProps = {}) => {
    if (toastId) return toast.update(toastId, restOfProps);
    return toast(<LoadingToast content="En Proceso" />, { closeButton: false });
  };

  const fileOptions = [{
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

  const options = config({
    sheetMakerProps,
    showAnswerSheetModal,
    loadToast,
    submitAnswerSheet,
    toastLoaded: setToastId,
    options: fileOptions,
    ...restOfProps
  });


  const isLoading = get(generic, `${POST_ANSWER_SHEET}.loading`) || false;

  return {
    ...restOfProps,
    generic,
    courseName,
    options,
    isLoading,
    answerSheet: generic[POST_ANSWER_SHEET] && {
      ...generic[POST_ANSWER_SHEET],
      success: 'Creando hojas...',
      error: 'Hubo un error. Intente nuevamente',
    },
    classifierForm: generic[POST_CLASSIFIER_FORM] && {
      ...generic[POST_CLASSIFIER_FORM],
      success: 'Clasificando hojas...',
      error: 'Hubo un error. Intente nuevamente',
    },
    toast: {
      loadToast,
      toastId,
    },
  };
}
