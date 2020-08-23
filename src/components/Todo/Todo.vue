<template>
  <div class="todo_wrap">
    <TodoAdd />
    <TodoItem />
  </div>
</template>

<script>
import TodoAdd from './TodoAdd.vue';
import TodoItem from './TodoItem.vue';

export default {
  components: {
    TodoAdd,
    TodoItem,
  },
};
</script>

<style>
.todo_wrap {
  width: 500px;
  margin: 0 auto;
  text-align: center;
  margin-top:100px;
}
</style>
