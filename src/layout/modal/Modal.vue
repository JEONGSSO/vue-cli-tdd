<template>
  <transition name="modal">
    <div class="modal_mask">
      <div class="modal_wrapper">
        <div class="modal_container">
          <div class="modal_header">
            <h3>{{modalName}}</h3>
            <button class="btn_close" @click="closeModal">X</button>
          </div>
          <component :is="modalName"></component>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex';

import Login from './Login.vue';
import AddBoard from './AddBoard.vue';

import { modal } from '../../mixins';

export default {
  components: {
    Login,
    AddBoard,
  },
  mixins: [modal],
  data() {
    return {

    };
  },
  computed: {
    ...mapGetters([
      'modalName',
    ]),
  },
};
</script>
