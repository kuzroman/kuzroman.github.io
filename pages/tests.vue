<template>
  <div>
    {{ count }}
    <input type="text" v-focus>
  </div>
</template>

<script setup>
const count = ref(0);
const increase = () => {
    count.value++
};
</script>

<style lang="scss">
//@import "../assets/styles/props";


</style>
