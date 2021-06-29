<template>
  <div class="theme theme-container">
    <!-- checkbox -->
    <input
      type="checkbox"
      class="theme-checkbox"
      :id="data.id ? data.id : 'theme-toggle'"
      ref="checkbox"
    />

    <div class="theme-block">
      <!-- theme toggle btn -->
      <label class="theme-togglebtn" :for="data.id ? data.id : 'theme-toggle'">
        <span class="theme-circle theme-circle--1">&nbsp;</span>
        <span class="theme-circle theme-circle--2">&nbsp;</span>
        <span class="theme-circle theme-circle--3">&nbsp;</span>
        <div class="theme-bg theme-bg--1">&nbsp;</div>
      </label>

      <div class="theme-options">
        <div class="theme theme-btn" @click="themeBtn()">
          <div class="theme-icon theme-icon--bulb">&nbsp;</div>
        </div>
        <template v-for="(color, index) in colors" :key="index">
          <div class="theme-btngroup" @click="colorTheme(color)">
            <div class="theme-color" :class="'theme-color--' + color">
              &nbsp;
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  props: ["data"],
  setup() {
    const bool = ref(false);
    const colors = ["blue", "green"];

    return {
      bool,
      colors,
    };
  },
  methods: {
    setTheme(matches) {
      const html = document.documentElement;
      let mode = "light";

      if (matches) mode = "dark";
      else mode = "light";
      html.setAttribute("color-mode", mode);
    },
    themeBtn() {
      const html = document.documentElement;
      const hasAttr = html.hasAttribute("color-mode") ? true : false;
      const setTheme = this.setTheme;

      this.bool = !this.bool;

      if (!hasAttr) {
        // if no theme attribute
        const scheme = window.matchMedia("(prefers-color-scheme: dark)");
        const matches = eval(scheme.matches);
        setTheme(matches);
      } else {
        // toggle
        let mode = html.getAttribute("color-mode");
        mode = mode === "dark" ? "light" : "dark";
        html.setAttribute("color-mode", mode);
      }
    },
    colorTheme(color) {
      console.log(color);
      const html = document.documentElement;
      html.setAttribute("color-theme", color);
    },
  },
};
</script>

<style scoped lang="scss">
@use "~@/sass/styles" as styles;

// checkbox
.theme {
  &-checkbox {
    height: 4rem;
    width: 4rem;
    display: none;
  }

  // &-checkbox,
  // &-btn {
  //   position: absolute;
  //   top: 50%;
  //   right: 0;
  //   transform: translateY(-50%);
  // }
}

.theme {
  &-btngroup {
    height: 4rem;
    width: 4rem;

    border: 2px solid styles.fns-alpha(var(--c-lprimary), 0.2);
    border-radius: 5rem;
    margin: 4px;

    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &-color {
    height: 90%;
    width: 90%;

    background: var(--c-dprimary);
    border-radius: inherit;

    &--blue {
      background: var(--cblue-dprimary);
    }
    &--green {
      background: var(--cgreen-dprimary);
    }
  }
  &-btngroup:hover {
    background: styles.fns-alpha(var(--c-lprimary), 0.5);
  }
}

// theme btn
.theme {
  &-togglebtn {
    height: 5rem;
    width: 5rem;

    background: styles.fns-darken(var(--c-lprimary), 5);
    border-radius: 50%;
    border: 2px solid styles.fns-alpha(var(--c-dprimary), 0.1);
    cursor: pointer;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: relative;
    z-index: 5;

    @include styles.mxs-respond(ptablet) {
      height: 4rem;
      width: 4rem;
    }
  }
  &-circle {
    display: block;
    height: 4px;
    width: 4px;

    background: var(--c-lprimary);
    margin-bottom: 4px;
    border-radius: 50%;
    z-index: 1;

    transition: all 0.3s ease-in-out;

    &:last-of-type {
      margin-bottom: 0;
    }
  }
  &-bg {
    height: 90%;
    width: 90%;

    border-radius: 50%;
    background: var(--c-dprimary);

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &-togglebtn:hover {
    background: styles.fns-lighten(var(--c-lprimary), 10);
  }
  &togglebtn:hover &-circle {
    background: var(--c-black);
  }
}

.theme {
  &-options {
    height: auto;
    max-width: 12rem;
    padding: 5px;

    display: flex;
    flex-wrap: wrap;

    background: var(--c-lprimary);
    box-shadow: 0 0 10px black;
    border-radius: 4rem;

    position: absolute;
    right: 0;
    top: -100%;
    margin-top: 10rem;
    z-index: -2;

    opacity: 0;
    transition: all 0.3s ease-in-out;
  }
}

.theme {
  &-checkbox:checked ~ &-block &-togglebtn {
    border: 2px solid styles.fns-alpha(var(--c-dprimary), 1);
  }
  &-checkbox:checked ~ &-block &-options {
    top: 0;
    opacity: 1;
  }
}

.theme {
  &-container {
    height: 100%;
  }
}

.bg {
  height: 100%;
  width: 100%;
  background: green;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
}

.ball {
  height: 40%;
  width: 40%;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 55;
}

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
    background: styles.fns-lighten(var(--c-dprimary), 10);
  }
  &-btn:hover {
    background: styles.fns-lighten(var(--c-lprimary), 10);
  }
  &-btn:hover &-icon {
    background: var(--c-black);
  }
}

@include styles.mxs-themes(dark) {
  .theme {
    &-btn {
      background: styles.fns-darken(var(--c-lprimary), 5);
    }
    &-icon {
      background: var(--c-dprimary);
    }
    &-btn:hover {
      background: var(--c-dprimary);
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
    margin: 4px;

    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;
    z-index: 500;

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

.theme {
  &-block {
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;
  }
}
</style>
