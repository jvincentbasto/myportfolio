<template>
  <div class="pg pg-row">
    <div class="pg-col pg-col--1">
      <p class="pg--title">{{ data.title }}</p>
    </div>
    <div class="pg-col pg-col--2">
      <div class="pgbar pgbar--container">
        <!-- <div class="pgbar--bg" :style="$attrs.pgBarFill"></div> -->
        <div class="pgbar--bg" :style="width(data.value)"></div>
        <div class="pgbar--border"></div>
        <div class="pgbar--center-line"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // inheritAttrs: false
  props: ["data"],
  methods: {
    width(val = 55) {
      let width = val;
      if (this.data.value) width = this.data.value;

      return `max-width: ${width}%`;
    },
  },
};
</script>

<style scoped lang="scss">
@use "~@/sass/abstracts/abstracts" as abs;

// progress
.pg {
  &-row {
    height: 3rem;
    width: 100%;
    display: flex;
  }
  &-col {
    height: 100%;
    flex: 1 0 50%;

    display: flex;
    align-items: center;
  }
  &--title {
    font-weight: bold;
  }
}

// progress bar
.pgbar {
  &--container {
    height: 100%;
    min-width: 40rem;
    width: 100%;
    border-radius: 5px;

    position: relative;
    overflow: hidden;
  }

  & > * {
    display: block;
    height: inherit;
    width: inherit;

    border-radius: inherit;
    border: 2px solid black;

    position: absolute;
    top: 0;
    left: 0;
  }
  &--bg {
    width: 100%;
  }

  &--border {
    border-color: abs.$vars-c-black;
    width: 100%;
  }

  &--bg {
    border-radius: 0;
    border: none;

    background: lighten(abs.$vars-c-lprimary, 12%);
    // background-image: linear-gradient(
    //   to right,
    //   abs.$vars-c-lprimary,
    //   rgba(abs.$vars-c-lprimary, 0.8) 90%,
    //   rgba(abs.$vars-c-lprimary, 0)
    // );
  }

  &--center-line {
    border-radius: 0;
    border: none;

    width: 50%;
    border-right: 2px dashed rgba(0, 0, 0, 0.8);

    // background: orange;
  }
}
</style>
