import React, { useState } from 'react';
import PropTypes from 'prop-types';
import get from 'loadsh/get';
import omit from 'loadsh/omit';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputSelect from './Components';

const MultipleListSelect = ({
  classes,
  onChange,
  onNewInput,
  list,
  key,
  title,
  ...restOfProps
}) => {
  const [state, setState] = useState({});
  const [currentKey, setCurrentKey] = useState('');
  const [disableSelect, setDisableSelect] = useState(true);

  const handleOnChange = (e) => {
    const key = get(e, 'key') || '';
    setCurrentKey(key);
  };

  const resetCurrentKey = () => {
    setCurrentKey('');
    setDisableSelect(true);
  };

  const handleOnBlur = (e) => {
    const key = get(e, 'key') || null;
    const filename = get(e, 'filename') || null;
    if (key) {
      if (key.length !== 0) {
        setState({
          ...state,
          [key]: '',
        });
        setCurrentKey(key);
        if (key.length >= 2) setDisableSelect(false);
        if (key.length < 2) setDisableSelect(true);
      } else {
        const newState = omit(state, currentKey);
        setState({
          ...newState,
        });
        resetCurrentKey();
      }
    } else if (filename) {
      onNewInput({
        key: currentKey,
        value: filename,
      });
      resetCurrentKey();
    }
  };

  return (
    <Paper
      className={classes.root}
      elevation={0}
    >
      {title && (<div className={classes.titleContainer}>
        <Typography variant="body1">
          {title}
        </Typography>
      </div>)}
      <InputSelect
        textValue={state[currentKey]}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
        textValue={currentKey}
        disableSelect={disableSelect}
        {...restOfProps}
      />
      <div className={classes.listContainer}>
        {
          list.map((data, index) => (
            <div key={`div---${index}`}>
              {`${data.key} ${data.value}`}
            </div>
          ))
        }
      </div>
    </Paper>
  )
};

MultipleListSelect.defaultProps = {
  classes: null,
  list: [],
  onNewInput: () => {},
  title: null,
};

MultipleListSelect.propTypes = {
  classes: PropTypes.object,
  list: PropTypes.arrayOf(PropTypes.object),
  onNewInput: PropTypes.func,
  title: PropTypes.string,
};

export default MultipleListSelect;
