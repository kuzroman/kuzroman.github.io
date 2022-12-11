<template>
  <div class="menu-navigation" :class="{ active: isMenuNavigationOpened }">
    <nav>
      <UILink2Move
          v-for="route in navigation"
          :key="route?.name"
          :text="route?.name"
          @click.native="toPage({ route })"
      />
    </nav>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'

const route = useRoute()

const store = useStore();
const isMenuNavigationOpened = computed(() => store.getters['app/isMenuNavigationOpened']);
const navigation = computed(() => store.getters['app/navigation']);
// const isSiteFirstLoaded = computed(() => store.getters['app/isSiteFirstLoaded']);

const toPage = (route) => {
  console.log("route" , route);
  store.commit('app/toPage', route)
};
</script>

<style lang="scss">
@import '../assets/styles/props.scss';

.menu-navigation {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: $zIndex-3;
  background: $color-7;
  transform: translateY(-100%);
  transition: transform 0.4s;

  &.active {
    transform: translateY(0);
  }

  & > nav {
    height: 100%;
    z-index: $zIndex-4;
    display: flex;
    flex-direction: column;
    padding: 50px;
  }
}
</style>
