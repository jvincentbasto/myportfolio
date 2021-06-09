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
import cardInfoItem from "@/components/cards/cardInfoItem.vue";

export default {
  props: ["data"],
  components: {
    cardInfoItem,
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
.info {
  &-block {
    width: 100%;
  }
}
</style>
