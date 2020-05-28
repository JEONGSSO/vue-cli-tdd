<template>
  <div id="app">
    <input class="inputTxt" type="text" v-model="txt" @keypress.enter="addItem">
    <button class="addBtn" @click="addItem">추가</button>
    <ul class="todo_list" v-show="todoList.length">
      <li
          v-for="(item, index) in todoList"
          :key="index">
          <button class="increse" @click="addQuantity(index)">+</button>
          {{item.quantity}}
          <button class="decrese" @click="removeQuantity(index)">-</button>
          {{item.text}}
          <button class="removeBtn" @click="removeItem(index)">X</button>
      </li>
    </ul>
    <div class="totalCount">
      {{totalCount}}
    </div>
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
        { text: 'good', quantity: 3 },
        { text: 'nice', quantity: 5 },
        { text: 'great', quantity: 1 },
      ],
      txt: '',
      countTotal: 0,
    };
  },
  methods: {
    addItem() {
      if (!this.txt) return;
      this.todoList.push({ text: this.txt });
    },
    removeItem(index) {
      this.todoList.splice(index, 1);
    },
    addQuantity(index) {
      this.todoList[index].quantity += 1;
    },
    removeQuantity(index) {
      this.todoList[index].quantity -= 1;
    },
  },
  computed: {
    totalCount() {
      const total = this.todoList.reduce((acc, val) => acc + val.quantity, 0);
      return total;
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
