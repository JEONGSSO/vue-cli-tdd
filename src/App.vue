<template>
  <div id="app">
    <input class="inputTxt" type="text" v-model="txt" @keypress.enter="addItem">
    <button class="addBtn" @click="addItem">추가</button>
    <ul class="todo_list" v-show="todoList.length">
      <li
          v-for="(item, index) in todoList"
          :key="index">
          {{item.text}}
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  },
  data() {
    return {
      todoList: [
        { text: 'good' },
      ],
      txt: '',
    };
  },
  methods: {
    addItem() {
      if (!this.txt) {
        return;
      }
      this.todoList.push(this.txt);
    },
    removeItem() {
      this.todoList.push(this.txt);
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
