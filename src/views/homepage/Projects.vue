<template>
  <section class="section section-projects" id="projects" ref="sectProjects">
    <div class="section-margin block block--1">
      <div class="segment segment-titlegroup">
        <h4 class="segment--title">my project</h4>
        <div class="segment--line">&nbsp;</div>
      </div>

      <card-project :data="project"></card-project>
    </div>
  </section>
</template>

<script>
import CardProject from "@/components/cards/cardProject.vue";

export default {
  components: {
    CardProject,
  },
  setup() {
    const content = {
      title: "Covid Status Site",
      text: `This is a simple Covid Site built in Vue js. 
            It has information about global and continental cases 
            and a search feature for country cases.`,
    };
    const showcase = {
      image1: {
        image: "projectimgs/site-covid-lg.png",
        ypos: 0,
      },
      image2: {
        image: "projectimgs/site-covid-md.png",
        ypos: "-75rem",
      },
    };
    const tags = ["Vue Js", "Sass", "Gsap"];
    const btn = {
      type: "router",
      title: "View",
      router: "/projects",
    };
    const project = {
      content,
      showcase,
      tags,
      btn,
    };

    return {
      content,
      showcase,
      tags,
      btn,
      project,
    };
  },
};
</script>

<style lang="scss">
@use "~@/sass/styles" as styles;

.section {
  &-projects {
    background: styles.fns-lighten(var(--c-lprimary), 6);
  }
}

.segment {
  &-titlegroup {
    margin-bottom: 8rem;
  }
}
</style>

<style scoped lang="scss">
@use "~@/sass/styles" as styles;

.segment {
  &-titlegroup {
    margin-bottom: 8rem;
  }
}
</style>
