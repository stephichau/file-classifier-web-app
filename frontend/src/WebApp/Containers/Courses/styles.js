import palette from '../../../WebTheme/palette';

export default theme => ({
  container: {
    minWidth: 500,
    margin: '10px 0px 10px 35px',
  },
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  card: {
    margin: '10px 40px 30px 0',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  rectangle: {
    width: '100%',
    backgroundColor: palette.indigo500,
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