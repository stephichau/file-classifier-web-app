import { palette } from '../../../../WebTheme';

export default theme => ({
  root: {
    border: `1px solid ${palette.secondaryLightGrey}`,
    marginTop: 15,
    marginBottom: 15,
    paddingTop: 5,
    paddingBottom: 10,
  },
  titleContainer: {
    padding: '15px 10px 0 10px',
  },
  select: {
    marginTop: 10,
    display: 'flex',
    alignItems: 'center',
  },
  listContainer: {
    padding: '0 !important',
  },
  listItem: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
  },
  divider: {
    margin: '10px 0',
  },
});
