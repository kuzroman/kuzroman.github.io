<template>
  <div class="root">

    <BigSome v-if="isVisible" />
    <div @click="isVisible = !isVisible">
      Click for watch component
    </div>
  </div>
</template>

<script setup>
const isVisible = ref(false);
</script>

<style>
body{
  background: #303030;
  color: white;
}
</style>