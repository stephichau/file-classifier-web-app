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
    id: 'evaluation',
    label: i18n.sheetMaker.evaluation,
    value: state.evaluation || '',
    classes,
    onChange: (e) => onChange({
      name: 'evaluation',
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
    component: components.NUMBER_INPUT,
    id: 'lower-bound',
    label: i18n.sheetMaker.lowerBound,
    value: state['lower_bound'] || '',
    classes,
    onChange: (e) => onChange({
      name: 'lower_bound',
      value: e.target.value,
    }),
    max: state['upper_bound'],
    min: 0,
    defaultValue: 0,
  },
  {
    component: components.NUMBER_INPUT,
    id: 'upper-bound',
    label: i18n.sheetMaker.upperBound,
    value: state['upper_bound'] || '',
    classes,
    onChange: (e) => onChange({
      name: 'upper_bound',
      value: e.target.value,
    }),
    min: state['lower_bound'],
    defaultValue: null,
  },
  {
    component: components.NUMBER_INPUT,
    id: 'copies',
    label: i18n.sheetMaker.copies,
    value: state['copies'] || '',
    classes,
    onChange: (e) => onChange({
      name: 'copies',
      value: e.target.value,
    }),
    min: 1,
    defaultValue: 1,
  },
  {
    component: components.SIMPLE_SELECT,
    id: 'template',
    label: i18n.sheetMaker.template,
    value: state.template || '',
    classes,
    onChange: (e) => onChange({
      name: 'template',
      value: e.target.value,
    }),
    options: [
    {
      value: 'template_IIC2333',
      label: 'template_IIC2333',
    },
    {
      value: 'template_IIC2523',
      label: 'template_IIC2523',
    },
    {
      value: 'template_IIC1103',
      label: 'template_IIC1103',
    },
    ],
    defaultValue: 'template_IIC2333',
  }
];