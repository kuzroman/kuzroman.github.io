<template>
  <div class="parallax-area m50">
    <div class="left">
      <slot>
        <div
          v-for="(work, i) in props.images"
          class="image"
          :style="styleImages(work, i)"
        />
      </slot>
    </div>
    <div class="right">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur
      dolore, dolorem est excepturi exercitationem facilis hic magni minima
      natus nobis numquam obcaecati perspiciatis quae quibusdam quo quos sunt,
      voluptate? Ad.
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['images', 'top'])

const styleImages = (work, index) => {
  const topShift = Math.ceil(props.top / 15)
  const isEven = index % 2 === 0

  return {
    'background-image': `url(${getBg(work, '0')})`,
    left: 0,
    transform: `translateY(${isEven ? -150 + topShift : 0 - topShift}px)`,
  }
}

const getBg = (work, name) => {
  const type = name === 'logo' ? '.png' : '.jpg'
  return `/img/portfolio/gallery/${work.imageDirectory}/${name + type}`
}
</script>

<style lang="scss" scoped>
.parallax-area {
  width: 100%;
  height: 400px;
  border: 1px solid;
  border-radius: 25px;
  overflow: hidden;
  padding: 25px;
  display: inline-flex;

  .left {
    display: flex;
    flex-wrap: wrap;
    width: 45%;
  }

  .right {
    padding: 25px;
    display: flex;
    width: 55%;
    align-items: center;
  }

  .image {
    width: 200px;
    height: 200px;
    margin: 5px;
    border-radius: 8px;
    overflow: hidden;
    background-size: contain;

    &:hover > div {
      transform: rotate(0deg) scale(1.1) !important;
    }
  }
}
</style>
