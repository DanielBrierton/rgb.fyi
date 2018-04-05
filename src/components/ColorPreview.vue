<template>
  <div v-if="color">
    <div class="color-main color-shade" :class="{ 'color-shade__dark': color.isDark() }" :style="`--bgColor: #${toHex(color)};`">
      <p>#{{ toHex(color) }}</p>
    </div>
    <v-layout style="height: 100px;position: relative;">
      <v-flex v-for="(shade, i) in shades" :key="shade.text" class="color-shade" :class="{ 'hidden-xs-only': i % 2 === 0, 'color-shade__dark': shade.color.isDark() }" :style="{ '--bgColor': shade.hex }"><p>{{ shade.hex }}</p></v-flex>
    </v-layout>
  </div>
</template>

<script>
  import Color from 'color';

  export default {
    props: ['value'],
    data() {
      return {
        color: null,
        white: Color({ r: 255, g: 255, b: 255 }),
      };
    },
    computed: {
      shades() {
        const shades = [];
        for (let i = 0; i < 0.9; i += 0.1) {
          const color = this.color.mix(this.white, i);
          shades.push({
            color,
            hex: `#${this.toHex(color)}`,
          });
        }
        return shades;
      },
    },
    methods: {
      toHex(color) {
        return color.rgbNumber().toString(16).padStart(6, '0');
      },
    },
    watch: {
      value(val) {
        this.color = val;
      },
    },
    created() {
      this.color = this.value;
    },
  };
</script>

<style scoped>
  .color-main {
    height: 200px;
  }

  .color-shade {
    background: var(--bgColor);
    font-size: 16px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }

  .color-shade__dark {
    color: #fff;
  }

  .color-shade:after {
    display: none;
    content: '';
    background: var(--bgColor);
    position: absolute;
    top: 100px;
    left: 0;
    right: 0;
    height: 200px;
  }

  .color-shade:hover:after {
    display: block;
  }

  .color-main.color-shade:hover:after {
    display: none;
  }
</style>
