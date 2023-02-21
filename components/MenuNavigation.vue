<template>
  <div
    class="menu-navigation"
    :class="{ active: isMenuNavigationOpened }"
    @mouseleave="setIsMenuNavigation(false)"
  >
    <nav>
      <UILink2Move
          v-for="route in navigation"
          :key="route?.name"
          :text="route?.name === 'index' ? 'game' : route?.name"
          @click.native="toPage({ route })"
      />
    </nav>
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'
import {Router} from 'vue-router';

const store = useStore();
const isMenuNavigationOpened = computed(() => store.getters['app/isMenuNavigationOpened']);
const navigation = computed(() => store.getters['app/navigation']);
const setIsMenuNavigation = (bool: boolean) => store.commit('app/setIsMenuNavigation', bool);

const toPage = (route: Router) => {
  store.commit('app/toPage', route)
};
</script>

<style lang="scss">
@import '../assets/styles/props.scss';

.menu-navigation {
  position: absolute;
  right: 0;
  z-index: $zIndex-3;
  background: $color-7;
  transform: translateX(100%);
  transition: transform 0.4s;
  border-radius: 0 0 0 8px;
  user-select: none;
  //background-image: radial-gradient($color-7 1px, transparent 0);
  //background-size: 4px 4px;

  &.active {
    transform: translateX(0);
  }

  & > nav {
    width: 200px;
    height: 100%;
    z-index: $zIndex-4;
    display: flex;
    flex-direction: column;
    padding-top: 55px;
    padding-bottom: 50px;

    a {
      margin-top: 10px;
      font-family: DancingScript, sans-serif;
      font-size: 30px;
    }
  }
}
</style>
