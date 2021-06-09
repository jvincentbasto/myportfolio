<template>
  <section class="section section-about" id="about" ref="sectAbout">
    <div class="section-margin block block--1">
      <div class="segment segment-titlegroup">
        <h4 class="segment--title">about myself</h4>
        <div class="segment--line">&nbsp;</div>
      </div>

      <div class="row row--1">
        <div class="col col--1">
          <card-info :data="myself"></card-info>
          <btn-primary :data="data" @click="btn()">Resume</btn-primary>
        </div>
        <div class="col col--2"></div>
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
    const resume = "/files/resume.pdf";
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
  methods: {
    btn() {
      console.log(this.publicpath);
      console.log(this.data);
    },
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
</style>
