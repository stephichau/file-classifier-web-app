import React from 'react';
import ButtonBase from '@material-ui/core/ButtonBase';

const getStyleProps = (widthInPercent, centered = false) => ({
  style: {
    width: `${widthInPercent}%`,
    justifyContent: centered ? 'center' : 'inherit',
  },
  headerStyle: {
    width: `${widthInPercent}%`,
    justifyContent: centered ? 'center' : 'inherit',
  },
});

const config = ({ onEdit, onDelete }) => [
  {
    ...getStyleProps(5),
    label: '#',
    dataKey: 'index',
  },
  {
    ...getStyleProps(12),
    label: 'Course Id',
    dataKey: 'courseId',
  },
  {
    ...getStyleProps(24),
    label: 'Course Name',
    dataKey: 'courseName',
  },
  {
    ...getStyleProps(9.5, true),
    label: 'Year',
    dataKey: 'year',
  },
  {
    ...getStyleProps(10, true),
    label: 'Section',
    dataKey: 'section',
  },
  {
    ...getStyleProps(10, true),
    label: 'Semester',
    dataKey: 'semester',
  },
  {
    ...getStyleProps(15),
    label: 'Instructor',
    dataKey: 'instructor',
  },
  {
    ...getStyleProps(12),
    label: 'Editar',
    dataKey: 'edit',
    cellRenderer: (props, callback) => <ButtonBase onClick={onEdit}>{callback(props)}</ButtonBase>
  },
  {
    ...getStyleProps(12),
    label: 'Eliminar',
    dataKey: 'delete',
    cellRenderer: (props, callback) => <ButtonBase onClick={onDelete}>{callback(props)}</ButtonBase>
  },
];

export default config;
