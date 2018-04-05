<template>
  <v-form>
    <v-layout w>
      <v-flex xs4 class="mx-1">
        <v-text-field label="R" v-model="r" type="number" min="0" max="255"></v-text-field>
      </v-flex>
      <v-flex xs4 class="mx-1">
        <v-text-field label="G" v-model="g" type="number" min="0" max="255"></v-text-field>
      </v-flex>
      <v-flex xs4 class="mx-1">
        <v-text-field label="B" v-model="b" type="number" min="0" max="255"></v-text-field>
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
      r: {
        get() {
          return this.color.red();
        },
        set(val) {
          this.color = Color({
            r: val,
            g: this.g,
            b: this.b,
          });
        },
      },
      g: {
        get() {
          return this.color.green();
        },
        set(val) {
          this.color = Color({
            r: this.r,
            g: val,
            b: this.b,
          });
        },
      },
      b: {
        get() {
          return this.color.blue();
        },
        set(val) {
          this.color = Color({
            r: this.r,
            g: this.g,
            b: val,
          });
        },
      },
    },
  };
</script>

<style scoped>
</style>
