<template>
  <div class="proj proj--container">
    <div class="projimg projimg--1" :style="image(1)">&nbsp;</div>
    <div class="projimg projimg--2" :style="image(2)">&nbsp;</div>
  </div>
</template>

<script>
export default {
  props: ["data"],
  setup() {
    return {};
  },
  methods: {
    image(num) {
      const prop = this.data[`image${num}`].image;
      const path = require(`@/assets/${prop}`);

      const pos = this.pos(num);
      return `background-image: url(${path}); ${pos}`;
    },
    pos(num) {
      let pos = "0px";
      pos = this.data[`image${num}`].ypos;

      return `background-position-y: ${pos}`;
    },
  },
};
</script>

<style scoped lang="scss">
@use "~@/sass/abstracts/abstracts" as abs;

.proj {
  &--container {
    height: 40rem;
    width: 50rem;
    background: lighten(abs.$vars-c-lprimary, 20%);

    // display: flex;
    // justify-contnet: center;
    // align-items: center;

    position: relative;
    overflow: hidden;
  }
  &img {
    height: 100%;
    width: 50%;

    position: absolute;
    top: 0;

    @include abs.mxs-img-cover;

    &--1 {
      z-index: 2;
      top: 4rem;
      left: 4rem;
    }
    &--2 {
      z-index: 1;
      top: -4rem;
      right: 4rem;
    }
  }
}
</style>
