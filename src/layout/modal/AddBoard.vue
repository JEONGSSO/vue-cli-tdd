<template>
  <div>
    <div class="modal_body">
      <form action="">
        <div>
          <label>보드 이름</label>
          <input type="text" name="boardName"
                 v-model="boardName"
                 autofocus
          />
        </div>
        <button
          class="btn_submit"
          :class="{valid_btn: !validData}"
          :disabled="validData"
          @click.prevent="addBoard"
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
  methods: {
    async addBoard() {
      try {
        await this.$axios('post', 'boards', { title: this.boardName });
        this.$store.dispatch('closeModal');
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
      }
      this.$store.dispatch('fetchBoardList');
    },
  },
  computed: {
    validData() {
      return !this.boardName;
    },
  },
};
</script>
