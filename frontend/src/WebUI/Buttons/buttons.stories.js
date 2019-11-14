import React from 'react';
import {
  storiesOf,
} from '@storybook/react';
import {
  createStyles,
} from '@material-ui/core';
import Button from './Button';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';

const categoryName = 'ElementalComponents/';

storiesOf(categoryName, module).add('Buttons', () => {
  const defaultProps = {
    classes: createStyles({}),
    onClick: () => {},
    buttonType: 'edit',
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      width: 400,
      marginLeft: 120,
    }}>
      <Button {...defaultProps}>
       <EditIcon fontSize="small" />
       <Typography variant="body2" style={{ marginLeft: 5 }}>
         Edit
       </Typography>
      </Button>
      <br />
      <Button {...defaultProps} buttonType="delete">
       <DeleteIcon fontSize="small" />
       <Typography variant="body2" style={{ marginLeft: 5 }}>
         Delete
       </Typography>
      </Button>
    </div>
  )
});

