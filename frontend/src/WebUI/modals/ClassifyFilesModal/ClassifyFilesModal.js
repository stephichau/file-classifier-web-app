import React, { useState } from 'react';
import PropTypes from 'prop-types';
import isUntouched from '../../utils/untouched';
import validateState from '../../utils/validateState';
import GenericModal from '../GenericModal';
import ClassifyFilesForm from '../../Forms/ClassifyFilesForm';
import mockConfig from '../../Forms/ClassifyFilesForm/config';
import defaultValue from './defaultValue';

const ClassifyFilesModal = ({
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

  const invalidState = validateState(state);

  const unTouched = isUntouched(state, defaultValue);

  const unMetRequirements = unTouched || !invalidState;

  return (
    <GenericModal>
      <ClassifyFilesForm
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

ClassifyFilesModal.defaultProps = {
  title: '',
  i18n: {
    classifyFiles: {},
    form: {}
  },
  defaultState: null,
};

ClassifyFilesModal.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string,
  i18n: PropTypes.object,
  defaultState: PropTypes.object,
};

export default ClassifyFilesModal;
