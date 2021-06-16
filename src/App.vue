<template>
  <!-- <media-queries /> -->
  <router-view />
  <my-footer />
</template>

<script>
import MyFooter from "@/components/layouts/footer.vue";
// import MediaQueries from "@/components/helpers/mediaQueries.vue";

export default {
  components: {
    MyFooter,
    // MediaQueries,
  },
};
</script>

<style scoped lang="scss">
@use "~@/sass/styles" as styles;
</style>
