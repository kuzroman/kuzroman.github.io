<template>
  <div class="history" @scroll="handleScroll">
    <div class="grain" />

    <div class="top-screen">
      <video loop muted autoplay>
        <source src="~/assets/video/history.mp4" data-wf-ignore="true">
      </video>
      <h1 ref="tricks" class="animation-text">
        Some creative text
      </h1>
    </div>

    <div class="content-area">
      <div class="content-area-box">
        <div class="title">
          Manifesto
        </div>
        <div class="desc m50">
          A perfect design is one that is aesthetically pleasing, functionally effective, and
          emotionally resonant. It should be timeless, elegant, and sophisticated. It should be
          carefully crafted to meet the needs of its intended audience. It should be innovative and
          creative, yet practical and logical. It should be intuitive and user-friendly, with a
          balance of simplicity and complexity. It should have an overall cohesive feel, with
          attention to detail and subtlety. It should be flexible and adaptable to changing trends
          and
          technologies. It should inspire, engage, and motivate its users. Ultimately, a perfect
          design should be a reflection of its creator’s vision and passion.
        </div>
        <p class="text m50">
          The perfect web design should be aesthetically pleasing, easy to navigate, and optimized
          for
          the user experience. It should have a modern look and feel that is consistent across all
          platforms and devices. The website should be responsive, allowing users to access it from
          any device, including mobile phones and tablets.
          The website should be organized in a way that allows users to quickly find the information
          they need. The navigation should be intuitive and the pages should load quickly. All pages
          should be optimized for search engine optimization, ensuring that the website is easily
          found by users.
          The website should also be accessible to people with disabilities. This means that the
          website should be designed with accessibility features such as alt text for images, closed
          captioning for videos, and appropriate contrast ratios for text.
          The website should also have a secure login system that allows users to access their
          accounts safely. This will ensure that user data is kept secure and private.
          Finally, the website should be regularly maintained and updated with new content. This
          will
          ensure that the website remains fresh and relevant to users.
          Overall, the perfect web design should be visually appealing, easy to navigate, optimized
          for user experience, and secure. It should also be accessible to people with disabilities
          and regularly maintained.
        </p>
      </div>

      <UIParallaxArea
        :images="worksCompiled"
        :top="top"
      />

      <UI3dHover class="flexible">
        <template #default>
          <h2>Good morning everyone.</h2>
        </template>
        <template #desc>
          <p>
            Today I want to talk about success. We all want to be successful in life, but what does it
            really mean? To me, success is more than just money and fame. It’s about having a sense of
            fulfillment and purpose. It’s about having the courage to pursue your dreams and reach your
            goals.
          </p>
          <p>
            Success is not something that happens overnight. It takes hard work, dedication, and
            resilience. It requires setting goals and working towards them, even when the going gets
            tough. It’s about having the strength to push through the obstacles and challenges that life
            throws at you.
          </p>
          <p>
            Success is also about learning from your mistakes and failures. It’s about taking risks and
            not being afraid to fail. It’s about having the confidence to try something new and not being
            afraid to take chances.
          </p>
          <p>
            Finally, success is about having the courage to be yourself and living a life that is true to
            who you are. It’s about having the courage to follow your heart and live life on your own
            terms.
          </p>
          <p>
            So, don’t be afraid to dream big and go after what you want. Believe in yourself and never
            give up on your dreams. With hard
          </p>
        </template>
      </UI3dHover>
    </div>

    <UIDarkCards class="m50" />
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { default as worksData } from '~/db/works.js'
useHead({ title: 'history' })

const store = useStore()
store.commit('app/setIsPageLoaderHide', true)

const tricks = ref()
const top = ref(0)

const worksCompiled = ref((() => {
  return worksData.map((obj) => {
    return { ...obj, rotate: getRandom(0, 360) }
  })
})())

onMounted(() => {
  setTimeout(() => {
    tricks.value.classList.add('active')
  }, 100)
})

const handleScroll = (ev) => {
  top.value = ev.target.scrollTop
}

function getRandom (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/props";

.app .content .view {
  background-image: none;
  padding: 2px;
  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    display: none;
  }
}

.history {
  background: white;

  .grain {
    width: 100%;
    height: 100%;
    background-image: url('assets/grain.gif');
    position: fixed;
    opacity: 0.05;
    z-index: 10;
    pointer-events: none;
  }
}

.flexible {
  margin: rem(50px);

  &:deep(.flexible__card) {
    padding: 50px;
    background: none;
    color: black;

    &:before {
      background: none;
    }
  }
}

.content-area {
  padding: 50px rem(180px);
  color: #2a2a2a;

  &-box {
    max-width: 1200px;
  }
}

.title {
  font-size: rem(76px);
  font-weight: bold;
}

.desc {
  font-size: rem(36px);
  font-weight: bold;
}

.text {
  font-size: rem(26px);
}
h2 {
  font-size: 36px;
  margin-bottom: 15px;
}
p {
  margin-top: 0;
  font-size: 20px;
}

.m50 {
  margin: rem(50px) 0;
}

.top-screen {
  width: calc(100vw - 4px);
  height: calc(100vh - 4px);
  background: #2a2a2a;
  border-radius: 25px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  video {
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: fill
  }

  .animation-text {
    font-size: rem(140px);
    opacity: 0;

    &.active {
      animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
    }
    @keyframes tracking-in-expand {
      0% {
        letter-spacing: -0.5em;
        opacity: 0;
      }
      40% {
        opacity: 0.6;
      }
      100% {
        opacity: 1;
      }
    }
  }
}

@media (max-width: $mq-phone) {
  .content-area {
    padding: 50px 20px;
    line-height: 1.2;
  }

  .title {
    font-size: 26px;
  }

  .desc {
    font-size: 18px;
  }

  .text {
    font-size: 15px;
  }
  h2 {
    font-size: 18px;
  }
  p {
    font-size: 15px;
  }
  .flexible {

    &:deep(.flexible__card) {
      padding: 0;
    }
  }
}
</style>
