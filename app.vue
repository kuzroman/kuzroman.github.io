<template>
  <div class="app">
<!--    <PageLoader v-if="!isPageLoaderHide" />-->
    <MenuNavigation />
    <IconBurger />
    <SoundBar />
    <ComeBack />

    <main class="content">
      <router-view v-slot="{ Component }">
        <transition name="fade">
            <component :is="Component" class="view" :class="routeStyles"  />
        </transition>
      </router-view>

      <div class="content-arrow left" v-if="showArrow" :class="{ hide: isGameReady }">
        <a @click="toPage({ route: prevRoute, direction: 'to-left' })">
          <PageControl direction="left" :text="prevRoute?.name" />
        </a>
      </div>

      <div class="content-arrow right" v-if="showArrow" :class="{ hide: isGameReady }">
        <a @click="toPage({ route: nextRoute, direction: 'to-right' })">
          <PageControl direction="right" :text="nextRoute?.name" />
        </a>
      </div>
    </main>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'

const store = useStore()
const route = useRoute()
const router = useRouter()

store.commit('app/setRoutes', router)

const transitionDirection = computed(() => store.getters['app/transitionDirection']);
const isSiteFirstLoaded = computed(() => store.getters['app/isSiteFirstLoaded']);
// const isPageLoaderHide = computed(() => store.getters['app/isPageLoaderHide']);
const navigation = computed(() => store.getters['app/navigation']);
const isGameReady = computed(() => store.getters['game/isGameReady']);
const routesLen = computed(() => navigation.value.length);

const toPage = (page) => store.commit('app/toPage', page)

onMounted(() => {
  let navigation = []
  router.options.routes.forEach(route => {
    if (route.name.indexOf('-id') === -1) navigation.push(route)
  })
  // console.log('navigation', navigation);
  store.commit('app/setNavigation', navigation)
})

const routeStyles = computed(() => {
  let styles = []
  styles.push(transitionDirection.value)
  // if (isSiteFirstLoaded.value) {
  //   styles.push('first-loaded')
  // }
  return styles
});

const currentPath = computed(() => {
  console.log(route.path);
  return route.path
});
// console.log('currentPath', currentPath.value);


// watch(
//     () => route.params.id,
//     async newId => {
//       console.log('newId', newId);
//       userData.value = await fetchUser(newId)
//     }
// )

const currentRouteIndex = computed(() => {
  // console.log('navigation',navigation.value);
  return navigation.value.findIndex((x) => {
    // console.log(x);
    return x.path === currentPath.value
  })
})
const showArrow = computed(() => !route.params.id);
const prevRoute = computed(() => {
  return currentRouteIndex.value === 0
      ? navigation.value[routesLen.value - 1]
      : navigation.value[currentRouteIndex.value - 1]
});
const nextRoute = computed(() => {
  return currentRouteIndex.value === routesLen.value - 1
      ? navigation.value[0]
      : navigation.value[currentRouteIndex.value + 1]
});
</script>

<style lang="scss">
@import "assets/styles/index.scss";

.app {
  height: 100%;

  .content {
    width: 100%;
    height: 100%;
    overflow: hidden;
    color: $color-12;

    .view {
      width: 100vw;
      height: 100vh;
      padding: 0 15%;
      margin: auto;
      background: $color-9;
      position: absolute;
    }

    &-arrow {
      display: flex;
      justify-content: center;
      flex-direction: column;
      position: absolute;
      height: 100%;

      @media (max-width: $mq-phone) {
        display: none;
      }

      &.left {
        left: 2em;
        transform: translateX(0);
        transition: transform 0.3s;

        &.hide {
          transform: translateX(-10em);
        }
      }

      &.right {
        right: 2em;
        transform: translateX(0);
        transition: transform 0.3s;

        &.hide {
          transform: translateX(10em);
        }
      }
    }
  }

  $speed: .6s;

  .to-left {
    &.fade-leave-active {
      animation: rotateNextLeave $speed forwards;
    }

    &.fade-enter-active {
      animation: rotateNextEnter $speed forwards;
    }
  }

  .to-right {
    &.fade-leave-active {
      animation: rotatePrevLeave $speed forwards;
    }

    &.fade-enter-active {
      animation: rotatePrevEnter $speed forwards;
    }
  }

  .fade-leave-active {
    z-index: $zIndex-1;
    animation: rotateNextLeave $speed forwards;
  }

  .fade-enter-active {
    animation: rotateNextEnter $speed forwards;
  }

  //.first-loaded {
  //  &.fade-enter-active {
  //    animation: rotateNextEnter 0s forwards;
  //  }
  //}

  @keyframes rotateNextLeave {
    0% {
      //left: 0;
      transform: translateX(0) rotateY(0deg);
    }
    100% {
      //left: 50%;
      transform: translateX(50%) perspective(100em) rotateY(90deg);
    }
  }

  @keyframes rotateNextEnter {
    0% {
      left: -100%;
    }
    100% {
      left: 0;
    }
  }

  @keyframes rotatePrevLeave {
    0% {
      left: 0;
      transform: rotateY(0deg);
    }
    100% {
      left: -50%;
      transform: perspective(100em) rotateY(270deg);
    }
  }

  @keyframes rotatePrevEnter {
    0% {
      left: 100%;
    }
    100% {
      left: 0;
    }
  }
}
</style>
