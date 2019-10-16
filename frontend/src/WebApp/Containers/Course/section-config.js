import actions from '../../../store/actions';

export default ({
  sheetMakerProps,
  showAnswerSheetModal,
  loadToast,
  submitAnswerSheet,
  toastLoaded,
}) => [
  {
    title: sheetMakerProps.sheetMaker.title,
    onClick: () => showAnswerSheetModal({
      title: sheetMakerProps.sheetMaker.title,
      i18n: sheetMakerProps,
      onSubmit: (props) => {
        const toastId = loadToast();
        submitAnswerSheet(props);
        toastLoaded(toastId);
      },
    }),
  },
  {
    title: 'Clasificar pruebas escaneadas',
    onClick: () => {}
  },
  {
    title: 'Ver pruebas clasificadas',
    onClick: () => {}
  },
];
