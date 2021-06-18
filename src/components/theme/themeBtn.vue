<template>
  <div class="theme theme-btn" @click="themeBtn()">
    <div class="theme-icon theme-icon--bulb">&nbsp;</div>
  </div>
</template>

<script>
export default {
  methods: {
    setTheme(matches) {
      const html = document.documentElement;
      let mode = "light";

      if (matches) mode = "dark";
      else mode = "light";
      html.setAttribute("theme", mode);
    },
    themeBtn() {
      const html = document.documentElement;
      const hasAttr = html.hasAttribute("theme") ? true : false;
      const setTheme = this.setTheme;

      if (!hasAttr) {
        // if no theme attribute
        const scheme = window.matchMedia("(prefers-color-scheme: dark)");
        const matches = eval(scheme.matches);
        setTheme(matches);
      } else {
        // toggle
        let mode = html.getAttribute("theme");
        mode = mode === "dark" ? "light" : "dark";
        html.setAttribute("theme", mode);
      }
    },
  },
};
</script>

<style scoped lang="scss">
@use "~@/sass/styles" as styles;

.theme {
  &-icon {
    &--bulb {
      background-image: url("~@/assets/icons/day@2x.png");
    }
  }

  &-btn {
    background: styles.fns-darken(var(--c-lprimary), 5);
  }
  &-icon {
    background: styles.fns-lighten(var(--c-dprimary), 15);
  }
  &-btn:hover {
    background: styles.fns-lighten(var(--c-lprimary), 5);
  }
  &-btn:hover &-icon {
    background: var(--c-black);
  }
}

@include styles.mxs-themes(dark) {
  .theme {
    &-btn {
      background: styles.fns-lighten(var(--c-lprimary), 5);
    }
    &-icon {
      background: styles.fns-darken(var(--c-dprimary), 15);
    }
    &-btn:hover {
      background: styles.fns-lighten(var(--c-dprimary), 5);
    }
    &-btn:hover .theme-icon {
      background: var(--c-white);
    }
  }
}
</style>

<style scoped lang="scss">
@use "~@/sass/styles" as styles;

.theme {
  &-btn {
    height: 4rem;
    width: 4rem;

    border-radius: 10rem;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;
    z-index: 6000;

    transition: all 0.3s ease-in-out;
  }
  &-icon {
    height: 2rem;
    width: 2rem;
    border-radius: inherit;

    @include styles.mxs-img-contain;
    transition: background-color 0.3s ease-in-out;

    &--bulb {
      @supports (mask: url("~@/assets/icons/day.svg")) {
        mask: url("~@/assets/icons/day.svg");
        @include styles.mxs-svg-contain;
      }
    }
  }
}
</style>
