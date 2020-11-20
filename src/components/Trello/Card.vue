<template>
  <transition name="modal">
    <div class="card_modal">
      card
      {{cid}}
    </div>
  </transition>
</template>

<script>
export default {
  props: ['cid'],
  data() {
    return {
      g: '1',
    };
  },
};
</script>
