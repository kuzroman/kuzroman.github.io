<template>
  <UIComeBack v-if="isPortfolioIDPage" class="come-back" @click="comeBack" />
</template>

<script setup lang="ts">
const router = useRouter()

const isPortfolioIDPage = computed(() => {
  const name = router.currentRoute.value.name as string
  return name === 'portfolio-id' || (name && name.includes('challenge'))
})

const comeBack = () => router.push({ path: '/portfolio' })
</script>

<style lang="scss">
@import '../assets/styles/props';

.come-back {
  position: absolute;
  top: 1.52em;
  right: 8em;
  z-index: $zIndex-3;

  @media (max-width: $mq-phone) {
    top: 4em;
    right: 1.1em;
    width: 48px;
    height: 48px;

    i {
      &:nth-child(1) {
        transform: translate(20px, 0);
      }
      &:nth-child(7) {
        transform: translate(20px, 20px);
      }
      &:nth-child(3) {
        transform: translate(30px, 10px);
      }
      &:nth-child(9) {
        transform: translate(40px, 10px);
      }
    }
  }
}
</style>
