<template>
  <div class="status-bar" :class="{ active: isGameReady || isDebug }">
    <div class="status-bar--top">
      <div class="score">{{ killedLetters.length }} killed</div>
      <div class="status-bar--right">
        <IconTime/>
        <IconShield/>
        <div class="time">{{ timeLeft }}s</div>
      </div>
    </div>
    <UI_Loader_line class="loader-Line" :percent="health"/>
    <UILink2Move
        class="leaders"
        text="leaderboard"
        @click.native="openLeaderBoard"
    />
  </div>
</template>

<script>
import UI_Loader_line from '../UI/LoaderLine.vue'
import UILink2Move from '~/components/UI/Link2Move.vue'
import IconTime from './IconTime.vue'
import IconShield from './IconShield.vue'
import {mapGetters, mapMutations} from 'vuex'

const healthDefault = 100

let intervalTime

export default {
  name: 'StatusBar',
  components: {UI_Loader_line, UILink2Move, IconTime, IconShield},
  data() {
    return {
      health: healthDefault,
      isDebug: false,
    }
  },
  watch: {
    isGameStart() {
      this.runTimer()
    },
    damage(damage) {
      this.health = healthDefault - damage
    },
    health(health) {
      if (health <= 0) {
        this.setIsGameFinished(true)
      }
    },
  },
  computed: {
    ...mapGetters('game', [
      'isGameReady',
      'isGameStart',
      'isGameFinished',
      'score',
      'shots',
      'letters',
      'killedLetters',
      'damage',
      'timeLeft',
    ]),
  },
  methods: {
    ...mapMutations('game', [
      'setIsGameFinished',
      'setIsLeaderBoardOpened',
      'setScore',
      'decreaseTimeLeft',
    ]),

    runTimer() {
      intervalTime = setInterval(() => {
        this.decreaseTimeLeft()

        if (this.timeLeft <= 0 || this.isGameFinished) {
          this.setIsGameFinished(true)
          clearInterval(intervalTime)
        }
      }, 1000)
    },

    openLeaderBoard() {
      this.setIsLeaderBoardOpened(true)
    }
  },
}
</script>

<style lang="scss">
@import '../../assets/styles/props.scss';

.status-bar {
  position: absolute;
  top: 1em;
  left: 2em;
  transform: translateY(-10em);
  transition: transform 0.3s;

  & .score,
  & .time,
  & .icon-time,
  & .icon-shield {
    transform: translateY(-2em);
  }

  &.active {
    transform: translateY(0);

    & .score,
    & .time,
    & .icon-time,
    & .icon-shield {
      transform: translateY(0);
    }
  }

  &--top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.4em;
  }

  &--right {
    display: flex;
  }

  .score {
    color: $color-10;
    font-size: 1.2em;
    line-height: 1.4em;
    font-weight: bold;
    display: inline-block;
    transition: transform 0.3s 0.1s;
  }

  .time {
    color: $color-10;
    font-size: 1.2em;
    line-height: 1.4em;
    font-weight: bold;
    display: inline-block;
    transition: transform 0.3s 0.4s;
  }

  & .icon-time {
    transition: transform 0.3s 0.2s;
  }

  & .icon-shield {
    transition: transform 0.3s 0.3s;
  }

  .leaders {
    font-weight: bold;
    text-transform: uppercase;
    font-size: .8em;
    cursor: pointer;
    padding: 0.5em 0;
    display: inline-block;

    &:before,
    &:after {
      background: $color-7;
    }
  }
}
</style>
