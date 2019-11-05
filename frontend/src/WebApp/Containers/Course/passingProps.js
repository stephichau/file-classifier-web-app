import React, { useState } from 'react';
import { toast } from 'react-toastify';
import get from 'loadsh/get';
import { LoadingToast } from '../../../WebUI/Toast';
import actions from '../../../store/actions';
import config from './utils/section-config';
import getI18n from './utils/i18n';
import defaultFileOptions from './utils/defaultFileOptions';

export default ({
  history,
  showAnswerSheetModal,
  submitAnswerSheet,
  generic,
  getCourse,
  ...restOfProps
}) => {

  const {
    answerSheet: {
      POST_ANSWER_SHEET,
    },
    classifier: {
      POST_CLASSIFIER_FORM,
    },
    courses: {
      GET_COURSE,
    },
  } = actions;

  const { location } = history;
  const courseId = location.pathname.split('/').pop() || '';

  const [toastId, setToastId] = useState(null);

  const fetchCourse = get(generic, `${GET_COURSE}.payload`, undefined);
  const isCourseLoading = get(generic, `${GET_COURSE}.loading`, false);

  if (
    (
      typeof fetchCourse === 'undefined' && !isCourseLoading
    ) || (
      fetchCourse && fetchCourse.uuid !== courseId
    )) getCourse(courseId)

  const sheetMakerProps = getI18n();

  const loadToast = (oldToastId = null, restOfProps = {}) => {
    if (oldToastId || toastId) return toast.update(oldToastId || toastId, restOfProps);
    return toast(<LoadingToast content="En Proceso" />, { closeButton: false });
  };

  const fileOptions = defaultFileOptions;

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
    courseName: get(fetchCourse, 'name', null) || courseId,
    options,
    isLoading,
    answerSheet: generic[POST_ANSWER_SHEET] && {
      ...generic[POST_ANSWER_SHEET],
      success: 'Creado!',
      error: 'Hubo un error. Intente nuevamente',
    },
    classifierForm: generic[POST_CLASSIFIER_FORM] && {
      ...generic[POST_CLASSIFIER_FORM],
      success: 'Clasificado!',
      error: 'Hubo un error. Intente nuevamente',
    },
    toast: {
      loadToast,
      toastId,
    },
  };
}
