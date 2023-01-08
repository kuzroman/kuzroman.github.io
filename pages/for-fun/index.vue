<template>
  <div class="portfolio">
    <div class="scroll-y">

      <div class="works">
        <router-link v-for="(work, i) in works" :to="{ path: `/for-fun/${work.link}`}" :key="i" >
          <div class="work"
               :style="{'background-image': `url(${getBg(work, '0')})`}">
            <div class="work-date">{{ work.date }}</div>
            <div class="work-desc">
              <div v-for="skill in work.skills">{{ skill }}</div>
            </div>
            <div class="work-logo" :style="{'background-image': `url(${getBg(work, 'logo')})`}"></div>
          </div>
        </router-link>

      </div>
    </div>
  </div>

</template>

<script setup>
import {useStore} from "vuex"
import { default as worksData } from "/db/fun.js"
const store = useStore()
store.commit('app/setIsPageLoaderHide', true)

const works = ref(worksData)
const getBg = (work, name) => {
  const type = name === 'logo' ? '.png' : '.jpg'
  return `/img/portfolio/gallery/${work.imageDirectory}/${name + type}`
};

useHead({
  title: 'kuzroman for fan',
})
</script>

<style lang="scss">
@import "../../assets/styles/props";

.portfolio {

  .works {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .work {
      width: 300px;
      height: 250px;
      margin: 1em;
      position: relative;
      overflow: hidden;
      background-size: cover;

      &:after {
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        box-shadow: 0 0 50px rgba(0, 0, 0, .6) inset;
      }

      &:before {
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        background: $color-8;
        position: absolute;
        transform: translateY(-100%);
        opacity: 0;
        transition: opacity 0.3s, transform .3s;
      }

      &-date {
        position: absolute;
        padding: 6px;
        font-weight: bold;
        color: white;
        opacity: 0;
        transform: translateX(-100%);
        transition: opacity .3s, transform .3s;
      }

      &-desc {
        width: 100%;
        position: absolute;
        opacity: 0;
        top: 12%;
        box-sizing: border-box;
        padding: 0 12%;
        text-align: center;
        transition: opacity 0.3s;
        overflow: hidden;
        font-size: .8em;
      }

      &-desc > div {
        background: $color-8;
        color: $color-12;
        text-transform: uppercase;
        padding: 2px;
        box-shadow: 2px 2px 0 0 darken($color-8, 5%);
        display: inline-block;
        margin: 4px 0;
        position: relative;
        opacity: 0;
        transition: .3s opacity .1s;
      }

      &-logo {
        width: 100%;
        height: 20%;
        position: absolute;
        opacity: 0;
        bottom: 0;
        box-sizing: border-box;
        transform: translateY(20%);
        transition: transform .3s, opacity .3s;
        background: $color-8 no-repeat center;
        background-size: 60%;
      }

      &:hover {

        &:before {
          transform: translateY(0);
          opacity: .9;
        }

        .work {

          &-date {
            opacity: 1;
            transform: translateX(0);
          }

          &-desc {
            opacity: 1;

            > div {
              opacity: 1;
            }
          }

          &-logo {
            opacity: .9;
            transform: translateY(0);
          }
        }
      }
    }
  }
}
</style>
