<template>
  <section class="section section-about" id="skills" ref="sectSkills">
    <div class="section-margin block block--1">
      <div class="segment segment-titlegroup">
        <h4 class="segment--title">my skills</h4>
        <div class="segment--line">&nbsp;</div>
      </div>

      <div class="pg-block">
        <pg-bar class="pg-item" :data="css"></pg-bar>
        <pg-bar class="pg-item" :data="javascript"></pg-bar>
        <pg-bar class="pg-item" :data="php"></pg-bar>
        <pg-bar class="pg-item" :data="larvel"></pg-bar>
        <pg-bar class="pg-item" :data="vue"></pg-bar>
      </div>
    </div>
  </section>
</template>

<script>
import PgBar from "@/components/ProgressBar.vue";

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
@use "~@/sass/abstracts/abstracts" as abs;

.section {
  &-about {
    background: lighten(abs.$vars-c-lprimary, 3%);
  }
}

// segment
.segment {
  &-titlegroup {
    display: inline-block;
    margin-bottom: 4rem;

    position: relative;
  }
  &--title {
    position: relative;
    z-index: 10;
    color: abs.$vars-c-dprimary;

    @include abs.mxs-respond(lphone) {
      @include abs.mxs-font-type(heading5);
    }
  }
  &--line {
    height: 40%;
    width: 110%;
    border-radius: 5px;

    position: absolute;
    bottom: 0;
  }
}

// pgblock
.pg {
  &-block {
    width: 100%;
  }
}

// pg item
.pg-item {
  margin-bottom: 2rem;

  :deep(.pgbar) {
    max-width: 80%;
  }
  :deep(.pgbar--bg) {
    background: lighten(abs.$vars-c-lprimary, 20%);
  }
}
</style>
