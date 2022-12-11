<template>
  <div>
    <NuxtWelcome />
    <Test-1 />
    <Test-2 />
  </div>
</template>

<script setup>
  import { useStore } from 'vuex'
  const store = useStore()

  const count = computed(() => store.state.module.count)
  const increment = () => store.commit('module/increment')

  console.log('increment', increment);
  increment()

  console.log('store', store);
  console.log('count', count.value);



  // // import { useCounter } from './composables/common';
  // import { mapMutations } from 'vuex';
  // const { $vuex } = useNuxtApp()
  //
  // // const counter = useCounter()
  // // console.log('counter', counter.value);
  //
  // const mutations = {  ...mapMutations('module', ['increment']) };
  //
  // // const { increment } = mapMutations('module', ['increment'])
  // const { increment } = mutations
  // console.log('increment', increment);
  //
  // // const { count, some } = $vuex.state;
  // console.log('mutations', {  ...mapMutations('module', ['increment']) });
  // console.log('store', $vuex.state.module.count);

</script>