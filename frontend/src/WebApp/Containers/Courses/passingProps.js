export default (props) => {
  const courses = [
    {
      title: 'IIC2233',
      subtitle: 'Programación Avanzada',
    },
    {
      title: 'IIC2333',
      subtitle: 'SSOO y Redes',
    },
    {
      title: 'IIC1103',
      subtitle: 'Introducción a la Programación',
    },
    {
      title: 'IIC2513',
      subtitle: 'Tecnología y Aplicaciones Web',
    }
  ];
  const courseCount = courses.length;
  return {
    ...props,
    data: {
      courses,
      courseCount,
    },
    loading: false,
  }
};
