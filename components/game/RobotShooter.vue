<template>
  <div
    class="robot-shooter"
    :class="state"
    :style="left"
    ref="shooter"
  />
</template>

<script setup>
import { useStore } from 'vuex'
import damageMp3 from '../../assets/media/damage.mp3'
import CustomAudio from '../abstractions/Audio'

const store = useStore()
let audioDamage
const props = defineProps({
  position: {type: Object, default: {}},
})

const isDamage = ref(false);
const shooter = ref(null);
const isGameReady = computed(() => store.getters['game/isGameReady']);
const isGameFinished = computed(() => store.getters['game/isGameFinished']);
const damage = computed(() => store.getters['game/damage']);
const left = computed(() => {
  return {left: props.position.x1 + 'px'}
});
const state = computed(() => {
  return {
    active: isGameReady.value && !isGameFinished.value,
    damage: isDamage.value,
  }
});

const showDamage = () => {
  isDamage.value = true
  setTimeout(() => {
    isDamage.value = false
  }, 300)
};

watch(() => damage.value, () => {
  showDamage()
  audioDamage.replay()
})

onMounted(() => {
  audioDamage = new CustomAudio(damageMp3, 0.3)
})

onUnmounted(() => {
  audioDamage.destroy()
})

defineExpose({
  shooter
})
</script>

<style lang="scss">
.robot-shooter {
  width: 150px;
  height: 150px;
  position: absolute;
  bottom: 0;
  background: url('/img/game/robot.png') no-repeat;
  transform: translateY(10em);
  opacity: 0;
  transition: transform 0.3s, opacity 0.3s;
  display: none;

  &.active {
    transform: translateY(0);
    opacity: 1;
    display: block;
  }

  &.damage {
    &:before {
      content: '';
      display: block;
      height: 100%;
      width: 100%;
      position: absolute;
      border-radius: 50%;
      border-top: 1px solid #ec2525;
      transform: translate(-22px, -20px);
    }
  }
}
</style>
