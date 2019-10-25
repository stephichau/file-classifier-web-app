import React, { useState } from 'react';
import {
  storiesOf,
} from '@storybook/react';
import {
  createStyles,
} from '@material-ui/core';
import isEqual from 'loadsh/isEqual';
import indexOf from 'lodash/indexOf';

import TextInput from './TextInput';
import RadioButtonInput from './RadioButton';
import CheckBoxInput from './CheckBox';
import {
  SimpleSelectInput,
  MultipleListSelect,
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
    value: '',
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
    value: '10',
  };

  const [list, setList] = useState([]);

  const onNewInput = (obj) => {
    const newList = [...list, { ...obj }];
    setList(newList);
  };

  const onDeleteInput = ({ data, index }) => {
    const toDelete = isEqual(list[index], data) ?
      index : indexOf(list, data);
    const oldList = [...list];
    oldList.splice(toDelete, 1);
    setList([...oldList]);
  };

  const multipleSimpleSelectProps = {
    classes: createStyles({}),
    title: 'MultipleSimpleSelect',
    textFieldLabel: 'Pregunta',
    selectLabel: 'Escoge un archivo',
    textInputPlaceholder: 'Ej: P1, P2',
    options: [
      {
        label: 'SCANS/IIC2333/p1-mt-2019-2',
        value: 'SCANS/IIC2333/p1-mt-2019-2',
      },
      {
        label: 'SCANS/IIC2333/p2-mt-2019-2',
        value: 'SCANS/IIC2333/p2-mt-2019-2',
      },
      {
        label: 'SCANS/IIC2333/p3-mt-2019-2',
        value: 'SCANS/IIC2333/p3-mt-2019-2',
      },
    ],
    list,
    onNewInput,
    onDeleteInput,
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
      <MultipleListSelect {...multipleSimpleSelectProps} />
    </div>
  )
});

