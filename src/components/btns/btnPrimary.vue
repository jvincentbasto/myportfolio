<template>
  <template v-if="data">
    <template v-if="data.download">
      <a :href="data.download" class="btn" ref="btn" download="download">
        <div class="btn--text">
          <slot>Button Primary</slot>
        </div>
        <div class="btn--border">&nbsp;</div>
      </a>
    </template>
    <!--     <template v-else>
      <a :href="data.hash" class="btn" ref="btn">
        <div class="btn--text">
          <slot>Button Primary</slot>
        </div>
        <div class="btn--border">&nbsp;</div>
      </a>
    </template> -->
  </template>

  <template v-else>
    <div class="btn" ref="btn">
      <div class="btn--text">
        <slot>Button Primary</slot>
      </div>
      <div class="btn--border">&nbsp;</div>
    </div>
  </template>
</template>

<script>
export default {
  props: ["data"],
  methods: {},
  mounted() {},
};
</script>

<style scoped lang="scss">
@use "~@/sass/abstracts/abstracts" as abs;

// btn
.btn {
  -webkit-tap-highlight-color: transparent;
  display: inline-block;
  position: relative;
  cursor: pointer;

  margin-bottom: 1rem;

  &--text {
    display: flex;

    font-family: tsemibold;
    @include abs.mxs-font-type(btn);
    color: abs.$vars-c-lprimary;

    padding: 1.5rem 3rem;
    background: abs.$vars-c-dprimary;

    position: relative;
    z-index: 10;

    transition: all 0.3s ease-in-out;
  }

  &--border {
    height: 100%;
    width: 100%;
    border: 2px solid abs.$vars-c-dprimary;

    position: absolute;
    top: 1rem;
    left: 1rem;
  }

  &:hover &--text {
    transform: translate(1rem, 1rem);
  }
}
</style>
