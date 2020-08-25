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
    <div v-else>
      {{data}}
    </div>
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
      data: [],
    };
  },
  methods: {
    async fetchData() {
      this.loading = true;
      const { data } = await this.$axios.get('http://localhost:3000/health');
      this.data = data;
      this.loading = false;
      // const req = new XMLHttpRequest();
      // req.open('GET', 'http://localhost:3000/health');
      // req.send();
      // req.addEventListener('load', () => {
      //   this.data = JSON.parse(req.response);
      //   this.loading = false;
      // });
    },
  },
  created() {
    this.fetchData();
  },
};
</script>
