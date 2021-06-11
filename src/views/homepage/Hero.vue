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
            Aspiring to become a Full Stack Web Developer
          </p>
          <p class="headline-text">
            Welcome! I'm a Web Developer who enjoys building websites with
            frameworks like Laravel and Vue js. How can I help you?
          </p>

          <btn-primary :data="{ hash: '#about' }">About Me</btn-primary>
        </div>
      </div>

      <!-- bg block -->
      <div class="col col--2">
        <div class="model-container">
          <div class="model-img">&nbsp;</div>
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

    <div class="bg bg--bar"></div>
  </section>
</template>

<script>
import btnPrimary from "@/components/btns/btnPrimary.vue";
import socialLinks from "@/components/links/socialLinks.vue";

export default {
  components: {
    btnPrimary,
    socialLinks,
  },
};
</script>

<style scoped lang="scss">
@use "~@/sass/abstracts/abstracts" as abs;

// general row
.row {
  position: relative;
  z-index: 10;

  &--1 {
    margin-top: 10rem;
    margin-bottom: 4rem;
    display: flex;

    @include abs.mxs-respond(lphone) {
      margin-top: 4rem;
    }
  }
  &--2 {
    display: flex;
    justify-content: center;
    margin-bottom: 5rem;

    @include abs.mxs-respond(pphone) {
      justify-content: flex-start;
    }
  }
}

// general col
.col {
  @include abs.mxs-respond(lphone) {
    flex: 1 1;
  }
  &--1 {
    @include abs.mxs-respond(lphone) {
      padding-right: 4rem;
    }
  }
  &--2 {
  }
}

// row 1
.row--1 {
  @include abs.mxs-respond(lphone) {
    flex-wrap: wrap;
    margin-bottom: 4rem;
  }

  .col {
    &--1 {
      @include abs.mxs-respond(lphone) {
        margin-bottom: 4rem;
      }
    }
    &--2 {
      display: flex;
      position: relative;

      @include abs.mxs-respond(lphone) {
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
    background: abs.$vars-c-lprimary;
    position: relative;
  }
}

// headline
.headline {
  &-block {
    position: relative;
    margin-top: 2rem;

    @include abs.mxs-respond(ptablet) {
      min-width: 37rem;
    }
    @include abs.mxs-respond(lphone) {
      min-width: 28rem;
      margin-right: 4rem;
    }
  }

  &-title {
    @include abs.mxs-respond(ltablet) {
    }
    color: abs.$vars-c-dprimary;

    &--1 {
      line-height: 1;
      margin-bottom: -1rem;
    }
    &--2 {
      @include abs.mxs-respond(lphone) {
        @include abs.mxs-font-type(heading4);
      }
    }
  }
  &-subtitle {
    font-family: tsemibold;
    @include abs.mxs-font-type(subtitle2);
    color: abs.$vars-c-dprimary;
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

    @include abs.mxs-respond(ptablet) {
      justify-content: unset;
      margin-left: 6rem;
    }
    @include abs.mxs-respond(lphone) {
      height: 40rem;
      margin-left: unset;
      min-width: 12rem;
    }
  }
  &-img {
    height: 100%;
    width: 35rem;
    background: darken(abs.$vars-c-lprimary, 10%);

    position: absolute;
    top: 0;

    @include abs.mxs-respond(lphone) {
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
    background: lighten(abs.$vars-c-lprimary, 3%);

    position: absolute;
    bottom: 0;
    left: 0;
  }
}
</style>
