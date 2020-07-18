<template>
  <header class="header">
    <h1 class="logo_title">
      <a href="/">로고</a>
    </h1>
    <h2 class="title">{{ title }}</h2>
    <nav class="nav_hader">
      <button class @click="toggleMenu">햄버거</button>
      <ul class="list_menu" v-show="isShowMenu">
        <li class="list_item" v-for="(list, index) in menuList" v-bind:key="index">
          <router-link :to="list.path">{{ list.name }}</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import menuList from '../router/routes';

export default {
  name: 'common-header',
  data() {
    return {
      title: 'Color Picker',
      isShowMenu: false,
      menuList,
    };
  },
  methods: {
    toggleMenu() {
      this.isShowMenu = this.isShowMenu === false;
      // console.log(fp);
    },
  },
  computed: {},
};
</script>

<style lang="sass">
  @import '../assets/style/layout/header.scss'
</style>
