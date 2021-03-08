<template>
  <div class="index">
    <TheHeader />
    <TheCats v-if="type === 'cats'" />
    <TheSocks v-else-if="type === 'socks'" />
    <TheTomatoes v-else-if="type === 'tomatoes'" />
  </div>
</template>

<script>
import TheHeader from '../components/TheHeader'
export default {
  components: {
    TheHeader
  },
  created () {
    this.$store.dispatch('fetchType', 'tomatoes')
  },
  computed: {
    type () {
      return this.$store.state.activeType
    }
  }
}
</script>

<style>

</style>
