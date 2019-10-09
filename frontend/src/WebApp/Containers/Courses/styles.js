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
  rectangle: {
    width: '100%',
    backgroundColor: 'blue',
    height: '35%',
    maxHeight: 220,
    borderRadius: '0 0 4px 4px',
  },
  addCourse: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -10,
    fontSize: 22,
  },
});