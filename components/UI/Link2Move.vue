<template>
  <a class="ui-link-move" :href="href" :target="target">
    <span>{{ text }}</span>
  </a>
</template>

<script setup>
defineProps({
  text: {type: String, default: 'someText'},
  href: {type: String, default: null},
  target: {type: String, default: null},
})
</script>

<style lang="scss">
@import "../../assets/styles/props.scss";

.ui-link-move {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  position: relative;
  color: $color-1;
  text-align: center;
  font-size: 2em;
  text-decoration: none;
  overflow: hidden;
  transition: color 0.4s;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    color: $color-2;

    &:before,
    &:after {
      transform: translateX(0);
    }
  }

  &:before,
  &:after {
    background: $color-8;
    content: '';
    width: 100%;
    position: absolute;
    left: 0;
    transition: transform 0.4s cubic-bezier(0.65, 0.15, 0, 1);
  }

  &:before {
    transform: translateX(-100%);
    height: 70%;
    top: 0;
  }

  &:after {
    transform: translateX(100%);
    transition-delay: 125ms;
    height: 30%;
    bottom: 0;
  }

  > span {
    z-index: $zIndex-1;
    position: relative;
  }
}
</style>