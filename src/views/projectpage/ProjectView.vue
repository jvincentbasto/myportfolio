<template>
  <div class="section section-project-view">
    <div class="section-margin section-margin--project">
      <div class="project project-container">
        <div class="headline headline--container">
          <h4 class="headline--title">{{ content.title }}</h4>
          <p class="headline--text">{{ content.text }}</p>
          <btn-primary id="link" :data="visit">Visit Site</btn-primary>
        </div>
        <div class="screenshots screenshots--container">
          <div class="screenshots--group">
            <picture>
              <source
                class="screenshots-imgsize screenshots-imgsize--1"
                media="(max-width: 480px)"
                :srcset="`${sourceset('sm')}`"
              />
              <source
                class="screenshots-imgsize screenshots-imgsize--1"
                media="(max-width: 992px)"
                :srcset="sourceset('md')"
              />
              <img
                class="screenshots-imgsize screenshots-imgsize--1"
                :src="`${sourceset('lg')}`"
                alt="project image"
              />
            </picture>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BtnPrimary from "@/components/btns/btnPrimary.vue";

export default {
  components: {
    BtnPrimary,
  },
  setup() {
    const visit = {
      type: "hash",
      hash: "https://status-covid.netlify.app",
      target: "__blank",
    };
    const content = {
      title: "Covid Status Site",
      text: `This is a simple Covid Site built in Vue js. 
            It has information about global and continental cases 
            and a search feature for country cases.`,
    };
    const showcase = {
      image1: {
        image: "projectimgs/site-covid-lg.png",
        ypos: 0,
      },
      image2: {
        image: "projectimgs/site-covid-md.png",
        ypos: "-75rem",
      },
    };
    const tags = ["Vue Js", "Sass", "Gsap"];
    const btn = {
      type: "router",
      title: "View",
      router: "/projects",
    };
    const project = {
      content,
      showcase,
      tags,
      btn,
    };

    return {
      visit,
      content,
      showcase,
      tags,
      btn,
      project,
    };
  },
  methods: {
    sourceset(val) {
      const path = require(`@/assets/projectimgs/site-covid-${val}.png`);
      return path;
    },
  },
};
</script>

<style scoped lang="scss">
@use "~@/sass/styles" as styles;

#link {
  margin-left: -1rem;
}

.section {
  &-project-view {
    background: var(--c-white);
  }
}

.section-margin {
  &--project {
    @include styles.mxs-respond(lphone) {
      max-width: 100%;
    }
  }
}

// project
.project {
  &-container {
    width: 100%;
  }
}

// headline
.headline {
  &--container {
    min-height: 40rem;
    height: auto;
    width: 100%;
    background: var(--c-lprimary);

    padding: 8rem 0;
    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;

    border-radius: 0 0 10px 10px;
    box-shadow: 0 0px 4px rgba(black, 0.5), 0 4px 4px rgba(black, 0.5);

    @include styles.mxs-respond(lphone) {
      max-width: 85%;
      margin: 0 auto;
      padding-top: 5rem;
      border-radius: 0;
    }
  }
  &--title,
  &--text {
    color: var(--c-dprimary);
  }
  &--title {
    margin-bottom: 4rem;
    @include styles.mxs-respond(ptablet) {
      @include styles.mxs-font-size(heading5);
    }
    @include styles.mxs-respond(pphone) {
      @include styles.mxs-font-size(heading6);
    }
  }
  &--text {
    max-width: 65ch;
    margin-bottom: 6rem;
  }
}

.screenshots {
  &--container {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  &-group {
    width: auto;
  }
  &-imgsize {
    display: block;
    margin: 4rem auto 0;

    border-radius: 5px;
    box-shadow: 0 0px 4px rgba(black, 0.5), 0 4px 4px rgba(black, 0.5);

    &--1 {
      height: auto;
      width: 75%;
    }
  }
}
</style>
