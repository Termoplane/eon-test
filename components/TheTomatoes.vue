<template>
  <div class="tomatoes">
    <div class="tomatoes__card card" v-for="tomato in tomatoes" :key="tomato.id">
      <div class="card__image">
        <img :src="tomato.image" alt="">
      </div>
      <div class="card__text">
        <h2 class="card__header">{{tomato.name}}</h2>
        <p class="card__description">{{tomato.description}}</p>
        <span class="card__price">{{tomato.price}} руб.</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    tomatoes () {
      return this.$store.state.data
    }
  }
}
</script>

<style lang="sass" scoped>
.tomatoes
  padding: 2rem 15rem
  display: flex
  flex-direction: column
  &__card
    display: grid
    padding: 1.2rem
    margin-bottom: 2rem
    grid-template-columns: 1fr 2fr !important
    gap: 2rem
    align-items: center
    box-shadow: 0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05)
.card
  &__image
    img
      max-width: 100%
      height: auto
  &__text
    height: 100%
    display: flex
    flex-direction: column
    justify-content: space-around
  &__price
    font-weight: bold
    font-size: 24px
    line-height: 136.52%
  &__header
    color: #425466
    font-weight: 600
</style>
