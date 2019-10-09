import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

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
      {title}
      <Button className={classes.button} onClick={handleClick}>{content}</Button>
    </div>
  );
};

Toast.defaultProps = {
  onClick: () => null,
  title: '',
};

Toast.propTypes = {
  onClick: PropTypes.func,
  closeToast: PropTypes.func.isRequired, // Injected automatically when calling toast()
  title: PropTypes.string,
  content: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
};

export default Toast;
