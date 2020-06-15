<template>
  <div id="app">
    <Header />
    <!-- <Picker /> -->
    <Footer />
    <Slider />
  </div>
</template>

<script>
import Header from './layout/Header.vue';
import Footer from './layout/Footer.vue';

// import Picker from './components/Picker.vue';
import Slider from './components/Slider.vue';

export default {
  name: 'app',
  components: {
    Header,
    Footer,
    Slider,
  },
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>

<style>
@import url('./assets/css/reset.css');
@import url('./assets/css/hansans.css');

#app {
  font-family: 'hanSansRegular';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  font-size: 14px;
}
</style>
