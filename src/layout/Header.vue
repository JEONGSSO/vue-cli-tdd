<template>
  <header class="header">
    <h1 class="logo_title">
      <router-link to="/" class="prl_10">로고</router-link>
    </h1>
    <h2 class="title">{{ changeTitle }}</h2>
    <nav class="nav_hader">
      <button class="btn_menu prl_10" @click="toggleMenu">햄버거</button>
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
    },
  },
  computed: {
    changeTitle() {
      const CurrentPath = this.$route.path;
      const pathName = this.$router.options.routes.filter((v) => v.path === CurrentPath);
      console.log(pathName);
      return pathName[0] ? pathName[0].name : 'Home';
    },
  },
};
</script>

<style lang="sass">
  @import '../assets/style/layout/header.scss'
</style>
