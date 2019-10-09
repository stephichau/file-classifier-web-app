import React from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, cssTransition } from 'react-toastify';

const CustomBounce = cssTransition({
  enter: 'Toastify__bounce-enter',
  exit: 'Toastify__bounce-exit',
  appendPosition: true,
  duration: [1000, 1000],
});

const ToastWrapper = (props) => {
  const { classes, ...rest } = props;
  return (
    <ToastContainer
      autoClose={2000}
      transition={CustomBounce}
      className={classes.toastContainer}
      toastClassName={classes.toast}
      progressClassName={classes.progress}
      position="bottom-left"
      {...rest}
    />
  );
};

ToastWrapper.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default ToastWrapper;
