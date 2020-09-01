<template>
  <div v-if="isAuth" class="home_wrap">
    <h3>Personal Board</h3>
    <div v-if="loading">
      good
    </div>
    <ul class="board_list" v-else>
      <li v-for="board in boardList" :key="board.id">
        <router-link
          :to="`/trello/b/${board.id}`"
          class="board_item"
          :style="{backgroundColor: board.bgColor }"
        >
          {{board.title}}
        </router-link>
      </li>
      <button class="board_item add" @click="boardAdd">Create new board...</button>
    </ul>
  </div>
</template>

<script>
import { setToken } from '../../utils/index';

export default {
  data() {
    return {
      loading: true,
      boardList: [],
    };
  },
  components: {
  },
  methods: {
    async fetchData() {
      setToken(localStorage.getItem('token'));
      this.loading = true;
      try {
        const res = await this.$axios('get', 'boards');
        this.boardList = res === undefined ? [] : res.data.list;
      } finally {
        this.loading = false;
      }
    },
    boardAdd() {
      console.log('boardAdd()');
    },
  },
  created() {
    this.fetchData();
  },
  computed: {
    isAuth() {
      return this.$store.getters.isAuth;
    },
  },
  mounted() {
    // eslint-disable-next-line no-unused-expressions
    this.$store.getters.isAuth ? '' : this.$store.dispatch('openModal');
  },
  watch: {
    $route(t) {
      console.log(t);
    },
  },
};
</script>

<style lang="sass">
  @import '../../assets/style/Trello.scss'
</style>
