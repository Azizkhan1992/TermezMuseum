<template>
  <div name="museumsPride" class="block">

    <animatedTitle
      :animateAt="this.offTop"
      :titleName="this.title"
    />

    <div class="wr-100 gap-24">
      <div class="mainPride w-8">
        <div class="wr-100 mt-a mr-s-48">
          <h3>This is title</h3>
        </div>

        <div class="wr-100 mr-s-48 mb-48 mt-24 align-c gap-12">
          <p class="weak-text">Year</p>
          <p>This is year</p>
          <button
            class="white-ghost w-2 h-48p ml-a"
          >
            <span>Click me</span>
          </button>
        </div>

        <div class="dark-layer"></div>
        <img src="@/assets/static/about-museum.png" alt="">
      </div>

      <div class="wc-4 gap-24">

        <div class="wc-100 ovr-hidden bor-r-20 pos-rel h-50">
          
          <div class="w-100 mt-a gap-24">
            <h4>This is title</h4>
          </div>

          <div class="w-100 mt-24 gap-12">
            <p class="addText">Year</p>
            <p>This is year</p>
          </div>

          <div class="w-100 mt-24">
            <button class="white-ghost w-full h-48p mb-24">
              <span>Click me</span>
            </button>
          </div>

          <div class="dark-layer"></div>
          <img src="@/assets/static/main.jpg" alt="">
        
        </div>

        <div class="wc-100 ovr-hidden bor-r-20 pos-rel h-50">

          <div class="w-100 mt-a gap-24">
            <h4>This is title</h4>
          </div>

          <div class="w-100 mt-24 gap-12">
            <p class="addText">Year</p>
            <p>This is year</p>
          </div>

          <div class="w-100 mt-24">
            <button class="white-ghost w-full h-48p mb-24">
              <span>Click me</span>
            </button>
          </div>

          <div class="dark-layer"></div>
          <img src="@/assets/static/museums-collection.png" alt="">
        
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import animatedTitle from '../animatedTitle.vue'

export default {
  name: 'blockMuseumsPride',

  components: {
    animatedTitle
  },

  data() {
    return {
      offTop: 1,
      title: 'Гордость музея',
    }
  },

  methods: {
    getOffsetTop() {
      this.offTop = document.getElementsByName('museumsPride')[0].offsetTop - 400
    }
  },

  mounted() {
    this.getOffsetTop()
  }
}
</script>

<style>

</style>