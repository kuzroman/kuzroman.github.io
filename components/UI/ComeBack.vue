<template>
  <div class="ui-come-back">
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
  </div>
</template>

<script>
export default {
  name: 'UIComeBack',
}
</script>

<style lang="scss">
@import './_props.scss';

.ui-come-back {
  width: 28px;
  height: 28px;
  cursor: pointer;
  transition: .3s;
  display: block;
  position: relative;

  &:hover {
    width: 48px;
    height: 48px;

    i {
      &:nth-child(1) {transform: translate(20px, 0)}
      &:nth-child(7) {transform: translate(20px, 20px)}
      &:nth-child(3) {transform: translate(30px, 10px)}
      &:nth-child(9) {transform: translate(40px, 10px)}
    }
  }

  i {
    width: 8px;
    height: 8px;
    background: $color-3;
    position: absolute;
    transition: .3s;

    &:nth-child(1) {transform: translate(0, 0)}
    &:nth-child(2) {transform: translate(10px, 0)}
    &:nth-child(3) {transform: translate(20px, 0)}
    &:nth-child(4) {transform: translate(0, 10px)}
    &:nth-child(5) {transform: translate(10px, 10px)}
    &:nth-child(6) {transform: translate(20px, 10px)}
    &:nth-child(7) {transform: translate(0, 20px)}
    &:nth-child(8) {transform: translate(10px, 20px)}
    &:nth-child(9) {transform: translate(20px, 20px)}
  }
}
</style>