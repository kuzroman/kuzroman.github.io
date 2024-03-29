<template>
  <div class="score-board" :class="{ active: isGameFinished || isDebug }">
    <h3 class="score">{{ score }} points</h3>
    <div class="hooray">
      <div>Hooray!</div>
      <div v-if="isCurrentScoreBest" class="mt-4">
        You've just beaten your own highscore 🎉🎉🎉
      </div>
    </div>
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

      <div v-if="bonusForLife" class="result bonus">
        <div>Bonus for survival 🎉</div>
        <div>{{ bonusForLife }}</div>
      </div>
      <div v-if="bonusForTime" class="result bonus">
        <div>Bonus for speed 🎉</div>
        <div>{{ bonusForTime }}</div>
      </div>
      <div class="result best">
        <div>Your best score</div>
        <div>{{ bestScore }}</div>
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
import DashedList from '../UI/DashedList.vue'

export default {
  name: 'ScoreBoard',
  components: { DashedList },

  data() {
    return {
      isDebug: false,
    }
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
      if (!this.killedLetters.length) {
        return 0
      }
      if (!aliveLettersInner) {
        aliveLettersInner = 1
      }

      const mainScore = Math.ceil(
        (this.killedLetters.length * 10000) /
          (this.aliveLetters.length + this.shots)
      )
      return Math.floor(mainScore + this.bonusForLife + this.bonusForTime)
    },
    bonusForTime() {
      return Math.floor(this.timeLeft * 200)
    },
    bonusForLife() {
      return Math.floor((100 - this.damage) * 50)
    },
    isCurrentScoreBest() {
      return this.bestScoreFromLocalStorage < this.score
    },
    bestScoreFromLocalStorage() {
      return +this.getBestScoreFromLocalStorage()
    },
    bestScore() {
      return this.isCurrentScoreBest
        ? this.score
        : this.bestScoreFromLocalStorage
    },
  },
  watch: {
    score(score) {
      this.setScore(score)
      this.setBestScoreToLocalStore(score)
    },
  },
  methods: {
    ...mapMutations('game', ['setScore', 'setIsLeaderBoardOpened']),

    openLeaderBoard() {
      this.setIsLeaderBoardOpened(true)
    },
    getBestScoreFromLocalStorage() {
      return localStorage.getItem('bestScore')
    },
    setBestScoreToLocalStore(score) {
      if (this.isCurrentScoreBest) {
        localStorage.setItem('bestScore', score)
      }
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
  user-select: none;
  position: absolute;
  left: 50%;
  top: 50%;
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
  .score {
    color: $color-15;
  }
}
</style>
