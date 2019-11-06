import React, { useState } from 'react';
import PropTypes from 'prop-types';
import isUntouched from '../../utils/untouched';
import validateState from '../../utils/validateState';
import GenericModal from '../GenericModal';
import CreateCourseForm from '../../Forms/CreateCourseForm';
import mockConfig from '../../Forms/CreateCourseForm/config';
import defaultValue from './defaultValue';

const CreateCourseModal = ({
  classes,
  title,
  i18n,
  defaultState,
  ...restOfProps
}) => {
  const defState = defaultState || defaultValue;

  const [state, setState] = useState({ ...defState });
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
    defaultValue: defState,
  });

  const validState = validateState(state);

  const unTouched = isUntouched(state, defaultValue);

  const unMetRequirements = unTouched || !validState;

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
    createCourse: {},
    form: {}
  },
  defaultState: null,
};

CreateCourseModal.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string,
  i18n: PropTypes.object,
  defaultState: PropTypes.object,
};

export default CreateCourseModal;

