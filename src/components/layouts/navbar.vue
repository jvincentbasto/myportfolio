<template>
  <!-- Navbar -->

  <nav class="nav section">
    <div class="section-margin section-margin--nav">
      <!-- nav bg -->
      <div class="nav-bg">&nbsp;</div>

      <!-- nav logo -->
      <div class="nav-logo">
        <navlinks :data="logo"></navlinks>
      </div>

      <!-- nav links -->
      <div class="nav-links">
        <navlinks :data="links"></navlinks>
      </div>

      <!-- hamburger links -->
      <div class="nav-burger">
        <burger-links :data="links"></burger-links>
      </div>
    </div>
  </nav>
</template>

<script>
import navlinks from "@/components/layouts/navlinks.vue";
import BurgerLinks from "@/components/layouts/BurgerLinks.vue";
// import styles from "@/sass/abstracts/_variables.scss";

export default {
  components: {
    navlinks,
    BurgerLinks,
  },
  setup() {
    const links = [
      {
        title: "About",
        hash: "#about",
      },
      {
        title: "Sklls",
        hash: "#skills",
      },
      {
        title: "Projects",
        hash: "#projects",
      },
      {
        title: "Contacts",
        hash: "#contacts",
      },
    ];

    const logo = [
      {
        title: "vince.",
        hash: "#",
      },
    ];

    return {
      links,
      logo,
    };
  },
};
</script>

<style scoped lang="scss">
@use "~@/sass/abstracts/abstracts" as abs;

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

  background: abs.$vars-c-dprimary;
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
        background: abs.$vars-c-lprimary;
      }
      &--text {
        font-family: heading;
        @include abs.mxs-font-type(heading6);
        font-size: 2.7rem;

        color: abs.$vars-c-lprimary;
        padding: 0;

        @include abs.mxs-respond(ltablet) {
          font-size: 2.4rem;
        }
      }
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
  background: abs.$vars-c-dprimary;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  @include abs.mxs-respond(ptablet) {
    display: block;
  }
}

// nav burger
.nav-burger {
  display: none;

  @include abs.mxs-respond(ptablet) {
    display: block;
  }
}
</style>
