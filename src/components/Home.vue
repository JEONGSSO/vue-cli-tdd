<template>
  <section class="main">
    <div @click="seletor">{{ count }}</div>
  </section>
</template>

<script>
// import { mapState } from 'vuex';

export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    seletor() {
      this.$store.commit('increment');
      this.count = this.$store.state.count;
    },
    // computed: mapState({
    //   count: (state) => state.count,
    // }),
  },
};
</script>

<style lang="scss">
  /*@import '';*/
</style>
