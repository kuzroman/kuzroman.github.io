<template>
  <UIIconBurger
    ref="burger"
    class="icon-burger"
    @mouseenter.native="handlerMouseenter"
    @click.native="handlerClick"
  />
</template>

<script setup lang="ts">
import { useStore } from 'vuex'

const store = useStore()
const isMenuNavigationOpened = computed(
  () => store.getters['app/isMenuNavigationOpened']
)
const isMobile = computed(() => store.getters['app/isMobile'])
const setIsMenuNavigation = (bool: boolean) =>
  store.commit('app/setIsMenuNavigation', bool)
const burger = ref()

const handlerMouseenter = () => {
  if (!isMobile.value) {
    setIsMenuNavigation(true)
  }
}
const handlerClick = () => {
  if (isMobile.value) {
    setIsMenuNavigation(!isMenuNavigationOpened.value)
  }
}

onMounted(() => {
  window.addEventListener('click', hideMenu)
})
onUnmounted(() => {
  window.removeEventListener('click', hideMenu)
})

const hideMenu = (ev: Event) => {
  if (!burger.value.$el.contains(ev.target)) {
    setIsMenuNavigation(false)
  }
}
</script>

<style lang="scss">
@import '../assets/styles/props.scss';

.icon-burger {
  position: fixed;
  top: 1.2em;
  right: 2em;
  z-index: $zIndex-3;
}

@media (max-width: $mq-phone) {
  .icon-burger {
    top: 0.5em;
    right: 0.7em;
  }
}
</style>
