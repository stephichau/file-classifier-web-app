import React from 'react';
import {
  storiesOf
} from '@storybook/react';
import {
  createStyles
} from '@material-ui/core';

import TextInput from './TextInput';
import RadioButtonInput from './RadioButton';
import CheckBoxInput from './CheckBox';


const categoryName = 'ElementalComponents/';

storiesOf(categoryName, module).add('Inputs', () => {
  const textDefaultProps = {
    id: 'text-input',
    label: 'TextField',
    classes: createStyles({}),
    onChange: () => {},
  };
  const checkBoxDefaultProps = {
    id: 'check-box',
    label: 'CheckBox',
    classes: createStyles({}),
    onChange: () => {},
    checked: true,
  };
  const radioButtonDefaultProps = {
    id: 'radio-button',
    label: 'RadioButton',
    classes: createStyles({}),
    onChange: () => {},
    selected: true,
  };
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      width: 400,
      marginLeft: 120,
    }}>
      <TextInput {...textDefaultProps} />
      <RadioButtonInput {...radioButtonDefaultProps} />
      <CheckBoxInput {...checkBoxDefaultProps} />
    </div>
  )
});

