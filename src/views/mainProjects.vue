<template>
  <navbar :data="navs" />
  <!-- <project-view /> -->
  <router-view />
  <my-footer />
</template>

<script>
import Navbar from "@/components/layouts/siteNavbar.vue";
// import ProjectView from "@/views/projectpage/projectView.vue";
import MyFooter from "@/components/layouts/siteFooter.vue";

export default {
  props: ["data"],
  components: {
    Navbar,
    // ProjectView,
    MyFooter,
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
        title: "Details",
        hash: "#",
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
    const navs = {
      logo,
      links,
    };

    return {
      logo,
      links,
      navs,
    };
  },
};
</script>

<style scoped lang="scss">
@use "~@/sass/styles" as styles;
</style>
