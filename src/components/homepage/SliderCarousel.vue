<template>
  <div class="carousel">

    <div 
      class="slider-item"
      v-for="slideItem in sliderItems"
      :key="slideItem.id"
      :id="slideItem.id"
      :class="
        slideItem.id == hiddenLeftIdChecker ? 'hidden-left' : '' ||
        slideItem.id !== firstItemIdChecker && slideItem.id !== hiddenLeftIdChecker && slideItem.id !== mainItemIdChecker ? 'hidden-right' : '' ||
        slideItem.id == firstItemIdChecker ? 'first' : '' ||
        slideItem.id == mainItemIdChecker ? 'main' : ''
      "
    >
      <img :src="slideItem?.imagePath?.path" alt="">
      <!-- <h3 class="title">{{slideItem?.title}}</h3> -->
      <h3 class="title">{{slideItem?.title[$i18n.locale]}}</h3>
      
      <button
        @click="moveToPage(slideItem.link)"
      >
        <span>{{$t("more")}}</span>
      </button>

      <div class="dark-layer"></div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'sliderCarousel',

  data() {
    return {
      hiddenLeftIdChecker: 1,
      mainItemIdChecker: 2,
      firstItemIdChecker: 3,
      sliderItems: []
    }
  },

  methods: {
    getSliderData(){
      this.$api.get('/home/slider')
      .then(resp=> {
        this.sliderItems = resp.data.result
        for(let i=1; i<= this.sliderItems.length; i++){
          this.sliderItems[i-1].id = i
        }
        console.log(this.sliderItems)
      }).catch(err => {console.log(err)})
    },
    animation() {
      let shiftedItem = this.sliderItems.shift()
      this.sliderItems.push(shiftedItem)

      const slideLen = this.sliderItems.length

      if(this.mainItemIdChecker <= slideLen - 1) {
        this.mainItemIdChecker++
      } else {
        this.mainItemIdChecker = 1
      }

      if(this.firstItemIdChecker <= slideLen - 1) {
        this.firstItemIdChecker++
      } else {
        this.firstItemIdChecker = 1
      }

      if(this.hiddenLeftIdChecker <= slideLen - 1) {
        this.hiddenLeftIdChecker++
      } else {
        this.hiddenLeftIdChecker = 1
      }
    },

    moveToPage(link) {
      const currentPage = this.$route.path

      if(link !== currentPage) {
        this.$router.push({ path: link })
      }
    },
    
    play() {
      setInterval(() => {
        this.animation()
      }, 5000);
    }
  },

  mounted() {
    this.getSliderData()
    this.play()
  }
}
</script>

<style lang="scss">

</style>