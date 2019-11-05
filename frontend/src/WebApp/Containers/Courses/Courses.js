import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import {
  SmallInfoCard,
  SkeletonSmallInfoCard,
} from '../../../WebUI';


const Courses = ({
  classes,
  data,
  loading,
  i18n,
  history,
  onNewCourse,
  createCourse,
  loadToast,
  hideModal,
  toastId,
  isSubmitting,
}) => {
  useEffect(() => {
    if (createCourse) {
      if (!createCourse.loading) hideModal();
      if (createCourse.payload) {
        console.log('hereee');
        loadToast(toastId, { type: 'success', closeButton: false, render: 'Creado!' });
      }
      if (createCourse.error) {
        loadToast(toastId, {
          type: 'error',
          closeButton: false,
          render: 'Hubo un error. Intente nuevamente'
        });
      }
    }
  }, [createCourse])

  const { location } = history;

  const onClick = (courseId) => {
    history.push(`${location.pathname}/${courseId}`)
  };

  const { courseCount, courses } = data;

  return (
    <>
      <div className={classes.container}>
        <Typography>
          {i18n.courses}
        </Typography>
        <div className={classes.cardContainer}>
          {
            loading && Array(courseCount).fill().map((_, index) => (
              <div className={classes.card}>
                <SkeletonSmallInfoCard title subtitle key={`Info--${index}`} />
              </div>
            ))
          }
          {
            !loading && courses && courses.map((course, index) => (
              <ButtonBase
                className={classes.card}
                onClick={() => onClick(course.title)}
                disabled={isSubmitting}
              >
                <SmallInfoCard {...course} key={`Info--${index}`}>
                  <div className={classes.rectangle} />
                </SmallInfoCard>
              </ButtonBase>
            ))
          }
          {
            !loading && (
              <ButtonBase
                className={classes.card}
                onClick={onNewCourse}
                disabled={isSubmitting}
              >
                <SmallInfoCard
                  borderStyle="dotted"
                >
                  <div className={classes.addCourse}>
                    {i18n.addCourse}
                  </div>
                </SmallInfoCard>
              </ButtonBase>
            )
          }
        </div>
      </div>
    </>
  );
};

Courses.defaultProps = {
  courses: undefined,
  data: {
    courseCount: 0,
    courses: [],
  },
  loading: true,
  i18n: {
    courses: 'Cursos',
    addCourse: '+ Agregar curso',
  },
  onNewCourse: () => {},
  loadToast: () => {},
  hideModal: () => {},
  toastId: null,
};

Courses.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.shape({
    courseCount: PropTypes.number.isRequired,
    courses: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  }),
  loading: PropTypes.bool,
  i18n: PropTypes.object,
  history: PropTypes.object.isRequired,
  onNewCourse: PropTypes.func,
  loadToast: PropTypes.func,
  hideModal: PropTypes.func,
  toastId: PropTypes.string,
  isSubmitting: PropTypes.bool.isRequired,
};

export default Courses;
