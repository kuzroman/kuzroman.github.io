<template>
  <div>
    <template v-if="!isAllowed">
      <p class="my-5">Click Start and "Allow" your microphone Permission!</p>
      <el-button @click="handlerStart" type="primary">Start</el-button>
    </template>
    <template v-else>
      <el-button
        v-if="isRecording"
        @click="handlerStop"
        type="primary"
      >
        Stop and play it
      </el-button>
      <el-button
        v-else
        @click="handlerRecord"
        type="primary"
      >
        Record your voice
      </el-button>
    </template>

    <div v-if="audioChunks.length">
      <audio
        v-for="(chunk, i) in audioChunks"
        :src="chunkToUrl(chunk)"
        controls
        :key="i"
        class="my-5 h-10 audio"
      >
      </audio>
    </div>

  </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';
const store = useStore()
store.commit('app/setIsPageLoaderHide', true)

enum MediaRecorderState {
  INACTIVE = 'inactive',
  RECORDING = 'recording',
}

let audioChunks = ref<Blob[]>([]);
let mediaRecorder: MediaRecorder | null = null;
const isAllowed = ref(false);
const recorderState = ref(MediaRecorderState.INACTIVE);

const isRecording = computed(() => {
  return recorderState.value === MediaRecorderState.RECORDING;
});

const chunkToUrl = (chunk: Blob) => {
  const audioBlob = new Blob([chunk]);
  return URL.createObjectURL(audioBlob);
};

const handlerStart = () => {
  isAllowed.value = true;
  navigator.mediaDevices.getUserMedia({ audio: true })
    .then((stream) => {
      mediaRecorder = new MediaRecorder(stream);

      mediaRecorder.addEventListener('dataavailable', pushChunk);
      mediaRecorder.addEventListener('stop', playLastChunk);
    })
};

const killMedia = () => {
  if (!mediaRecorder) return
  mediaRecorder.removeEventListener('dataavailable', pushChunk)
  mediaRecorder.removeEventListener('stop', playLastChunk)
  mediaRecorder = null
};

const pushChunk = (event: BlobEvent) => {
  audioChunks.value.push(event.data);
};

const handlerRecord = () => {
  if (!mediaRecorder) return
  if (mediaRecorder.state === MediaRecorderState.INACTIVE) {
    mediaRecorder.start()
    recorderState.value = MediaRecorderState.RECORDING
  }
};

const handlerStop = () => {
  if (!mediaRecorder) return
  if (mediaRecorder.state === MediaRecorderState.RECORDING) {
    mediaRecorder.stop()
    recorderState.value = MediaRecorderState.INACTIVE
  }
};

const playLastChunk = () => {
  const audioList = document.querySelectorAll('audio')
  let lastAudio = audioList[audioList.length- 1];
  lastAudio.play()

  // const audioBlob = new Blob([audioChunks.value[audioChunks.value.length - 1]]);
  // let audioUrl = URL.createObjectURL(audioBlob);
  // const audio = new Audio(audioUrl);
  // audio.play();
};

onUnmounted(killMedia)

</script>

<style scoped>

</style>