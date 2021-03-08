<template>
  <div class="socks">
    <div class="socks__card card" v-for="sock in socks" :key="sock.id">
        <swiper :options="swiperOption" class="card__swiper">
          <div slot="pagination" class="swiper-pagination swiper-pagination-bullets" />
          <swiper-slide class="card__image" v-for="image in sock.images" :key="image">
            <img :src="image" alt="">
          </swiper-slide>
        </swiper>
      <div class="card__text">
        <h3 class="card__header">{{sock.name}}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import 'swiper/css/swiper.css'
export default {
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        centeredSlides: true
      }
    }
  },
  computed: {
    socks () {
      return this.$store.state.data
    }
  }
}
</script>

<style lang="sass" scoped>
/deep/ .swiper-slide
  display: flex
  justify-content: center
  align-items: center
/deep/ .swiper-pagination-bullet
  width: 1rem
  height: 6px
  border-radius: 0px
  transform: none
  &-active
    background: #fff
.socks
  padding: 2rem 15% 2rem 20%
  display: grid
  grid-template-columns: 1fr 1fr
  gap: 2rem
  &__card
    display: flex
    flex-direction: column
    padding: 1.2rem
    margin-bottom: 2rem
    width: 25rem
    align-items: center
    box-shadow: 0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05)
.card
  &__swiper
    max-width: 100%
  &__image
    img
      max-width: 100%
      height: 100%
  &__text
    align-self: start
    display: flex
    flex-direction: column
    justify-content: space-around
  &__header
    color: #425466
    font-weight: 600
    margin-top: 1rem
    font-size: 1.3rem
</style>
