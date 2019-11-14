import palette from '../../../WebTheme/palette';

export default () => ({
  button: {
    color: palette.white,
    display: 'flex',
    alignItems: 'center',
  },
  default: {
    backgroundColor: 'inherit',
    '&:hover': {
      backgroundColor: 'inherit',
    },
  },
  edit: {
    backgroundColor: palette.editButton,
    '&:hover': {
      backgroundColor: palette.editButtonHover,
    },
  },
  delete: {
    backgroundColor: palette.dangerButton,
    '&:hover': {
      backgroundColor: palette.dangerButtonHover,
    },
  },
});