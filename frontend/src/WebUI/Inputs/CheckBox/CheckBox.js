import React from 'react';
import PropTypes from 'prop-types';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const CheckBoxInput = ({
  classes,
  id,
  label,
  checked,
  onChange,
}) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          id={id}
          onChange={onChange}
          checked={checked}
        />
      }
      label={label}
    />
  );
};

CheckBoxInput.defaultProps = {
  label: '',
  checked: false,
};

CheckBoxInput.propTypes = {
  classes: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  checked: PropTypes.bool,
};

export default CheckBoxInput;
