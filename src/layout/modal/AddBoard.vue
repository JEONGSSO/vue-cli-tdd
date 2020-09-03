<template>
  <div>
    <div class="modal_body">
      <form action="">
        <div>
          <label>보드명 :</label>
          <input type="text" name="boardName"
                 v-model="boardName"
                 autofocus
          />
        </div>
        <button
          class="btn_submit"
          :class="{valid_btn: !validData}"
          :disabled="validData"
          @click.prevent="login"
        >생성</button>
      </form>
      <p class="error" v-if="error">{{error}}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AddBoard',
  data() {
    return {
      boardName: '',
      error: '',
    };
  },
  computed: {
    validData() {
      return !this.boardName;
    },
  },
};
</script>
