<template>
  <header class="header">
    <h1 class="logo_title">
      <a href="/">로고</a>
    </h1>
    <h2 class="title">
      {{title}}
    </h2>
    <nav class="nav_hader">
      <button class="" @click="showMenu">햄버거</button>
      <ul class="list_menu">
        <li class="">Color Picker</li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'header',
  data() {
    return {
      title: 'Color Picker',
    };
  },
  methods: {
    showMenu() {
      console.log(123);
    },
  },
  computed: {},
};
</script>

<style>
.header {
  display: flex;
  padding: 0 30px;
  border-bottom: solid 1px #d1d2d6;
  justify-content: space-between;
  line-height: 50px;
}

.header .nav_hader .list_menu{
  display: none;
}

</style>
