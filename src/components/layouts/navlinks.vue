<template>
  <ul class="links">
    <template v-for="(obj, index) in data" :key="index">
      <navlink :data="obj"></navlink>
    </template>
  </ul>
</template>

<script>
import navlink from "@/components/layouts/navlink.vue";

export default {
  props: ["data"],
  components: {
    navlink,
  },
  setup() {
    const links = [];

    return {
      links,
    };
  },
  methods: {},
};
</script>

<style scoped lang="scss">
@use "~@/sass/abstracts/abstracts" as abs;

// Nav Links
.links {
  height: 100%;
  display: flex;
}
</style>
