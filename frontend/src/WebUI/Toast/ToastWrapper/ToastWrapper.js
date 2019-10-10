import React from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, cssTransition } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CustomBounce = cssTransition({
  enter: 'Toastify__bounce-enter',
  exit: 'Toastify__bounce-exit',
  appendPosition: true,
  duration: [800, 500],
});

const ToastWrapper = (props) => {
  const { classes, ...rest } = props;
  return (
    <ToastContainer
      autoClose={2500}
      transition={CustomBounce}
      className={classes.toastContainer}
      toastClassName={classes.toast}
      progressClassName={classes.progress}
      position="top-right"
      {...rest}
    />
  );
};

ToastWrapper.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default ToastWrapper;
