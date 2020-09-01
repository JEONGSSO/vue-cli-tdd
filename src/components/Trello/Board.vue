<template>
  <div>
    보등
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
    };
  },
  methods: {

  },
  watch: {
    $route({ params }) {
      this.bid = params.bid;
      this.cid = params.cid;
    },
  },
};
</script>
