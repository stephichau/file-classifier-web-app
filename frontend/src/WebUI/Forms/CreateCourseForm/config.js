import components from '../components';

export default ({
  onChange,
  i18n,
  state,
  classes,
}) => [
  {
    component: components.TEXT_INPUT,
    id: 'course',
    label: i18n.sheetMaker.course,
    value: state.course || '',
    classes,
    onChange: (e) => onChange({
      name: 'course',
      value: e.target.value,
    }),
    defaultValue: '',
  },
  {
    component: components.TEXT_INPUT,
    id: 'year',
    label: i18n.sheetMaker.year,
    value: state.year || '',
    classes,
    onChange: (e) => onChange({
      name: 'year',
      value: e.target.value,
    }),
    defaultValue: 2019,
  },
  {
    component: components.NUMBER_INPUT,
    id: 'section',
    label: i18n.sheetMaker.section,
    value: state.section || 1,
    classes,
    onChange: (e) => onChange({
      name: 'section',
      value: e.target.value,
    }),
    min: 1,
  },
  {
    component: components.SIMPLE_SELECT,
    id: 'semester',
    label: i18n.sheetMaker.semester,
    value: state.semester || '',
    classes,
    onChange: (e) => onChange({
      name: 'semester',
      value: e.target.value,
    }),
    options: [
    {
      value: '1',
      label: '1',
    },
    {
      value: '2',
      label: '2',
    },
    ],
    defaultValue: '1',
  },
  {
    component: components.TEXT_INPUT,
    id: 'instructor',
    label: i18n.sheetMaker.instructor,
    value: state.instructor || '',
    classes,
    onChange: (e) => onChange({
      name: 'instructor',
      value: e.target.value,
    }),
    defaultValue: '',
  },
];