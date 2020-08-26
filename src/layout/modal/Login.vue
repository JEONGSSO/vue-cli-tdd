<template>
  <div class="login_modal_wrap">
    <form action="">
      <label>
        이메일 :
        <input type="text" name="email" />
      </label>
      <label>
        패스워드 :
        <input type="password" name="pw" />
      </label>
      <button @click.prevent="submitLogin">로그인</button>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    async submitLogin() {
      const tt = await this.$axios('POST', 'login');
      console.log(tt);
    },
  },
};
</script>

<style lang="sass">
  @import '../../assets/style/modal/login.scss'
</style>
