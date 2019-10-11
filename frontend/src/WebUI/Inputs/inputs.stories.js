import React from 'react';
import {
  storiesOf
} from '@storybook/react';
import {
  createStyles
} from '@material-ui/core';

import TextInput from './TextInput';
import RadioButtonInput from './RadioButton';


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
    checked: false,
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
    }}>
      <TextInput {...textDefaultProps} />
      {/* {<CheckBoxInput {...checkBoxDefaultProps} />} */}
      <RadioButtonInput {...radioButtonDefaultProps} />
    </div>
  )
});

