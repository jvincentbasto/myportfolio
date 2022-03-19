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
import CardInfo from "@/components/cards/cardInfo.vue";
import BtnPrimary from "@/components/btns/btnPrimary.vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import resume from "@/files/resume.pdf";

export default {
  components: {
    CardInfo,
    BtnPrimary,
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
    // from public folder. unsafe
    // const resume = `${publicpath}resume.pdf`;
    // const resume = `<%= BASE_URL %>files/resume.pdf`;

    // using require
    // const resume = require("@/files/resume.pdf");

    const data = {
      type: "download",
      file: resume,
      filename: "resume.pdf",
    };

    return {
      myself,
      publicpath,
      resume,
      data,
    };
  },
  methods: {
    about() {
      const scroll = (el, endEl) =>
        gsap.timeline({
          scrollTrigger: {
            // markers: {
            //   startColor: "green",
            //   endColor: "red",
            //   fontSize: "16px"
            // },

            // trigger | (trigger, viewport)
            trigger: el,
            start: "top 85%",
            end: "bottom bottom",
            endTrigger: endEl ? endEl : el,
            // scrub: 1
          },
          // repeat: -1
        });

      function animateObj(duration = 0.5) {
        return {
          ease: "ease",
          opacity: 0,
          duration,
        };
      }

      const segment = scroll(".section-about .segment--title");
      segment.from(".section-about .segment--title", {
        x: -20,
        ...animateObj(),
      });
      segment.from(".section-about .segment--line", {
        x: -10,
        ...animateObj(),
      });

      const infogroup = scroll(".section-about .info-group");
      infogroup.from(".section-about .info-group", {
        x: -10,
        ...animateObj(),
        stagger: 0.5,
      });
      infogroup.from(".section-about .btn", { y: -10, ...animateObj() });

      const illus = scroll(".section-about .illus");
      illus.from(".section-about .illus--bg", { width: 0, ...animateObj() });
      illus.from(".section-about .illus-img--1", { x: 10, ...animateObj() });
    },
  },
  mounted() {
    this.about();
  },
};
</script>

<style scoped lang="scss">
@use "~@/sass/styles" as styles;

.section-about {
  background: styles.fns-lighten(var(--c-lprimary), 4);
}
.illus {
  &--bg {
    background: var(--c-lprimary);
    box-shadow: 0 0 10px black;
  }
  &-img {
    filter: drop-shadow(8px 4px 8px rgba(black, 0.5));
  }
}

@include styles.mxs-themes(dark) {
  .section-about {
    background: styles.fns-darken(var(--c-lprimary), 2);
  }
}
</style>

<style scoped lang="scss">
@use "~@/sass/styles" as styles;

#cardinfo {
  margin-bottom: 4rem;
  @include styles.mxs-respond(ltablet) {
    min-width: 45rem;
  }
  @include styles.mxs-respond(lphone) {
    min-width: 30rem;
  }
}

// row
.row {
  @include styles.mxs-respond(lphone) {
    flex-wrap: wrap;
  }
}

// col
.col {
  @include styles.mxs-respond(lphone) {
    flex: 1 1;
  }
  &--1 {
    padding-right: 4rem;
    @include styles.mxs-respond(lphone) {
      margin-bottom: 4rem;
    }
    @include styles.mxs-respond(pphone) {
      margin-right: 0;
    }
  }
}

// illus
.illus {
  &-container {
    &--rel {
      height: 25rem;
      min-width: 20rem;
      position: relative;

      @include styles.mxs-respond(lphone) {
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
    border-radius: 5px;

    position: absolute;
    top: 0;
    left: 0;

    @include styles.mxs-respond(lphone) {
      height: 14rem;
      width: 35rem;
    }
  }
  &-img {
    height: 100%;
    width: 25rem;
    @include styles.mxs-img-contain;

    margin-top: 4rem;
    margin-left: 4rem;

    position: absolute;
    z-index: 2;

    @include styles.mxs-respond(lphone) {
      width: 22rem;
    }

    &--1 {
      background-image: url("~@/assets/imgs/work@2x.png");
    }
  }
}
</style>
