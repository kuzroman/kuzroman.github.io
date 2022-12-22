<template>
  <div class="page-game">
    <GameMainGame/>

    <div id="stars"></div>
    <div id="stars2"></div>
    <div id="stars3"></div>
  </div>
</template>

<script setup>
useHead({
  title: 'In game',
})
</script>

<style lang="scss">
@import "../assets/styles/stars.css";

.app .content .view {
  &.page-game {
    display: block !important;
    padding: 0;
  }
}
</style>
