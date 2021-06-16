<template>
  <!-- Navbar -->

  <nav class="nav section">
    <div class="section-margin section-margin--nav">
      <!-- nav bg -->
      <div class="nav-bg">&nbsp;</div>

      <!-- nav logo -->
      <div class="nav-logo">
        <nav-links :data="data.logo ? data.logo : logo"></nav-links>
      </div>

      <!-- nav links -->
      <div class="nav-links">
        <nav-links :data="data.links ? data.links : {}"></nav-links>
      </div>

      <!-- hamburger links -->
      <div class="nav-burger">
        <burger-links :data="data.links ? data.links : {}"></burger-links>
      </div>
    </div>
  </nav>
</template>

<script>
import NavLinks from "@/components/navs/NavLinks.vue";
import BurgerLinks from "@/components/navs/BurgerLinks.vue";
// import styles from "@/sass/abstracts/_variables.scss";

export default {
  props: ["data"],
  components: {
    NavLinks,
    BurgerLinks,
  },
  setup() {
    const logo = [
      {
        title: "vince.",
        hash: "#",
      },
    ];

    return {
      logo,
    };
  },
};
</script>

<style scoped lang="scss">
@use "~@/sass/styles" as styles;

.section {
  &-margin {
    &--nav {
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      position: relative;
    }
  }
}

// navbar
.nav {
  -webkit-tap-highlight-color: transparent;

  min-height: unset;
  height: 7rem;
  width: 100%;
  padding: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 5000;

  background: styles.$vars-c-dprimary;
}

// nav logo
.nav-logo {
  position: relative;
  z-index: 100;

  :deep(*) {
    .link {
      &::before {
        height: 10%;
        border-radius: 2px;
        background: styles.$vars-c-lprimary;
      }
      &--text {
        font-family: heading;
        @include styles.mxs-font-size(heading6);
        font-size: 2.7rem;

        color: styles.$vars-c-lprimary;
        padding: 0;

        @include styles.mxs-respond(ltablet) {
          font-size: 2.4rem;
        }
      }
    }
    .link:hover .link--text {
      color: styles.$vars-c-lprimary;
    }
  }
}

// nav links
.nav-links {
  height: 100%;
}

// nav bg
.nav-bg {
  height: 7rem;
  width: 100%;
  display: none;
  background: styles.$vars-c-dprimary;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  @include styles.mxs-respond(ptablet) {
    display: block;
  }
}

// nav burger
.nav-burger {
  display: none;

  @include styles.mxs-respond(ptablet) {
    display: block;
  }
}
</style>
