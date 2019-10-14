export default ({
  history,
  showAnswerSheetModal,
  ...restOfProps
}) => {
  const { location } = history;
  const courseName = location.pathname.split('/').pop() || '';
  const sheetMakerProps = {
    sheetMaker: {
      title: 'Crear hojas de respuestas',
      course: 'Sigla del Curso',
      evaluation: 'Evaluación',
      year: 'Año',
      semester: 'Semestre',
      section: 'Sección',
      instructor: 'Apellido del Instructor',
      lowerBound: 'Límite inferior',
      upperBound: 'Límite superior',
      template: 'Nombre del archivo de template',
      copies: 'Copias por alumno',
    },
    form: {
      cancel: 'Cancelar',
      submit: 'Crear',
    },
  };

  const options = [
    {
      title: sheetMakerProps.sheetMaker.title,
      onClick: () => showAnswerSheetModal({
        title: sheetMakerProps.sheetMaker.title,
        i18n: sheetMakerProps,
        onSubmit: () => console.log('submitted'),
      })
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
  return {
    ...restOfProps,
    courseName,
    options,
  };
}
