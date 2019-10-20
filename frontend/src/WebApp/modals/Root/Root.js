import React from 'react';

import MODAL_COMPONENTS from '../mapModal';

const RootContainer = ({ type, props, onHideModal, generic }) => {
  const Modal = MODAL_COMPONENTS[type];
  if (!type || !Modal) {
    return null;
  }

  return <Modal onCancel={onHideModal} {...props} {...generic} />;
};

export default RootContainer;

