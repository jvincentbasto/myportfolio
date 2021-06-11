<template>
  <footer
    data-section="contacts"
    class="section section-footer"
    id="contacts"
    ref="sectFooter"
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
            <h6 class="pitch-content pitch-content--1">are you interested?</h6>
            <h2 class="pitch-content pitch-content--2">Lets Talk!</h2>
          </div>
        </div>
      </div>
    </div>

    <div class="section-margin section-margin--footer">
      <label class="section-copyright"
        >&#169; 2021 jvincentbasto@gmail.com | All Rights Reserved</label
      >
    </div>
  </footer>
</template>

<script>
import socialLinks from "@/components/links/socialLinks.vue";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

export default {
  components: {
    socialLinks,
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped lang="scss">
@use "~@/sass/abstracts/abstracts" as abs;

.section {
  &-footer {
    padding: 3rem 0;
    min-height: unset;

    background: abs.$vars-c-black;
    color: abs.$vars-c-lprimary;

    position: relative;
    overflow: hidden;

    @include abs.mxs-respond(lphone) {
      padding: 4rem 0 2rem;
    }
  }

  &-margin {
    &--footer {
      margin-bottom: -2rem;

      @include abs.mxs-respond(lphone) {
        margin-bottom: -1rem;
      }
    }
  }
}

.section {
  &-copyright {
    @include abs.mxs-font-type(captions);
    color: lighten(abs.$vars-c-black, 60%);
  }
}

// segment
.segment {
  &-titlegroup {
    margin-bottom: 8rem;

    @include abs.mxs-respond(lphone) {
      margin-bottom: 6rem;
    }
  }
  &--title {
    color: abs.$vars-c-lprimary;
  }
  &--line {
    background: lighten(abs.$vars-c-black, 5%);
  }
}

// block
.block {
  margin-top: 4rem;
  margin-bottom: 4rem;
}

// row
.row {
  @include abs.mxs-respond(lphone) {
    flex-wrap: wrap;
    margin-bottom: -4rem;
  }
}

// col
.col {
  @include abs.mxs-respond(lphone) {
    flex: 1 1;
  }
  &--1 {
    @include abs.mxs-respond(lphone) {
      margin-bottom: 4rem;
      margin-right: 8rem;
    }
  }
  &--2 {
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding-bottom: 2rem;

    @include abs.mxs-respond(lphone) {
      align-items: unset;
    }
  }
}

// links
.col {
  :deep(.links) {
    @include abs.mxs-respond(ptablet) {
      min-width: 40rem;
    }
    @include abs.mxs-respond(lphone) {
      min-width: 22rem;
    }
  }
}

// pitch
.pitch {
  &-group {
    @include abs.mxs-respond(lphone) {
      min-width: 18rem;
    }
  }
  &-content {
    font-family: tsemibold;
    &--1 {
      @include abs.mxs-respond(ptablet) {
        @include abs.mxs-font-type(subtitle1);
      }
      @include abs.mxs-respond(lphone) {
        @include abs.mxs-font-type(body2);
      }
    }
    &--2 {
      margin-top: -2rem;
      @include abs.mxs-respond(ptablet) {
        @include abs.mxs-font-type(heading3);
      }
      @include abs.mxs-respond(lphone) {
        @include abs.mxs-font-type(heading4);
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

    .link {
      &-icongroup {
        background: abs.$vars-c-lprimary;
      }
      &-icon {
        background: lighten(abs.$vars-c-black, 0%);
      }

      &-icongroup:hover {
        background: lighten(abs.$vars-c-black, 0%);
      }
      &-icongroup:hover .link-icon {
        background: abs.$vars-c-lprimary;
      }
    }
  }
}
</style>
