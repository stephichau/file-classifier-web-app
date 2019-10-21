import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

const NumberInput = ({
  classes,
  id,
  value,
  label,
  onChange,
  min,
  max,
  defaultValue,
}) => {
  useEffect(() => {
    if (defaultValue) onChange({ target: { value: defaultValue } });
  }, []);
  return (
    <TextField
      id={id}
      label={label}
      value={value}
      onBlur={(e) => {
        if (min && e.target.value < min || max && e.target.value > max) onChange({ target: { value: min }});
        if (`${e.target.value}`.includes('-')) onChange({ target: { value: min }})
      }}
      onChange={(e) => {
        onChange(e);
      }
      }
      type="number"
      className={classes.numberInput}
      InputLabelProps={{
        shrink: true,
      }}
      InputProps={{
        inputProps: {
          min,
          max,
        }
      }}
      margin="normal"
      variant="outlined"
    />
  );
};

NumberInput.defaultProps = {
  label: undefined,
  min: undefined,
  max: undefined,
  defaultValue: undefined,
};

NumberInput.propTypes = {
  classes: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  defaultValue: PropTypes.oneOf([PropTypes.string, PropTypes.number, PropTypes.array, PropTypes.object]),
};

export default NumberInput;
