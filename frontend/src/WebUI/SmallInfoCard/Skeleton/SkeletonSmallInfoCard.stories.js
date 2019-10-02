import React from 'react';
import { storiesOf } from '@storybook/react';
import SkeletonSmallInfoCard from './index';

const categoryName = 'AssembledComponents/Cards';

storiesOf(categoryName, module).add('SkeletonSmallInfoCards', () => {
  const defaultProps = {
    title: 'IIC2233',
    subtitle: 'Programación Avanzada',
    loading: true,
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: 500 }}>
      <SkeletonSmallInfoCard {...defaultProps} />
      <div style={{ height: 20, width: 20}} />
      <SkeletonSmallInfoCard {...defaultProps}>
        <div style={{
          width: '100%', height: 60, backgroundColor: 'blue', marginTop: -60, borderRadius: '0 0 4px 4px',
          }} />
      </SkeletonSmallInfoCard>
       <div style={{ height: 20, width: 20}} />
      <SkeletonSmallInfoCard borderStyle="dotted">
        <div style={{
          height: '100%', width: '100%', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', marginLeft: '20%'
        }}>
          + Agregar curso
        </div>
      </SkeletonSmallInfoCard>
    </div>
  );
});
