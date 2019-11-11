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

const mockData = [
  {
    ...getStyleProps(5),
    label: '#',
    dataKey: 'index',
  },
  {
    ...getStyleProps(12),
    label: 'Evaluation',
    dataKey: 'evaluation',
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
    ...getStyleProps(12.5, true),
    label: 'Section',
    dataKey: 'section',
  },
  {
    ...getStyleProps(15),
    label: 'Instructor',
    dataKey: 'instructor',
  },
  {
    ...getStyleProps(10),
    label: 'Published',
    dataKey: 'published',
  },
];

export default mockData;
