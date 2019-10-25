import React, { useState } from 'react';
import PropTypes from 'prop-types';
import get from 'loadsh/get';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import DeleteIcon from '@material-ui/icons/Delete';
import InputSelect from './Components';

const MultipleListSelect = ({
  classes,
  onNewInput,
  list,
  key,
  title,
  onDeleteInput,
  ...restOfProps
}) => {
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
        setCurrentKey(key);
        if (key.length >= 2) setDisableSelect(false);
        if (key.length < 2) setDisableSelect(true);
      } else {
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

  const handleDeleteInput = ({ data, index }) => {
    onDeleteInput({ data, index });
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
        onChange={handleOnChange}
        onBlur={handleOnBlur}
        textValue={currentKey}
        disableSelect={disableSelect}
        {...restOfProps}
      />
      {
      list.length > 0 && (
        <>
        <Divider className={classes.divider} />
        <List dense className={classes.listContainer}>
          {
            list.map((data, index) => (
              <ListItem key={`div---${index}`} className={classes.listItem}>
                <Typography>
                  {`${index + 1}. ${data.key}: ${data.value}`}
                </Typography>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => handleDeleteInput({ data, index })}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItem>
            ))
          }
        </List>
        </>
      )}
    </Paper>
  )
};

MultipleListSelect.defaultProps = {
  classes: null,
  list: [],
  onNewInput: () => {},
  onDeleteInput: () => {},
  title: null,
};

MultipleListSelect.propTypes = {
  classes: PropTypes.object,
  list: PropTypes.arrayOf(PropTypes.object),
  onNewInput: PropTypes.func,
  onDeleteInput: PropTypes.func,
  title: PropTypes.string,
};

export default MultipleListSelect;
