<template>
  <header class="header">
    <h1 class="logo_title">
      <a href="/">로고</a>
    </h1>
    <h2 class="title">{{title}}</h2>
    <nav class="nav_hader">
      <button class @click="toggleMenu">햄버거</button>
      <ul class="list_menu" v-show="isShowMenu">
        <li class="list_item" v-for="(list, index) in menuList" v-bind:key="index">
          <a :href="list.href">{{list.title}}</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'common-header',
  data() {
    return {
      title: 'Color Picker',
      isShowMenu: false,
      menuList: [
        {
          title: 'Color Picker',
          href: '/picker',
        },
        {
          title: 'todoList',
          href: '/todo',
        },
        {
          title: 'timer',
          href: '/timer',
        },
      ],
    };
  },
  methods: {
    toggleMenu() {
      this.isShowMenu = this.isShowMenu === false;
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

.header .nav_hader .list_menu {
  position: fixed;
  width: 100px;
}

.header .nav_hader .list_item a {
  display: block;
  border: solid 1px gray;
}
</style>
