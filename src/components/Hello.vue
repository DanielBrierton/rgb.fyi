<template>
  <div>
    <v-layout wrap>
      <v-flex sm5 xs12>
        <v-select
          :items="colorOptions"
          v-model="colorType1"
          label="Color Format"
          single-line
        ></v-select>
        <div v-if="colorType1">
          <hex v-if="colorType1.text === 'Hex'" v-model="color"></hex>
          <rgb v-else-if="colorType1.text === 'RGB'" v-model="color"></rgb>
          <hsl v-else-if="colorType1.text === 'HSL'" v-model="color"></hsl>
          <cmyk v-else-if="colorType1.text === 'CMYK'" v-model="color"></cmyk>
        </div>
      </v-flex>
      <v-flex>
        <font-awesome-icon :icon="exchangeIcon"></font-awesome-icon>
      </v-flex>
      <v-flex sm5 xs12>
        <v-select
          :items="colorOptions"
          v-model="colorType2"
          label="Color Format"
          single-line
        ></v-select>
        <div v-if="colorType2">
          <hex v-if="colorType2.text === 'Hex'" v-model="color"></hex>
          <rgb v-else-if="colorType2.text === 'RGB'" v-model="color"></rgb>
          <hsl v-else-if="colorType2.text === 'HSL'" v-model="color"></hsl>
          <cmyk v-else-if="colorType2.text === 'CMYK'" v-model="color"></cmyk>
        </div>
      </v-flex>
    </v-layout>
    <color-preview v-model="color"></color-preview>
  </div>
</template>

<script>
  import Color from 'color';
  import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
  import faExchangeAlt from '@fortawesome/fontawesome-free-solid/faExchangeAlt';
  import rgb from './RGB';
  import hex from './Hex';
  import hsl from './HSL';
  import cmyk from './CMYK';
  import ColorPreview from './ColorPreview';

  const colorOptions = [
    { text: 'Hex' },
    { text: 'RGB' },
    { text: 'HSL' },
    { text: 'CMYK' },
  ];

  export default {
    name: 'hello',
    components: {
      FontAwesomeIcon,
      rgb,
      hex,
      hsl,
      cmyk,
      ColorPreview,
    },
    data() {
      return {
        color: null,
        colorOptions,
        colorType1: colorOptions[1],
        colorType2: colorOptions[0],
      };
    },
    computed: {
      exchangeIcon() {
        return faExchangeAlt;
      },
    },
    created() {
      const [hexCode = '000000', colorType1 = 1, colorType2 = 0] = this.$route.hash.split(';');
      this.color = Color(hexCode);
      this.colorType1 = colorOptions[colorType1];
      this.colorType2 = colorOptions[colorType2];
    },
  };
</script>

<style scoped>
</style>
