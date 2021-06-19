<template>
  <!-- social links -->

  <div class="links">
    <template v-for="(obj, index) in links" :key="index">
      <a class="link" :target="obj.target" :href="obj.link">
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
<!--  -->
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

// links
.link {
  &--text {
    color: var(--c-dprimary);
  }

  &-icon {
    &--facebook {
      background-image: url("~@/assets/social/facebook@2x.png");
    }
    &--github {
      background-image: url("~@/assets/social/github@2x.png");
    }
    &--gmail {
      background-image: url("~@/assets/social/google@2x.png");
    }
  }

  &-icongroup {
    background: var(--c-dprimary);
  }
  &-icon {
    background: styles.fns-lighten(var(--c-lprimary), 3);
  }

  &:hover &-icongroup {
    background: var(--c-dprimary);
  }
  &:hover &-icongroup &-icon {
    background: var(--c-white);
  }
}

@include styles.mxs-themes(dark) {
  .link {
    &--text {
      color: styles.fns-lighten(var(--c-white), 30);
    }
    &-icongroup {
      background: var(--c-lprimary);
    }
    &-icon {
      background: styles.fns-lighten(var(--c-white), 30);
    }

    &:hover .link--text {
      color: var(--c-dprimary);
    }
    &:hover .link-icongroup {
      background: var(--c-lprimary);
    }
    &:hover .link-icongroup .link-icon {
      background: var(--c-dprimary);
    }
  }
}
</style>

<style scoped lang="scss">
@use "~@/sass/styles" as styles;

// link text
.link {
  &--text {
    height: 100%;
    display: flex;
    align-items: center;

    font-weight: 600;
    transition: color 0.3s ease-in-out;

    @include styles.mxs-respond(lphone) {
      @include styles.mxs-font-size(body2);
    }
  }
}

// links
.link {
  height: 4rem;
  max-width: fit-content;
  cursor: pointer;

  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  &-icongroup {
    height: 100%;
    width: 4rem;
    border-radius: 5px;

    margin-right: 1rem;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    overflow: hidden;
    transition: background-color 0.3s ease-in-out;

    @include styles.mxs-respond(lphone) {
      height: 3rem;
      width: 3rem;
    }
  }

  &-icon {
    height: 60%;
    width: 60%;

    @include styles.mxs-img-contain;
    transition: background-color 0.3s ease-in-out;

    &--facebook {
      @supports (mask: url("~@/assets/social/facebook.svg")) {
        mask: url("~@/assets/social/facebook.svg");
        @include styles.mxs-svg-contain;
      }
    }
    &--github {
      @supports (mask: url("~@/assets/social/github.svg")) {
        mask: url("~@/assets/social/github.svg");
        @include styles.mxs-svg-contain;
      }
    }
    &--gmail {
      @supports (mask: url("~@/assets/social/google.svg")) {
        mask: url("~@/assets/social/google.svg");
        @include styles.mxs-svg-contain;
      }
    }
  }
}
</style>
