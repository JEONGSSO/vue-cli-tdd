<template>
  <header class="header">
    <h1 class="logo_title">
      <router-link to="/" class="prl_10">로고</router-link>
    </h1>
    <h2 class="title">{{ changeTitle }}</h2>
    <div class="nav_right">
      <button @click="openModal('login')" v-if="!isAuth">로그인</button>
      <button @click="logout" v-else>로그아웃</button>
      <nav class="nav_header">
        <button class="btn_menu prl_10" @click="toggleMenu">햄버거</button>
        <ul class="list_menu" v-show="isShowMenu">
          <li class="list_item" v-for="(list, index) in menuList" v-bind:key="index">
            <router-link :to="list.path">{{ list.name }}</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import menuList from '../router/routes';
import { modal } from '../mixins';

export default {
  name: 'common-header',
  mixins: [modal],
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
    logout() {
      localStorage.removeItem('token');
      window.location.href = '/';
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
    isAuth() {
      return this.$store.getters.isAuth;
    },
  },
};
</script>

<style lang="sass">
  @import '../assets/style/layout/header.scss'
</style>
