import React, { useState } from 'react';
import { toast } from 'react-toastify';
import get from 'loadsh/get';
import {
  onNewCourse,
  parseCoursesFromBackend,
} from './utils/coursesHelper';
import getI18n from './utils/i18n';
import {
  defaultCourses,
  mapDefaultCourseIdWithName,
} from './utils/defaultCourses';
import { LoadingToast } from '../../../WebUI/Toast';
import actions from '../../../store/actions';


export default (props) => {
  const {
    showCreateCourseModal,
    submitCreateCourseModal,
    generic,
    getCourses,
  } = props;

  const {
    courses: {
      POST_COURSE,
      GET_COURSES,
    },
  } = actions;

  const fetchedCourses = get(generic, `${[GET_COURSES]}.payload`, undefined);
  const loading = get(generic, `${[GET_COURSES].loading}`) || false;
  const courseCount = get(fetchedCourses, 'length', null) || defaultCourses.length;

  if (typeof fetchedCourses === 'undefined' && !loading) getCourses();

  const i18n = getI18n();

  const [toastId, setToastId] = useState(null);

  const loadToast = (oldToastId, restOfProps = {}) => {
    if (toastId || oldToastId) return toast.update(oldToastId || toastId, restOfProps);
    return toast(<LoadingToast content="En Proceso" />, { closeButton: false });
  };

  const onNewCourseWrapper = () => {
    onNewCourse({
      i18n,
      setToastId,
      showCreateCourseModal,
      submitCreateCourseModal,
      loadToast,
      action: POST_COURSE,
    });
  };

  const isSubmitting = get(generic, `${[POST_COURSE].loading}`) || false;

  return {
    ...props,
    data: {
      courses: parseCoursesFromBackend(fetchedCourses || defaultCourses, mapDefaultCourseIdWithName),
      courseCount,
    },
    loading,
    onNewCourse: onNewCourseWrapper,
    createCourse: get(generic, `${POST_COURSE}`),
    loadToast,
    toastId,
    isSubmitting,
  }
};
