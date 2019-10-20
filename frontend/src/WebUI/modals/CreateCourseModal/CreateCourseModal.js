import React, { useState } from 'react';
import PropTypes from 'prop-types';
import isEqual from 'loadsh/isEqual';
import GenericModal from '../GenericModal';
import CreateCourseForm from '../../Forms/CreateCourseForm';
import mockConfig from '../../Forms/CreateCourseForm/config';
import defaultValue from './defaultValue';

const CreateCourseModal = ({
  classes,
  title,
  i18n,
  ...restOfProps
}) => {

  const [state, setState] = useState({ ...defaultValue });
  const onChange = async ({
    name,
    value
  }) => {
    setState({
      ...state,
      [name]: value,
    })
  };
  const config = mockConfig({
    classes,
    onChange,
    state,
    i18n,
    defaultValue,
  });

  const invalidState = Object.keys(state).map(key => {
    if (typeof state[key] === 'string') return state[key].length <= 1;
    return state[key] === null;
  }).filter(key => key).length === 0;

  const unTouched = isEqual(state, defaultValue);

  const unMetRequirements = unTouched || !invalidState;

  return (
    <GenericModal>
      <CreateCourseForm
        title={title}
        i18n={i18n.form}
        classes={classes}
        config={config}
        state={state}
        unMetRequirements={unMetRequirements}
        {...restOfProps}
      />
    </GenericModal>
  );
};

CreateCourseModal.defaultProps = {
  title: '',
  i18n: {
    sheetMaker: {},
    form: {}
  },
};

CreateCourseModal.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string,
  i18n: PropTypes.object,
};

export default CreateCourseModal;

