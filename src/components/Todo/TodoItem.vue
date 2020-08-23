<template>
  <div class="todo_list">
    <ul v-if="todoList.length">
      <li v-for="(item, index) in todoList" :key="index">
        <input type="text"
         v-if="item.isUpdate"
         :value="item.data"
         @keyup.enter="e => modifyItem(e, index)">
        <p @click="updateItem(index)" v-else>{{item.data}}</p>
        <button @click="removeItem(index)">X</button>
      </li>
    </ul>
    <div v-else>
      음슴
    </div>
  </div>
</template>

<script >
export default {
  components: {},
  data() {
    return {
      isUpdate: false,
    };
  },
  methods: {
    removeItem(idx) {
      this.$store.dispatch('removeItem', idx);
    },
    updateItem(index) {
      const { todoList } = this.$store.state;
      todoList[index].isUpdate = true;
    },
    modifyItem(e, idx) {
      const { value } = e.target;
      this.$store.dispatch('modifyItem', { value, idx });
    },
  },
  computed: {
    todoList() {
      return this.$store.state.todoList;
    },
  },
};
</script>

<style scoped>
  .todo_list {
    width: 100%;
    margin-top: 30px;
    padding:10px;
    border: solid 1px #333;
    box-sizing: border-box;
  }
  .todo_list li {
    display: flex;
    padding: 10px 0;
    border-bottom: solid 1px #d1d2d6;
    justify-content: space-between;
    align-items: center;
  }
  .todo_list li:last-child {
    border-bottom: 0;
  }
  .todo_list p {
    font-size: 14px;
  }
  .todo_list button {
    width: 30px;
    height: 30px;
    border: solid 1px #333333;
    border-radius: 5px ;
    background-color: #ff4661;
  }
</style>
