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
import {
  SimpleSelectInput,
} from './Selects';
import NumberInput from './NumberInput';

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
  const simpleSelectInputDefaultProps = {
    id: 'simple-select-props',
    label: 'SelectOption',
    value: 'FirstOption',
    classes: createStyles({}),
    onChange: () => {},
    options: [
      {
        value: 'FirstOption',
        label: 'FirstOption',
      },
      {
        value: 'SecondOption',
        label: 'SecondOption',
      }
    ],
  };
  const numberInputDefaultProps = {
    id: 'number-input',
    label: 'NumberInput',
    classes: createStyles({}),
    onChange: () => {},
    value: 10,
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
      <SimpleSelectInput {...simpleSelectInputDefaultProps} />
      <NumberInput {...numberInputDefaultProps} />
    </div>
  )
});

