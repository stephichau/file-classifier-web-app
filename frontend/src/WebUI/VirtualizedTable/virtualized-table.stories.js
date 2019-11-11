import React from 'react';
import { storiesOf } from '@storybook/react';
import Paper from '@material-ui/core/Paper';

import VirtualizedTable from './index';
import mockData from './mock-config';

const categoryName = 'AssembledComponents';

storiesOf(categoryName, module).add('Table', () => {
  const sample = [
    ['MT', 'IIC2333', 'Sistema Operativos y Redes', 2019, 1, 1, 'Ruz'],
    ['Exam', 'IIC2333', 'Sistema Operativos y Redes', 2019, 1, 1, 'Ruz'],
    ['I1', 'IIC2233', 'Programación Avanzada', 2019, 1, 1, 'Ruz'],
    ['I1', 'IIC2233', 'Programación Avanzada', 2019, 1, 2, 'Florenzano'],
    ['I1', 'IIC2513', 'Tecnología y Aplicaciones Web', 2019, 1, 1, 'Vidal'],
    ['I2', 'IIC2513', 'Tecnología y Aplicaciones Web', 2019, 1, 1, 'Vidal'],
    ['I3', 'IIC2513', 'Tecnología y Aplicaciones Web', 2019, 1, 1, 'Vidal'],
  ];

  const createData = (index, evaluation, courseId, courseName, year, semester, section, instructor, published = 'No') => {
    return {
      index, evaluation, courseName, courseId, year, semester, section, instructor, published,
    };
  }

  const rows = [];

  for (let i = 0; i < 200; i += 1) {
    const randomSelection = sample[Math.floor(Math.random() * sample.length)];
    rows.push(createData(i + 1, ...randomSelection));
  }
  const defaultProps = {
    rowCount: rows.length,
    rowGetter: ({ index }) => rows[index],
    columns: [...mockData],
    headerHeight: 48,
    rowHeight: 48,
  };

  return (
    <Paper style={{
      height: 400,
      width: '100%',
      minWidth: 805,
    }}>
      <VirtualizedTable {...defaultProps} />
    </Paper>
  );
});
