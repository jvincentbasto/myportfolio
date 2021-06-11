<template>
  <section class="section section-about" id="about" ref="sectAbout">
    <div class="section-margin block block--1">
      <div class="segment segment-titlegroup">
        <h4 class="segment--title">myself</h4>
        <div class="segment--line">&nbsp;</div>
      </div>

      <div class="row row--1">
        <div class="col col--1">
          <card-info id="cardinfo" :data="myself"></card-info>
          <btn-primary :data="data">Donwload Resume</btn-primary>
        </div>
        <div class="col col--2">
          <div class="illus illus-container--rel">
            <div class="illus-container--abs">
              <div class="illus--bg">&nbsp;</div>
              <div class="illus-img illus-img--1">&nbsp;</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import cardInfo from "@/components/cards/cardInfo.vue";
import btnPrimary from "@/components/btns/btnPrimary.vue";

export default {
  components: {
    cardInfo,
    btnPrimary,
  },
  setup() {
    // myself
    const myself = [
      {
        title: "Name:",
        value: "John Vincent S. Basto",
      },
      {
        title: "Address:",
        value: "Nueva Vizcaya, Philippines",
      },
      {
        title: "Education:",
        value: "Bachelor of Science in Computer Engineering",
      },
    ];

    // const myself = [
    //   {
    //     title: "",
    //     value: `Hi! my full name is John Vincent Basto, I live in Nueva Vizcaya, Philippines, I'm a graduate of Computer Engineering. I'm self taught Web Developer but never really dive deep into programming.`
    //   },
    //   {
    //     title: "",
    //     value: `I really had hard time learning, I was quite confused when I started building sites with a framework and never had the basic foundation for web development. But now that I have, I am having great time learning and improving my skills as a web developer. Check out my resume for more info.`
    //   }
    // ];

    const publicpath = process.env.BASE_URL;
    // const resume = `${publicpath}files/resume.pdf`;
    // const resume = `<%= BASE_URL %>files/resume.pdf`;

    const resume = require("@/files/resume.pdf");
    const data = {
      download: resume,
    };

    return {
      myself,
      publicpath,
      resume,
      data,
    };
  },
  methods: {},
};
</script>

<style scoped lang="scss">
@use "~@/sass/abstracts/abstracts" as abs;

#cardinfo {
  margin-bottom: 4rem;
  @include abs.mxs-respond(ltablet) {
    min-width: 45rem;
  }
  @include abs.mxs-respond(lphone) {
    min-width: 30rem;
  }
}

// row
.row {
  @include abs.mxs-respond(lphone) {
    flex-wrap: wrap;
  }
}

// col
.col {
  @include abs.mxs-respond(lphone) {
    flex: 1 1;
  }
  &--1 {
    padding-right: 4rem;
    @include abs.mxs-respond(lphone) {
      margin-bottom: 4rem;
    }
    @include abs.mxs-respond(pphone) {
      margin-right: 0;
    }
  }
}

.section {
  &-about {
    background: lighten(abs.$vars-c-lprimary, 6%);
  }
}

// illus
.illus {
  &-container {
    &--rel {
      height: 25rem;
      min-width: 20rem;
      position: relative;

      @include abs.mxs-respond(lphone) {
        height: 22rem;
        min-width: 15rem;
      }
    }
    &--abs {
      height: 100%;
      width: 100%;

      display: flex;
      position: absolute;
    }
  }
  &--bg {
    height: 16rem;
    width: 40rem;
    background: lighten(abs.$vars-c-lprimary, 15%);

    position: absolute;
    top: 0;
    left: 0;

    @include abs.mxs-respond(lphone) {
      height: 14rem;
      width: 35rem;
    }
  }
  &-img {
    height: 100%;
    width: 25rem;
    @include abs.mxs-img-contain;

    margin-top: 4rem;
    margin-left: 4rem;

    position: absolute;
    z-index: 2;

    @include abs.mxs-respond(lphone) {
      width: 22rem;
    }

    &--1 {
      background-image: url("~@/assets/imgs/work@2x.png");
    }
  }
}
</style>
