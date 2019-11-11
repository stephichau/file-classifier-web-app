import palette from '../../../WebTheme/palette';

export default theme => ({
  container: {
    minWith: 500,
    maxWidth: 1300,
    margin: '10px 20px',
  },
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  card: {
    borderRadius: 4,
    margin: '10px 10px 30px 0',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  option: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 22,
    borderRadius: 4,
    '&:hover': {
      borderRadius: 4,
      width: '100%',
      height: '100%',
    },
  },
});
