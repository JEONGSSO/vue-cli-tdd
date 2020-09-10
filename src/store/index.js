import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions';
import mutations from './mutations';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    token: null,
    modalName: '',
    todoList: [],
    boardList: [],
    cardList: [],
  },
  actions,
  mutations,
  getters: {
    isAuth: ({ token }) => !!token,
    modalName: ({ modalName }) => modalName,
    boardList: ({ boardList }) => boardList,
    cardList: ({ cardList }) => cardList,
  },
});

const { token } = localStorage;
store.commit('SET_TOKEN', token);

export default store;

// Mutations: state 값을 변경하는 로직 (동기적)
// Actions 는 비동기적 로직을 정의
// 시작점은 Vue Components이다.
// 컴포넌트에서 비동기 로직(Method를 선언해서 API 콜 하는 부분 등)인 Actions를 콜하고,
// Actions는 비동기 로직만 처리할 뿐 State(Data)를 직접 변경하진 않는다.
// Actions가 동기 로직인 Mutations를 호출해서 State(Data)를 변경한다.
// Mutations에서만 State(Data)를 변경할 수 있다.
