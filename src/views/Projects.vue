<template>
  <navbar :data="data" />
  <project-view />
  <my-footer />
</template>

<script>
import Navbar from "@/components/layouts/navbar.vue";
import ProjectView from "@/views/projectpage/ProjectView.vue";
import MyFooter from "@/components/layouts/footer.vue";

export default {
  components: {
    Navbar,
    ProjectView,
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
        title: "About",
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
    const data = {
      logo,
      links,
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
