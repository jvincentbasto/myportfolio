<template>
  <!-- <media-queries /> -->
  <theme-init />
  <router-view />
  <my-footer />
</template>

<script>
import MyFooter from "@/components/layouts/footer.vue";
// import MediaQueries from "@/components/helpers/mediaQueries.vue";
import themeInit from "@/components/theme/themeInit.vue";

export default {
  components: {
    MyFooter,
    // MediaQueries,
    themeInit,
  },
};
</script>

<style scoped lang="scss">
@use "~@/sass/styles" as styles;
</style>
