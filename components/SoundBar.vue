<template>
  <UiSoundBar
    class="sound-bar"
    :isActive="isActive"
    :class="stateClass"
    @click.native="switchPlayPause"
  />
</template>

<script setup>
import UiSoundBar from './UI/SoundBar.vue'
import backgroundMusic from '../assets/media/backgroundSite.mp3'
import CustomAudio from './abstractions/Audio'
import { useStore, mapGetters} from "vuex";

let audioBG
const store = useStore();
const isActive = ref(false);
const isGameReady = computed(() => store.getters['game/isGameReady']);
const stateClass = computed(() => isGameReady.value ? 'hide' : '');

watch(() => isGameReady.value, (isTrue) => {
  isTrue && stop()
})

const switchPlayPause = () => {
  audioBG.isPlaying() ? stop() : play()
};
const play = () => {
  audioBG.play()
  isActive.value = true
};
const stop = () => {
  audioBG.pause()
  isActive.value = false
};
onMounted(() => {
  audioBG = new CustomAudio(backgroundMusic, 1,true)
})
onUnmounted(() => {
  audioBG.destroy()
})
</script>

<style lang="scss">
@import "../assets/styles/props";

.sound-bar {
  position: absolute;
  top: 1.6em;
  left: 2em;
  transform: translateY(0);
  transition: transform .3s;
  z-index: $zIndex-2;

  &.hide {
    transform: translateY(-10em);
  }

  @media (max-width: $mq-phone) {
    top: .8em;
    left: 1em;
  }
}
</style>
