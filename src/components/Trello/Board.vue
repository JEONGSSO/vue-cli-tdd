<template>
  <div>
    <p>
      <router-link to="/trello/b/1">Board 1</router-link>
    </p>
    <p>
      <router-link to="/trello/b/2">Board 2</router-link>
    </p>
    <div v-if="bid">
      <p>
        <router-link to="/trello/b/1/c/1">Card 1</router-link>
      </p>
      <p>
        <router-link to="/trello/b/1/c/2">Card 2</router-link>
      </p>
      <p v-show="bid">BBBBBB {{bid}}</p>
      <Card
        :cid="cid"
      >
      </Card>
    </div>
    <div v-if="loading">
      good
    </div>
    <ul v-else>
      <li v-for="(board, index) in boardList" :key="index">
        {{board}}}
      </li>
    </ul>
  </div>
</template>

<script>
import Card from './Card.vue';

export default {
  props: ['bid', 'cid'],
  components: {
    Card,
  },
  data() {
    return {
      loading: false,
      boardList: [],
    };
  },
  methods: {
    async fetchData() {
      this.loading = true;
      try {
        const res = await this.$axios('get', 'boards');
        this.boardList = res === undefined ? [] : res.data;
      } finally {
        this.loading = false;
      }
    },
  },
  created() {
    this.fetchData();
  },
};
</script>
