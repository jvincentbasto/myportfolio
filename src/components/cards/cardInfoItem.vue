<template>
  <li class="info-group">
    <!-- title -->

    <template v-if="dataEl('title')">
      <!-- no title -->
    </template>
    <template v-else>
      <slot name="elTitle">
        <p class="info--title">
          <slot name="title">{{ dataProp("title", "Title:") }}</slot>
        </p>
      </slot>
    </template>

    <!-- value -->

    <template v-if="dataEl('value')">
      <!-- no value -->
    </template>
    <template v-else>
      <slot name="elValue">
        <!-- values -->
        <template v-if="valueList()">
          <ul class="valuelist valuelist-block">
            <template v-for="(item, index) in valueList(true)" :key="index">
              <li class="valuelist-group">
                <p class="valuelist-item">{{ item }}</p>
              </li>
            </template>
          </ul>
        </template>

        <!-- value -->
        <template v-else>
          <p class="info--value">
            <slot name="value">{{ dataProp("value", "Value") }}</slot>
          </p>
        </template>
      </slot>
    </template>
  </li>
</template>

<script>
export default {
  props: ["data"],
  methods: {
    dataProp(prop, defVal = "") {
      if (this.data) {
        return this.data[prop];
      } else return defVal;
    },
    dataEl(prop) {
      const val = this.data[prop];
      if (this.data && (val === "" || val === " ")) return true;
      else return false;
    },
    valueList(bool = false) {
      if (this.data && Array.isArray(this.data.value)) {
        if (bool) return this.data.value;
        else return true;
      } else false;
    },
  },
};
</script>

<style scoped lang="scss">
@use "~@/sass/styles" as styles;

@include styles.mxs-themes(dark) {
  .info {
    &--title {
      color: var(--c-dprimary);
    }
    &--value {
      color: styles.fns-alpha(var(--c-black), 0.8);
    }
  }
}
</style>

<style scoped lang="scss">
@use "~@/sass/styles" as styles;

.info {
  &-group {
    width: 100%;
    display: flex;
  }
  &--title {
    margin-right: 5px;
    @include styles.mxs-font-size(subtitle2);
    font-weight: 600;
    white-space: nowrap;
  }
  &--value {
    @include styles.mxs-font-size(body1);
  }
}

.valuelist {
  &-block {
  }
  &-group {
  }
  &-item {
    @include styles.mxs-font-size(body1);
  }
}
</style>
