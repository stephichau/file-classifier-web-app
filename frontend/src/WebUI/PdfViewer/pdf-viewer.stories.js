import React from 'react';
import { storiesOf } from '@storybook/react';
import PdfViewer from './index';

const categoryName = 'AssembledComponents';

storiesOf(categoryName, module).add('PdfViewer', () => {
  const defaultProps = {
    
  };

  return (
    <div style={{ margin: '50px auto 0 auto', maxWidth: 600 }}>
      <PdfViewer />
    </div>
  )
});
