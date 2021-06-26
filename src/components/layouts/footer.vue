<template>
  <footer
    data-section="contacts"
    class="section section-footer"
    id="contacts"
    ref="sectFooter"
    theme="static"
  >
    <div class="section-margin block block--1">
      <div class="segment segment-titlegroup">
        <h4 class="segment--title">my contacts</h4>
        <div class="segment--line">&nbsp;</div>
      </div>

      <div class="row row--1">
        <div class="col col--1">
          <social-links></social-links>
        </div>

        <div class="col col--2">
          <div class="pitch pitch-group">
            <h6 class="pitch-content pitch-content--1">send me a message,</h6>
            <h2 class="pitch-content pitch-content--2">Hire Me!</h2>
          </div>
        </div>
      </div>
    </div>

    <div class="section-margin section-margin--footer">
      <label class="section-copyright"
        >&#169; 2021 John Vincent Basto | All Rights Reserved</label
      >
    </div>
  </footer>
</template>

<script>
import SocialLinks from "@/components/links/socialLinks.vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  components: {
    SocialLinks,
  },
  methods: {
    footer() {
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
            start: "top 90%",
            end: "bottom bottom",
            ...scrollObj,
          },
          // repeat: -1
        });

      function animateObj() {
        return {
          ease: "ease",
          opacity: 0,
          duration: 0.5,
        };
      }

      const segment = scroll(".section-footer .segment--title");
      segment.from(".section-footer .segment--title", {
        x: -20,
        ...animateObj(),
      });
      segment.from(".section-footer .segment--line", {
        x: -10,
        ...animateObj(),
      });

      const icons = scroll(".section-footer .col .links");
      icons.from(".section-footer .col .links .link", {
        x: -20,
        ...animateObj(),
        stagger: 0.3,
      });

      const pitch = scroll(".section-footer .pitch-content");
      pitch.from(".section-footer .pitch-content--1", {
        x: -20,
        ...animateObj(),
      });
      pitch.from(".section-footer .pitch-content--2", {
        y: -10,
        ...animateObj(),
      });

      const copyright = scroll(".section-footer");
      copyright.from(".section-footer .section-copyright", { ...animateObj() });
    },
  },
  mounted() {
    this.footer();
  },
};
</script>

<style scoped lang="scss">
@use "~@/sass/styles" as styles;

.section {
  &-footer {
    background: var(--sc-black);
  }
}

.section {
  &-copyright {
    color: styles.fns-darken(var(--sc-white), 10, 1, false);
  }
}

// segment
.section-footer {
  .segment {
    &--title {
      color: var(--sc-lprimary);
    }
    &--line {
      background: styles.fns-lighten(var(--sc-black), 4, 1, false);
    }
  }
}

.pitch {
  &-content {
    color: var(--sc-lprimary);
  }
}

// link
.col--1 {
  :deep(.link) {
    .link {
      &--text {
        color: styles.fns-lighten(var(--sc-black), 30, 1, false);
      }
      &-icongroup {
        background: styles.fns-lighten(var(--sc-black), 4, 1, false);
      }
      &-icon {
        background: styles.fns-lighten(var(--sc-black), 30, 1, false);
      }
    }
  }
  :deep(.link:hover) {
    .link {
      &--text {
        color: var(--sc-lprimary);
      }
      &-icongroup {
        background: styles.fns-lighten(var(--sc-black), 4, 1, false);
      }
      &-icongroup .link-icon {
        background: var(--sc-lprimary);
      }
    }
  }
}
</style>

<style scoped lang="scss">
@use "~@/sass/styles" as styles;

.section {
  &-footer {
    padding: 3rem 0;
    min-height: unset;

    position: relative;
    overflow: hidden;

    @include styles.mxs-respond(lphone) {
      padding: 4rem 0 2rem;
    }
  }

  &-margin {
    &--footer {
      margin-bottom: -2rem;

      @include styles.mxs-respond(lphone) {
        margin-bottom: -1rem;
      }
    }
  }
}

.section {
  &-copyright {
    @include styles.mxs-font-size(captions);
  }
}

// segment
.segment {
  &-titlegroup {
    margin-bottom: 8rem;

    @include styles.mxs-respond(lphone) {
      margin-bottom: 6rem;
    }
  }
}

// block
.block {
  margin-top: 4rem;
  margin-bottom: 4rem;
}

// row
.row {
  @include styles.mxs-respond(lphone) {
    flex-wrap: wrap;
    margin-bottom: -4rem;
  }
}

// col
.col {
  @include styles.mxs-respond(lphone) {
    flex: 1 1;
  }
  &--1 {
    @include styles.mxs-respond(lphone) {
      margin-bottom: 4rem;
      margin-right: 8rem;
    }
  }
  &--2 {
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding-bottom: 2rem;

    @include styles.mxs-respond(lphone) {
      align-items: unset;
    }
  }
}

// links
.col {
  :deep(.links) {
    @include styles.mxs-respond(ptablet) {
      min-width: 40rem;
    }
    @include styles.mxs-respond(lphone) {
      min-width: 22rem;
    }
  }
}

// pitch
.pitch {
  &-group {
    @include styles.mxs-respond(lphone) {
      min-width: 18rem;
    }
  }
  &-content {
    font-family: tsemibold;
    &--1 {
      @include styles.mxs-respond(ptablet) {
        @include styles.mxs-font-size(subtitle1);
      }
      @include styles.mxs-respond(lphone) {
        @include styles.mxs-font-size(body2);
      }
    }
    &--2 {
      margin-top: -2rem;
      @include styles.mxs-respond(ptablet) {
        @include styles.mxs-font-size(heading3);
      }
      @include styles.mxs-respond(lphone) {
        @include styles.mxs-font-size(heading4);
        margin-top: -1rem;
      }
    }
  }
}

// link
.col--1 {
  :deep(.link) {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }
}
</style>
