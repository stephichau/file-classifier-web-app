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
}) => {

  return (
    <div className={classes.container}>
      <Typography>
        {courseName}
      </Typography>
      <div className={classes.cardContainer}>
        {
          options && options.map((option, index) => (
            <ButtonBase className={classes.card} key={`Info--${index}`} onClick={option.onClick}>
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
  
};

Course.propTypes = {
  classes: PropTypes.object.isRequired,
  options: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  courseName: PropTypes.string.isRequired,
};

export default Course;
