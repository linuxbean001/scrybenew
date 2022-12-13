<template>
  <Hero />
  <Divider />
  <SimpleCentered />
  <Divider />
  <AlternatingImages />
  <SimpleCenteredBranded />
  <ThreeColumnCards />
  <NewsletterSignup />
</template>

<script>
import Hero from '../components/Hero'
import SimpleCentered from '../components/SimpleCentered'
import AlternatingImages from '../components/AlternatingImages'
import Divider from '../components/Divider'
import SimpleCenteredBranded from '../components/SimpleCenteredBranded'
import ThreeColumnCards from '../components/ThreeColumnCards'
import NewsletterSignup from '../components/NewsletterSignup'

export default {
  name: 'HomeView',
  components: {
    Hero,
    SimpleCentered,
    AlternatingImages,
    Divider,
    SimpleCenteredBranded,
    ThreeColumnCards,
    NewsletterSignup,
  },
}
</script>
