<template>
  <UIIconBurger class="icon-burger" @click.native="switchMenu" />
</template>

<script setup lang="ts">
// import UIIconBurger from './UI/IconBurger.vue'
import { useStore } from 'vuex'

const store = useStore()
const isMenuNavigationOpened = computed(() => store.getters['app/isMenuNavigationOpened']);
const setIsMenuNavigation = (bool: boolean) => store.commit('app/setIsMenuNavigation', bool);

const switchMenu = () => {
  setIsMenuNavigation(!isMenuNavigationOpened.value)
};
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
    top: .5em;
    right: .7em;
  }
}
</style>
