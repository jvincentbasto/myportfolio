<template>
  <section class="section section-hero" id="hero" ref="sectHero">
    <div class="section-margin row row--1">
      <!-- headline block -->
      <div class="col col--1">
        <div class="headline headline-block">
          <h6 class="headline-title headline-title--1" ref="title1">
            Hello, my name is
          </h6>
          <h3 class="headline-title headline-title--2" ref="title2">
            Vincent Basto
          </h3>
          <p class="headline-subtitle" ref="subtitle">
            Front End Web Developer
          </p>
          <p class="headline-text" ref="text">
            Welcome! I'm a guy who aspires to become a Full Stack Web Developer.
            I enjoys building websites with javscript frameworks like Vue js.
            How can I help you?
          </p>

          <btn-primary :data="{ hash: '#about' }" ref="btn"
            >About Me</btn-primary
          >
        </div>
      </div>

      <!-- bg block -->
      <div class="col col--2">
        <div class="model-container">
          <div class="model-img" ref="model">&nbsp;</div>
        </div>
      </div>
    </div>

    <div class="section-margin row row--2">
      <!-- social links -->
      <div class="col col--1">
        <social-links></social-links>
      </div>

      <div class="col col--2"></div>
    </div>

    <div class="bg bg--bar">&nbsp;</div>
  </section>
</template>

<script>
import BtnPrimary from "@/components/btns/btnPrimary.vue";
import SocialLinks from "@/components/links/socialLinks.vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  components: {
    BtnPrimary,
    SocialLinks,
  },
  methods: {
    fadeIns() {
      function animateObj() {
        return {
          opacity: 0,
          ease: "ease",
          duration: 0.5,
        };
      }

      const headline = gsap.timeline({
        /*repeat: -1*/
      });

      // content
      headline.from(this.$refs.title1, { x: -50, ...animateObj() }, "+1");
      headline.from(this.$refs.title2, { x: -50, ...animateObj() });
      headline.from(this.$refs.subtitle, { y: -10, ...animateObj() });
      headline.from(this.$refs.text, { x: -50, ...animateObj() });
      headline.from(this.$refs.btn.$refs.btn, { y: 10, ...animateObj() });

      // bg
      headline.from(this.$refs.model, { y: 20, ...animateObj() }, "<+.2");
      return headline;
    },
    links() {
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

      function animateObj() {
        return {
          ease: "ease",
          opacity: 0,
          duration: 1,
          stagger: 0.3,
        };
      }

      const icons = scroll(".section-hero .col .links");
      icons.from(".section-hero .col .links .link", {
        x: -20,
        ...animateObj(),
      });
    },
  },
  mounted() {
    this.fadeIns();
    this.links();
  },
};
</script>

<!-- Global -->
<style scoped lang="scss">
@use "~@/sass/styles" as styles;

// option
// :global() {}

// headline

.section {
  &-hero {
    background: var(--c-lprimary);
  }
}

.headline {
  &-title,
  &-subtitle {
    color: var(--c-dprimary);
  }
  &-text {
    color: var(--c-defblack);
  }
}

// @include styles.mxs-themes(light) {
// model
.model {
  &-img {
    box-shadow: 0 0px 4px rgba(black, 0.5), 0 4px 4px rgba(black, 0.5);
    // --num: calc(var(--c-neg) * 5%);
    background: styles.fns-darken(var(--c-lprimary), 5%);
  }
}
// }

// bg
.bg {
  &--bar {
    background: styles.fns-lighten(var(--c-lprimary), 2);
  }
}

/* dark */
@include styles.mxs-themes(dark) {
  // headline
  .headline {
    &-text {
      color: styles.fns-alpha(var(--c-dprimary), 0.8);
    }
  }

  // model
  .model {
    &-img {
      // background: styles.fns-darken(var(--c-lprimary), 8);
    }
  }
  // bg
  .bg {
    &--bar {
      background: styles.fns-lighten(var(--c-lprimary), 1);
    }
  }
}
</style>

<!-- Scoped -->
<style scoped lang="scss">
@use "~@/sass/styles" as styles;

// general row
.row {
  position: relative;
  z-index: 10;

  &--1 {
    margin-top: 10rem;
    margin-bottom: 4rem;
    display: flex;

    @include styles.mxs-respond(lphone) {
      margin-top: 4rem;
    }
  }
  &--2 {
    display: flex;
    justify-content: center;
    margin-bottom: 5rem;

    @include styles.mxs-respond(pphone) {
      justify-content: flex-start;
    }
  }
}

// general col
.col {
  @include styles.mxs-respond(lphone) {
    flex: 1 1;
  }
  &--1 {
    @include styles.mxs-respond(lphone) {
      padding-right: 4rem;
    }
  }
  &--2 {
  }
}

// row 1
.row--1 {
  @include styles.mxs-respond(lphone) {
    flex-wrap: wrap;
    margin-bottom: 4rem;
  }

  .col {
    &--1 {
      @include styles.mxs-respond(lphone) {
        margin-bottom: 4rem;
      }
    }
    &--2 {
      display: flex;
      position: relative;

      @include styles.mxs-respond(lphone) {
        justify-content: unset;
      }
    }
  }
}

// row 2
.row--2 {
  .col {
    &--2 {
      display: none;
    }
  }
}

.section {
  &-hero {
    min-height: 75rem;
    padding: 7rem 0 0;
    position: relative;
  }
}

// headline
.headline {
  &-block {
    position: relative;
    margin-top: 2rem;
    max-width: 38rem;

    @include styles.mxs-respond(ptablet) {
      min-width: 38rem;
    }
    @include styles.mxs-respond(lphone) {
      min-width: 29rem;
      margin-right: 2rem;
    }
    @include styles.mxs-respond(pphone) {
      width: 29rem;
    }
  }

  &-title {
    @include styles.mxs-respond(ltablet) {
    }

    &--1 {
      line-height: 1;
      margin-bottom: -1rem;
    }
    &--2 {
      @include styles.mxs-respond(lphone) {
        @include styles.mxs-font-size(heading4);
      }
    }
  }
  &-subtitle {
    font-family: tsemibold;
    @include styles.mxs-font-size(subtitle2);
    margin-bottom: 4rem;
  }
  &-text {
    margin-bottom: 4rem;
  }
}

// model
.model {
  &-container {
    height: 45rem;
    width: 100%;
    position: relative;

    display: flex;
    justify-content: center;

    @include styles.mxs-respond(ptablet) {
      justify-content: unset;
      margin-left: 6rem;
    }
    @include styles.mxs-respond(lphone) {
      height: 40rem;
      margin-left: unset;
      min-width: 12rem;
    }
  }
  &-img {
    height: 100%;
    width: 35rem;
    border-radius: 5px;

    position: absolute;
    top: 0;

    @include styles.mxs-respond(lphone) {
      width: 30rem;
      margin: unset;
    }
  }
}

// bg
.bg {
  &--bar {
    height: 30rem;
    width: 100%;

    position: absolute;
    bottom: 0;
    left: 0;
  }
}
</style>
