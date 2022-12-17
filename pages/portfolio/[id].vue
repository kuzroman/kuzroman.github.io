<template>
  <div class="portfolio-id">
    <div class="scroll-y">
      <div class="header">
        <h1 class="h1">{{ work.nameCompany}}</h1>
        <div v-if="work.nameTitle">{{ work.nameTitle }}</div>
        <div v-if="work.descCompany">{{work.descCompany}}</div>
      </div>

      <div class="gallery m-12">
        <div class="gallery__scroll" ref="galleryMain">
          <div
              ref="galleryImgs"
              v-for="(image, i) in images" :key="i">
            <img class="mx-auto border border-none" :src="image.src" alt="">
          </div>
        </div>
        <div class="gallery__horizon mt-4">
          <div
            class="inline-block w-2/12 h-full"
            v-for="(image, i) in images" :key="i"
            @click="clickMiniImg(i)"
          >
            <img :src="image.src" alt="">
          </div>
        </div>
      </div>


      <div class="description">
        <div v-if="work.link" class="link">
          Watch project: <a :href="work.link" target="_blank">{{ pureLink }}</a>
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
useHead({
  title: 'some latest job',
})

import { default as works } from '/db/works.js';

const route = useRoute()

const work = computed(() => works[route.params.id]);
const projectName = computed(() => work.value.imageDirectory);
const images = computed(() => {
  return [...Array(work.value.numberImg)].map((x, i) => ({
    src: `/img/portfolio/gallery/${projectName.value}/${i+1}.jpg`
  }))
});

const galleryMain = ref(null);
const galleryImgs = ref(null);
const clickMiniImg = (key) => {
  galleryImgs.value[key].scrollIntoView({behavior: 'smooth', block: 'nearest'})
};

const pureLink = computed(() => {
  return work.value.link.replace(/https:/ig, '').replace(/\//ig, '');
});
</script>

<style lang="scss">
@import "../../assets/styles/props";

.gallery {
  width: 840px;

  &__scroll {
    height: 510px;
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 0;
    }
  }

  &__horizon {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    img {
      border: 1px solid $color-7;
    }
  }
}

.portfolio-id {
  line-height: 2;

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
    margin: 2em auto;
  }

  .desc {
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

@media (max-width: $mq-phone) {
  .gallery {
    width: 100%;

    &__scroll {
      height: 200px;
    }
  }
}
</style>
