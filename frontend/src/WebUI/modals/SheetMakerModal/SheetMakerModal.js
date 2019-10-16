import React, { useState } from 'react';
import PropTypes from 'prop-types';
import GenericModal from '../GenericModal';
import SheetMakerForm from '../../Forms/SheetMakerForm';
import mockConfig from '../../Forms/SheetMakerForm/mock-config';

const SheetMakerModal = ({
  classes,
  title,
  i18n,
  ...restOfProps
}) => {
  const [state, setState] = useState({
    ocr: 'qr',
    course: '',
    semester: 2,
    year: 2019,
    'lower_bound': 0,
    'upper_bound': 1,
    evaluation: '',
    instructor: '',
    copies: 1,
    template: 'template_IIC2333',
  });
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
  });
  return (
    <GenericModal>
      <SheetMakerForm
        title={title}
        i18n={i18n.form}
        classes={classes}
        config={config}
        state={state}
        {...restOfProps}
      />
    </GenericModal>
  );
};

SheetMakerModal.defaultProps = {
  title: '',
  i18n: {
    sheetMaker: {},
    form: {}
  },
};

SheetMakerModal.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string,
  i18n: PropTypes.object,
};

export default SheetMakerModal;
