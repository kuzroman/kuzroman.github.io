<template>
  <UIIconArrow
    class="page-control"
    :direction="direction"
    :text="text"
    :fade-out="fadeOut"
  />
</template>

<script setup lang="ts">
import { useStore } from 'vuex'

const store = useStore()
const hidePageControl = computed(() => store.getters['app/hidePageControl'])
const isGameReady = computed(() => store.getters['game/isGameReady'])
const fadeOut = computed<boolean>(
  () => hidePageControl.value || isGameReady.value
)

defineProps({
  direction: { type: String, default: 'right' },
  text: { type: String, default: 'PageName' },
})
</script>

<style lang="scss">
@import '../assets/styles/props.scss';

.page-control {
  z-index: $zIndex-2;
}
</style>
