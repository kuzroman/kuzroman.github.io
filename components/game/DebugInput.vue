<template>
  <div class="debug-input">
    <pre class="left">{{ [...seeds, ...bullets] }}</pre>
    <pre class="right">{{ letters }}</pre>
    <!--    <pre class="left">{{ seeds }}</pre>-->
    <!--    <pre class="right">{{ shooter }}</pre>-->
  </div>
</template>

<script setup>
import { useStore } from 'vuex'

const store = useStore()
const emit = defineEmits(['debug-input--pause'])
const props = defineProps({
  seeds: { type: Array, default: () => [] },
  bullets: { type: Array, default: () => [] },
  letters: { type: Array, default: () => [] },
  shooter: { type: Object, default: () => {} },
})
const isPaused = ref(false)
const isDebug = computed(() => store.getters['game/isDebug'])

const setPauseKey = (key) => {
  const keyName = key || 'Space'
  document.body.addEventListener('keydown', (ev) => {
    if (ev.code === keyName) {
      isPaused.value = !isPaused.value
      // this.pause()
      emit('debug-input--pause', isPaused.value)
    }
  })
  document.body.focus()
}

onBeforeMount(() => {
  if (isDebug.value) {
    setPauseKey('Space')
  }
})
</script>

<style lang="scss">
.debug-input {
  pre {
    border: 1px solid #42b983;
    background: #1c2334;
    padding: 5px 10px;
    position: absolute;
    top: 200px;
  }

  .left {
    left: 0;
  }

  .right {
    right: 0;
  }
}
</style>
