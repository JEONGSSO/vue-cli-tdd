<template>
  <header class="header">
    <h1 class="logo_title">
      <router-link to="/" class="prl_10">로고</router-link>
    </h1>
    <h2 class="title">{{ changeTitle }}</h2>
    <div class="nav_right">
      <button @click="openModalName('login')" v-if="!isAuth">로그인</button>
      <button @click="logout" v-else>로그아웃</button>
      <nav class="nav_header">
        <button class="btn_menu" @click="toggleMenu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </div>
    <div class="menu_wrap"
         :class="{ selected: isShowMenu, hover }"
    >
      <div class="menu_btn"
           :class="{ selected: isShowMenu }"
           @mouseover="isMouseOver(true)"
           @mouseleave="isMouseOver(false)"
      >
        <button class="test_btn" @click="toggleMenu"></button>
      </div>
      <ul class="list_menu" v-show="isShowMenu">
        <li class="list_item" v-for="(list, index) in menuList" v-bind:key="index">
          <router-link :to="list.path">{{ list.name }}</router-link>
        </li>
      </ul>
    </div>
    <div class="background_wrap" v-show="isShowMenu" @click="toggleMenu"></div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex';

import menuList from '../router/routes';
import { modal } from '../mixins';

export default {
  name: 'common-header',
  mixins: [modal],
  data() {
    return {
      title: 'Color Picker',
      isShowMenu: false,
      menuList: menuList.filter((v) => !v.children),
      hover: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isShowMenu = this.isShowMenu === false;
      this.hover = false;
    },
    closeMenu() {
      this.isShowMenu = false;
    },
    logout() {
      this.$store.dispatch('setToken', null);
    },
    isMouseOver(flag) {
      this.hover = flag;
    },
  },
  computed: {
    changeTitle() {
      const { options } = this.$router;
      const currentPath = this.$route.path;
      const pathName = options.routes
        && options.routes.filter((v) => v.path === currentPath);
      return pathName[0] ? pathName[0].name : 'Home';
    },
    ...mapGetters([
      'isAuth',
    ]),
  },
  watch: {
    $route() {
      this.closeMenu();
    },
  },
};
</script>

<style lang="sass">
  @import '../assets/style/layout/header.scss'
</style>
