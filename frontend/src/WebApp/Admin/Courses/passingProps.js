import get from 'loadsh/get';
import config from './config';
import createData from './utils/createData';
import shouldFetchCourses from './utils/fetchCourses';
import {
  onNewCourse,
} from './utils/coursesHelper';
import i18n from './utils/i18n';
import actions from '../../../store/actions';
const {
  courses: {
    GET_COURSES,
    DELETE_COURSE,
    DELETE_COURSE_RESET,
    POST_COURSE,
    POST_COURSE_RESET,
  },
} = actions;

export default (props) => {
  const {
    generic,
    getCourses,
    deleteCourse,
    resetState,
    showCreateCourseModal,
    submitCreateCourseModal,
    hideModal,
  } = props;

  const createCourseLoading = get(generic, `${[POST_COURSE]}.loading`) || false;
  const createdCourse = get(generic, `${[POST_COURSE]}.payload`, null) || null;
  const courseCreated = createdCourse && !createCourseLoading;

  const deletedCourse = get(generic, `${[DELETE_COURSE]}.payload`) || [];
  
  if (createdCourse || shouldFetchCourses({ courseState: generic[GET_COURSES] }) || (deletedCourse.length > 0)) getCourses();
  
  const coursesLoading = get(generic, `${[GET_COURSES]}.loading`) || false;
  if (deletedCourse.length > 0 && coursesLoading) resetState({ type: DELETE_COURSE_RESET });
  if (courseCreated && coursesLoading) resetState({ type: POST_COURSE_RESET });

  const courses = get(generic, `${[GET_COURSES]}.payload`) || [];

  const rows = courses.map((course, index) => createData(index + 1, { ...course }));

  const onEdit = ({ uuid }) => {};
  const onDelete = ({ uuid }) => deleteCourse(uuid);

  const onNewCourseWrapper = () => {
    onNewCourse({
      i18n,
      showCreateCourseModal,
      submitCreateCourseModal,
      action: POST_COURSE,
      hideModal,
    });
  };

  return {
    ...props,
    rowCount: rows.length,
    rowGetter: ({ index }) => rows[index],
    columns: [...config({ onEdit, onDelete, rows })],
    headerHeight: 48,
    rowHeight: 48,
    loading: coursesLoading || createCourseLoading,
    onAddCourse: onNewCourseWrapper,
  };
};
