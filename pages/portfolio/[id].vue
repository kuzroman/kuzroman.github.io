<template>
  <div class="portfolio-id">
    <div class="scroll-y">
      <div class="header">
        <h1 class="h1">{{ work.nameCompany}}</h1>
        <div v-if="work.nameTitle">{{ work.nameTitle }}</div>
        <div v-if="work.descCompany">{{work.descCompany}}</div>
      </div>

<!--      <el-carousel :interval="0" type="card" height="510px">-->
<!--        <el-carousel-item v-for="(image, i) in images" :key="i">-->
<!--          <img :src="image.src" alt="">-->
<!--        </el-carousel-item>-->
<!--      </el-carousel>-->

      <div class="gallery">
        <div v-for="(image, i) in images" :key="i">
          <img :src="image.src" alt="">
        </div>
      </div>


      <div class="description">
        <div v-if="work.link" class="link">
          <a :href="work.link" target="_blank">Watch project</a>
        </div>
        <div
            class="desc"
            v-html="work.descDeal"
        />
        <div class="skills">
          <div class="skill" v-for="skill in work.skills">{{ skill }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { default as works } from '/db/works.js';

const route = useRoute()

const work = computed(() => works[route.params.id]);
const projectName = computed(() => work.value.imageDirectory);
const images = computed(() => {
  return [...Array(work.value.numberImg)].map((x, i) => ({
    src: `/img/portfolio/gallery/${projectName.value}/${i+1}.jpg`
  }))
});
</script>

<style lang="scss">
@import "../../assets/styles/props";

.gallery {
  height: 40vh;
  overflow-y: auto;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    width: 0px;
  }
}

.portfolio-id {
  line-height: 2;

  .el-carousel__item {

    h3 {
      color: #475669;
      opacity: 0.75;
      line-height: 200px;
      margin: 0;
      text-align: center;
    }
    img {
      width: 100%;
      height: 100%;
      margin: 0 auto;
      object-fit: cover;
    }
    &:nth-child(2n) {
      background-color: #99a9bf;
    }
    &:nth-child(2n + 1) {
      background-color: #d3dce6;
    }
  }

  .row {
    margin: 0;
  }
  .theme--light.v-application{
    max-width: fit-content;
    margin: 1em auto 2em;
  }
  .v-application--wrap {
    min-height: auto;
  }

  .header {
    max-width: $maxWidth1;
    margin: 2em auto;
  }

  .desc {
    max-width: $maxWidth1;
    margin: 0 auto 3em;
  }

  a {
    color: $color-12;
    line-height: 2em;

    &:hover {
      color: lighten($color-12, 10%);
    }
  }

  .description {
    max-width: $maxWidth1;
    margin: 0 auto;

    .link {
      margin: 1em 0;
      font-size: 20px;
      font-weight: bold;
      text-decoration: none;
    }

    .skills {

      display: flex;
      flex-wrap: wrap;

      .skill {
        margin: 10px;
        padding: 4px 6px;
        background: $color-7;
      }
    }
  }



}
</style>
