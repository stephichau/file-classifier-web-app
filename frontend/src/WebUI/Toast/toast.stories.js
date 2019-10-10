import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '@material-ui/core/Button';
import {
  LoadingToast, ToastWrapper,
} from './index';

import { toast } from 'react-toastify';

const types = [
  'error',
  'warning',
  'info',
  'success',
  'default',
];

const position = [
  'top-right', 'top-center', 'top-left', 'bottom-right', 'bottom-center', 'bottom-left',
];


const categoryName = 'ElementalComponents';

storiesOf(categoryName, module)
  .add('Toast', () => {
    const content = 'Content';
    const defaultProps = {
      position: position[0],
      i18n: {
        inProgress: 'In Progress',
      },
    };

    return (
      <div
        style={{
          padding: '50px',
          backgroundColor: 'white',
          display: 'flex',
          flexDirection: 'column',
          width: '20%',
        }}>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => toast(content, { type: 'info' })}
        >
          Normal toast
        </Button>
        <Button
          variant="outlined"
          onClick={() => toast(
            <LoadingToast content={defaultProps.i18n.inProgress} />, { closeButton: false },
          )}
        >
          Loading toast
        </Button>
        <ToastWrapper {...defaultProps} />
      </div>
    );
  });
