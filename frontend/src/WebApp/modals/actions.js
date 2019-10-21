export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';
export const SHEET_MAKER_MODAL = 'SHEET_MAKER_MODAL';
export const CREATE_COURSE_MODAL = 'CREATE_COURSE_MODAL';

export const showModal = (type, props) => ({
  type,
  props,
  payload: SHOW_MODAL,
});

export const hideModal = (type = null, props = {}) => ({
  type,
  props,
  payload: HIDE_MODAL,
});