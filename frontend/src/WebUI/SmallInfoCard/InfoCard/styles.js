import palette from '../../../WebTheme/palette';

export default () => ({
  container: {
    border: `1px solid ${palette.boxShadowLightGrey}`,
    boxShadow: `0 0 2px 1px ${palette.boxShadowLightGrey}`,
    height: 185,
    width: 350,
    '&:hover': {
      transform: 'translateY(-0.2rem) scale(1.015)',
    },
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
