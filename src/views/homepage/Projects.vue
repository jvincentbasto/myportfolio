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
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  components: {
    CardProject,
  },
  setup() {
    // project card
    const content = {
      title: "Covid Status Site",
      text: `This is a simple Covid Site built in Vue js. 
            It has information about global and continental cases 
            and a search feature for country cases.`,
    };
    const tags = ["Vue Js", "Sass", "Gsap"];
    const imagesPaths = {
      sm: "projectimgs/site-covid-sm.png",
      md: "projectimgs/site-covid-md.png",
      lg: "projectimgs/site-covid-lg.png",
    };
    const showcase = {
      sm: {
        image: imagesPaths.sm,
        ypos: 0,
      },
      md: {
        image: imagesPaths.md,
        ypos: "-75rem",
      },
      lg: {
        image: imagesPaths.lg,
        ypos: 0,
      },
    };

    // project view
    const visit = {
      type: "hash",
      hash: "https://status-covid.netlify.app",
      target: "__blank",
    };
    const props = {
      content,
      screenshots: imagesPaths,
      visit,
    };
    const btn = {
      type: "routerPush",
      title: "View",
      routerPush: {
        name: "project-view",
      },
    };

    // project corona
    const project = {
      content,
      tags,
      showcase,
      btn,
      props,
    };

    return {
      // project card
      content,
      imagesPaths,
      tags,
      showcase,

      // project view
      visit,
      props,
      btn,

      // project corona
      project,
    };
  },
  methods: {
    projects() {
      const scroll = (el, scrollObj = {}) =>
        gsap.timeline({
          scrollTrigger: {
            // markers: {
            //   startColor: "green",
            //   endColor: "red",
            //   fontSize: "16px"
            // },

            // trigger | (trigger, viewport)
            trigger: el,
            start: "top 85%",
            end: "bottom bottom",
            // scrub: 1,
            ...scrollObj,
          },
          // repeat: -1
        });

      function animateObj(duration = 0.5) {
        return {
          ease: "ease",
          opacity: 0,
          duration,
        };
      }

      const content = scroll(".section-projects .segment--title");
      content.from(".section-projects .segment--title", {
        x: -20,
        ...animateObj(),
      });
      content.from(".section-projects .segment--line", {
        x: -10,
        ...animateObj(),
      });

      const project = scroll(".section-projects .project-col--1", {
        endTrigger: ".section-projects .btn",
      });
      project.from(".section-projects .content--title", {
        x: -10,
        ...animateObj(),
      });
      project.from(".section-projects .tags", {
        y: -10,
        ...animateObj(),
        stagger: 0.3,
      });
      project.from(".section-projects .content--text", {
        x: -10,
        ...animateObj(),
      });
      project.from(".section-projects .btn", { y: -10, ...animateObj() });

      const showcase = scroll(".section-projects .project-col--2");
      showcase.from(".section-projects .showcase", { y: 10, ...animateObj() });
    },
  },
  mounted() {
    this.projects();
  },
};
</script>

<style scoped lang="scss">
@use "~@/sass/styles" as styles;

.section {
  &-projects {
    background: styles.fns-lighten(var(--c-lprimary), 4);
  }
}

@include styles.mxs-themes(dark) {
  .section {
    &-projects {
      background: styles.fns-lighten(var(--c-lprimary), 2);
    }
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
