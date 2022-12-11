<template>
  <UIIconArrow
    class="page-control"
    :direction="direction"
    :text="text"
    :fadeOut="fadeOut"
  ></UIIconArrow>
</template>

<script setup>
import { useStore } from 'vuex'

const store = useStore()
const hidePageControl = computed(() => store.getters['app/hidePageControl']);
const isGameReady = computed(() => store.getters['game/isGameReady']);
const fadeOut = computed(() => hidePageControl.value || isGameReady.value)

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
