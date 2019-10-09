export default (props) => {

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
  const courseName = 'IIC2333';
  return {
    ...props,
    courseName,
    options,
  };
}
