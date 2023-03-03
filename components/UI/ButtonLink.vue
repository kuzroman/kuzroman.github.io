<template>
  <a
    class="button-link"
    :href="props.href"
    :target="props.target"
  >
    <slot />
  </a>
</template>

<script setup lang="ts">

const props = defineProps({
  href: { type: String, default: '' },
  target: { type: String, default: '_blank' }
})

</script>

<style lang="scss">
@import './_props.scss';

.button-link {
  display: inline-block;
  text-transform: uppercase;
  font-size: 14px;
  padding: 8px 18px 6px 50px;
  border-radius: 4px;
  background: #325c99 no-repeat 20px center;
  background-size: 15%;
  color: #fff;
  box-shadow: 3px 3px #222;
  text-decoration: none;
  transition: transform .3s;

  &:hover {
    transform: translateY(-2px);
  }
}
</style>
