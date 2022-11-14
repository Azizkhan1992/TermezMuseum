<template>
  <div name="galleryBlock" class="block">
    <animatedTitle
      :animateAt="this.offTop"
      :titleName="this.title[$i18n.locale]"
    />

    <div class="wr-100 gap-24">
      <div class="w-8 pos-rel h-sqrd ovr-hidden bor-r-20">
        <div class="dark-layer z-idx1"></div>
        <img class="back-img" src="@/assets/temporary/monety.jpg" alt="">
      </div>

      <div class="wc-4 gap-24">

        <div class="wc-100 ovr-hidden bor-r-20 pos-rel h-50">
          <div class="dark-layer z-idx1"></div>
          <img class="back-img" src="@/assets/temporary/samovar.jpg" alt="">
        </div>

        <div class="wc-100 ovr-hidden bor-r-20 pos-rel h-50">
          <div class="dark-layer z-idx1"></div>
          <img class="back-img" src="@/assets/temporary/samovar.jpg" alt="">
        </div>
      </div>
    </div>

    <div class="wr-100 gap-24 mt-24">

      <div class="wc-4 gap-24">

        <div class="wc-100 ovr-hidden bor-r-20 pos-rel h-50">
          <div class="dark-layer z-idx1"></div>
          <img class="back-img" src="@/assets/temporary/samovar.jpg" alt="">
        </div>

        <div class="wc-100 ovr-hidden bor-r-20 pos-rel h-50">
          <div class="dark-layer z-idx1"></div>
          <img class="back-img" src="@/assets/temporary/samovar.jpg" alt="">
        </div>
      </div>

      <div class="w-8 pos-rel h-sqrd ovr-hidden bor-r-20">
        <div class="dark-layer z-idx1"></div>
        <img class="back-img" src="@/assets/temporary/monety.jpg" alt="">
      </div>
    </div>


  </div>
</template>

<script>
import animatedTitle from '../animatedTitle.vue'

export default {
  name: 'blockGallery',

  components: {
    animatedTitle
  },

  data() {
    return {
      offTop: 1,
      title:{
        language_uzlatin: 'Galereya',
        language_ru: 'Галерея',
        language_uzCyrillic: 'Галерея',
        language_en: 'Gallery',
      }
    }
  },

  methods: {
    getOffsetTop() {
      this.offTop = document.getElementsByName('galleryBlock')[0].offsetTop - 400
    }
  },

  mounted() {
    this.getOffsetTop()
  }
}
</script>

<style>

</style>