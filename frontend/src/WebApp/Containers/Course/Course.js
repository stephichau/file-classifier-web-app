import React, { useEffect } from 'react';
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
  answerSheet,
  classifierForm,
  toast: {
    loadToast,
    toastId,
  },
  hideModal,
}) => {
  useEffect(() => {
    const current = answerSheet || classifierForm;
    if (current) {
      if (current.loading) hideModal();
      if (current.payload) loadToast(toastId, {
        type: 'success',
        closeButton: false,
        render: current.success,
      })
      if (current.error) loadToast(toastId, {
        type: 'error',
        closeButton: false,
        render: current.error,
      })
    }

  }, [answerSheet, classifierForm])

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
  answerSheet: {},
  classifierForm: {},
  toast: {},
  hideModal: () => {},
};

Course.propTypes = {
  classes: PropTypes.object.isRequired,
  options: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  courseName: PropTypes.string.isRequired,
  isLoading: PropTypes.bool,
  answerSheet: PropTypes.object,
  classifierForm: PropTypes.object,
  toast: PropTypes.object,
  hideModal: PropTypes.func,
};

export default Course;
