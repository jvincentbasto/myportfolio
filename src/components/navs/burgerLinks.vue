<template>
  <!-- checkbox -->
  <input
    type="checkbox"
    class="burger-checkbox"
    id="nav-toggle"
    ref="checkbox"
    @click="toggle($event)"
  />

  <!-- burger button -->
  <label class="burger-btn" for="nav-toggle">
    <span class="burger-line burger-line--1">&nbsp;</span>
    <span class="burger-line burger-line--2">&nbsp;</span>
    <span class="burger-line burger-line--3">&nbsp;</span>
  </label>

  <!-- burger links -->
  <div class="burgerblock" @click="closeNav($event)">
    <nav-links class="scrollbar" :data="data"></nav-links>
  </div>
</template>

<script>
// import styles from "@/sass/abstracts/_variables.scss";
import NavLinks from "@/components/navs/NavLinks.vue";
import { gsap } from "gsap";

export default {
  props: ["data"],
  components: {
    NavLinks,
  },
  methods: {
    closeNav() {
      this.$refs.checkbox.checked = false;
    },
    toggle(event) {
      const state = event.target.checked;
      const links = document.querySelectorAll(".burgerblock .link");

      if (links.length !== 0) {
        if (state) {
          const nav = gsap.timeline();
          nav.from(".burgerblock .link", {
            y: -50,
            opacity: 0,
            duration: 0.5,
            stagger: 0.2,
          });
        }
      }
    },
  },
};
</script>

<style scoped lang="scss">
@use "~@/sass/styles" as styles;

// checkbox
.burger {
  &-checkbox {
    height: 4rem;
    width: 4rem;
    display: none;
  }

  &-checkbox,
  &-btn {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
  }
}

// burger btn
.burger {
  &-btn {
    height: 2rem;
    width: 3rem;
    cursor: pointer;

    z-index: 100;

    @include styles.mxs-respond(ptablet) {
      display: flex;
      flex-wrap: wrap;
    }
  }
  &-line {
    display: block;
    height: 4px;
    width: 100%;
    margin-bottom: 4px;

    background: styles.$vars-c-lprimary;
    transition: all 0.3s ease-in-out;

    &:last-child {
      margin-bottom: 0;
    }

    &--1 {
      width: 80%;
    }
    &--2 {
      width: 100%;
    }
    &--3 {
      width: 60%;
    }
  }
}

// scrollbar
.scrollbar {
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
  // Works on Divs | Track & Thumb
  &::-webkit-scrollbar-track {
    background: styles.$vars-c-dprimary;
  }
  &::-webkit-scrollbar-thumb {
    background: styles.$vars-c-black;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: styles.$vars-c-lprimary;
  }

  overflow-y: scroll;
}

// burger Links
.burgerblock {
  .scrollbar {
    @include styles.mxs-respond(ptablet) {
      height: 20rem;
      width: 100%;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      $links-bg: lighten(styles.$vars-c-dprimary, 0%);
      background: $links-bg;
    }
  }
  :deep(*) {
    .link {
      @include styles.mxs-respond(ptablet) {
        min-height: 6rem;
        width: 100%;
        background: transparent;

        margin-right: 0;
        border-radius: 0;

        display: flex;
      }
    }
  }
}

// burger link text
.burgerblock {
  :deep(*) {
    .link {
      &--text {
        transition: all 0.3s ease-in-out;

        @include styles.mxs-respond(ptablet) {
          height: 100%;
          width: 100%;
          padding: 0;

          display: flex;
          justify-content: center;
          align-items: center;

          transition: none;
        }
      }
    }
  }
  :deep(*) {
    .link:hover .link--text {
      @include styles.mxs-respond(ptablet) {
        color: styles.$vars-c-black;
        font-weight: 600;
      }
    }
  }
}

// burger links psuedo
.burgerblock {
  :deep(*) {
    .link::before {
      @include styles.mxs-respond(ptablet) {
        background: styles.$vars-c-lprimary;

        width: 100%;
        height: 0;

        right: unset;
        bottom: 0;
        transform-origin: bottom;
      }
    }
    .link:hover::before {
      @include styles.mxs-respond(ptablet) {
        height: 100%;

        bottom: unset;
        top: 0;
        transform-origin: top;
      }
    }
  }
}

// burgerblock
.burgerblock {
  transition: all 0.3s ease-in-out;

  @include styles.mxs-respond(ptablet) {
    height: 100%;
    width: 100%;
    // min-width: 30rem;

    background: transparent;
    margin-top: 7rem;

    display: flex;
    justify-content: center;

    position: fixed;
    top: -100%;
    right: 0;
    z-index: -1;

    opacity: 0;
  }
  @include styles.mxs-respond(lphone) {
    min-width: 20rem;
  }
  @include styles.mxs-respond(pphone) {
    min-width: 15rem;
  }
}

// burger css functions
.burger {
  &-checkbox:checked ~ &-btn &-line {
    width: 100%;
    background: styles.$vars-c-lprimary;
  }
  &-checkbox:checked ~ &block {
    opacity: 1;
    top: 0;
  }
}
</style>
