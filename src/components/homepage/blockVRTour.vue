<template>
  <div name="vrTour" class="block">

    <animatedTitle
      :animateAt="this.offTop"
      :titleName="this.title"
    />

    <div class="wr-100 gap-24">
      <div class="w-50">
        <span class="vr-text">Хотите путешествовать в прошлое Сурхандарьи и получить неописуемые впечатления и при этом не выходя из дома? Тогда мы приглашаем вас в 3D Тур по музею.</span>
        
        <button
          class="prim w-4 mt-a"
        >
          <span>Click me</span>
        </button>
      </div>

      <div class="w-50">
        <img class="vr" src="@/assets/static/vr.jpg" alt="">
      </div>
    </div>


  </div>
</template>

<script>
import animatedTitle from '../animatedTitle.vue'

export default {
  name: 'vrTourBlock',
  components: {
    animatedTitle
  },

  data() {
    return {
      offTop: 1,
      title: '3D Тур по музею',
    }
  },

  methods: {
    getOffsetTop() {
      this.offTop = document.getElementsByName('vrTour')[0].offsetTop - 400
    }
  },

  mounted() {
    this.getOffsetTop()
  }
}
</script>

<style>

</style>