<template>
  <div v-if="isAuth" class="home_wrap">
    <h3>Personal Board</h3>
    <ul class="board_list">
      <li v-for="(board, idx) in boardList" :key="board.id">
        <router-link
          :to="`/trello/b/${board.id}`"
          class="board_item"
          :style="{backgroundColor: board.bgColor }"
        >
          {{board.title}}
        </router-link>
        <button class="board_remove" @click="removeBoard(board.id, idx)">X</button>
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
  methods: {
    async removeBoard(bid, idx) {
      try {
        await this.$axios('DELETE', `boards/${bid}`);
        this.$store.commit('REMOVE_BOARD_LIST', idx);
        console.log('삭제완료');
      } catch (error) {
        console.log('removeBoard Errorrrrrrrrrr', error);
      }
    },
    ...mapActions([
      'fetchBoardList',
    ]),
  },
  computed: {
    ...mapGetters([
      'isAuth',
      'boardList',
    ]),
  },
  created() {
    this.fetchBoardList();
  },
  mounted() {
    if (!this.$store.getters.isAuth) this.$store.dispatch('openModalName', 'login');
  },
};
</script>

<style lang="sass">
  @import '../../assets/style/Trello.scss'
</style>
