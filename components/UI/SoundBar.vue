<template>
  <div class="ui-sound-bar" :class="{ active: isActive }">
    <i v-for="i in '1234567'" :key="i"></i>
  </div>
</template>

<script setup>
defineProps({
  isActive: { type: Boolean, default: false },
})

</script>

<style lang="scss">
@import './_props.scss';

.ui-sound-bar {
  width: 30px;
  height: 28px;
  position: relative;
  cursor: pointer;
  transition: 0.3s;
  background: #2f2f2f;

  & i {
    width: 2px;
    background: $color-3;
    position: absolute;
  }

  &.active i {
    animation: soundPlay 1s infinite alternate;
  }

  & i:nth-child(1) {
    height: 12px;
    left: 0;
    animation-delay: 0.05s;
  }

  & i:nth-child(2) {
    height: 20px;
    left: 4px;
    animation-delay: 0.1s;
  }

  & i:nth-child(3) {
    height: 16px;
    left: 8px;
    animation-delay: 0.15s;
  }

  & i:nth-child(4) {
    height: 24px;
    left: 12px;
    animation-delay: 0.2s;
  }

  & i:nth-child(5) {
    height: 28px;
    left: 16px;
    animation-delay: 0.25s;
  }

  & i:nth-child(6) {
    height: 20px;
    left: 20px;
    animation-delay: 0.3s;
  }

  & i:nth-child(7) {
    height: 8px;
    left: 24px;
    animation-delay: 0.35s;
  }

  @keyframes soundPlay {
    from {
      height: 30%;
    }
    to {
      height: 100%;
    }
  }
}

@media screen and (max-width: 481px) {
  //.sound {
  //  top: $top-2;
  //  left: 10px;
  //}
}
</style>
