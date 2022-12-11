<template>
  <div class="leader-board" :class="state">
    <h2 class="title">Leader Board</h2>

    <DashedList class="dashed-list">
      <template v-for="(leader, i) in top10Leaders" :key="i">

        <LeaderBoardForm
          v-if="i === yourRate && isResultInTop"
          @leader-board-form--save-result="getLeaders"
        />

        <div class="result" >
          <div>
            <span>{{ leader.rate + 1 }}</span>
            <span>{{ leader.user }}</span>
          </div>
          <div>{{ leader.score }} points</div>
        </div>
      </template>
    </DashedList>

    <DashedList class="dashed-list" v-if="!isResultInTop">
      <template v-for="(leader, i) in betweenLeaders" :key="i">

        <LeaderBoardForm
          v-if="i === 1"
          @leader-board-form--save-result="getLeaders"
        />

        <div class="result">
          <div>
            <span>{{ leader.rate + 1 }}</span>
            <span>{{ leader.user }}</span>
          </div>
          <div>{{ leader.score }} points</div>
        </div>

      </template>
    </DashedList>

    <LeaderBoardForm
        v-if="getSortLeaders.length === yourRate"
        @leader-board-form--save-result="getLeaders"
    />

    <CloseSpinner class="close-spinner" @click.native="closeLeaderBoard"/>
  </div>
</template>

<script>
import {mapActions, mapMutations, mapGetters} from 'vuex'
import DashedList from '~/components/UI/DashedList.vue'
import CloseSpinner from '~/components/UI/CloseSpinner.vue'
import LeaderBoardForm from '~/components/game/LeaderBoardForm.vue'
import UIButton from '~/components/UI/Button.vue'

export default {
  name: 'LeaderBoard',
  components: {DashedList, CloseSpinner, UIButton, LeaderBoardForm},

  data() {
    return {
      isDebug: false,
    }
  },
  computed: {
    ...mapGetters('leaderBoard', ['getSortLeaders']),
    ...mapGetters('game', ['isLeaderBoardOpened', 'score']),

    top10Leaders() {
      return this.getSortLeaders.slice(0, 10)
    },

    state() {
      return this.isLeaderBoardOpened || this.isDebug ? 'active' : 'hide'
    },

    yourRate() {
      const rate = this.getSortLeaders.findIndex(x => x.score < this.score)
      return -1 < rate ? rate : this.getSortLeaders.length
    },

    isResultInTop() {
      return this.yourRate < 10
    },

    betweenLeaders() {
      return this.getSortLeaders.slice(this.yourRate - 1, this.yourRate + 1)
    },
  },
  methods: {
    ...mapActions('leaderBoard', ['getLeaders']),
    ...mapMutations('game', ['setIsLeaderBoardOpened']),

    closeLeaderBoard() {
      this.setIsLeaderBoardOpened(false)
    },
  },
  mounted() {
    this.getLeaders()
  },
}
</script>

<style lang="scss">
@import '../../assets/styles/props';

.leader-board {
  width: 100%;
  height: 100%;
  background: $color-8;
  position: relative;
  transform: translateY(-110%);
  opacity: 0;
  transition: opacity 0.3s, transform 0.3s;
  z-index: $zIndex-4;

  &.active {
    transform: translateY(0);
    opacity: 1;
  }

  &.hide {
    transform: translateY(110%);
    opacity: 0;
  }

  .title {
    font-size: 2em;
    text-align: center;
    padding: 2em;
  }

  .dashed-list {
    background-color: $color-6;
    padding: 2em;
    width: 80%;
    max-width: 800px;
    margin: 0 auto;

    .result {
      span:first-child {
        width: 2em;
        color: $color-12;
        display: inline-block;
        text-align: left;
      }
    }

    @media (max-width: $mq-phone) {
      width: 100%;
      padding: 1em;
    }

    .leader-board-form {
      margin: 1em 0;
    }
  }

  .leader-board-form {
    margin: 5em auto;
  }

  .close-spinner {
    width: 5em;
    height: 5em;
    top: 3em;
    right: 2em;
  }
}
</style>
