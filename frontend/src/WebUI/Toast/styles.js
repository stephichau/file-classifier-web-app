import { palette } from '../../WebTheme';

export default theme => ({
  toast: {
    '&.Toastify__toast--success': {
      backgroundColor: palette.toastSuccess,
      color: palette.primaryWhite,
    },
    '&.Toastify__toast--error': {
      backgroundColor: palette.toastError,
      color: palette.primaryWhite,
    },
    '&.Toastify__toast--warning': {
      backgroundColor: palette.toastWarning,
      color: palette.primaryWhite,
    },
    '&.Toastify__toast--info': {
      backgroundColor: palette.toastInfo,
      color: palette.primaryWhite,
    },
    '& .Toastify__close-button': {
      display: 'none',
    },
    boxShadow: `0 0 8px 4px ${palette.secondaryLightGrey}`,
    height: 75,
    backgroundColor: palette.toastDefault,
    color: palette.primaryWhite,
  },
  progress: {
    background: palette.secondaryWhite,
    height: 5,
    width: 249,
    marginLeft: -25,
  },
  spinner: {
    color: palette.secondaryWhite,
    marginRight: 15,
  },
  button: {
    color: palette.primaryWhite,
    minWidth: 120,
    maxWidth: 200,
    fontSize: 15,
    justifyContent: 'flex-start',
  },
  toastContainer: {
    width: 250,
    position: 'absolute',
    right: 0,
    top: 50,
    zIndex: 10,
    '& > div.Toastify__toast': {
      marginBottom: 15,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-end',
      paddingLeft: 25,
      '& > div.Toastify__toast-body': {
        display: 'flex',
        marginBottom: 20,
      },
    },
  },
});
