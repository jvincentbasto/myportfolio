<template>
  <div class="btn-radio btn-radio--4">
    <div>&nbsp;</div>
    <div>&nbsp;</div>
    <div>&nbsp;</div>
    <div>&nbsp;</div>
    <div>&nbsp;</div>
  </div>
</template>

<script></script>

<style lang="scss">
@use "~@/sass/styles" as styles;

.btn {
  &-radio div {
    border: 0.4rem solid var(--c-black);
    background: var(--c-secondary);
  }
}
</style>

<style scoped lang="scss">
@use "~@/sass/styles" as styles;

.btn {
  &-radio {
    display: flex;

    // background: green;
  }

  &-radio div {
    height: 2.4rem;
    width: 2.4rem;

    border-radius: 10rem;
    margin-right: 0.6rem;
  }
  &-radio div:last-child {
    margin-right: 0rem;
  }

  &-radio--4 div:last-of-type {
    background: transparent;
  }
  &-radio--3 div:nth-of-type(4),
  &-radio--3 div:last-of-type {
    background: transparent;
  }
  &-radio--2 div:nth-of-type(3),
  &-radio--2 div:nth-of-type(4),
  &-radio--2 div:last-of-type {
    background: transparent;
  }
  &-radio--1 div:not(:first-of-type) {
    background: transparent;
  }
  &-radio--0 div {
    background: transparent;
  }
}
</style>
