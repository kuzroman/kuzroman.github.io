<template>
  <div
    class="button-play"
    :disabled="isSeedsFalling"
    :class="stiles"
    @click="handleClick"
  >
    <UIButton :text="text" :disabled="isSeedsFalling" />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import UIButton from '../UI/Button.vue'

export default {
  name: 'ButtonPlay',
  components: { UIButton },
  props: {},
  data() {
    return {
      barrier: {},
      texts: {
        default: 'Destroy this text',
        wait: 'Wait for falling ...',
        again: 'Close',
      },
    }
  },
  computed: {
    ...mapGetters('game', ['isSeedsFalling', 'isGameReady', 'isGameFinished']),

    text() {
      return this.isGameFinished
        ? this.texts.again
        : this.isSeedsFalling
        ? this.texts.wait
        : this.texts.default
    },
    stiles() {
      return {
        disabled: this.isSeedsFalling,
        hide: this.isGameReady && !this.isGameFinished,
      }
    },
  },
  mounted() {
    this.createBarrier()
    this.setBarrier(this.barrier)
  },
  methods: {
    ...mapMutations('game', ['setIsGameReady', 'setBarrier']),

    handleClick() {
      if (this.isSeedsFalling) {
        return
      }

      if (this.isGameFinished) {
        this.$emit('button-play--restart', this.barrier)
        return
      }

      setTimeout(() => {
        this.setIsGameReady(true)
      })
    },
    createBarrier() {
      const rect = this.$el.getBoundingClientRect()
      this.barrier = {
        x1: rect.left,
        x2: rect.left + rect.width,
        y1: rect.top,
      }
    },
  },
}
</script>

<style lang="scss">
@import '../../assets/styles/props.scss';

.button-play {
  width: 14em;
  z-index: $zIndex-1;
  position: absolute;
  bottom: 100px;
  left: calc(50%);
  transform: translate(-7em, 0);
  transition: transform 0.3s;
  user-select: none;

  @media (max-width: $mq-phone) {
    display: none;
  }

  &.hide {
    transform: translateY(20em);
  }
}
</style>
