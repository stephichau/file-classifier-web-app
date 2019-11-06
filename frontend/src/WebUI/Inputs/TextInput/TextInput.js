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
  placeholder,
  readOnly,
  ...restOfProps
}) => {
  useEffect(() => {
    if (defaultValue) onChange({ target: { value: defaultValue }});
  }, []);
  return (
    <TextField
      required
      id={id}
      label={label}
      placeholder={placeholder}
      className={classes.textField}
      margin="normal"
      variant="outlined"
      onChange={onChange}
      value={value}
      InputLabelProps={{
        shrink: true,
      }}
      InputProps={{
        readOnly,
      }}
      {...restOfProps}
    />
  )
};

TextInput.defaultProps = {
  value: '',
  placeholder: '',
  defaultValue: undefined,
  readOnly: false
};

TextInput.propTypes = {
  classes: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  defaultValue: PropTypes.oneOf([PropTypes.string, PropTypes.number, PropTypes.array, PropTypes.object]),
};

export default TextInput;