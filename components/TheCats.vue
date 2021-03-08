<template>
  <div class="cats">
    <div class="cats__card card" v-for="cat in cats" :key="cat.id">
      <div class="card__image">
        <img :src="cat.image" alt="">
      </div>
      <div class="card__text">
        <h3 class="card__header">{{cat.name}}</h3>
        <p class="card__advantages" v-for="(advantage, advantage_id) in cat.advantages" :key="advantage_id">—{{advantage}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    cats () {
      return this.$store.state.data
    }
  }
}
</script>

<style lang="sass" scoped>
.cats
  padding: 2rem 25rem 2rem 20rem
  display: grid
  grid-template-columns: 1fr 1fr
  gap: 2rem
  &__card
    display: flex
    flex-direction: column
    padding: 1.2rem
    margin-bottom: 2rem
    grid-template-columns: 1fr 2fr !important
    align-items: center
    box-shadow: 0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05)
.card
  &__image
    width: 100%
    img
      width: 100%
      height: auto
  &__text
    align-self: start
    height: 100%
    display: flex
    flex-direction: column
    justify-content: space-around
  &__advantages
    padding-bottom: 0.5rem
  &__header
    color: #425466
    font-weight: 600
    margin-bottom: 1rem
    font-size: 1.3rem
</style>
