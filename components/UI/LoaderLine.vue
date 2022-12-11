<template>
  <div class="ui-loader-line">
    <div class="loader" :style="{ width }"></div>
  </div>
</template>

<script>
export default {
  name: 'UILoaderLine',
  props: {
    percent: { type: Number, default: 50 },
  },
  data() {
    return {}
  },
  computed: {
    width() {
      return `${this.percent}%`
    },
  },
}
</script>

<style lang="scss">
@import './_props.scss';

.ui-loader-line {
  width: 18em;
  height: 1.6em;
  background: $color-4;

  .loader {
    height: 100%;
    background: $color-11;
  }
}
</style>
