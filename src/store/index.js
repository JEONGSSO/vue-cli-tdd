import Vue from 'vue';
import Vuex from 'vuex';

import { request } from '../utils/sendAxios';
import { setToken } from '../utils/index';

Vue.use(Vuex);

// Mutations: state 값을 변경하는 로직 (동기적)
// Actions 는 비동기적 로직을 정의
// 시작점은 Vue Components이다.
// 컴포넌트에서 비동기 로직(Method를 선언해서 API 콜 하는 부분 등)인 Actions를 콜하고,
// Actions는 비동기 로직만 처리할 뿐 State(Data)를 직접 변경하진 않는다.
// Actions가 동기 로직인 Mutations를 호출해서 State(Data)를 변경한다.
// Mutations에서만 State(Data)를 변경할 수 있다.

export default new Vuex.Store({
  state: {
    isAuth: !!localStorage.getItem('token'),
    todoList: [],
    modalName: '',
    boardList: [],
    cardList: [],
  },
  actions: {
    isAuth(context, payload) {
      context.commit('isAuth', payload);
    },
    openModalName(context, payload) {
      context.commit('openModalName', payload);
    },
    closeModal(context, payload) {
      context.commit('closeModal', payload);
    },
    async fetchBoardList({ commit }) {
      setToken(localStorage.getItem('token'));
      try {
        const { data } = await request('get', 'boards');
        commit('fetchBoardList', data.list);
      } catch (e) {
        console.error(e);
      }
    },
    fetchCardList(context, payload) {
      context.commit('fetchCardList', payload);
    },
    addItem(context, payload) {
      context.commit('addItem', payload.addItem);
    },
    removeItem(context, payload) {
      context.commit('removeItem', payload);
    },
    modifyItem(context, payload) {
      context.commit('modifyItem', payload);
    },
  },
  mutations: {
    isAuth() {
      this.state.isAuth = !this.state.isAuth;
    },
    openModalName(state, payload) {
      state.modalName = payload;
    },
    closeModal(state) {
      state.modalName = '';
    },
    fetchBoardList(state, payload) {
      state.boardList = payload;
    },
    fetchCardList(state, payload) {
      state.cardList = payload;
    },
    addItem({ todoList }, item) {
      todoList.push({
        data: item,
        isUpdate: false,
      });
    },
    removeItem({ todoList }, idx) {
      todoList.splice(idx, 1);
    },
    modifyItem({ todoList }, itemInfo) {
      const { value, idx } = itemInfo;
      // eslint-disable-next-line no-param-reassign
      todoList[idx].data = value;
      // eslint-disable-next-line no-param-reassign
      todoList[idx].isUpdate = false;
    },
  },
  getters: {
    isAuth: ({ isAuth }) => isAuth,
    modalName: ({ modalName }) => modalName,
    boardList: ({ boardList }) => boardList,
    cardList: ({ cardList }) => cardList,
  },
});
