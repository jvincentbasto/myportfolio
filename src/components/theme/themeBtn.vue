<template>
  <div class="theme theme-btn" @click="themeBtn()">
    <div class="theme-icon theme-icon--">&nbsp;</div>
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
  &-btn {
    background: rgba(white, 0.2);
    transition: all 0.3s ease-in-out;
  }
  &-icon {
    background: var(--c-dprimary);
    transition: all 0.3s ease-in-out;
  }
  &-btn:hover {
    background: rgba(white, 0.4);
  }
  &-btn:hover &-icon {
    // background: var(--c-lprimary);
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
  }
  &-icon {
    height: 2rem;
    width: 2rem;
    border-radius: inherit;
  }
}
</style>
