<template>
  <v-form>
    <v-layout w>
      <v-flex xs4 class="mx-1">
        <v-text-field label="H" v-model="h" type="number" min="0" max="359" suffix="º"></v-text-field>
      </v-flex>
      <v-flex xs4 class="mx-1">
        <v-text-field label="S" v-model="s" type="number" min="0" max="100" suffix="%"></v-text-field>
      </v-flex>
      <v-flex xs4 class="mx-1">
        <v-text-field label="L" v-model="l" type="number" min="0" max="100" suffix="%"></v-text-field>
      </v-flex>
    </v-layout>
  </v-form>
</template>

<script>
  import Color from 'color';
  import ColorInput from './ColorInput';

  export default {
    mixins: [ColorInput],
    computed: {
      h: {
        get() {
          return Math.round(this.color.hsl().color[0]);
        },
        set(val) {
          this.color = Color({
            h: val,
            s: this.s,
            l: this.l,
          });
        },
      },
      s: {
        get() {
          return Math.round(this.color.hsl().color[1]);
        },
        set(val) {
          this.color = Color({
            h: this.h,
            s: val,
            l: this.l,
          });
        },
      },
      l: {
        get() {
          return Math.round(this.color.hsl().color[2]);
        },
        set(val) {
          this.color = Color({
            h: this.h,
            s: this.s,
            l: val,
          });
        },
      },
    },
  };
</script>

<style scoped>
</style>
