import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import {
  SmallInfoCard,
  SkeletonSmallInfoCard,
} from '../../../WebUI';


const Courses = ({
  classes,
  data,
  loading,
  i18n,
}) => {

  const onClick = () => {

  };

  const { courseCount, courses } = data;

  return (
    <div className={classes.container}>
      <Typography>
        {i18n.courses}
      </Typography>
      <div className={classes.cardContainer}>
        {
          !loading && courses && courses.map((course, index) => (
            <div className={classes.card}>
              <SmallInfoCard {...course} key={`Info--${index}`}>
                <div className={classes.rectangle} />
              </SmallInfoCard>
            </div>
          ))
        }
        {
          loading && Array(courseCount).fill().map((_, index) => (
            <div className={classes.card}>
              <SkeletonSmallInfoCard title subtitle key={`Info--${index}`} />
            </div>
          ))
        }
      </div>
    </div>
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
    courses: 'Courses',
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
};

export default Courses;
