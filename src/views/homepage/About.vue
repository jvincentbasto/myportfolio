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
          <btn-primary :data="data">Resume</btn-primary>
        </div>
        <div class="col col--2">
          <div class="caseimg caseimg-container">
            <div class="caseimg--bg">&nbsp;</div>
            <div class="caseimg-img caseimg-img--1">&nbsp;</div>
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
        value: "Buag, Bambang, Nueva Vizcaya, Philippines",
      },
      {
        title: "Education:",
        value:
          "Bachelor's Degree of Computer Engineering in Saint Mary's University, Bayombong, Nueva Vizcaya, Philippines",
      },
    ];

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
  max-width: 44rem;
}

.section {
  &-about {
    background: lighten(abs.$vars-c-lprimary, 6%);
  }
}

// img
.caseimg {
  &-container {
    height: 100%;
    width: 100%;

    display: flex;
    position: relative;
  }
  &--bg {
    height: 16rem;
    width: 40rem;
    background: lighten(abs.$vars-c-lprimary, 12%);

    position: absolute;
    top: 0;
    left: 0;
  }
  &-img {
    height: 25rem;
    width: 25rem;
    @include abs.mxs-img-contain;

    margin-top: 4rem;
    margin-left: 4rem;
    z-index: 2;

    &--1 {
      background-image: url("~@/assets/imgs/work@2x.png");
    }
  }
}
</style>
