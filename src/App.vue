<template>
  <div id="app">
    <input type="text">
    <button class="addBtn" @click="pushList">추가</button>
    <ul class="todo_list" v-show="todoList.length"></ul>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  },
  data() {
    return {
      todoList: [],
      todo: false,
    };
  },
  methods: {
    pushList(value) {
      this.todoList.push(value);
    },
    removeList() {
      console.log('good');
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
