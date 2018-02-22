import { actionTypes } from '../actions/modals';

const initialState = {
  modalType: null,
  modalProps: {},
};

const ACTION_HANDLERS = {
  [actionTypes.SHOW_MODAL]: (state, action) => ({
    modalType: action.modalType,
    modalProps: action.modalProps,
  }),
  [actionTypes.HIDE_MODAL]: () => initialState,
};

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
};
