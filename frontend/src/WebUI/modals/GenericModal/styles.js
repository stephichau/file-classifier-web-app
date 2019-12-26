export default theme => ({
  dialogContainer: {
    '& > div > div.MuiPaper-root': {
      minHeight: 200,
    },
    '& div.MuiDialog-paperWidthSm': {
      minWidth: '400px !important',
    },
  },
});
