<template>
  <media-queries />
  <router-view />
  <my-footer />
</template>

<script>
import myFooter from "@/components/layouts/Footer.vue";
import MediaQueries from "@/components/helpers/MediaQueries.vue";

export default {
  components: {
    myFooter,
    MediaQueries,
  },
};
</script>

<style scoped lang="scss">
@use "~@/sass/styles" as styles;
</style>
