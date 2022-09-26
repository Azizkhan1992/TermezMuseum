<template>
  <div name="mobileAppBlock" class="block">

    <animatedTitle
      :animateAt="this.offTop"
      :titleName="this.title"
    />

    <div class="w-100 gap-24   h-720p">
      
      <div class="w-50 pos-rel bor-r-20 ovr-hidden">
        <img class="back-img" src="@/assets/temporary/museumsApp.png" alt="">
      </div>

      <div class="w-50">
        <p class="commonP rem-13 clr-type ta-r">
          This is description
        </p>

        <div class="w-100 mt-a h-72p gap-24">
          <button class="market-btn w-3">
            <img src="@/assets/icons/apple-logo.svg" alt="">
            <div class="aligner">
              <p class="appleFontReg">Загрузите приложение в</p>
              <span class="appleFontBold">App Store</span>
            </div>
          </button>

          <button class="market-btn w-3">
            
            <img src="@/assets/icons/google-logo.svg" alt="">
            <div class="aligner">
              <p class="appleFontReg">Приложение доступно в</p>
              <span class="googleFontBold">Google Play</span>
            </div>

          </button>
        </div>
      </div>
    </div>
  
  </div>
</template>

<script>
import animatedTitle from '../animatedTitle.vue'

export default {
  name: 'blockMobileApp',

  components: {
    animatedTitle
  },

  data() {
    return {
      offTop: 1,
      title: 'Мобильное приложение'
    }
  },

  methods: {
    getOffsetTop() {
      this.offTop = document.getElementsByName('mobileAppBlock')[0].offsetTop - 400
    },
  },

  mounted() {
    this.getOffsetTop()
  }
}
</script>

<style>

</style>