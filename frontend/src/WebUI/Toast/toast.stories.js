import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '@material-ui/core/Button';
import {
  Toast, LoadingToast, ToastWrapper,
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
    const toastOptions = types[0];
    const defaultProps = {
      position: position[0],
      i18n: {
        inProgress: 'In Progress',
      },
    };

    return (
      <div style={{ padding: '50px', backgroundColor: 'white' }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => toast(content, toastOptions)}
        >
          Normal toast
        </Button>
        <br />
        <br />
        <Button
          variant="outlined"
          onClick={() => toast(
            <LoadingToast content={defaultProps.i18n.inProgress} />, { autoClose: false },
          )}
        >
          Loading toast
        </Button>
        <br />
        <br />
        <Button
          variant="outlined"
          onClick={() => toast.success(
            <Toast
              text="Textttttt"
              buttonContent="View"
              // eslint-disable-next-line no-alert
              onClick={() => alert('alert')}
            />,
            { autoClose: 500 },
          )}
        >
          Open alert
        </Button>
        <ToastWrapper {...defaultProps} />
      </div>
    );
  });
