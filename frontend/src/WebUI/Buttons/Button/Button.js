import React from 'react';
import PropTypes from 'prop-types';
import { default as MUIButton } from '@material-ui/core/Button';
import classnames from 'classnames';

const Button = ({
  classes,
  onClick,
  buttonType,
  variant,
  children,
  disabled,
}) => {
  return (
    <MUIButton
      variant={variant}
      onClick={onClick}
      className={classnames(classes.button, classes.default, classes[buttonType])}
      disabled={disabled}
    >
      {children}
    </MUIButton>
  );
};

Button.defaultProps = {
  children: null,
  buttonType: '',
  variant: 'contained',
  disabled: false,
};

Button.propTypes = {
  classes: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  buttonType: PropTypes.oneOf(['edit', 'delete']),
  children: PropTypes.node,
  variant: PropTypes.string,
  disabled: PropTypes.bool,
}

export default Button;
