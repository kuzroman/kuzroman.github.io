<template>
  <div class="app">
    <PageLoader v-if="!isPageLoaderHide" />
    <MenuNavigation />
    <IconBurger />
    <SoundBar />
    <ComeBack />

    <main class="content">
      <router-view v-slot="{ Component }">
        <transition
          name="fade"
          @after-enter="onAfterEnter"
          @before-leave="onBeforeLeave"
        >
          <component :is="Component" class="view pt-28" :class="routeStyles" />
        </transition>
      </router-view>

      <div v-if="showArrow" class="content-arrow left" :class="{ hide: isGameReady }">
        <a @click="toPage({ route: prevRoute, direction: 'to-left' })">
          <PageControl direction="left" :text="prevRoute?.name" />
        </a>
      </div>

      <div v-if="showArrow" class="content-arrow right" :class="{ hide: isGameReady }">
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

const transitionDirection = computed(() => store.getters['app/transitionDirection'])
const isPageLoaderHide = computed(() => store.getters['app/isPageLoaderHide'])
const navigation = computed(() => store.getters['app/navigation'])
const isGameReady = computed(() => store.getters['game/isGameReady'])
const routesLen = computed(() => navigation.value.length)

const toPage = page => store.commit('app/toPage', page)

const onBeforeLeave = () => {
  store.commit('app/setIsPageAnimationFinished', false)
}
const onAfterEnter = () => {
  store.commit('app/setIsPageAnimationFinished', true)
}

onMounted(() => {
  runGoogleAnal()

  const navigation = []
  router.options.routes.forEach((route) => {
    if (!route.name.includes('-id')) { navigation.push(route) }
  })
  store.commit('app/setNavigation', navigation)

  store.commit('app/isMobile', mobileCheck())
  window.addEventListener('resize', resize)
})

onUnmounted(() => {
  window.removeEventListener('resize', resize)
})

const resize = () => {
  store.commit('app/isMobile', mobileCheck())
}

const mobileCheck = () => {
  return window.innerWidth < 480
}

const runGoogleAnal = () => {
  window.dataLayer = window.dataLayer || []

  function gtag () {
    dataLayer.push(arguments)
  }

  gtag('js', new Date())
  gtag('config', 'G-XWDSRJ4TEC')
}

const routeStyles = computed(() => {
  const styles = []
  styles.push(transitionDirection.value)
  return styles
})

const currentPath = computed(() => route.path)

const currentRouteIndex = computed(() => {
  return navigation.value.findIndex((x) => {
    return x.path === currentPath.value
  })
})
const showArrow = computed(() => !route.params.id)
const prevRoute = computed(() => {
  return currentRouteIndex.value === 0
    ? navigation.value[routesLen.value - 1]
    : navigation.value[currentRouteIndex.value - 1]
})
const nextRoute = computed(() => {
  return currentRouteIndex.value === routesLen.value - 1
    ? navigation.value[0]
    : navigation.value[currentRouteIndex.value + 1]
})
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
      padding-left: $px-desk;
      padding-right: $px-desk;
      margin: auto;
      //background: $color-9;
      position: absolute;
      background-image: radial-gradient($color-9 1px, transparent 0);
      background-size: 4px 4px;
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

  @keyframes rotateNextLeave {
    0% {
      transform: translateX(0) rotateY(0deg);
    }
    100% {
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

@media (max-width: $mq-phone) {
  .app {
    .to-left {
      &.fade-leave-active {
        animation: none
      }
      &.fade-enter-active {
        animation: none
      }
    }
    .to-right {
      &.fade-leave-active {
        animation: none
      }
      &.fade-enter-active {
        animation: none
      }
    }
    .fade-leave-active {
      animation: none
    }
    .fade-enter-active {
      animation: none
    }

    .content {

      .view {
        padding-left: $px-mob;
        padding-right: $px-mob;
      }
    }
  }
}
</style>
