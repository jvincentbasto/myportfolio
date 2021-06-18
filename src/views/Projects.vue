<template>
  <navbar :data="data" />
  <p>projects</p>
</template>

<script>
import Navbar from "@/components/layouts/navbar.vue";

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
    const links = [
      {
        title: "About",
        router: "/#about",
      },
      {
        title: "Skills",
        router: "/#skills",
      },
      {
        title: "Projects",
        router: "/#projects",
      },
      {
        title: "Contacts",
        hash: "#contacts",
      },
    ];
    const data = {
      logo,
      // links,
    };

    return {
      logo,
      links,
      data,
    };
  },
};
</script>

<style scoped lang="scss">
@use "~@/sass/styles" as styles;
</style>
