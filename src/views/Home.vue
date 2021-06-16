<template>
  <navbar :data="data" />
  <Hero />
  <About />
  <Skills />
  <Projects />
</template>

<script>
import Navbar from "@/components/layouts/navbar.vue";
import Hero from "./homepage/Hero.vue";
import About from "./homepage/About.vue";
import Skills from "./homepage/Skills.vue";
import Projects from "./homepage/Projects.vue";

export default {
  components: {
    Navbar,
    Hero,
    About,
    Skills,
    Projects,
  },
  setup() {
    const links = [
      {
        title: "About",
        hash: "#about",
      },
      {
        title: "Sklls",
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
