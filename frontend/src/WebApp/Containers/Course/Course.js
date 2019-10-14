import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import {
  SmallInfoCard,
  SkeletonSmallInfoCard,
} from '../../../WebUI';

const Course = ({
  classes,
  options,
  courseName,
  isLoading,
}) => {

  return (
    <div className={classes.container}>
      <Typography>
        {courseName}
      </Typography>
      <div className={classes.cardContainer}>
        {
          options && options.map((option, index) => (
            <ButtonBase className={classes.card} key={`Info--${index}`} disabled={isLoading} onClick={option.onClick}>
              <SmallInfoCard {...option} key={`Info--${index}`} title={null}>
                <div className={classes.option}>
                  {option.title}
                </div>
              </SmallInfoCard>
            </ButtonBase>
          ))
        }
      </div>
    </div>
  );
};

Course.defaultProps = {
  isLoading: false,
};

Course.propTypes = {
  classes: PropTypes.object.isRequired,
  options: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  courseName: PropTypes.string.isRequired,
  isLoading: PropTypes.bool,
};

export default Course;
