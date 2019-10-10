import React from 'react';
import PropTypes from 'prop-types';
import ButtonBase from '@material-ui/core/ButtonBase';

const Toast = ({
  classes,
  onClick,
  closeToast,
  title,
  content,
}) => {
  const handleClick = () => {
    closeToast();
    onClick();
  };
  return (
    <div>
      <ButtonBase className={classes.button} onClick={handleClick}>{content}</ButtonBase>
    </div>
  );
};

Toast.defaultProps = {
  onClick: () => null,
  title: '',
};

Toast.propTypes = {
  onClick: PropTypes.func,
  closeToast: PropTypes.func.isRequired,
  title: PropTypes.string,
  content: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
};

export default Toast;
