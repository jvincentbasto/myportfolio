<template>
  <navbar :data="data" />
  <p>projects</p>
</template>

<script>
import Navbar from "@/components/layouts/Navbar.vue";

export default {
  components: {
    Navbar,
  },
  setup() {
    const logo = [
      {
        title: "vince.",
        router: "/",
      },
    ];
    const data = {
      logo,
    };

    return {
      logo,
      data,
    };
  },
};
</script>

<style scoped lang="scss">
@use "~@/sass/styles" as styles;
</style>
