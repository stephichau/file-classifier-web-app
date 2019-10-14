import React from 'react';
import PropTypes from 'prop-types';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';

const RadioButtonInput = ({
  classes,
  id,
  label,
  onChange,
  selected,
  value,
}) => {

  return (
    <FormControlLabel
      control={
        <Radio
          id={id}
          checked={selected}
          onChange={onChange}
          value={value}
        />
      }
      label={label}
    />
  );
};

RadioButtonInput.defaultProps = {
  selected: false,
};

RadioButtonInput.propTypes = {
  classes: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  selected: PropTypes.bool,
  value: PropTypes.string.isRequired,
};

export default RadioButtonInput;
