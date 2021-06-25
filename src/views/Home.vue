<template>
  <navbar :data="data" />
  <Hero />
  <!-- <About /> -->
  <!-- <Skills /> -->
  <!-- <Projects /> -->
  <!-- <my-footer /> -->
</template>

<script>
import Navbar from "@/components/layouts/navbar.vue";
import Hero from "./homepage/Hero.vue";
// import About from "./homepage/About.vue";
// import Skills from "./homepage/Skills.vue";
// import Projects from "./homepage/Projects.vue";
// import MyFooter from "@/components/layouts/footer.vue";

export default {
  components: {
    Navbar,
    Hero,
    // About,
    // Skills,
    // Projects,
    // MyFooter,
  },
  setup() {
    const links = [
      {
        title: "About",
        hash: "#about",
      },
      {
        title: "Skills",
        hash: "#skills",
      },
      {
        title: "Projects",
        hash: "#projects",
      },
      {
        title: "Contacts",
        hash: "#contacts",
      },
    ];
    const data = {
      links,
    };

    return {
      links,
      data,
    };
  },
};
</script>

<style scoped lang="scss">
@use "~@/sass/styles" as styles;
</style>
