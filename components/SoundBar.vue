<template>
  <div>
    <div class="radio">
      <UISoundBar
        class="play"
        :is-active="isActive"
        :class="{hide: isGameReady}"
        @click="switchPlayPause"
      />
      <div class="stations" @click="handleClickRadio">
        <div
          class="pt-0"
          :class="{underline: isUnderlineRadio(Stations.MAXIMUM)}"
          :data-key="Stations.MAXIMUM"
        >
          Maximum
        </div>
        <div :class="{underline: isUnderlineRadio(Stations.POP90)}" :data-key="Stations.POP90">
          90s pop
        </div>
        <div :class="{underline: isUnderlineRadio(Stations.CYBER_SPACE)}" :data-key="Stations.CYBER_SPACE">
          Cyber Space
        </div>
      </div>
      <video ref="player" class="video" playsinline />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'

enum Stations {
  MAXIMUM = 'maximum',
  POP90 = 'pop90',
  CYBER_SPACE = 'cyberSpace',
}

const src = {
  [Stations.MAXIMUM]: 'https://maximum.hostingradio.ru/maximum96.aacp',
  [Stations.POP90]: 'https://90s90s.hoerradar.de/90s90s-pop-mp3-hq',
  [Stations.CYBER_SPACE]: 'https://pub0101.101.ru/stream/pro/aac/64/79'
}

const store = useStore()
const isActive = ref(false)
const isGameReady = computed(() => store.getters['game/isGameReady'])
const radioKey = computed<Stations>(() => store.getters['app/radioKey'])
const player = ref<HTMLVideoElement>(null)
const prevStation = ref()

const setRadioKey = (key: string) => {
  setPrevStationKey(radioKey.value)
  store.commit('app/setRadioKey', key)
}
const setPrevStationKey = (key: string) => {
  prevStation.value = key
}

onMounted(() => {
  setRadioKey(Stations.MAXIMUM)
  setSrc(src[Stations.MAXIMUM])
})

const setSrc = (srs: string) => {
  player.value.setAttribute('src', srs)
}

const isUnderlineRadio = (key: string) => {
  return radioKey.value === key
}

const handleClickRadio = (ev: Event) => {
  if (!(ev.target instanceof HTMLElement)) { return }
  const key = ev.target.dataset.key as string
  switchRadio(key)
}
const switchRadio = (key: string) => {
  setRadioKey(key)
  setSrc(src[radioKey.value])
  isActive.value && prevStation.value === radioKey.value ? pause() : play()
}
watch(() => isGameReady.value, (isTrue) => {
  isTrue && pause()
})

const switchPlayPause = () => {
  player.value.paused ? play() : pause()
}
const play = () => {
  player.value.play()
  isActive.value = true
}
const pause = () => {
  player.value.pause()
  isActive.value = false
}

</script>

<style scoped lang="scss">
@import "../assets/styles/props";

.radio {
  display: flex;
  align-items: center;
  font-family: 'DancingScript', sans-serif;
  position: absolute;
  top: .5em;
  left: 2em;
  z-index: 10;
  user-select: none;

  &:hover {
    .stations {
      max-width: 100%;
      border: none;
    }
  }

  .stations {
    max-width: 0;
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    transition: max-width .3s;
    font-size: 26px;

    div {
      display: inline-block;
      padding: 8px 10px;
      cursor: pointer;
    }
  }

  .play {
    display: inline-block;
    position: relative;
    transform: translateY(0);
    transition: transform .3s;
    z-index: $zIndex-2;

    &.hide {
      transform: translateY(-10em);
    }
  }

  .video {
    display: none;
    width: 0;
    height: 0;
  }
}

@media (max-width: $mq-phone) {
  .radio {
    left: 0;
    top: 0;
    align-items: start;

    &:hover {
      .stations {
        max-height: 100%;
      }
    }

    .play {
      transform: translate(16px, 16px);
    }

    .stations {
      max-height: 0;
      display: flex;
      flex-direction: column;
      background: $color-9;
      border-radius: 0 0 8px 0;
      position: relative;
      transform: translate(-30px, 0px);
      padding-left: 52px;
    }
  }
}
</style>
