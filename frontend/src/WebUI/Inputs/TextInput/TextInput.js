import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

const TextInput = ({
  classes, // passed from parent
  label,
  onChange,
  id,
  value,
  defaultValue,
}) => {
  useEffect(() => {
    if (defaultValue) onChange({ target: { value: defaultValue }});
  }, []);
  return (
    <TextField
      required
      id={id}
      label={label}
      defaultValue=""
      className={classes.textField}
      margin="normal"
      variant="outlined"
      onChange={onChange}
      value={value}
    />
  )
};

TextInput.defaultProps = {
  value: '',
  defaultValue: undefined,
};

TextInput.propTypes = {
  classes: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  defaultValue: PropTypes.oneOf([PropTypes.string, PropTypes.number, PropTypes.array, PropTypes.object]),
};

export default TextInput;