<template>
  <div class="score-board" :class="{ active: isGameFinished || isDebug }">
    <h3>{{ score }} points</h3>
    <div class="hooray">Hooray!</div>
    <!-- <p>You've just beaten your own highscore 🎉🎉🎉</p> -->
    <DashedList>
      <div class="result">
        <div>Time left</div>
        <div>{{ timeLeft }}</div>
      </div>
      <div class="result">
        <div>Shots</div>
        <div>{{ shots }}</div>
      </div>
      <div class="result">
        <div>Goals</div>
        <div>{{ killedLetters.length }}</div>
      </div>
      <div class="result">
        <div>Life</div>
        <div>{{ 100 - damage }}</div>
      </div>
      <div class="result best">
        <div>Your best score</div>
        <div>{{ score }}</div>
      </div>
    </DashedList>

<!--    <UIButton-->
<!--        text="show leaderboard"-->
<!--        class="btn-leaderboard"-->
<!--        @click.native="openLeaderBoard"-->
<!--    />-->
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import UIButton from '../UI/Button.vue'
import DashedList from '../UI/DashedList.vue'

export default {
  name: 'ScoreBoard',
  components: { UIButton, DashedList },

  data() {
    return {
      isDebug: false,
    }
  },
  watch: {
    score(score) {
      this.setScore(score)
    },
  },
  computed: {
    ...mapGetters('game', [
      'isGameFinished',
      'timeLeft',
      'damage',
      'shots',
      'letters',
      'killedLetters',
      'aliveLetters',
      'score',
    ]),

    score() {
      let aliveLettersInner = this.aliveLetters.length
      if (!this.killedLetters.length) return 0
      if (!aliveLettersInner) aliveLettersInner = 1

      const mainScore = Math.ceil(
        (this.killedLetters.length * 10000) /
          (this.aliveLetters.length + this.shots)
      )
      const bonus = this.timeLeft * 10 - this.damage * 5
      return mainScore + bonus
    },
  },
  methods: {
    ...mapMutations('game', ['setScore','setIsLeaderBoardOpened']),

    openLeaderBoard() {
      this.setIsLeaderBoardOpened(true)
    },
  },
}
</script>

<style lang="scss">
@import '../../assets/styles/props.scss';

.score-board {
  max-width: 460px;
  width: 90%;
  margin: 0 auto;
  background-color: $color-6;
  box-shadow: 8px 8px 0 rgba(15, 15, 15, 0.45);
  padding: 24px 16px 26px;

  position: absolute;
  left: 50%;
  top: 50%;
  height: 20em;
  transform: translate(-50%, -300%);
  transition: 0.3s transform;
  z-index: $zIndex-2;

  &.active {
    transform: translate(-50%, -50%);
  }

  h3 {
    font-size: 30px;
    margin-bottom: 6px;
    font-weight: 800;
    letter-spacing: -1px;
    color: $color-12;
    text-align: center;
  }

  .hooray {
    text-align: center;
    line-height: 1em;
    font-weight: bold;
    margin: 0.8em;
  }

  .btn-leaderboard {
    background: $color-10;
    margin: 2em 9em;
  }
}
</style>
