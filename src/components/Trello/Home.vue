<template>
  <div>
    <router-link to="/trello">Home</router-link>
      <Board
        :bid="bid"
        :cid="cid"
      />
  </div>
</template>

<script>
import Board from './Board.vue';
// import Card from './Card.vue';

export default {
  data() {
    return {
      bid: this.$route.params.bid,
      cid: this.$route.params.cid,
    };
  },
  components: {
    Board,
    // Card,
  },
  watch: {
    $route({ params }) {
      this.bid = params.bid;
      this.cid = params.cid;
    },
  },
};
</script>
