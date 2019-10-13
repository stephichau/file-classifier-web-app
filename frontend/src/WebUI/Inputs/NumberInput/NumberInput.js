import React from 'react';
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
}) => {
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
};

NumberInput.propTypes = {
  classes: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
};

export default NumberInput;
