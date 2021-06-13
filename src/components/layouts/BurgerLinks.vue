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
    <navlinks class="scrollbar" :data="data"></navlinks>
  </div>
</template>

<script>
// import styles from "@/sass/abstracts/_variables.scss";
import navlinks from "@/components/layouts/navlinks.vue";
import { gsap } from "gsap";

export default {
  props: ["data"],
  components: {
    navlinks,
  },
  methods: {
    closeNav() {
      this.$refs.checkbox.checked = false;
    },
    toggle(event) {
      const state = event.target.checked;

      const nav = gsap.timeline();
      if (state) {
        nav.from(".burgerblock .link", {
          y: -50,
          opacity: 0,
          duration: 0.5,
          stagger: 0.2,
        });
      }
    },
  },
};
</script>

<style scoped lang="scss">
@use "~@/sass/abstracts/abstracts" as abs;

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

    @include abs.mxs-respond(ptablet) {
      display: flex;
      flex-wrap: wrap;
    }
  }
  &-line {
    display: block;
    height: 4px;
    width: 100%;
    margin-bottom: 4px;

    background: abs.$vars-c-lprimary;
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
    background: abs.$vars-c-dprimary;
  }
  &::-webkit-scrollbar-thumb {
    background: abs.$vars-c-black;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: abs.$vars-c-lprimary;
  }

  overflow-y: scroll;
}

// burger Links
.burgerblock {
  .scrollbar {
    @include abs.mxs-respond(ptablet) {
      height: 30rem;
      width: 100%;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      $links-bg: lighten(abs.$vars-c-dprimary, 0%);
      background: $links-bg;
    }
  }
  :deep(*) {
    .link {
      @include abs.mxs-respond(ptablet) {
        height: 100%;
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

        @include abs.mxs-respond(ptablet) {
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
      @include abs.mxs-respond(ptablet) {
        color: abs.$vars-c-black;
        font-weight: 600;
      }
    }
  }
}

// burger links psuedo
.burgerblock {
  :deep(*) {
    .link::before {
      @include abs.mxs-respond(ptablet) {
        background: abs.$vars-c-lprimary;

        width: 100%;
        height: 0;

        right: unset;
        bottom: 0;
        transform-origin: bottom;
      }
    }
    .link:hover::before {
      @include abs.mxs-respond(ptablet) {
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

  @include abs.mxs-respond(ptablet) {
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
  @include abs.mxs-respond(lphone) {
    min-width: 20rem;
  }
  @include abs.mxs-respond(pphone) {
    min-width: 15rem;
  }
}

// burger css functions
.burger {
  &-checkbox:checked ~ &-btn &-line {
    width: 100%;
    background: abs.$vars-c-lprimary;
  }
  &-checkbox:checked ~ &block {
    opacity: 1;
    top: 0;
  }
}
</style>
