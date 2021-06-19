<template>
  <ul class="theme theme-container">
    <template v-for="(obj, index) in data" :key="index">
      <li class="theme-item">
        <p class="theme-content theme-content--1">{{ obj.string }}</p>
        <p class="theme-content theme-content--2">{{ obj.value }}</p>
      </li>
    </template>
  </ul>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    let data = ref([]);

    return {
      data,
    };
  },
  methods: {
    themeLog(string, value) {
      const obj = {
        string,
        value,
      };
      console.log(obj);
      this.data.push(obj);
    },
    setTheme(matches) {
      const html = document.documentElement;
      let mode = "light";

      if (matches) mode = "dark";
      else mode = "light";
      html.setAttribute("theme", mode);

      // this.themeLog("Set Theme", `${mode}(${typeof mode})`);
    },
    themeInit() {
      const scheme = window.matchMedia("(prefers-color-scheme: dark)");
      const matches = eval(scheme.matches);
      // this.themeLog("Theme Init Dark?", `${matches}(${typeof matches})`);

      const setTheme = this.setTheme;
      // const themeLog = this.themeLog;

      setTheme(matches);
      scheme.addListener((e) => {
        setTheme(e.matches);
        // themeLog("Event", `${e.matches}(${typeof e.matches})`);
      });
    },
  },
  mounted() {
    // must be placed at the level of the structure
    this.themeInit();
  },
};
</script>

<style scoped lang="scss">
@use "~@/sass/styles" as styles;

.theme {
  &-container {
    height: auto;
    width: 100%;
    margin-top: 8rem;

    display: none;
  }
  &-item {
    width: 100%;
    height: auto;

    display: flex;
    align-items: center;
  }
  &-content {
    flex: 1 0 50%;
    &--1 {
      font-weight: var(--c-defblack);
    }
    &--2 {
    }
  }
}
</style>
