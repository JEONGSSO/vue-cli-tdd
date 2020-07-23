import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// Mutations: state 값을 변경하는 로직 (동기적)
// Actions 는 비동기적 로직을 정의

export default new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    increment(state) {
      state.count += 1;
    },
  },
  actions: {
  },
});
