<template>
  <div class="skills-me">
    <div v-for="(skills, key) in knowledge" :key="key" class="knowledge">
      <div class="main">
        {{ key }}
      </div>
      <div class="general">
        <div v-for="skill in skills" :key="skill">
          {{ skill }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { default as skills } from '~/db/skills.json'
const knowledge = ref(skills)
</script>

<style lang="scss">
@import '../assets/styles/props.scss';

.skills-me {
  .knowledge {
    color: $color-12;
    background: $color-1;
    margin: 0.4em 0.4em;
    transition: color 0.3s, background 0.3s;
    display: inline-block;

    &:first-child {
      margin-top: 0;
    }

    &:hover {
      color: lighten($color-12, 10%);
      background: lighten($color-1, 5%);
    }

    .main {
      padding: 0.8em;
      font-weight: bold;
      display: inline-block;
    }

    .general {
      padding: 0.8em;
      display: inline-block;

      > div {
        display: inline-block;
        padding: 0 0.4em;
      }
    }
  }
}

@media (max-width: $mq-phone) {
  .skills-me {
    .knowledge {
      font-size: 0.8em;

      .main {
        padding: 0 0.4em;
      }
      .general {
        padding: 0 0.4em;
      }
    }
  }
}
</style>
