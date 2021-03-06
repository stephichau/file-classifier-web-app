import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const SimpleSelectInput = ({
  classes,
  id,
  label,
  value,
  onChange,
  onBlur,
  isNative,
  options,
  defaultValue,
  disabled,
  isRequired,
}) => {
  const inputLabel = useRef(null);
  const [labelWidth, setLabelWidth] = useState(0);
  useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
    if (defaultValue) onChange({ target: { value: defaultValue }});
  }, []);
  return (
    <FormControl
      required={isRequired}
      variant="outlined"
      className={classes.formControl}
      margin="normal"
      disabled={disabled}
    >
      <InputLabel ref={inputLabel} htmlFor={id}>
        {label}
      </InputLabel>
      <Select
        native={isNative}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        labelWidth={labelWidth}
        inputProps={{
          name: label,
          id,
        }}
      >
        {
          options.map((option, index) => (
            <option id={`${label}--${index}`} value={option.value}>{option.label}</option>
          ))
        }
      </Select>
    </FormControl>
  );
};

SimpleSelectInput.defaultProps = {
  isNative: true,
  options: [],
  value: '',
  defaultValue: undefined,
  disabled: false,
  isRequired: false,
  onChange: () => {},
  onBlur: () => {},
};

SimpleSelectInput.propTypes = {
  classes: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  isNative: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })),
  defaultValue: PropTypes.oneOf([PropTypes.string, PropTypes.number, PropTypes.array, PropTypes.object]),
  disabled: PropTypes.bool,
  isRequired: PropTypes.bool,
};

export default SimpleSelectInput;
