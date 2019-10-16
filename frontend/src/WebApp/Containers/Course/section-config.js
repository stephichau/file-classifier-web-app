import actions from '../../../store/actions';
const {
  answerSheet: {
    POST_ANSWER_SHEET_REQUEST,
  },
} = actions;

export default ({
  sheetMakerProps,
  showAnswerSheetModal,
  loadToast,
  hideModal,
  submitAnswerSheet,
  generic,
}) => [
  {
    title: sheetMakerProps.sheetMaker.title,
    onClick: () => showAnswerSheetModal({
      title: sheetMakerProps.sheetMaker.title,
      i18n: sheetMakerProps,
      onSubmit: (props) => {
        const toastId = loadToast();
        console.log(toastId);
        hideModal();
        submitAnswerSheet(props);
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
