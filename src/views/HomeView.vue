<template>
  <Hero />
  <SimpleCentered />
  <AlternatingImages />
</template>

<script>
import Hero from '../components/Hero'
import SimpleCentered from '../components/SimpleCentered'
import AlternatingImages from '../components/AlternatingImages'

export default {
  name: 'HomeView',
  components: {
    Hero,
    SimpleCentered,
    AlternatingImages,
  },
}
</script>
