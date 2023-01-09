<template>
  <div class="poker-hand">
    <div class="poker-hand__top">
      <div class="poker-hand__top__title">Title</div>
      <div class="poker-hand__top__desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Ab at commodi exercitationem
        minus modi nihil odio quasi saepe sunt suscipit. Aliquid, at dicta illo labore odio
        perspiciatis repudiandae similique voluptas. Alias, cumque excepturi exercitationem in
        laudantium magnam magni necessitatibus rem? Dicta expedita labore minus molestias non
        recusandae similique tenetur voluptatibus.
      </div>
    </div>

    <div class="poker-hand__bottom">
      <div
        v-for="n in [...Array(4).keys()]"
        class="poker-hand__column">
        <div class="poker-hand__deck">
          <div class="poker-hand__deck__front-card">
            <b>
              Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Dolores, minus?
            </b>
            <p>
              Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Accusantium ad aut autem consectetur cumque cupiditate deleniti
              ducimus earum, facilis maxime, nam, nesciunt quam quidem quo reprehenderit suscipit
              tempore unde voluptatum.
            </p>
          </div>
          <div class="poker-hand__deck__back-card">
            <UIAnimationFloatingUpCubs v-if="n % 2 === 0" />
            <UIAnimationGradient v-else />
          </div>
        </div>
        <div class="poker-hand__border"></div>
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>
@import "../../assets/styles/props";

.poker-hand {
  background: black;
  border-radius: 25px;
  overflow: hidden;
  padding: rem(50px) rem(50px) 0;
  color: white;

  &__top {
    display: grid;
    grid-template-areas: "desc title";
    grid-template-columns: 1fr 1fr;


    &__title {
      grid-area: title;
      font-size: rem(160px);
      text-align: right;
    }

    &__desc {
      grid-area: desc;
      font-size: rem(20px);
    }
  }

  &__bottom {
    display: flex;
  }

  &__column {
    width: 25%;
    margin: 0 8px;

    &:nth-child(even) {
      margin-top: 50px;
    }
    &:nth-child(odd) .poker-hand__border{
      height: 200px;
    }
  }
  &__deck {
    height: rem(600px);
    border-radius: 8px;
    position: relative;

    &__front-card {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 25px;
      line-height: 1.2;
      border: 1px dashed white;
      border-radius: 8px;
      transition: .6s;
      position: relative;
      z-index: 5;
      background: black;

      b {
        font-size: rem(36px);
      }
      p {
        font-size: rem(20px);
      }
    }
    &__back-card {
      width: 100%;
      height: 100%;
      background: white;
      position: absolute;
      top: 0;
      transition: .6s;
      border-radius: 8px;
      overflow: hidden;
    }

    &:hover & {
      &__front-card {
        transform: rotateZ(10deg) translate(rem(42px), rem(-42px));
        z-index: 10;
      }
      &__back-card {
        transform: translate3d(0px, -40%, 0px) rotateZ(-4deg);
      }
    }
  }

  &__border {
    margin-top: 16px;
    height: 150px;
    border-top: 1px solid hsla(0,0%,100%,.5);
    border-left: 1px solid hsla(0,0%,100%,.5);
    border-right: 1px solid hsla(0,0%,100%,.5);
    border-radius: 8px 8px 0 0;
  }
}

@media (max-width: $mq-phone) {
  .poker-hand {
    padding: 10px;

    &__top {
      grid-template-areas: "title" "desc";
      grid-template-columns: auto;

      &__title {
        font-size: 36px;
        text-align: center;
      }

      &__desc {
        font-size: 16px;
      }
    }

    &__bottom {
      flex-wrap: wrap;
    }
    &__column {
      width: 100%;

      &:nth-child(even) {
        margin-top: 0;
      }
    }
    &__border {
      display: none;
    }
    &__deck {
      height: 400px;
      margin-top: 25px;

      &__front-card {
        b {
          font-size: 18px;
        }
        p {
          font-size: 16px;
        }
      }

      &:hover & {
        &__front-card {
          transform: none;
        }
        &__back-card {
          transform: none;
        }
      }
    }
  }
}
</style>
