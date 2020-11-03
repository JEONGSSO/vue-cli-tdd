<template>
  <div class="board_wrap">
    <ul class="card_wrap">
      <li class="card_wrap" v-for="list in board.lists" :key="list.id">
        {{list.title}}
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {
      bid: this.$route.params.bid,
      cid: this.$route.params.cid,
      board: [],
    };
  },
  methods: {
    async getBoard() {
      const { bid } = this;
      const res = await this.$axios('GET', `boards/${bid}`);
      this.board = res.data.item;
    },
  },
  created() {
    this.getBoard();
  },
  watch: {
    $route({ params }) {
      this.bid = params.bid;
      this.cid = params.cid;
    },
  },
};
</script>
