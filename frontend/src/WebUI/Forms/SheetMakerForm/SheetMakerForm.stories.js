import React from 'react';
import {
  storiesOf
} from '@storybook/react';
import SheetMakerForm from './index';

const categoryName = 'AssembledComponents/Forms';

storiesOf(categoryName, module).add('SheetMakerForm', () => {
  const defaultProps = {
    config: [
      
    ],
    title: 'Formulario para crear hojas de respuestas',
    i18n: {
      cancel: 'Cancelar',
      submit: 'Crear',
    },
  };
  return <SheetMakerForm {...defaultProps} />;
});

