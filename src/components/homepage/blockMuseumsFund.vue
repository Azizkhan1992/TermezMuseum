<template>
  <div name="museumsFundBlock" class="block">

    <animatedTitle
      :animateAt="this.offTop"
      :titleName="this.title"
    />

    <div class="w-100 bor-r-20 ovr-hidden pos-rel h-680p">

      <div class="w-50 pad-48p box-brb ml-a z-idx2">
        
        <h3 class="commonT">Акция "Подари скамейку"</h3>

        <p class="commonP mt-60">This is description</p>

        <button class="white-ghost mt-a ml-a w-3 h-48p">
          <span>Click me</span>
        </button>

      </div>
      
      <div class="dark-layer-hrz"></div>
      <img class="back-img" src="@/assets/static/main.jpg" alt="">
    
    </div>

  </div>
</template>

<script>
import animatedTitle from '../animatedTitle.vue'

export default {
  name: 'blockMuseumsFund',

  components: {
    animatedTitle
  },

  data() {
    return {
      offTop: 1,
      title: 'Фонд музея',


    }
  },

  methods: {
    getOffsetTop() {
      this.offTop = document.getElementsByName('museumsFundBlock')[0].offsetTop - 400
    },
  },

  mounted() {
    this.getOffsetTop()
  }
}
</script>

<style>

</style>