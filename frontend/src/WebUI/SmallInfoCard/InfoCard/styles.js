export default theme => ({
  container: {
    border: '1px solid rgba(0,0,0,0.12)',
    boxShadow: '0 0 2px 1px rgba(0,0,0,0.12)',
    height: 185,
    width: 350,
  },
  solid: {
    borderStyle: 'solid',
    borderWidth: 1,
  },
  dotted: {
    borderStyle: 'dotted',
    borderWidth: 2.5,
  },
  textContainer: {
    padding: '40px 20px 0px 30px',
    height: 120,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 23,
  },
});
