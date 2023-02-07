<template>
  <div class="content">
    <div class="item item_1">1</div>
    <div class="item item_2">2</div>
    <div class="item item_3">3</div>
    <div class="item item_4">4</div>
    <div class="item item_5">5</div>
    <div class="item item_6">6</div>
    <div class="item item_7">7</div>
    <div class="item item_8">8</div>
  </div>
</template>

<script setup>
import {useStore} from 'vuex';

const store = useStore()

store.commit('app/setIsPageLoaderHide', true)

</script>

<style lang="scss" scoped>
.content {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
.item {
  border: 1px solid white;

  &_4 {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 3;
  }
}

</style>