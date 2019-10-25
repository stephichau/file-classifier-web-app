import { palette } from '../../../../WebTheme';

export default theme => ({
  root: {
    border: `1px solid ${palette.secondaryLightGrey}`,
  },
  titleContainer: {
    padding: '15px 10px 0 10px',
  },
  select: {
    marginTop: 10,
    display: 'flex',
    alignItems: 'center',
  },
});
