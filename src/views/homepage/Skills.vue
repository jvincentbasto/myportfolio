<template>
  <section class="section section-skills" id="skills" ref="sectSkills">
    <div class="section-margin block block--1">
      <div class="segment segment-titlegroup">
        <h4 class="segment--title">my skills</h4>
        <div class="segment--line">&nbsp;</div>
      </div>

      <div class="pg-block">
        <pg-bar :data="basics"></pg-bar>
        <pg-bar :data="sass"></pg-bar>
        <pg-bar :data="vue"></pg-bar>
        <pg-bar :data="others"></pg-bar>
      </div>
    </div>
  </section>
</template>

<script>
import PgBar from "@/components/charts/progressBar.vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  components: {
    PgBar,
  },
  setup() {
    const basics = {
      title: "Html, Css, and Javascript",
      value: 75,
    };
    const sass = {
      title: "Sass",
      value: 55,
    };
    const vue = {
      title: "Vue js",
      value: 65,
    };
    const others = {
      title: "Laravel, React js and Tailwind Css",
      value: 40,
    };

    return {
      basics,
      sass,
      vue,
      others,
    };
  },
  methods: {
    // animations
    skills() {
      const scroll = (el) =>
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
          },
        });

      function animateObj(duration = 0.5) {
        return {
          ease: "ease",
          opacity: 0,
          duration,
        };
      }

      const skills = scroll(".section-skills .segment--title");
      skills.from(".section-skills .segment--title", {
        x: -20,
        ...animateObj(),
      });
      skills.from(".section-skills .segment--line", {
        x: -10,
        ...animateObj(),
      });
      skills.from(".section-skills .pg-row", {
        x: -10,
        ...animateObj(0.5),
        stagger: 0.2,
      });
      skills.from(
        ".section-skills .pgbar--bg",
        { width: 0, ...animateObj(), stagger: 0.3 },
        "<+.3"
      );
    },
  },
  mounted() {
    this.skills();
  },
};
</script>

<style scoped lang="scss">
@use "~@/sass/styles" as styles;

.section {
  &-skills {
    background: styles.fns-lighten(var(--c-lprimary), 6);
  }
}

@include styles.mxs-themes(dark) {
  .section-skills {
    background: styles.fns-darken(var(--c-lprimary), 3);
  }
}
</style>

<style scoped lang="scss">
@use "~@/sass/styles" as styles;
</style>
