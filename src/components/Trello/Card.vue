<template>
  <div>
    card
    {{cid}}
  </div>
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
