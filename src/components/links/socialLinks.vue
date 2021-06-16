<template>
  <!-- social links -->

  <div class="links">
    <template v-for="(obj, index) in links" :key="index">
      <a :target="obj.target" :href="obj.link" class="link">
        <div class="link-icongroup">
          <div class="link-icon" :class="`link-icon--${obj.icon}`">&nbsp;</div>
        </div>
        <p class="link--text">{{ obj.text }}</p>
      </a>
    </template>
    <div class="link">
      <div class="link-icongroup">
        <div class="link-icon link-icon--gmail">&nbsp;</div>
      </div>
      <p class="link--text">jvincentbasto@gmail.com</p>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const target = "__blank";
    const links = [
      {
        target,
        text: "github.com/jvincentbasto",
        icon: "github",
        link: "https://github.com/jvincentbasto",
      },
      {
        target,
        text: "facebook.com/jvincentbasto",
        icon: "facebook",
        link: "https://www.facebook.com/jvincentbasto",
      },
    ];

    return {
      links,
    };
  },
};
</script>

<style scoped lang="scss">
@use "~@/sass/styles" as styles;

// link text
.link {
  &--text {
    @include styles.mxs-respond(lphone) {
      @include styles.mxs-font-size(body2);
    }
  }
}

// links
.link {
  max-width: fit-content;
  cursor: pointer;

  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  &-icongroup {
    height: 4rem;
    width: 4rem;
    background: styles.$vars-c-dprimary;

    margin-right: 1rem;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    overflow: hidden;
    transition: all 0.3s ease-in-out;

    @include styles.mxs-respond(lphone) {
      height: 3rem;
      width: 3rem;
    }
  }

  &-icon {
    height: 80%;
    width: 80%;

    @include styles.mxs-img-contain;
    background: lighten(styles.$vars-c-lprimary, 3%);

    transition: all 0.3s ease-in-out;

    &--facebook {
      // @supports(mask: url("~@/assets/.svg") ) {
      // mask: url("~@/assets/.svg")
      // @include styles.mxs-svg-contain;
      // }
      // background-image: url("~@/assets/.png");
    }
    &--github {
      // @supports(mask: url("~@/assets/.svg") ) {
      // mask: url("~@/assets/.svg")
      // @include styles.mxs-svg-contain;
      // }
      // background-image: url("~@/assets/.png");
    }
    &--gmail {
      // @supports(mask: url("~@/assets/.svg") ) {
      // mask: url("~@/assets/.svg")
      // @include styles.mxs-svg-contain;
      // }
      // background-image: url("~@/assets/.png");
    }
  }
  &-icongroup:hover {
    background: lighten(styles.$vars-c-lprimary, 3%);
  }
  &-icongroup:hover &-icon {
    background: styles.$vars-c-dprimary;
  }
}
</style>
