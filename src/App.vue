<template>
  <media-queries>
    <div class="margin">
      <template v-for="(obj, index) in data" :key="index">
        <p>{{ `${obj.string}: ${obj.value}` }}</p>
      </template>
    </div>
  </media-queries>

  <div class="box box--1" @click="colorSchemeTrigger()">&nbsp;</div>
  <div class="box box--2" @click="del()">&nbsp;</div>

  <router-view />
  <my-footer />
</template>

<script>
import MyFooter from "@/components/layouts/footer.vue";
import MediaQueries from "@/components/helpers/mediaQueries.vue";
import { ref } from "vue";

export default {
  components: {
    MyFooter,
    MediaQueries,
  },
  setup() {
    let data = ref([]);

    return {
      data,
    };
  },
  methods: {
    del() {
      this.data.splice(0);
    },
    setScheme(matches) {
      const html = document.documentElement;
      let mode = "light";

      if (eval(matches)) mode = "dark";
      else mode = "light";
      this.con("mode", [mode, `typeof ${typeof mode}`]);
      html.setAttribute("theme", mode);
    },
    con(string, val) {
      const obj = {
        string,
        value: val,
      };
      console.log(obj);
      // this.data.splice(0);
      this.data.push(obj);
    },
    colorSchemeInit() {
      const scheme = window.matchMedia("(prefers-color-scheme: dark)");
      const matches = scheme.matches;

      const setScheme = this.setScheme;
      const con = this.con;

      con("init scheme", [matches, typeof matches]);
      setScheme(matches);

      scheme.addListener((e) => {
        setScheme(e.matches);
        con("event", e.matches);
      });
    },
    colorSchemeTrigger() {
      const html = document.documentElement;
      const hasAttr = html.hasAttribute("theme") ? true : false;
      const setScheme = this.setScheme;

      this.con("Attribute Exists?", [hasAttr, `typeof ${typeof hasAttr}`]);
      if (!hasAttr) {
        const scheme = window.matchMedia("(prefers-color-scheme: dark)");
        const matches = scheme.matches;
        setScheme(matches);
        this.con("No Attribute, Get Scheme, Scheme Match Dark?", [
          matches,
          `typeof ${typeof matches}`,
        ]);
      } else {
        let mode = html.getAttribute("theme");
        if (mode === "light") mode = "dark";
        else mode = "light";
        html.setAttribute("theme", mode);
        this.con("Attribute is?", [mode, `typeof ${typeof mode}`]);
      }

      const scheme = window.matchMedia("(prefers-color-scheme: dark)");
      const matches = scheme.matches;
      this.con("scheme, Scheme Match Dark?", [
        matches,
        `typeof ${typeof matches}`,
      ]);
    },
  },
  mounted() {
    this.colorSchemeInit();
  },
};
</script>

<style scoped lang="scss">
@use "~@/sass/styles" as styles;

.margin {
  margin-top: 8rem;
}

.box {
  height: 8rem;
  width: 8rem;

  position: fixed;
  top: 30rem;
  z-index: 4000;

  &--1 {
    background: yellow;
    right: 30rem;
  }
  &--2 {
    background: green;
    left: 30rem;
  }
}
</style>
