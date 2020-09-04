<template>
  <div v-if="isAuth" class="home_wrap">
    <h3>Personal Board</h3>
    <ul class="board_list">
      <li v-for="board in boardList" :key="board.id">
        <router-link
          :to="`/trello/b/${board.id}`"
          class="board_item"
          :style="{backgroundColor: board.bgColor }"
        >
          {{board.title}}
        </router-link>
      </li>
      <button class="board_item add" @click="openModalName('addBoard')">Create new board...</button>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { modal } from '../../mixins/index';

export default {
  mixins: [modal],
  data() {
    return {
    };
  },
  components: {
  },
  methods: {
    ...mapActions([
      'fetchBoardList',
    ]),
  },
  created() {
    this.fetchBoardList();
  },
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    ...mapGetters([
      'isAuth',
      'boardList',
    ]),
  },
  mounted() {
    // eslint-disable-next-line no-unused-expressions
    this.$store.getters.isAuth ? '' : this.$store.dispatch('openModalName', 'login');
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
