import React from 'react';

import MODAL_COMPONENTS from '../mapModal';

const RootContainer = ({ type, props, onHideModal }) => {
  const Modal = MODAL_COMPONENTS[type];
  if (!type || !Modal) {
    return null;
  }

  return <Modal onCancel={onHideModal} {...props} />;
};

export default RootContainer;

