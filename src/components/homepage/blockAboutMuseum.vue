<template>
  <div name="aboutMuseumBlock" class="block">
    <animatedTitle
      :animateAt="this.offTop"
      :titleName="this.title"
    />

    <div class="mainPhoto">
      <img class="mainImage" src="@/assets/static/main.jpg" alt="">
      <p>{{txt}}</p>
      <div class="dark-layer"></div>
    </div>

    <button class="prim w-4"><span>Click me</span></button>
    
  </div>
</template>

<script>
import animatedTitle from '../animatedTitle.vue';

export default {
  name: 'aboutMuseumBlock',
  components: {
    animatedTitle
  },

  data() {
    return {
      offTop: 1,
      title: 'О музее',
      txt: `Термезский археологический музей является единственным археологическим музеем в 
      нашей стране и относится к числу специализированных музеев. Этот музей является одним 
      из самых замечательных мест нашего города, в котором возрождается история древнего Сурханского 
      оазиса на протяжении тысячелетий. Термезский археологический музей состоит из вестибюля, 9 основных 
      выставочных залов, нумизматического выставочного зала, выставочного зала, посвященного японскому 
      археологу Като Кюдзо, небольшого выставочного зала и галереи под крыльцом. В музее также есть 
      библиотека с редкими рукописями и литературой. По состоянию на 2020 год общее количество экспонатов 
      в фонде Термезского археологического музея составляет более 100 тысяч. Из них более 70 000 экспонатов 
      археологии и около 30 000 экспонатов, принадлежащих нумизматическому фонду.`
    }
  },

  methods: {
    getOffsetTop() {
      this.offTop = document.getElementsByName('aboutMuseumBlock')[0].offsetTop - 400
    }
  },

  mounted() {
    this.getOffsetTop()
  }
}
</script>

<style>

</style>