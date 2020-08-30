<template>
  <div class="login_modal_wrap" v-show="visibleLogin">
    <form action="">
      <label>
        이메일 :
        <input type="text" name="email"
          v-model="email"
          autofocus
        />
      </label>
      <label>
        패스워드 :
        <input type="password" name="password"
           v-model="password"
        />
      </label>
      <button
        :class="{valid_btn: !validData}"
        :disabled="validData"
        @click.prevent="submitLogin"
      >로그인</button>
    </form>
    <p class="error" v-if="error">{{error}}</p>
  </div>
</template>

<script>
import { setToken } from '../../utils/index';

export default {
  data() {
    return {
      email: '',
      password: '',
      error: '',
    };
  },
  methods: {
    async submitLogin() {
      const { email, password } = this;
      const res = await this.$axios('POST', 'login', { email, password });
      if (res) {
        const { accessToken } = res.data;
        localStorage.setItem('token', accessToken);
        setToken(accessToken);
        this.$store.dispatch('isAuth');
      } else {
        this.error = '이메일 또는 패스워드를 확인해주세요';
      }
    },
  },
  created() {
  },
  computed: {
    validData() {
      return !this.email || !this.password;
    },
    visibleLogin() {
      return this.$store.getters.visibleModal;
    },
  },
};
</script>

<style lang="sass">
  @import '../../assets/style/modal/login.scss'
</style>
