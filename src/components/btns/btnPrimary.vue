<template>
  <template v-if="data.type === 'download'">
    <a target="__blank" :href="data.download" class="btn" ref="btn" download>
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
  <template v-else>
    <a :href="data.hash ? data.hash : '#'" class="btn" ref="btn">
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
};
</script>

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
    background: styles.$vars-c-dprimary;
    transition: all 0.3s ease-in-out;

    @include styles.mxs-respond(lphone) {
      padding: 1.5rem 2rem;
    }
  }
  &--text {
    font-family: tsemibold;
    @include styles.mxs-font-size(btn);
    color: styles.$vars-c-lprimary;

    @include styles.mxs-respond(lphone) {
      font-size: 12px;
    }
  }
  &--border {
    height: 100%;
    width: 100%;
    border: 2px solid styles.$vars-c-dprimary;

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

    background: styles.$vars-c-dprimary;
    margin-right: 1rem;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    overflow: hidden;
    transition: all 0.3s ease-in-out;

    @include styles.mxs-respond(lphone) {
      margin-right: 5px;
    }
  }
  &-icon {
    height: 100%;
    width: 100%;

    @include styles.mxs-img-contain;
    background: lighten(styles.$vars-c-lprimary, 3%);

    transition: all 0.3s ease-in-out;

    &--download {
      // background-image: url("~@/assets/.png");
    }
  }
}
</style>
