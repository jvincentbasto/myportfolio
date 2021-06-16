<template>
  <section class="section section-skill" id="skills" ref="sectSkills">
    <div class="section-margin block block--1">
      <div class="segment segment-titlegroup">
        <h4 class="segment--title">my skills</h4>
        <div class="segment--line">&nbsp;</div>
      </div>

      <div class="pg-block">
        <pg-bar :data="css"></pg-bar>
        <pg-bar :data="javascript"></pg-bar>
        <pg-bar :data="php"></pg-bar>
        <pg-bar :data="larvel"></pg-bar>
        <pg-bar :data="vue"></pg-bar>
      </div>
    </div>
  </section>
</template>

<script>
import PgBar from "@/components/charts/ProgressBar.vue";

export default {
  components: {
    PgBar,
  },
  setup() {
    const css = {
      title: "CSS",
      value: 78,
    };
    const javascript = {
      title: "Javascript",
      value: 75,
    };
    const php = {
      title: "Php",
      value: 58,
    };
    const vue = {
      title: "Vue js",
      value: 70,
    };
    const larvel = {
      title: "Larvel",
      value: 65,
    };

    return {
      css,
      javascript,
      php,
      vue,
      larvel,
    };
  },
};
</script>

<style scoped lang="scss">
@use "~@/sass/styles" as styles;

.section {
  &-skills {
    background: lighten(styles.$vars-c-lprimary, 3%);
  }
}
</style>
