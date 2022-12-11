<template>
  <div class="leader-board-form" v-if="!isSent && score">
    <label>
      <span>Your name</span>
      <input
        type="text"
        placeholder="Yur name, or feedback)"
        maxlength="30"
        v-model="inputText"
        @keypress.enter="saveResult"
      />
      <UIButton
        class="save-result"
        text="Save"
        @click.native="saveResult"
      />
      <span>{{ score }} points</span>
    </label>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import UIButton from '~/components/UI/Button.vue'

export default {
  name: 'LeaderBoard',
  components: {UIButton},

  data() {
    return {
      inputText: '',
    }
  },
  watch: {
    inputText(text) {
      this.inputText = text.replace(/[^a-zа-я 0-9]|^\s/gi, '').replace(/\s\s/gi, ' ')
    },
  },
  computed: {
    ...mapGetters('leaderBoard', ['isSent']),
    ...mapGetters('game', ['score']),

  },
  methods: {
    ...mapActions('leaderBoard', ['addLeader']),

    saveResult() {
      // const text = this.inputText.replace(/[^a-z 0-9]/gi, '')
      if (!this.inputText.trim()) return

      this.addLeader({user: this.inputText, score: this.score})
        .then(() => {
          this.$emit('leader-board-form--save-result')
        })
    },
  },
}
</script>

<style lang="scss">
@import '../../assets/styles/props';

.leader-board-form {
  text-align: center;
  color: $color-12;
  font-weight: bold;
  display: block;

  input {
    min-width: 16em;
    margin: 0 1em;
    outline: none;
    padding: 6px 8px;
    border-radius: 3px;
    border: none;
    box-shadow: 0 4px 10px 2px #000;
    font-size: 1.2em;
    color: white;
    background: $color-10;

    &::placeholder {
      color: darken(white, 10%);
      opacity: 1;
    }
  }

  @media (max-width: $mq-phone) {
    margin-top: 2em;

    > span {
      display: block;
      margin: 1em 0;
    }
  }

  .save-result {
    display: inline-block;
    margin-right: 1em;
    transform: translateY(-3px);
  }
}
</style>
