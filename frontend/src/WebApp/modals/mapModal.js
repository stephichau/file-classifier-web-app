import {
  SHEET_MAKER_MODAL,
  CREATE_COURSE_MODAL,
} from './actions';

const MODAL_COMPONENTS = {
  [SHEET_MAKER_MODAL]: require('./SheetMakerModal').default,
  [CREATE_COURSE_MODAL]: require('./CreateCourseModal').default,
};

export default MODAL_COMPONENTS;