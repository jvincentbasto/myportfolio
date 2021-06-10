<template>
  <!-- social links -->
  <div class="links">
    <div class="link">
      <div class="link-icongroup">
        <div class="link-icon link-icon--github">&nbsp;</div>
      </div>
      <div class="link--text">github.com/jvincentbasto</div>
    </div>
    <div class="link">
      <div class="link-icongroup">
        <div class="link-icon link-icon--facebook">&nbsp;</div>
      </div>
      <div class="link--text">facebook.com/jvincentbasto</div>
    </div>
    <div class="link">
      <div class="link-icongroup">
        <div class="link-icon link-icon--gmail">&nbsp;</div>
      </div>
      <div class="link--text">gmail/jvincentbasto@gmail.com</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@use "~@/sass/abstracts/abstracts" as abs;

// links
.link {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  &-icongroup {
    height: 4rem;
    width: 4rem;
    background: abs.$vars-c-dprimary;

    border-radius: 5px;
    margin-right: 1rem;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    overflow: hidden;
    transition: all 0.3s ease-in-out;
  }

  &-icon {
    height: 80%;
    width: 80%;

    @include abs.mxs-img-contain;
    background: lighten(abs.$vars-c-lprimary, 3%);

    transition: all 0.3s ease-in-out;

    &--facebook {
      // @supports(mask: url("~@/assets/.svg") ) {
      // mask: url("~@/assets/.svg")
      // @include abs.mxs-svg-contain;
      // }
      // background-image: url("~@/assets/.png");
    }
    &--github {
      // @supports(mask: url("~@/assets/.svg") ) {
      // mask: url("~@/assets/.svg")
      // @include abs.mxs-svg-contain;
      // }
      // background-image: url("~@/assets/.png");
    }
    &--gmail {
      // @supports(mask: url("~@/assets/.svg") ) {
      // mask: url("~@/assets/.svg")
      // @include abs.mxs-svg-contain;
      // }
      // background-image: url("~@/assets/.png");
    }
  }
  &-icongroup:hover {
    background: lighten(abs.$vars-c-lprimary, 3%);
  }
  &-icongroup:hover &-icon {
    background: abs.$vars-c-dprimary;
  }
}
</style>
