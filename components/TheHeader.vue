<template>
  <div class="header">
    <div class="header__col">
      <h1>Найдется всё!</h1>
      <p>Самые важные вещи для качественной жизни. Ласковые коты, вкусные помидоры и умопомрачительные носки!</p>
      <div class="header__button-container">
        <div class="header__button" @click.prevent="handleClick('tomatoes')" :class="{'header__button_active': $store.state.activeType === 'tomatoes'}">Помидоры</div>
        <div class="header__button" @click.prevent="handleClick('cats')" :class="{'header__button_active': $store.state.activeType === 'cats'}">Коты</div>
        <div class="header__button" @click.prevent="handleClick('socks')" :class="{'header__button_active': $store.state.activeType === 'socks'}">Носки</div>
      </div>
    </div>
    <div class="header__col bg">
      <img :src="require('~/assets/images/bg.png')" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheHeader',
  methods: {
    handleClick (type) {
      this.$store.dispatch('fetchType', type)
    }
  }
}
</script>

<style lang="sass" scoped>
.bg
  background-image: url('~assets/images/bg.png')
  background-size:  cover
.header
  display: grid
  grid-template-columns: 2fr 1fr
  background: #18191F
  padding: 0rem 15rem
  color: #ffffff !important
  justify-items: start
  align-items: center
  gap: 1rem
  h1
    font-size: 3.5rem
    font-weight: 700
    margin-bottom: 2.5rem
  p
    margin-bottom: 2.5rem
    line-height: 32px
  &__button-container
    display: flex
    justify-content: space-between
  &__button
    text-overflow: ellipsis
    padding: 1rem 1rem
    background: linear-gradient(44.11deg, #CD10FF 15.75%, #9F06FF 84.63%)
    border-radius: 33px
    cursor: url('~assets/images/custom-pointer.svg'), auto
    width: 8rem
    text-align: center
    font-weight: bold
    &:hover
      background: linear-gradient(44.11deg, #10C6FF 15.75%, #9F06FF 84.63%)
    &_active
      background: linear-gradient(44.11deg, #10C6FF 15.75%, #9F06FF 84.63%)
</style>
