<template>
  <div class="page-game">
    <GameMainGame />

    <div class="stars-box">
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Hi! Nice to meet you =)',
})
</script>

<style lang="scss">
@import '../assets/styles/stars.css';

.stars-box {
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
}
</style>
