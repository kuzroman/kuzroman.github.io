<template>
  <div class="ui-dashed-list">
    <slot
      ><!--
      Example
      <div class="result">
        <div>left side</div>
        <div>right side</div>
      </div>
      <div class="result">
        <div>left side</div>
        <div>right side</div>
      </div>
      OR
      <div class="result">
        <div>
          <span>1st.</span>
          <span>Name</span>
        </div>
        <div>12345 points</div>
      </div>
      <div class="result">
        <div>
          <span>10st.</span>
          <span>Name</span>
        </div>
        <div>12345 points</div>
      </div>-->
    </slot>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import './_props.scss';

.ui-dashed-list {
  .result {
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    position: relative;
    background-color: $color-6;

    &:before {
      width: 100%;
      height: 50%;
      content: '';
      display: block;
      position: absolute;
      border-bottom: 1px dashed $color-10;
    }

    > div {
      background: $color-6;
      position: relative;
      padding: 0 1em;
    }

    &.best {
      color: $color-2;
    }
  }
}
</style>
