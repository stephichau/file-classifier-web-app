import palette from '../../../WebTheme/palette';

export default theme => ({
  container: {
    border: `1px solid ${palette.boxShadowLightGrey}`,
    borderBottom: 0,
    minHeight: 100,
    minWidth: 300,
    maxWidth: 500,
  },
  title: {
    position: 'sticky',
    margin: '20px auto',
    display: 'flex',
    justifyContent: 'center',
    color: palette.toastDefault,
    '&:hover': {
      cursor: 'default',
    },
  },
  inputContainer: {
    minHeight: 50,
    maxHeight: 'calc(60vh - 100px)',
    overflowY: 'scroll',
    margin: '10px 0',
    padding: '0 20px',
  },
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginRight: 20,
    padding: '20px 0',
    position: 'sticky',
  },
  cancelButton: {
    backgroundColor: palette.secondaryButton,
    color: 'white',
    minWidth: 120,
  },
  submitButton: {
    backgroundColor: palette.primaryButtton,
    color: 'white',
    minWidth: 120,
    marginLeft: 10,
  },
});
