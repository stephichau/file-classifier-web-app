import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tooltip from '@material-ui/core/Tooltip';
import TextField from '@material-ui/core/TextField';
import SimpleSelectInput from '../../SimpleSelect';

const InputSelect = ({
  classes,
  onChange,
  onBlur,
  textValue,
  textFieldLabel,
  disableSelect,
  selectLabel,
  textInputPlaceholder,
  ...restOfProps
}) => {
  const [selectValue, setSelectValue] = useState('');
  const handleSelectChange = (e) => {
    setSelectValue(e.target.value);
  };

  return (
    <div className={classes.select}>
      <Tooltip title="Entre 2-8 caracteres" placement="bottom">
        <TextField
          className={classes.textField}
          required
          variant="outlined"
          label={textFieldLabel}
          value={textValue}
          placeholder={textInputPlaceholder}
          onBlur={(e) => onBlur({ key: e.target.value })}
          onChange={(e) => onChange({ key: e.target.value })}
          inputProps={{
            minLength: 2,
            maxLength: 8,
          }}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Tooltip>
      <SimpleSelectInput
        classes={classes}
        disabled={disableSelect}
        value={selectValue}
        onBlur={(e) => onBlur({ filename: e.target.value })}
        onChange={handleSelectChange}
        label={selectLabel}
        isRequired
        {...restOfProps}
      />
    </div>
  );
};

InputSelect.defaultProps = {
  classes: {},
  textFieldLabel: '',
  textValue: '',
  selectLabel: '',
  textInputPlaceholder: '',
};

InputSelect.propTypes = {
  classes: PropTypes.object,
  textFieldLabel: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  textValue: PropTypes.string,
  selectLabel: PropTypes.string,
  textInputPlaceholder: PropTypes.string,
};

export default InputSelect;
