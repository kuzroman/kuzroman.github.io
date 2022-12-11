<template>
  <div class="ui-close-spinner"></div>
</template>

<script>
export default {
  name: 'UICloseSpinner',
}
</script>

<style lang="scss">
.ui-close-spinner {
  width: 30px;
  height: 30px;
  position: absolute;
  cursor: pointer;

  &:before,
  &:after {
    content: '';
    width: 80%;
    height: 2px;
    background-color: #7a7a7a;
    position: absolute;
    top: calc(50% - 1px);
    transform-origin: 50% 50%;
    left: 10%;
  }

  &:before {
    transform: rotate(45deg);
    transition: transform 0.29s cubic-bezier(0.5, 0, 0.3, 0.9) 0.1s;
  }

  &:after {
    transform: rotate(-45deg);
    transition: transform 0.29s cubic-bezier(0.5, 0, 0.3, 0.9);
  }

  &:hover:before {
    transform: rotate(-135deg);
  }
  &:hover:after {
    transform: rotate(135deg);
  }
}
</style>
