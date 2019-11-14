export default theme => ({
  flexContainer: {
    display: 'flex',
    alignItems: 'center',
    boxSizing: 'border-box',
    justifyContent: 'inherit',
  },
  table: {
    // temporary right-to-left patch, waiting for
    // https://github.com/bvaughn/react-virtualized/issues/454
    '& .ReactVirtualized__Table__headerRow': {
      flip: false,
      paddingRight: theme.direction === 'rtl' ? '0px !important' : undefined,
      justifyContent: 'inherit',
    },
    '& .ReactVirtualized__Table__headerColumn': {
      marginLeft: 0,
      marginRight: 0,
    },
    '& .ReactVirtualized__Table__headerColumn:first-of-type': {
      marginLeft: 0,
    },
    '& .ReactVirtualized__Table__rowColumn:first-of-type': {
      marginLeft: 0,
    },
  },
  tableRow: {
    cursor: 'pointer',
  },
  tableRowHover: {
    '&:hover': {
      backgroundColor: theme.palette.grey[200],
    },
  },
  tableCell: {
    flex: 1,
  },
  noClick: {
    cursor: 'initial',
  },
  button: {
    minWidth: 'unset',
  },
  text: {
    marginLeft: 5,
  },
});