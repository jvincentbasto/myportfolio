<template>
  <section class="section section-about" id="projects" ref="sectProjects">
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
import cardProject from "@/components/cards/cardProject.vue";

export default {
  components: {
    cardProject,
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
    const project = {
      content,
      showcase,
    };

    return {
      content,
      showcase,
      project,
    };
  },
};
</script>

<style scoped lang="scss">
@use "~@/sass/abstracts/abstracts" as abs;

.section {
  &-about {
    background: lighten(abs.$vars-c-lprimary, 6%);
  }
}

.segment {
  &-titlegroup {
    margin-bottom: 8rem;
  }
}
</style>
