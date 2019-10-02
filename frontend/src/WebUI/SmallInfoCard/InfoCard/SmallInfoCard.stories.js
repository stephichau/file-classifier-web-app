import React from 'react';
import { storiesOf } from '@storybook/react';
import SmallInfoCard from './index';

const categoryName = 'AssembledComponents/AddButton';

storiesOf(categoryName, module).add('AddButton', () => {
  const defaultProps = {
    title: 'IIC2233',
    subtitle: 'Programación Avanzada',
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: 500 }}>
      <SmallInfoCard {...defaultProps} />
      <div style={{ height: 20, width: 20}} />
      <SmallInfoCard {...defaultProps}>
        <div style={{
          width: '100%', height: 60, backgroundColor: 'blue', marginTop: -60, borderRadius: '0 0 4px 4px',
          }} />
      </SmallInfoCard>
       <div style={{ height: 20, width: 20}} />
      <SmallInfoCard borderStyle="dotted">
        <div style={{
          height: '100%', width: '100%', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', marginLeft: '20%'
        }}>
          + Agregar curso
        </div>
      </SmallInfoCard>
    </div>
  );
});
