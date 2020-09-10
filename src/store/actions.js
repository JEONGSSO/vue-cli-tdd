import { request } from '../utils/sendAxios';

export default {
  setToken({ commit }, payload) {
    commit('SET_TOKEN', payload);
  },
  openModalName(context, payload) {
    context.commit('OPEN_MODAL_NAME', payload);
  },
  closeModal(context, payload) {
    context.commit('CLOSE_MODAL', payload);
  },
  async fetchBoardList({ commit }) {
    try {
      const { data } = await request('get', 'boards');
      commit('FETCH_BOARD_LIST', data.list);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }
  },
  async fetchCardList({ commit }, payload) {
    commit('FETCG_CARD_LIST', payload);
  },
  /* todo */
  addItem({ commit }, { addItem }) {
    commit('ADD_ITEM', addItem);
  },
  removeItem({ commit }, payload) {
    commit('REMOVE_ITEM', payload);
  },
  modifyItem({ commit }, payload) {
    commit('MODIFY_ITEM', payload);
  },
};
