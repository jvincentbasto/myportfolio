<template>
  <div class="pg pg-row">
    <!-- content -->
    <div class="pg-col pg-col--1">
      <div class="content">
        <p class="pg--title">
          {{ data.title ? data.title : "Progress Title" }}
        </p>
      </div>
    </div>

    <!-- pgbar -->
    <div class="pg-col pg-col--2">
      <div class="pgbar pgbar--container">
        <!-- <div class="pgbar--bg" :style="$attrs.pgBarFill"></div> -->
        <div class="pgbar--bg" :style="width()"></div>
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
  setup() {
    return {};
  },
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
@use "~@/sass/styles" as styles;

// progress bar
.pgbar {
  & > * {
    border: 2px solid var(--c-black);
  }
  &--border {
    border-color: var(--c-black);
  }
  &--bg {
    background: styles.fns-lighten(var(--c-lprimary), 15);
  }
  &--center-line {
    border-right: 2px dashed rgba(0, 0, 0, 0.5);
  }
}
</style>

<style scoped lang="scss">
@use "~@/sass/styles" as styles;

// progress row
.pg-row {
  height: 3rem;
  width: 100%;

  display: flex;
  margin-bottom: 2rem;

  @include styles.mxs-respond(lphone) {
    flex-wrap: wrap;
    height: 2rem;
  }
  @include styles.mxs-respond(pphone) {
    margin-bottom: 4rem;
  }
}

// progress col
.pg-col {
  height: 100%;
  flex: 1 0 50%;

  display: flex;
  align-items: center;

  @include styles.mxs-respond(ptablet) {
    flex: 1 1;
  }
  @include styles.mxs-respond(pphone) {
    flex: 1 1 100%;
  }

  &--1 {
    @include styles.mxs-respond(ptablet) {
      min-width: 20rem;
    }
    @include styles.mxs-respond(lphone) {
      min-width: 15rem;
    }
    @include styles.mxs-respond(lphone) {
      margin-bottom: 5px;
    }
  }
}

// progree title
.pg {
  &--title {
    font-weight: bold;

    @include styles.mxs-respond(lphone) {
      font-size: 14px;
    }
  }
}

// progress bar
.pgbar {
  &--container {
    height: 100%;
    min-width: 40rem;
    width: 100%;
    // border-radius: 5px;

    max-width: 80%;
    @include styles.mxs-respond(lphone) {
      min-width: 25rem;
    }
    @include styles.mxs-respond(pphone) {
      min-width: 20rem;
    }

    position: relative;
    overflow: hidden;
  }

  & > * {
    display: block;
    height: inherit;
    width: inherit;

    // border-radius: inherit;
    border: 2px solid black;

    position: absolute;
    top: 0;
    left: 0;
  }

  &--bg {
    width: 100%;
  }

  &--border {
    width: 100%;
  }

  &--bg {
    border-radius: 0;
    border: none;
  }

  &--center-line {
    border-radius: 0;
    border: none;

    width: 50%;
  }
}
</style>
