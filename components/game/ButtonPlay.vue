<template>
  <div
    class="button-play"
    @click="handleClick"
    :disabled="disabled"
    :class="stiles"
  >
    <UIButton :text="text" />
  </div>
</template>

<script>
import UIButton from '../UI/Button.vue'
import { mapGetters, mapMutations } from 'vuex'

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
        again: 'Play again',
      },
    }
  },
  computed: {
    ...mapGetters('game', ['isSeedsFall', 'isGameReady', 'isGameFinished']),

    text() {
      return this.isGameFinished
        ? this.texts.again
        : this.isSeedsFall
        ? this.texts.wait
        : this.texts.default
    },
    disabled() {
      return this.isSeedsFall
    },
    stiles() {
      return {
        disabled: this.disabled,
        hide: this.isGameReady && !this.isGameFinished,
      }
    },
  },
  methods: {
    ...mapMutations('game', ['setIsGameReady']),

    handleClick() {
      if (this.isSeedsFall) return

      if (this.isGameFinished) {
        this.$emit('button-play--restart', this.barrier)
        return
      }

      setTimeout(() => {
        this.setIsGameReady(true)
      })
    },
    createBarrier() {
      let rect = this.$el.getBoundingClientRect()
      this.barrier = {
        x1: rect.left,
        x2: rect.left + rect.width,
        y1: rect.top,
      }
    },
  },
  mounted() {
    this.createBarrier()
    this.$emit('button-play--mounted', this.barrier)
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

  @media (max-width: $mq-phone) {
    display: none;
  }

  &.hide {
    transform: translateY(20em);
  }
}
</style>
