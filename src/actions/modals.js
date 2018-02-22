export const actionTypes = {
  SHOW_MODAL: 'SHOW_MODAL',
  HIDE_MODAL: 'HIDE_MODAL',
};

export const showModal = (modalType, modalProps) => ({
  type: actionTypes.SHOW_MODAL,
  modalType,
  modalProps,
});

export const hideModal = () => ({
  type: actionTypes.HIDE_MODAL,
});

export default {
  showModal,
  hideModal,
};
