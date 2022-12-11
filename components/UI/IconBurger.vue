<template>
  <div
    class="ui-icon-burger"
    @mouseover="addActive"
    @mouseleave="removeActive"
    :class="{ active: isActive }"
  >
    <i></i>
    <i></i>
    <i></i>
  </div>
</template>

<script>
export default {
  name: 'UIIconBurger', // animation/_IconBurger
  props: {},
  data() {
    return {
      isActive: false,
    }
  },
  computed: {},
  methods: {
    addActive() {
      this.isActive = true
    },
    removeActive() {
      this.isActive = false
    },
  },
}
</script>

<style lang="scss">
@import './_props.scss';

.ui-icon-burger {
  cursor: pointer;

  & > i {
    display: block;
    width: 42px;
    height: 2px;
    margin: 8px;
    background-color: $color-3;

    &:nth-child(n) {
      transition: transform 0.45s cubic-bezier(0.43, 0.77, 0.15, 1.5),
        background 0.3s ease;
    }
  }

  &.active {
    & > i:nth-child(1) {
      transform: translate3d(0, -4px, 0);
    }

    & > i:nth-child(3) {
      transform: translate3d(0, 4px, 0);
    }
  }
}
</style>
