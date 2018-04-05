export default {
  props: ['value'],
  data() {
    return {
      color: null,
    };
  },
  watch: {
    value(val) {
      this.color = val;
    },
    color() {
      this.$emit('input', this.color);
    },
  },
  created() {
    this.color = this.value;
  },
};
