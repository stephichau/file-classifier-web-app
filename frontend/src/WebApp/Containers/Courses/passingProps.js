import React, { useState } from 'react';
import { toast } from 'react-toastify';
import get from 'loadsh/get';
import { LoadingToast } from '../../../WebUI/Toast';
import actions from '../../../store/actions';

export default (props) => {
  const {
    showCreateCourseModal,
    submitCreateCourseModal,
    generic,
  } = props;

  const {
    courses: {
      POST_COURSE,
    },
  } = actions;

  const i18n = {
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
    },
  };

  const [toastId, setToastId] = useState(null);

  const loadToast = (restOfProps = {}) => {
    if (toastId) return toast.update(toastId, restOfProps);
    return toast(<LoadingToast content="En Proceso" />, { closeButton: false });
  };

  const onNewCourse = () => {
    showCreateCourseModal({
      title: i18n.createCourse.title,
      i18n,
      onSubmit: (props) => {
        const toastId = loadToast();
        submitCreateCourseModal(props);
        setToastId(toastId);
      },
      action: POST_COURSE,
    });
  };

  const courses = [
    {
      title: 'IIC2233',
      subtitle: 'Programación Avanzada',
    },
    {
      title: 'IIC2333',
      subtitle: 'SSOO y Redes',
    },
    {
      title: 'IIC1103',
      subtitle: 'Introducción a la Programación',
    },
    {
      title: 'IIC2513',
      subtitle: 'Tecnología y Aplicaciones Web',
    }
  ];

  const courseCount = courses.length;
  const isSubmitting = get(generic, `${[POST_COURSE].loading}`) || false;

  return {
    ...props,
    data: {
      courses,
      courseCount,
    },
    loading: false,
    onNewCourse,
    createCourse: generic[POST_COURSE],
    loadToast,
    toastId,
    isSubmitting,
  }
};
