<template>
  <div id="app">
    <Header />
    <main role="main">
      <router-view />
    </main>
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
    return {
      test: 'good',
    };
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
