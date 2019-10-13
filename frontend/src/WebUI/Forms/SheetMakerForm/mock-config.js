const components = {
  CHECK_BOX: require('../../Inputs/CheckBox').default,
  RADIO_BUTTON: require('../../Inputs/RadioButton').default,
  SIMPLE_SELECT: require('../../Inputs/Selects/SimpleSelect').default,
  TEXT_INPUT: require('../../Inputs/TextInput').default,
};

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
  },
];