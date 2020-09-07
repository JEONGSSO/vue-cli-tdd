export default {
  IS_AUTH() {
    this.state.isAuth = !this.state.isAuth;
  },
  OPEN_MODAL_NAME(state, payload) {
    state.modalName = payload;
  },
  CLOSE_MODAL(state) {
    state.modalName = '';
  },
  FETCH_BOARD_LIST(state, payload) {
    state.boardList = payload;
  },
  FETCG_CARD_LIST(state, payload) {
    state.cardList = payload;
  },
  ADD_ITEM({ todoList }, item) {
    todoList.push({
      data: item,
      isUpdate: false,
    });
  },
  REMOVE_ITEM({ todoList }, idx) {
    todoList.splice(idx, 1);
  },
  MODIFY_ITEM({ todoList }, itemInfo) {
    const { value, idx } = itemInfo;
    // eslint-disable-next-line no-param-reassign
    todoList[idx].data = value;
    // eslint-disable-next-line no-param-reassign
    todoList[idx].isUpdate = false;
  },
};
