<template>
  <!-- download -->
  <template v-if="data.type === 'download'">
    <a
      target="__blank"
      :href="data.file"
      class="btn"
      ref="btn"
      :download="data.filename ? data.filename : 'download'"
    >
      <div class="btn--content">
        <div class="btn-icongroup">
          <div class="btn-icon btn-icon--download">&nbsp;</div>
        </div>
        <p class="btn--text">
          <slot>
            {{ data.title ? data.title : "Download Button" }}
          </slot>
        </p>
      </div>
      <div class="btn--border">&nbsp;</div>
    </a>
  </template>

  <!-- router link -->
  <template v-else-if="data.type === 'router'">
    <router-link :to="data.router ? data.router : '/'" class="btn" ref="btn">
      <div class="btn--content">
        <p class="btn--text">
          <slot>
            {{ data.title ? data.title : "Router Link" }}
          </slot>
        </p>
      </div>
      <div class="btn--border">&nbsp;</div>
    </router-link>
  </template>

  <!-- router push -->
  <template v-else-if="data.type === 'routerPush'">
    <div class="btn" ref="btn" @click="routerFn()">
      <div class="btn--content">
        <p class="btn--text">
          <slot>
            {{ data.title ? data.title : "Router Push" }}
          </slot>
        </p>
      </div>
      <div class="btn--border">&nbsp;</div>
    </div>
  </template>

  <!-- normal link -->
  <template v-else>
    <a
      :target="data.target ? data.target : ''"
      :href="data.hash ? data.hash : '#'"
      class="btn"
      ref="btn"
    >
      <div class="btn--content">
        <p class="btn--text">
          <slot>
            {{ data.title ? data.title : "Normal Link" }}
          </slot>
        </p>
      </div>
      <div class="btn--border">&nbsp;</div>
    </a>
  </template>
</template>

<script>
export default {
  props: ["data"],
  methods: {
    routerFn() {
      if (this.data.routerPush) this.$router.push(this.data.routerPush);
    },
  },
};
</script>

<style lang="scss">
@use "~@/sass/styles" as styles;

// btn
.btn {
  &--content {
    background: var(--c-dprimary);
  }
  &--border {
    border: 2px solid var(--c-dprimary);
  }
  &--text {
    color: var(--c-lprimary);
  }
}

// btn icon
.btn {
  &-icon {
    &--download {
      background-image: url("~@/assets/icons/download@2x.png");
    }
  }
  &-icon {
    background: var(--c-lprimary);
  }
}
</style>

<style scoped lang="scss">
@use "~@/sass/styles" as styles;

// btn
.btn {
  -webkit-tap-highlight-color: transparent;
  display: inline-block;
  position: relative;
  cursor: pointer;

  margin-bottom: 1rem;

  &--content {
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 1.5rem 3rem;
    transition: all 0.3s ease-in-out;
    transition-property: transform;

    @include styles.mxs-respond(lphone) {
      padding: 1.5rem 2rem;
    }
  }
  &--text {
    font-family: tsemibold;
    @include styles.mxs-font-size(btn);
    font-weight: 600;

    @include styles.mxs-respond(lphone) {
      font-size: 12px;
    }
  }
  &--border {
    height: 100%;
    width: 100%;

    position: absolute;
    top: 1rem;
    left: 1rem;
  }

  &:hover &--content {
    transform: translate(1rem, 1rem);
  }
}

// btn icon
.btn {
  &-icongroup {
    height: 2rem;
    width: 2rem;

    margin-right: 5px;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    overflow: hidden;

    @include styles.mxs-respond(lphone) {
      margin-right: 2px;
    }
  }
  &-icon {
    height: 80%;
    width: 80%;

    @include styles.mxs-img-contain;

    transition: all 0.3s ease-in-out;

    &--download {
      @supports (mask: url("~@/assets/icons/download.svg")) {
        mask: url("~@/assets/icons/download.svg");
        @include styles.mxs-svg-contain;
      }
    }
  }
}
</style>
