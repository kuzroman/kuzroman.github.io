<template>
  <div
    class="ui-icon-arrow"
    :class="classList"
    @mouseover="addActive"
    @mouseleave="removeActive"
  >
    <span>{{ text }}</span>
    <em></em>
  </div>
</template>

<script setup>
const props = defineProps({
  direction: { type: String, default: 'left' },
  text: { type: String, default: 'someText' },
  fadeOut: { type: Boolean, default: false },
})

const isActive = ref(false);

const classList = computed(() => {
  let active = { active: isActive.value }
  let direction = { [props.direction]: true }
  let fadeOut = { fadeOut: props.fadeOut }
  return { ...active, ...direction, ...fadeOut }
});

const addActive = () => isActive.value = true;
const removeActive = () => isActive.value = false;
</script>

<style lang="scss">
@import './_props.scss';

$iconSize: 36px;

.ui-icon-arrow {
  width: $iconSize;
  height: $iconSize;
  position: relative;
  cursor: pointer;

  &.left,
  &.right {
    transform: translateX(0);
    transition: transform 0.6s;
  }

  & span {
    display: block;
    position: absolute;
    line-height: $iconSize;
    opacity: 0;
    transition: opacity 0.1s ease 0.125s,
      right 0.3s cubic-bezier(0, 0, 0, 1) 0.125s,
      left 0.3s cubic-bezier(0, 0, 0, 1) 0.125s;
    color: $color-10;
    font-weight: bold;
  }
  &.active {
    & span {
      opacity: 1;
    }
  }

  & em {
    &:before,
    &:after {
      content: ' ';
      position: absolute;
      right: 0;
      height: 100%;
      width: 2px;
      background-color: #7a7a7a;
      transform-origin: 50% 100% 0;
      transition: transform 0.16s ease-out;
      top: -50%;
    }
  }

  &.right {
    & span {
      right: 50%;
    }
    &.active {
      & span {
        right: 100%;
      }
    }
    & em {
      &:before {
        transform: rotate(-45deg);
      }

      &:after {
        transform: rotate(-135deg);
      }
    }
    &.active {
      & em {
        &:before {
          transform: rotate(-30deg);
        }
        &:after {
          transform: rotate(-150deg);
        }
      }
    }
  }

  &.left {
    & span {
      left: 50%;
    }
    &.active {
      & span {
        left: 100%;
      }
    }
    & em {
      &:before,
      &:after {
        left: 0;
      }

      &:before {
        transform: rotate(45deg);
      }
      &:after {
        transform: rotate(135deg);
      }
    }
    &.active {
      & em {
        &:before {
          transform: rotate(30deg);
        }
        &:after {
          transform: rotate(150deg);
        }
      }
    }
  }

  &.fadeOut {
    & span {
      opacity: 0;
      transition: opacity 0.3s;
    }
    &.left {
      transform: translateX(-10em);
      & span {
        left: 50%;
        transition: left 0.3s;
        transition-delay: 0.3s;
      }

      & em {
        &:before,
        &:after {
          transform: rotate(90deg);
          transition: opacity 0.3s;
        }
      }
    }
    &.right {
      transform: translateX(10em);
      & span {
        right: 50%;
        transition: right 0.3s;
        transition-delay: 0.3s;
      }

      & em {
        &:before,
        &:after {
          transform: rotate(-90deg);
          transition: opacity 0.3s;
        }
      }
    }
  }
}
</style>
