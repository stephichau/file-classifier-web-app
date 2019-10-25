export default theme => ({
  textField: {
    width: 100,
    '& label': {
      fontSize: 14,
    },
    '& input': {
      fontSize: 14,
    },
  },
  select: {
    marginTop: 10,
    display: 'flex',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'space-between',
  },
  formControl: {
    margin: 0,
    width: '100%',
    width: 250,
    '& label': {
      fontSize: 14,
    },
    '& select': {
      fontSize: 14,
    },
  },
});
