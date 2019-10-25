import {
  SHEET_MAKER_MODAL,
  CREATE_COURSE_MODAL,
  CLASSIFIER_FORM_MODAL,
} from './actions';

const MODAL_COMPONENTS = {
  [SHEET_MAKER_MODAL]: require('./SheetMakerModal').default,
  [CREATE_COURSE_MODAL]: require('./CreateCourseModal').default,
  [CLASSIFIER_FORM_MODAL]: require('./ClassifierFormModal').default,
};

export default MODAL_COMPONENTS;