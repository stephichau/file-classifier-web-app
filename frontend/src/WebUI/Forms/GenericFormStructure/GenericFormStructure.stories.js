import React from 'react';
import {
  storiesOf
} from '@storybook/react';
import GenericFormStructure from './index';

const categoryName = 'AssembledComponents/Forms';

storiesOf(categoryName, module).add('GenericFormStructure', () => {
  const defaultProps = {
    title: 'Formulario para crear hojas de respuestas',
    i18n: {
      cancel: 'Cancelar',
      submit: 'Crear',
    },
  };
  return (
    <>
      <GenericFormStructure {...defaultProps}>
        {
          Array(60).fill().map(_ => (
            <div>
              input
            </div>
          ))
        }
      </GenericFormStructure>
    </>
  );
});



