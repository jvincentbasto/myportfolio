<template>
  <div class="tags">
    <template v-for="(item, index) in data" :key="index">
      <span class="tag">
        <p class="tag--text">{{ item }}</p>
      </span>
    </template>
  </div>
</template>

<script>
export default {
  props: ["data"],
  setup() {
    return {};
  },
  methods: {},
};
</script>

<style scoped lang="scss">
@use "~@/sass/styles" as styles;

.tag {
  background: var(--c-white);
}

@include styles.mxs-themes(dark) {
  .tag {
    background: var(--c-lprimary);
    &--text {
      color: var(--c-black);
      font-weight: 400;
    }
  }
}
</style>

<style scoped lang="scss">
@use "~@/sass/styles" as styles;

.tags {
  height: auto;
  width: 100%;

  display: flex;
  flex-wrap: wrap;
}

.tag {
  display: inline-block;
  margin-right: 1rem;

  &--text {
    padding: 5px 1.5rem;
    @include styles.mxs-font-size(captions);
    font-weight: 600;
  }
}
</style>
