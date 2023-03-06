<template>
  <div class="header-slot">
    <slot />
  </div>
</template>

<style lang="scss">
@import '../assets/styles/props.scss';

.header-slot {
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: $zIndex-3;
}
</style>
