<template>
  <div class="project project-row">
    <!-- project content -->
    <div class="project-col project-col--1">
      <div class="content">
        <h5 class="content--title">
          {{ content.title ? content.title : "Project Title" }}
        </h5>
        <tags class="tags" :data="['Vue Js', 'Gsap']"></tags>
        <p class="content--text">
          {{ content.text ? content.text : "Project Content" }}
        </p>
        <btn-primary>View</btn-primary>
      </div>
    </div>

    <!-- project showcase -->
    <div class="project-col project-col--2">
      <div class="showcase showcase-container--rel">
        <div class="showcase showcase-container--abs">
          <div class="showcase-img showcase-img--1" :style="image(1)">
            &nbsp;
          </div>
          <div class="showcase-img showcase-img--2" :style="image(2)">
            &nbsp;
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import btnPrimary from "@/components/btns/btnPrimary.vue";
import tags from "@/components/cards/tags.vue";
import { ref } from "vue";

export default {
  props: ["data"],
  components: {
    btnPrimary,
    tags,
  },
  setup(props) {
    const content = ref(props.data.content);
    const showcase = ref(props.data.showcase);

    return {
      content,
      showcase,
    };
  },
  methods: {
    image(num) {
      const prop = this.showcase[`image${num}`].image;
      const path = require(`@/assets/${prop}`);

      const pos = this.pos(num);
      return `background-image: url(${path}); ${pos}`;
    },
    pos(num) {
      let pos = "0px";
      pos = this.showcase[`image${num}`].ypos;

      return `background-position-y: ${pos}`;
    },
  },
};
</script>

<style scoped lang="scss">
@use "~@/sass/abstracts/abstracts" as abs;

// project row
.project-row {
  height: 100%;
  width: 100%;

  display: flex;
  @include abs.mxs-respond(lphone) {
    flex-wrap: wrap;
  }
}
// project col
.project-col {
  flex: 1 0 50%;

  @include abs.mxs-respond(lphone) {
    flex: 1 1;
  }

  &--1 {
    margin-bottom: 4rem;

    @include abs.mxs-respond(lphone) {
      @include abs.mxs-font-type(heading6);
    }
  }
  &--2 {
  }
}

.content {
  &--title {
    color: abs.$vars-c-dprimary;
    margin-bottom: 1rem;
  }
  &--text {
    max-width: 40rem;
    margin-bottom: 4rem;

    @include abs.mxs-respond(ltablet) {
      margin-right: 4rem;
    }
    @include abs.mxs-respond(ptablet) {
      min-width: 33rem;
    }
    @include abs.mxs-respond(pphone) {
      min-width: 28rem;
    }
  }
}

// showcase size
.showcase {
  &-container {
    &--rel {
      height: 40rem;
      min-width: 15rem;

      position: relative;

      @include abs.mxs-respond(lphone) {
        height: 35rem;
      }
    }
    &--abs {
      height: 100%;
      width: 50rem;
      background: lighten(abs.$vars-c-lprimary, 20%);

      position: absolute;
      overflow: hidden;

      @include abs.mxs-respond(lphone) {
        width: 40rem;
      }
    }
  }
}

// showcase images
.showcase {
  &-img {
    height: 50rem;
    width: 25rem;

    position: absolute;
    top: 0;

    @include abs.mxs-img-cover;

    &--1 {
      z-index: 2;
      top: 4rem;
      left: 4rem;
    }
    &--2 {
      z-index: 1;
      top: -4rem;
      right: 4rem;
    }
  }
}

// tags
.tags {
  margin-bottom: 4rem;
}
</style>
