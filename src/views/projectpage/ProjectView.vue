<template>
  <div class="section section-project-view">
    <div class="section-margin section-margin--project">
      <div class="project project-container">
        <div class="headline headline--container">
          <div class="headline-content">
            <h4 class="headline--title">{{ data.content.title }}</h4>
            <p class="headline--text">{{ data.content.text }}</p>
            <btn-primary :data="data.visit">Visit Site</btn-primary>
          </div>
          <div class="headline-bg">&nbsp;</div>
        </div>
        <div class="screenshots screenshots--container">
          <div class="screenshots--group">
            <picture>
              <source
                class="screenshots-imgsize screenshots-imgsize--1"
                media="(max-width: 480px)"
                :srcset="`${sourceset(data.screenshots.sm)}`"
              />
              <source
                class="screenshots-imgsize screenshots-imgsize--1"
                media="(max-width: 992px)"
                :srcset="sourceset(data.screenshots.md)"
              />
              <img
                class="screenshots-imgsize screenshots-imgsize--1"
                :src="`${sourceset(data.screenshots.lg)}`"
                alt="project image"
              />
            </picture>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BtnPrimary from "@/components/btns/btnPrimary.vue";
import { gsap } from "gsap";

export default {
  props: ["data"],
  components: {
    BtnPrimary,
  },
  setup() {
    return {};
  },
  methods: {
    sourceset(val) {
      const path = require(`@/assets/${val}`);
      return path;
    },
    projectView() {
      const scroll = (/*scrollObj = {}*/) =>
        gsap.timeline({
          // ...scrollObj
        });

      function animateObj(duration = 0.5) {
        return {
          ease: "ease",
          opacity: 0,
          duration,
        };
      }

      const content = scroll();
      content.from(".section-project-view .headline--title", {
        y: -20,
        ...animateObj(),
      });
      content.from(".section-project-view .headline--text", {
        y: -20,
        ...animateObj(),
      });
      content.from(".section-project-view .btn", { y: -10, ...animateObj() });

      const screenshots = scroll();
      screenshots.from(".section-project-view .screenshots--group", {
        y: 10,
        ...animateObj(),
      });
    },
  },
  mounted() {
    this.projectView();
  },
};
</script>

<style scoped lang="scss">
@use "~@/sass/styles" as styles;
.section-project-view {
  background: var(--c-lprimary);
}
.headline {
  &-bg {
    background: var(--c-lprimary);
  }
  &--title,
  &--text {
    color: var(--c-dprimary);
  }
}
</style>

<style scoped lang="scss">
@use "~@/sass/styles" as styles;

.headline-content {
  :deep(.btn) {
    margin-left: -2rem;
  }
}

.section-margin {
  &--project {
  }
}

// project
.project {
  &-container {
    width: 100%;
  }
}

// headline
.headline {
  &--container {
    min-height: 40rem;
    height: auto;
    width: 100%;

    position: relative;
  }
  &-content {
    min-height: 100%;
    height: auto;
    width: 100%;

    padding: 8rem 0;
    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;

    position: relative;
    z-index: 1;

    @include styles.mxs-respond(lphone) {
      padding-top: 5rem;
      padding-bottom: 18rem;
    }
  }
  &-bg {
    height: 100%;
    width: 100%;

    position: absolute;
    top: 0;
    left: 0;

    border-radius: 0 0 10px 10px;
    box-shadow: 0 0px 4px rgba(black, 0.5), 0 4px 4px rgba(black, 0.5);

    @include styles.mxs-respond(lphone) {
      width: 130%;
      border-radius: 0;
      margin-left: -15%;
    }
  }
  &--title {
    margin-bottom: 4rem;
    @include styles.mxs-respond(ptablet) {
      @include styles.mxs-font-size(heading5);
    }
  }
  &--text {
    max-width: 65ch;
    margin-bottom: 6rem;

    @include styles.mxs-respond(lphone) {
      max-width: 50ch;
    }
    @include styles.mxs-respond(pphone) {
      max-width: 35ch;
    }
  }
}

.screenshots {
  &--container {
    width: 100%;
    display: flex;
    justify-content: center;

    @include styles.mxs-respond(lphone) {
      margin-top: -15rem;
      position: relative;
      z-index: 1;
    }
  }
  &-group {
    width: auto;
  }
  &-imgsize {
    display: block;
    margin: 4rem auto 0;

    border-radius: 5px;
    box-shadow: 0 0px 4px rgba(black, 0.5), 0 4px 4px rgba(black, 0.5);

    &--1 {
      height: auto;
      width: 80%;

      @include styles.mxs-respond(lphone) {
        width: 100%;
      }
    }
  }
}
</style>
