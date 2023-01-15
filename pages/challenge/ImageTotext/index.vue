<template>
  <div class="scroll-y">

    <div>(OSR) Optical character recognition</div>

    <div class="images">
      <img :src="randomMemeUrl">
      <div>Text inner image:</div>
      <div>{{ stringFromImage }}</div>
    </div>

<!--    <input @change="setFile" type="file">-->
<!--    <button @click="getStringByFile">Get Text</button>-->
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import {useStore} from "vuex"
import { ofetch } from 'ofetch'

const store = useStore()
store.commit('app/setIsPageLoaderHide', true)

const file = ref()
const randomMemeUrl = ref('');
const pathToDownloadedFile = ref('');
const stringFromImage = ref('');

onMounted(async () => {
  
  randomMemeUrl.value = await getMemeUrl()

  const { data } = await useFetch('/api/getRandomMeme', {
    method: 'POST',
    body: { url: randomMemeUrl.value }
  })
  // const value:FileData = data.value

  console.log("data", data);

  // // now we have no CORS file
  const importImages = import.meta.glob('~/assets/challenge/ImageToText/*.*')
  pathToDownloadedFile.value = `/_nuxt/${data.value.directory}/${data.value.fileName}.${data.value.fileType}`
  console.log('importImages', importImages);

  file.value = await getFileFromUrl(pathToDownloadedFile.value)
  console.log('file', file.value);
  await getStringByFile1(file.value)
})

onUnmounted(() => {
  debugger
})

async function getFileFromUrl(url: string) {
  // https://preview.redd.it/181ncpyq7eba1.jpg?width=640&crop=smart&auto=webp&s=887203388dc8616909cb224489f1798840ddd8d1
  const fileName = url.split('/').at(-1) as string

  // const response = await fetch(url)
  // const data = await response.blob()
  const blob = await ofetch(url, {responseType: 'blob'})

  console.log('fileName', fileName, blob);

  return blob

  // return new File([blob], fileName, {
  //   type: blob.type
  // })
}

async function getStringByFile1(file: File) {
  // console.log('file', file);

  const formData = new FormData();
  formData.append('image', file);

  axios.post('https://api.api-ninjas.com/v1/imagetotext', formData,{
    headers: {
      "Content-Type": "multipart/form-data",
      "X-Api-Key": 'NYU1gAiQjDbX5zmq5E16wg==dGQOlldR4D80fX7E',
    },
  }).then((res) => {
    stringFromImage.value = res.data.map(obj => obj.text).join(' ')
    console.log('res', res);
    // debugger
  }).catch(e => console.error(e))
}

const getMemeUrl = async () => {
  let url = ''
  await axios.get('https://meme-api.com/gimme')
    .then((res) => {
      const preview = res.data.preview
      url = preview[3] || preview.at(-1)
    })
    .catch(error => console.log(error))
  return url
};

// async function getStringByFile2(file: File) {
//
//   axios.post('https://api.ocr.space/parse/image', {
//     apikey: 'K82999452288957',
//     file: file,
//     // filetype: 'JPG'
//     // language: 'eng',
//   })
//
//   // axios.get(`https://api.ocr.space/parse/imageurl?apikey=K82999452288957&url=${src}`)
//     .then(response => {
//     // console.log(response.data.ParsedResults[0].ParsedText);
//     console.log(response);
//   })
//     .catch(error => {
//       console.log(error);
//     });
// }

// function setFile(event) {
//   file.value = <HTMLInputElement>event?.target?.files[0]
//   // console.log('ev', event.target.files);
// }

// function addTesseractScript () {
//   // if (document.getElementById('my-datatable')) return;
//   let scriptTag = document.createElement('script');
//   scriptTag.src = "https://unpkg.com/tesseract.js@v2.1.0/dist/tesseract.min.js";
//   scriptTag.id = "tesseract";
//   document.getElementsByTagName('head')[0].appendChild(scriptTag);
// }

// function getImageText(file: File) {
//   // https://ocr.space/ocrapi#ocrengine
//   axios.post('https://api.ocr.space/parse/image', {
//     apikey: 'K82999452288957',
//     file: file,
//     // filetype: 'JPG'
//     // language: 'eng',
//   })
//     .then(response => {
//       console.log(response.data.ParsedResults[0].ParsedText);
//     })
//     .catch(error => console.log(error));
// }

// const memeText = ref('');
// function getImageText (imageUrl: string) {
//   console.log('imageUrl', imageUrl);
//   // https://ocr.space/ocrapi#ocrengine
//   axios.get(`https://api.ocr.space/parse/imageurl?apikey=K82999452288957&url=${imageUrl}`)
//     .then(response => {
//       memeText.value = response.data.ParsedResults[0].ParsedText
//       console.log(memeText.value);
//     })
//     .catch(error => console.log(error));
// }

// const importImages = import.meta.glob('~/assets/memes/*.*') // todo how to read directory!

// function getImageUrl(path: string) {
//   const name = path.split('/').at(-1)
//   return `/_nuxt/assets/memes/${name}` // todo fucking crutch!
// }

// const handleImageClick = (ev: Event) => {
//   // const element = ev.target as HTMLImageElement
//   const base64 = encodeImageToBase64(ev.target as HTMLImageElement)
//   // console.log(base64);
//   // getImageText(base64)
// };
//
// function encodeImageToBase64(img: HTMLImageElement): string {
//   const c = document.createElement('canvas');
//   c.height = img.naturalHeight;
//   c.width = img.naturalWidth;
//   const ctx = c.getContext('2d');
//   ctx?.drawImage(img, 0, 0, c.width, c.height);
//   return c.toDataURL();
// }
</script>

<style lang="scss">
@import "~/assets/styles/props";

.images {

  img {
    width: 300px;
    padding: 6px;
    cursor: pointer;

    &:hover {
      background: #6c6c6c;
    }
  }
}
</style>
