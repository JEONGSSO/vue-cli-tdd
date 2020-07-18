<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from './layout/Header.vue';
import Footer from './layout/Footer.vue';

export default {
  name: 'app',
  components: {
    Header,
    Footer,
  },
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>

<style lang="sass">
  @import 'assets/style/hansans.css'
  @import 'assets/style/reset.css'
  @import 'assets/style/common.scss'
</style>
