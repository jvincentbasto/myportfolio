<template>
  <ul class="info info-block">
    <!-- Loop -->
    <template v-if="loopOver()">
      <template v-for="(obj, index) in data" :key="index">
        <card-info-item :data="obj"></card-info-item>
      </template>
    </template>

    <!-- manual -->
    <template v-else>
      <slot>
        <card-info-item>
          <template #title>Title:</template>
          <template #value>Value</template>
        </card-info-item>
      </slot>
    </template>
  </ul>
</template>

<script>
import CardInfoItem from "@/components/cards/CardInfoItem.vue";

export default {
  props: ["data"],
  components: {
    CardInfoItem,
  },
  methods: {
    loopOver() {
      if (this.data) return true;
      else return false;
    },
  },
};
</script>

<style scoped lang="scss">
@use "~@/sass/styles" as styles;

.info {
  &-block {
    width: 100%;
  }
}
</style>
