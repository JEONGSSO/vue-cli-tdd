<template>
  <div v-if="isAuth">
    <router-link to="/trello">Home</router-link>
      <Board
        :bid="bid"
        :cid="cid"
      />
  </div>
</template>

<script>
import Board from './Board.vue';

export default {
  data() {
    return {
      bid: this.$route.params.bid,
      cid: this.$route.params.cid,
    };
  },
  components: {
    Board,
  },
  watch: {
    $route({ params }) {
      this.bid = params.bid;
      this.cid = params.cid;
    },
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
};
</script>
