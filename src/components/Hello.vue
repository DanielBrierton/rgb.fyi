<template>
  <div>
    <v-layout wrap>
      <v-flex sm5 xs12>
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
      </v-flex>
      <v-flex>
        <font-awesome-icon :icon="exchangeIcon"></font-awesome-icon>
      </v-flex>
      <v-flex sm5 xs12>
        <v-form>
          <v-text-field label="Hex" v-model="hex" maxlength="7"></v-text-field>
        </v-form>
      </v-flex>
    </v-layout>
    <v-layout style="height: 100px;position: relative;">
      <v-flex class="color-shade" :style="{ '--bgColor': hex }"></v-flex>
      <v-flex class="color-shade hidden-xs-only" :style="{ '--bgColor': `#${toHex(color.mix(white, 0.1))}` }"></v-flex>
      <v-flex class="color-shade" :style="{ '--bgColor': `#${toHex(color.mix(white, 0.2))}` }"></v-flex>
      <v-flex class="color-shade hidden-xs-only" :style="{ '--bgColor': `#${toHex(color.mix(white, 0.3))}` }"></v-flex>
      <v-flex class="color-shade" :style="{ '--bgColor': `#${toHex(color.mix(white, 0.4))}` }"></v-flex>
      <v-flex class="color-shade hidden-xs-only" :style="{ '--bgColor': `#${toHex(color.mix(white, 0.5))}`}"></v-flex>
      <v-flex class="color-shade" :style="{ '--bgColor': `#${toHex(color.mix(white, 0.6))}` }"></v-flex>
      <v-flex class="color-shade hidden-xs-only" :style="{ '--bgColor': `#${toHex(color.mix(white, 0.7))}` }"></v-flex>
      <v-flex class="color-shade" :style="{ '--bgColor': `#${toHex(color.mix(white, 0.8))}` }"></v-flex>
      <v-flex class="color-shade hidden-xs-only" :style="{ '--bgColor': `#${toHex(color.mix(white, 0.9))}` }"></v-flex>
    </v-layout>
  </div>
</template>

<script>
  import Color from 'color';
  import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
  import faExchangeAlt from '@fortawesome/fontawesome-free-solid/faExchangeAlt';

  export default {
    name: 'hello',
    components: {
      FontAwesomeIcon,
    },
    data() {
      return {
        color: Color({ r: 0, g: 0, b: 0 }),
        white: Color({ r: 255, g: 255, b: 255 }),
      };
    },
    computed: {
      exchangeIcon() {
        return faExchangeAlt;
      },
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
    created() {
      if (this.$route.hash) {
        this.hex = this.$route.hash;
      }
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .color-shade {
    background: var(--bgColor);
  }

  .color-shade:after {
    display: none;
    content: '';
    background: var(--bgColor);
    position: absolute;
    top: 100px;
    left: 0;
    right: 0;
    height: 400px;
  }

  .color-shade:hover:after {
    display: block;
  }
</style>
