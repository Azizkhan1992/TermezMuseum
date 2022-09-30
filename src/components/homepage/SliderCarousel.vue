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
      <img :src="require('@/assets/temporary/' + slideItem.img + '.png')" alt="">
      <h3 class="title">{{slideItem.title[$i18n.locale]}}</h3>
      
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
      sliderItems: [
        {id: 1, img: 1, title: {ru:'Музей - центр культуры и просвещения',en:'Museum - the center of culture and education',uz:`Muzey - madaniyat va ta'lim markazi`,uzcyr:'Музей - маданият ва таълим маркази'}, link: ''},
        {id: 2, img: 2, title: {ru:'Музей - центр культуры и просвещения',en:'Museum - the center of culture and education',uz:`Muzey - madaniyat va ta'lim markazi`,uzcyr:'Музей - маданият ва таълим маркази'}, link: ''},
        {id: 3, img: 3, title: {ru:'Музей - центр культуры и просвещения',en:'Museum - the center of culture and education',uz:`Muzey - madaniyat va ta'lim markazi`,uzcyr:'Музей - маданият ва таълим маркази'}, link: ''},
        {id: 4, img: 4, title: {ru:'Музей - центр культуры и просвещения',en:'Museum - the center of culture and education',uz:`Muzey - madaniyat va ta'lim markazi`,uzcyr:'Музей - маданият ва таълим маркази'}, link: ''},
        {id: 5, img: 5, title: {ru:'Музей - центр культуры и просвещения',en:'Museum - the center of culture and education',uz:`Muzey - madaniyat va ta'lim markazi`,uzcyr:'Музей - маданият ва таълим маркази'}, link: ''},
      ]
    }
  },

  methods: {
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
      console.log(currentPage);

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
    this.play()
  }
}
</script>

<style lang="scss">

</style>