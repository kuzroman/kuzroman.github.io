<template>
  <div class="skills">
    <h1 class="h1">About</h1>
    <p class="pt1 pb1">
      Senior Front-end web developer with more 12 years old experience<br />
      Highly skilled at JavaScript including SPA, SSR, SSG, MVVM flux patterns.
    </p>
    <h2>Last jobs:</h2>
    <div class="mt1 mb1">
      2020. SyncMd, SyncId -
      <a class="link" href="http://www.syncmd.com" target="_blank"
        >www.syncmd.com</a
      >
      <div class="sub">Agile, Scrum, Kanban.</div>
    </div>
    <div class="mt1 mb1">
      2018. Raiffeisen Bank -
      <a class="link" href="http://www.raiffeisen.ru" target="_blank"
        >www.raiffeisen.ru</a
      >
      <div class="sub">Agile, Scrum, Kanban.</div>
    </div>
    <div class="mt1 mb1">
      2015. Ros Business Consulting - RBC media holding -
      <a class="link" href="https://www.rbc.ru/" target="_blank">www.rbc.ru</a>
      <div class="sub">Waterfall.</div>
    </div>
    <div class="mt1 mb1">
      2012. Bank of Moscow (current time VTB Bank) -
      <a class="link" href="https://www.vtb.ru/" target="_blank">www.vtb.ru</a>
      <div class="sub">Waterfall.</div>
    </div>
    <div class="mt1 mb1">
      2011. Anywayanyday
      <a class="link" href="https://www.anywayanyday.com/new" target="_blank"
        >www.anywayanyday.com</a
      >
      <div class="sub">Waterfall.</div>
    </div>
    <div class="mt1 mb1">
      2010. Advertising Boulevard
      <a class="link" href="https://bulvar.agency/" target="_blank"
        >www.bulvar.agency</a
      >
      <div class="sub">Waterfall.</div>
    </div>
    <p class="pt1 pb1">
      This is not full list, but most frequently used knowledge
    </p>
    <h1 class="h1">Skills</h1>
    <SkillsMe />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'some about kuzroman',
})
</script>

<style lang="scss">
@import '../assets/styles/props';

.skills {
  color: $color-12;
  line-height: 2em;
  font-size: 18px;
}
</style>
