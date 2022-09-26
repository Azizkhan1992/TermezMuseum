<template>
  <div class="homeMainPage">

    <sliderCarousel/>
    <blockAboutMuseum/>
    <blockNews/>
    <blockVRTour/>
    <blockMuseumShop/>
    <blockMuseumsPride/>
    <blockEvents/>
    <blockGallery/>
    <blockCheckOutAlso/>
    <blockMuseumsFund/>
    <blockMobileApp/>
    <blockVolunteerProgram/>
    <blockUsefulLinks/>

  </div>
</template>

<script>
import sliderCarousel from '@/components/homepage/SliderCarousel.vue'
import blockAboutMuseum from '@/components/homepage/blockAboutMuseum.vue'
import blockNews from '@/components/homepage/blockNews.vue'
import blockVRTour from '@/components/homepage/blockVRTour.vue'
import blockMuseumShop from '@/components/homepage/blockMuseumShop.vue'
import blockMuseumsPride from '@/components/homepage/blockMuseumsPride.vue'
import blockEvents from '@/components/homepage/blockEvents.vue'
import blockGallery from '@/components/homepage/blockGallery.vue'
import blockCheckOutAlso from '@/components/homepage/blockCheckOutAlso.vue'
import blockMuseumsFund from '@/components/homepage/blockMuseumsFund.vue'
import blockMobileApp from '@/components/homepage/blockMobileApp.vue'
import blockVolunteerProgram from '@/components/homepage/blockVolunteerProgram.vue'
import blockUsefulLinks from '@/components/homepage/blockUsefulLinks.vue'

export default {
  name: 'HomeView',

  components: {
    sliderCarousel, blockAboutMuseum, blockNews, blockVRTour, blockMuseumShop, blockMuseumsPride,
    blockEvents, blockGallery, blockCheckOutAlso, blockMuseumsFund, blockMobileApp,
    blockVolunteerProgram, blockUsefulLinks
  },

  data() {
    return {
      
    }
  },
}
</script>
