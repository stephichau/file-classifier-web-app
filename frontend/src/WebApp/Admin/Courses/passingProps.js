import get from 'loadsh/get';
import config from './config';
import createData from './utils/createData';

export default (props) => {

  const sample = [
    ['IIC2333', 'Sistema Operativos y Redes', 2019, 1, 1, 'Ruz'],
    ['IIC2333', 'Sistema Operativos y Redes', 2019, 1, 1, 'Ruz'],
    ['IIC2233', 'Programación Avanzada', 2019, 1, 1, 'Ruz'],
    ['IIC2233', 'Programación Avanzada', 2019, 1, 2, 'Florenzano'],
    ['IIC2513', 'Tecnología y Aplicaciones Web', 2019, 1, 1, 'Vidal'],
    ['IIC2513', 'Tecnología y Aplicaciones Web', 2019, 1, 1, 'Vidal'],
    ['IIC2513', 'Tecnología y Aplicaciones Web', 2019, 1, 1, 'Vidal'],
  ];

  const rows = [];
  for (let i = 0; i < 200; i += 1) {
    const randomSelection = sample[Math.floor(Math.random() * sample.length)];
    rows.push(createData(i + 1, ...randomSelection));
  }

  const onEdit = () => {};
  const onDelete = () => {};

  return {
    ...props,
    rowCount: rows.length,
    rowGetter: ({ index }) => rows[index],
    columns: [...config({ onEdit, onDelete })],
    headerHeight: 48,
    rowHeight: 48,
  };
};
