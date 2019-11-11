import components from '../components';

export default ({
  onChange,
  i18n,
  state,
  classes,
  defaultValue,
}) => [
  {
    component: components.TEXT_INPUT,
    id: 'courseName',
    label: i18n.createCourse.courseName,
    value: state.courseName || '',
    classes,
    onChange: (e) => onChange({
      name: 'courseName',
      value: e.target.value,
    }),
    defaultValue: defaultValue.courseName,
    placeholder: '-',
  },
  {
    component: components.TEXT_INPUT,
    id: 'course',
    label: i18n.createCourse.course,
    value: state.course || '',
    classes,
    onChange: (e) => onChange({
      name: 'course',
      value: e.target.value,
    }),
    defaultValue: defaultValue.course,
    placeholder: '-',
  },
  {
    component: components.TEXT_INPUT,
    id: 'year',
    label: i18n.createCourse.year,
    value: state.year || '',
    classes,
    onChange: (e) => onChange({
      name: 'year',
      value: e.target.value,
    }),
    defaultValue: defaultValue.year,
    placeholder: 'De la evaluación',
  },
  {
    component: components.NUMBER_INPUT,
    id: 'section',
    label: i18n.createCourse.section,
    value: state.section,
    classes,
    onChange: (e) => onChange({
      name: 'section',
      value: parseInt(`${e.target.value}`),
    }),
    min: 1,
    defaultValue: defaultValue.section,
  },
  {
    component: components.SIMPLE_SELECT,
    id: 'semester',
    label: i18n.createCourse.semester,
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
    defaultValue: defaultValue.semester,
  },
  {
    component: components.TEXT_INPUT,
    id: 'instructor',
    label: i18n.createCourse.instructor,
    value: state.instructor || '',
    classes,
    onChange: (e) => onChange({
      name: 'instructor',
      value: e.target.value,
    }),
    defaultValue: defaultValue.instructor,
    placeholder: '-',
  },
];