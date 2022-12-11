<template>
  <div
    class="click-for-fire"
    :class="{hidden: false}"
    @click="handleClick"
  >
    <div>isSeedsFall {{ isSeedsFall }}</div>
    <div>isGameReady {{ isGameReady }}</div>
    <div>isGameStart {{ isGameStart }}</div>
    <div>isGameFinished {{ isGameFinished }}</div>

    <div class="link">Click for Fire!</div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'ClickForFire',
  computed: {
    ...mapGetters('game', ['isSeedsFall', 'isGameReady', 'isGameFinished', 'isGameStart']),

  },
  methods: {
    ...mapMutations('game', ['setIsGameReady']),

    handleClick() {

    },
  },
  mounted() {

  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/props.scss';

.click-for-fire {
  width: 100%;
  text-align: center;
  margin-top: 50px;

  &.hidden {
    display: none;
  }

  @media (max-width: $mq-phone) {
    display: none;
  }

}
</style>
