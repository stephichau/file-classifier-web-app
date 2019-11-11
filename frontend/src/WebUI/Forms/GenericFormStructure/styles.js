import palette from '../../../WebTheme/palette';

export default theme => ({
  container: {
    border: '1px solid rgba(0, 0, 0, 0.12)',
    minHeight: 200,
    maxHeight: 500,
    minWidth: 300,
    maxWidth: 500,
    paddingBottom: 20,
  },
  title: {
    margin: '20px auto',
    display: 'flex',
    justifyContent: 'center',
    color: palette.toastDefault,
  },
  inputContainer: {
    maxHeight: 350,
    overflowY: 'scroll',
    margin: '10px 0',
    padding: '0 20px',
  },
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginRight: 20,
    marginTop: 20,
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
