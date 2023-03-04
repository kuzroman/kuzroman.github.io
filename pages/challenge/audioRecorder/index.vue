<template>
  <div>
    <template v-if="!isAllowed">
      <p class="my-5">Click Start and "Allow" your microphone Permission!</p>
      <button type="primary" @click="handlerStart">Start</button>
    </template>
    <template v-else>
      <button v-if="isRecording" type="primary" @click="handlerStop">
        Stop and play it
      </button>
      <button v-else type="primary" @click="handlerRecord">
        Record your voice
      </button>
    </template>

    <div v-if="audioChunks.length">
      <audio
        v-for="(chunk, i) in audioChunks"
        :key="i"
        :src="chunkToUrl(chunk)"
        controls
        class="my-5 h-10 audio"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'
const store = useStore()
store.commit('app/setIsPageLoaderHide', true)

enum MediaRecorderState {
  INACTIVE = 'inactive',
  RECORDING = 'recording',
}

const audioChunks = ref<Blob[]>([])
let mediaRecorder: MediaRecorder | null = null
const isAllowed = ref(false)
const recorderState = ref(MediaRecorderState.INACTIVE)

const isRecording = computed(() => {
  return recorderState.value === MediaRecorderState.RECORDING
})

const chunkToUrl = (chunk: Blob) => {
  const audioBlob = new Blob([chunk])
  return URL.createObjectURL(audioBlob)
}

const handlerStart = () => {
  isAllowed.value = true
  navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
    mediaRecorder = new MediaRecorder(stream)

    mediaRecorder.addEventListener('dataavailable', pushChunk)
    mediaRecorder.addEventListener('stop', playLastChunk)
  })
}

const killMedia = () => {
  if (!mediaRecorder) {
    return
  }
  mediaRecorder.removeEventListener('dataavailable', pushChunk)
  mediaRecorder.removeEventListener('stop', playLastChunk)
  mediaRecorder = null
}

const pushChunk = (event: BlobEvent) => {
  audioChunks.value.push(event.data)
}

const handlerRecord = () => {
  if (!mediaRecorder) {
    return
  }
  if (mediaRecorder.state === MediaRecorderState.INACTIVE) {
    mediaRecorder.start()
    recorderState.value = MediaRecorderState.RECORDING
  }
}

const handlerStop = () => {
  if (!mediaRecorder) {
    return
  }
  if (mediaRecorder.state === MediaRecorderState.RECORDING) {
    mediaRecorder.stop()
    recorderState.value = MediaRecorderState.INACTIVE
  }
}

const playLastChunk = () => {
  const audioList = document.querySelectorAll('audio')
  const lastAudio = audioList[audioList.length - 1]
  lastAudio.play()

  // const audioBlob = new Blob([audioChunks.value[audioChunks.value.length - 1]]);
  // let audioUrl = URL.createObjectURL(audioBlob);
  // const audio = new Audio(audioUrl);
  // audio.play();
}

onUnmounted(killMedia)
</script>

<style scoped>
button {
  background: #409eff;
  border-radius: 6px;
  padding: 6px 12px;
  color: white;
}
</style>
