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
    marginTop: 50,
    marginLeft: 50,
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
    marginTop: 'auto',
  },
  cancelButton: {
    backgroundColor: 'red',
    color: 'white',
    minWidth: 120,
  },
  submitButton: {
    backgroundColor: 'blue',
    color: 'white',
    minWidth: 120,
    marginLeft: 10,
  },
});
