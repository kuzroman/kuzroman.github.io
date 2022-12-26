<template>
  <div class="scroll">
    <div
      class="p-2 border-amber-50 border"
      v-for="(item, index) in list"
      :key="index"
    >
      <b class="text-lg">{{ index }}</b>
      <span> - {{ item.desc }}</span>
    </div>
    <div class="box p-2 invisible"></div>
  </div>
</template>

<script setup lang="ts">
import {useStore} from "vuex";

const store = useStore()
store.commit('app/setIsPageLoaderHide', true);
const list = ref(getList(20));

onMounted(() => {
  const scroll = document.querySelector('.scroll') as HTMLElement;
  const box = document.querySelector('.box') as HTMLElement;
  scroll.addEventListener('scroll', updateByScroll.bind({box}), { passive: true })
})

onUnmounted(() => document.body.removeEventListener('scroll', updateByScroll))

function updateByScroll (this: {box: HTMLElement} ) {
  if (!isInViewport(this.box)) return false
  list.value.push(...getList(20))
  console.log('added');
}

function getList (num: number):{}[] {
  return Array(num).fill(0).map(i => ({desc: makeid(100) }))
}

function makeid(length: number) {
  let result           = '';
  let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let charactersLength = characters.length;
  for ( let i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result.split('').join(' ');
}

function isInViewport(el: HTMLElement) {
  if (!el) return;
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
</script>

<style lang="scss">
.app .content .scroll {
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  word-wrap: break-word;
}
</style>
