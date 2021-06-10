<template>
  <media-queries />

  <Hero />
  <About />
  <Skills />
  <Projects />
</template>

<script>
import Hero from "./homepage/Hero.vue";
import About from "./homepage/About.vue";
import Skills from "./homepage/Skills.vue";
import Projects from "./homepage/Projects.vue";

import mediaQueries from "@/components/helpers/mediaQueries.vue";

export default {
  components: {
    Hero,
    About,
    Skills,
    Projects,
    mediaQueries,
  },
};
</script>

<style lang="scss">
@use "~@/sass/abstracts/abstracts" as abs;

.section {
  height: auto;
  min-height: 25vh;
  width: auto;
  max-width: 144rem;

  overflow: hidden;

  padding: 7rem 0;
  background: abs.$vars-c-lprimary;

  &-margin {
    height: auto;
    width: 100%;
    max-width: 85%;
    margin: auto;
  }

  &--titlegroup {
    text-align: center;
    margin-top: 4rem;
  }
  &-title {
  }
  &-subtitle {
    @include abs.mxs-respond(pphone) {
      // @include abs.mxs-font-type(subtitle2);
    }
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
    background: lighten(abs.$vars-c-lprimary, 20%);
    border-radius: 5px;

    position: absolute;
    bottom: 0;
  }
}

// general block
.block {
  margin-top: 4rem;
  margin-bottom: 4rem;
}

// general row
.row {
  display: flex;
}

// general cols
.col {
  flex: 1 0 50%;
}
</style>
