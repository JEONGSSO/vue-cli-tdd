<template>
  <div>
    <div class="modal_body">
      <form action="">
        <div>
          <label>이메일 :</label>
          <input type="text" name="email"
            v-model="email"
            autofocus
          />
        </div>
        <div>
          <label>패스워드 :</label>
          <input type="password" name="password"
             v-model="password"
          />
        </div>
        <button
          class="btn_submit"
          :class="{valid_btn: !validData}"
          :disabled="validData"
          @click.prevent="login"
        >로그인</button>
      </form>
      <p class="error" v-if="error">{{error}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: 'test@test.com',
      password: '123123',
      error: '',
    };
  },
  methods: {
    async login() {
      const { email, password } = this;
      const res = await this.$axios('POST', 'login', { email, password });
      if (res) {
        const { accessToken } = res.data;
        this.$store.dispatch('setToken', accessToken);
        this.$store.dispatch('closeModal');
      } else {
        this.error = '이메일 또는 패스워드를 확인해주세요';
      }
    },
  },
  computed: {
    validData() {
      return !this.email || !this.password;
    },
  },
};
</script>

<style lang="sass">
  @import '../../assets/style/modal/login.scss'
</style>
