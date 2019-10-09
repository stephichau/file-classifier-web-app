import color from 'color';

export default theme => ({
  toast: {
    '&.Toastify__toast--success': {
      backgroundColor: 'green',
      color: 'lightGreen',
    },
    '&.Toastify__toast--error': {
      backgroundColor: 'red',
      color: 'white',
    },
    '&.Toastify__toast--warning': {
      backgroundColor: 'yellow',
      color: 'white',
    },
    '&.Toastify__toast--info': {
      backgroundColor: 'lightBlue',
      color: 'white',
    },

    '& .Toastify__close-button--default': {
      color: 'white',
      opacity: 0.7,
    },
    backgroundColor: 'black',
    color: 'rgba(0,0,0,0.8)',
  },
  progress: {
    background: color('white').fade(0.2).string(),
  },
  spinner: {
    marginRight: 10,
    marginLeft: 10,
    verticalAlign: 'bottom',
  },

  button: {
    color: theme.white,
    minWidth: 80,
    marginLeft: 15,
  },
});
