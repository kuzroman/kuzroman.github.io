<template>
  <div class="flexible">
    <article ref="cardEl" class="flexible__card">
      <div class="flexible__content">
        <slot name="default">
          <h2>Title</h2>
        </slot>
        <slot name="desc">
          <p>Awesome text</p>
        </slot>
      </div>
    </article>
  </div>
</template>

<script setup>
const THRESHOLD = 15
const cardEl = ref()

onMounted(() => {
  if (window.innerWidth < 480) {
    return
  }
  const motionMatchMedia = window.matchMedia('(prefers-reduced-motion)')
  if (!motionMatchMedia.matches) {
    cardEl.value.addEventListener('mousemove', handleHover)
    cardEl.value.addEventListener('mouseleave', resetStyles)
  }
})

onBeforeUnmount(() => {
  cardEl.value.removeEventListener('mousemove', handleHover)
  cardEl.value.removeEventListener('mouseleave', resetStyles)
})

function handleHover(e) {
  const { clientX, clientY, currentTarget } = e
  const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget

  const horizontal = (clientX - offsetLeft) / clientWidth
  const vertical = (clientY - offsetTop) / clientHeight
  const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2)
  const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2)

  cardEl.value.style.transform = `perspective(${clientWidth}px) rotateX(${-rotateY}deg) rotateY(${-rotateX}deg) scale3d(1, 1, 1)`
}

function resetStyles(e) {
  cardEl.value.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/props';

.flexible {
  position: relative;

  &__card {
    background: url('assets/images/yelloustoun.jpg') no-repeat;
    background-size: cover;
    position: relative;
    color: #fff;
    transition: transform 0.1s ease;

    &::before {
      content: '';
      background: rgba(0, 0, 0, 0.4);
      position: absolute;
      height: 100%;
      width: 100%;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
    }

    &:hover .content {
      transform: translateZ(12px);
    }
  }

  &__content {
    position: relative;
    z-index: 1;
    transition: transform 0.3s ease;
  }
}

@media (max-width: $mq-phone) {
  .flexible {
    &__card {
      &:hover .content {
        transform: none;
      }
    }
  }
}
</style>
