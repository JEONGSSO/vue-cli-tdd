export default {
  methods: {
    openModalName(name) {
      this.$store.dispatch('openModalName', name);
    },
    closeModal() {
      this.$store.dispatch('closeModal');
    },
  },
};
