<template>
  <div id="app">
    <Header />
    <main role="main">
      <router-view />
    </main>
    <Footer />
    <Modal v-show="modalName"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import Header from './layout/Header.vue';
import Footer from './layout/Footer.vue';

import Modal from './layout/modal/Modal.vue';

export default {
  name: 'app',
  components: {
    Header,
    Footer,
    Modal,
  },
  data() {
    return {
      test: 'good',
    };
  },
  methods: {},
  computed: {

    ...mapGetters([
      'modalName',
    ]),
  },
};
</script>

<style lang="sass">
  @import 'assets/style/hansans.css'
  @import 'assets/style/reset.css'
  @import 'assets/style/app.scss'
  @import 'assets/style/common.scss'
</style>
