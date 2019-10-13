import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { toast } from 'react-toastify';
import {
  SmallInfoCard,
  SkeletonSmallInfoCard,
  Toast,
  ToastWrapper,
} from '../../../WebUI';


const Courses = ({
  classes,
  data,
  loading,
  i18n,
  history,
}) => {
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
              <ButtonBase className={classes.card} onClick={() => onClick(course.title)}>
                <SmallInfoCard {...course} key={`Info--${index}`}>
                  <div className={classes.rectangle} />
                </SmallInfoCard>
              </ButtonBase>
            ))
          }
          {
            !loading && (
              <ButtonBase className={classes.card}>
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
};

export default Courses;
