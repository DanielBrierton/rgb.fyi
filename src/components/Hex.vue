<template>
  <v-form>
    <v-text-field v-model="hex" maxlength="7"></v-text-field>
  </v-form>
</template>

<script>
  import Color from 'color';
  import ColorInput from './ColorInput';

  export default {
    mixins: [ColorInput],
    computed: {
      hex: {
        get() {
          const hex = this.toHex(this.color);
          this.$router.replace({ hash: hex });
          return `#${hex}`;
        },
        set(val) {
          let hex = val;
          if (hex.charAt(0) !== '#') {
            hex = `#${hex}`;
          }
          if (hex.length === 7) {
            this.color = Color(hex);
          }
        },
      },
    },
    methods: {
      toHex(color) {
        return color.rgbNumber().toString(16).padStart(6, '0');
      },
    },
  };
</script>

<style scoped>
</style>
