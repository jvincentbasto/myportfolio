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
@use "~@/sass/abstracts/abstracts" as abs;

.tags {
  height: auto;
  width: 100%;

  display: flex;
  flex-wrap: wrap;
}

.tag {
  display: inline-block;
  background: lighten(abs.$vars-c-lprimary, 12%);
  border-radius: 5px;
  margin-right: 1rem;

  &--text {
    padding: 1rem 2rem;
    @include abs.mxs-font-type(captions);
  }
}
</style>
