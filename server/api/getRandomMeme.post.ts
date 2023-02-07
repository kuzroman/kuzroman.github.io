import fs from 'fs'
// import path from 'path'
// import axios from "axios";
import { ofetch } from 'ofetch'

// import { dirname } from 'path';
// import { fileURLToPath } from 'url';
// const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineEventHandler(async function (event) {
  const body = await readBody(event)
  console.log('body', body); // get POST payload
  // const img = await axios.get(body.url) // todo it work but need return blob file!

  const imgBlob = await ofetch(body.url, { responseType: 'blob' });

  // let buff = new Buffer(imgBlob);
  // let base64data = buff.toString('base64');
  // console.log('imgBlob', imgBlob.data); // todo work for axios

  const fileType = imgBlob.type.split('/').at(-1)
  console.log('imgBlob', imgBlob, fileType);

  const buffer = Buffer.from( await imgBlob.arrayBuffer() );
  fs.writeFile('./assets/challenge/ImageToText/file.' + fileType, buffer, () => console.log('video saved!'));

  return {
    //blob: imgBlob, // todo can't see it on front
    fileName: 'file',
    fileType: fileType,
    directory: 'assets/challenge/ImageToText'
  }
})

// function someAsyncFunc() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve({data: 1111});
//     }, 100);
//   });
// }