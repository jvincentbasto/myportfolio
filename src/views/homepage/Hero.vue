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
          <p class="headline-text">
            Welcome! I'm a guy who aspires to become a Full Stack Web Developer.
            I enjoys building websites with javscript frameworks like Vue js.
            How can I help you?
          </p>

          <btn-primary :data="{ hash: '#about' }">About Me</btn-primary>
        </div>
      </div>

      <!-- bg block -->
      <div class="col col--2">
        <div class="model-container">
          <div class="model-img" ref="model" @click="colorSchemeTrigger()">
            &nbsp;
          </div>
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
import BtnPrimary from "@/components/btns/BtnPrimary.vue";
import SocialLinks from "@/components/links/SocialLinks.vue";

export default {
  components: {
    BtnPrimary,
    SocialLinks,
  },
  methods: {
    colorSchemeInit() {
      const html = document.querySelector("html");
      const scheme = window.matchMedia("(prefers-color-scheme: dark)");
      const matches = scheme.matches;

      if (matches) html.setAttribute("dark", "");
      else html.removeAttribute("dark");
    },
    colorSchemeTrigger() {
      const html = document.querySelector("html");
      const hasAttr = html.hasAttribute("dark") ? true : false;
      const scheme = window.matchMedia("(prefers-color-scheme: dark)");
      const matches = scheme.matches;
      // for(let prop in html) console.log(prop)

      if (!hasAttr) html.setAttribute("dark", "");
      else if (matches) html.setAttribute("dark", "");
      else html.removeAttribute("dark");

      // else {
      // const bool = html.getAttribute("dark");
      // console.log("attr",html.getAttribute("dark"))

      // if(eval(bool)) {
      //   console.log("bool true",bool, typeof bool)
      //   html.setAttribute("dark",false)
      // }
      // else {
      //   console.log("bool false",bool, typeof bool)
      //   html.setAttribute("dark",true)
      // }
      // }
    },
  },
  mounted() {
    // this.colorSchemeInit();
  },
};
</script>

<!-- Global -->
<style lang="scss">
@use "~@/sass/styles" as styles;

// option
// :global() {}

.section {
  &-hero {
    background: var(--c-lprimary);
  }
}

// headline
.headline {
  &-title,
  &-subtitle {
    color: var(--c-dprimary);
  }
}

// model
.model {
  &-img {
    background: styles.fns-darken(var(--c-lprimary), 10);
  }
}

// bg
.bg {
  &--bar {
    background: styles.fns-lighten(var(--c-lprimary), 3);
  }
}

/* dark */
@include styles.mxs-themes() {
  // model
  .model {
    &-img {
      background: styles.fns-lighten(var(--c-lprimary), 10);
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
