import {
  SHEET_MAKER_MODAL,
} from './actions';

const MODAL_COMPONENTS = {
  [SHEET_MAKER_MODAL]: require('../../WebUI/modals/SheetMakerModal').default,
};

export default MODAL_COMPONENTS;