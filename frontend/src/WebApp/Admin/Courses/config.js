import React from 'react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import { Button } from '../../../WebUI/Buttons';

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
    ...getStyleProps(10),
    label: 'Course Id',
    dataKey: 'courseId',
  },
  {
    ...getStyleProps(23),
    label: 'Course Name',
    dataKey: 'courseName',
  },
  {
    ...getStyleProps(8.5, true),
    label: 'Year',
    dataKey: 'year',
  },
  {
    ...getStyleProps(8.25, true),
    label: 'Section',
    dataKey: 'section',
  },
  {
    ...getStyleProps(8.25, true),
    label: 'Semester',
    dataKey: 'semester',
  },
  {
    ...getStyleProps(12),
    label: 'Instructor',
    dataKey: 'instructor',
  },
  {
    ...getStyleProps(13, true),
    label: 'Editar',
    dataKey: 'edit',
    cellRenderer: ({ cellData, classes }) => (
      <Button onClick={onEdit} className={classes.button} buttonType="edit">
        <EditIcon fontSize="small" />
        <Typography variant="body2" className={classes.text}>
          {cellData}
        </Typography>
      </Button>
    )
  },
  {
    ...getStyleProps(13, true),
    label: 'Eliminar',
    dataKey: 'delete',
    cellRenderer: ({ cellData, classes }) => (
      <Button onClick={onDelete} className={classes.button} buttonType="delete">
        <DeleteIcon fontSize="small" />
        <Typography variant="body2" className={classes.text}>
          {cellData}
        </Typography>
      </Button>
    )
  },
];

export default config;
