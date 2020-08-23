<template>
  <label>
    <input type="text" v-model="inputValue" @keyup.enter="addItem">
    <button @click="addItem">Add</button>
  </label>
</template>

<script >
export default {
  data() {
    return {
      inputValue: '',
    };
  },
  methods: {
    addItem() {
      if (!this.inputValue) return;
      const addItem = this.inputValue;
      this.$store.dispatch('addItem', { addItem });
      this.inputValue = '';
    },
  },
};
</script>

<style scoped>
  label {
    display: flex;
    width: 100%;
    justify-content:space-between;
  }
  label input {
    width: 80%;
    height: 50px;
    padding: 0 10px;
    border: solid 1px #333333;
    box-sizing: border-box;
  }
  label button {
    width: 20%;
    height: 50px;
    border: solid 1px #424874;
  }
</style>
