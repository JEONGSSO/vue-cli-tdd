export default {
  data() {
    return {
      visibleModal: false,
    };
  },
  methods: {
    openModal() {
      this.$store.dispatch('openModal');
    },
    closeModal() {
      this.$store.dispatch('closeModal');
    },
  },
  mounted() {
  },
};
