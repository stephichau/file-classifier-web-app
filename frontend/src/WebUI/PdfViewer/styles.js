import palette from '../../WebTheme/palette';

export default () => ({
  documentContainer: {
    '& canvas': {
      border: `1px solid ${palette.secondaryLightGrey}`,
      borderRadius: 4,
    },
  },
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: 600,
    marginBottom: 5,
  },
  pagesContainer: {
    display: 'flex',
    alignItems: 'center',
    minWidth: 200,
    justifyContent: 'space-between',
  },
  button: {
    '& a': {
      textDecoration: 'none',
      color: palette.primaryButtton,
    },
    padding: '4px 10px',
    color: palette.primaryButtton,
    borderColor: palette.primaryButtton,
    '&:hover': {
      backgroundColor: palette.primaryButtonHover,
    },
  },
  pageNumber: {

  },
});
