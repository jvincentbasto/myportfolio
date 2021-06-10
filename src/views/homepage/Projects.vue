<template>
  <section class="section section-about" id="projects" ref="sectProjects">
    <div class="section-margin block block--1">
      <div class="segment segment-titlegroup">
        <h4 class="segment--title">my project</h4>
        <div class="segment--line">&nbsp;</div>
      </div>

      <div class="row row--1">
        <div class="col col--1">
          <h5 class="project--title">Covid Status Site</h5>
          <tags class="tags" :data="['Vue Js', 'Gsap']"></tags>

          <p class="project--content">
            This is a simple Covid Api Site built in Vue js. It has information
            about global and continental cases and a search feature for country
            cases.
          </p>

          <btn-primary>View</btn-primary>
        </div>

        <div class="col col--2">
          <card-project-image :data="imagepath"></card-project-image>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import btnPrimary from "@/components/btns/btnPrimary.vue";
import tags from "@/components/cards/tags.vue";
import cardProjectImage from "@/components/cards/cardProjectImage.vue";

export default {
  components: {
    btnPrimary,
    tags,
    cardProjectImage,
  },
  setup() {
    const imagepath = {
      image1: {
        image: "projectimgs/site-covid-lg.png",
        ypos: 0,
      },
      image2: {
        image: "projectimgs/site-covid-md.png",
        ypos: "-75rem",
      },
    };

    return {
      imagepath,
    };
  },
};
</script>

<style scoped lang="scss">
@use "~@/sass/abstracts/abstracts" as abs;

.section {
  &-about {
    background: lighten(abs.$vars-c-lprimary, 6%);
  }
}

// segment
.segment {
  &-titlegroup {
    display: inline-block;
    margin-bottom: 4rem;

    position: relative;
  }
  &--title {
    position: relative;
    z-index: 10;
    color: abs.$vars-c-dprimary;

    @include abs.mxs-respond(lphone) {
      @include abs.mxs-font-type(heading5);
    }
  }
  &--line {
    height: 40%;
    width: 110%;
    border-radius: 5px;

    position: absolute;
    bottom: 0;
  }
}

.project {
  &--title {
    color: abs.$vars-c-dprimary;
    margin-bottom: 1rem;
  }
  &--content {
    max-width: 40rem;
    margin-bottom: 4rem;
  }
}

.segment {
  &-titlegroup {
    margin-bottom: 8rem;
  }
}

// tags
.tags {
  margin-bottom: 4rem;
}
</style>
