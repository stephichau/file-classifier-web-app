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
    '&:hover': {
      border: '1.5px solid orange',
      borderRadius: 4,
      width: '100.5%',
      height: '101%',
    },
  },
});
