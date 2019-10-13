export default ({
  history,
  ...restOfProps
}) => {
  const { location } = history;
  const courseName = location.pathname.split('/').slice(-1) || '';
  const options = [
    {
      title: 'Crear hojas de respuestas',
      onClick: () => {}
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
