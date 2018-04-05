<template>
  <v-form>
    <v-layout w>
      <v-flex xs3 class="mx-1">
        <v-text-field label="C" v-model="c" type="number" min="0" max="100" suffix="%"></v-text-field>
      </v-flex>
      <v-flex xs3 class="mx-1">
        <v-text-field label="M" v-model="m" type="number" min="0" max="100" suffix="%"></v-text-field>
      </v-flex>
      <v-flex xs3 class="mx-1">
        <v-text-field label="Y" v-model="y" type="number" min="0" max="100" suffix="%"></v-text-field>
      </v-flex>
      <v-flex xs3 class="mx-1">
        <v-text-field label="K" v-model="k" type="number" min="0" max="100" suffix="%"></v-text-field>
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
      c: {
        get() {
          return Math.round(this.color.cmyk().color[0]);
        },
        set(val) {
          this.color = Color({
            c: val,
            m: this.m,
            y: this.y,
            k: this.k,
          });
        },
      },
      m: {
        get() {
          return Math.round(this.color.cmyk().color[1]);
        },
        set(val) {
          this.color = Color({
            c: this.c,
            m: val,
            y: this.y,
            k: this.k,
          });
        },
      },
      y: {
        get() {
          return Math.round(this.color.cmyk().color[2]);
        },
        set(val) {
          this.color = Color({
            c: this.c,
            m: this.m,
            y: val,
            k: this.k,
          });
        },
      },
      k: {
        get() {
          return Math.round(this.color.cmyk().color[3]);
        },
        set(val) {
          this.color = Color({
            c: this.c,
            m: this.m,
            y: this.y,
            k: val,
          });
        },
      },
    },
  };
</script>

<style scoped>
</style>
