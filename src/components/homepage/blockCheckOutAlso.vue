<template>
  <div name="checkOutAlsoBlock" class="block">

    <animatedTitle
      :animateAt="this.offTop"
      :titleName="this.title"
    />
    <div class="slideWrapper">
      <div class="wr-100 gap-24 ovr-hidden">
        
        <otherMuseumsCard
          v-for="museumCard in museums"
          :key="museumCard.id"
          :id="museumCard.id"
          :museumsTitle="museumCard.name"
          :img="museumCard.img"
          :link="museumCard.link"
          :hiddenR="hiddenRChecker(museumCard.id)"
          :hiddenL="hiddenLChecker(museumCard.id)"
        />

      </div>
    </div>

    <paginatorDots
      @left="prev"
      @right="next"
    />

  </div>
</template>

<script>
import animatedTitle from '../animatedTitle.vue'
import otherMuseumsCard from '../otherMuseumsCard.vue'
import paginatorDots from '../paginatorDots.vue'

export default {
  name: 'blockCheckOutAlso',

  components: {
    animatedTitle, otherMuseumsCard, paginatorDots
  },

  data() {
    return {
      offTop: 1,
      title: 'Посмотрите также',
      hiddenR: 1,
      playInterval: '',

      museums: [
        {id: 1, name: 'Музей Вооруженных Сил Узбекистана', img: 'armedForcesMuseum.png', link: ''},
        {id: 2, name: 'Музей Прикладного Искусттва', img: 'artMuseum.png', link: ''},
        {id: 3, name: 'Государстенный Музей Природы', img: 'natureMuseum.png', link: ''},
        {id: 4, name: 'Музей Железнодорожной Техники', img: 'railwaysMuseum.png', link: ''},
        {id: 5, name: 'Государственный Музей Тимуридов', img: 'timuridMuseum.png', link: ''},
      ]
    }
  },

  methods: {
    getOffsetTop() {
      this.offTop = document.getElementsByName('checkOutAlsoBlock')[0].offsetTop - 400
    },

    prev() {
      clearInterval(this.playInterval)

      const slideLen = this.museums.length
      let firstItem = this.museums.pop()

      this.museums.unshift(firstItem)

      if(this.hiddenR !== 1) {
        this.hiddenR --
      } else this.hiddenR = slideLen

      this.play()
    },

    next() {
      clearInterval(this.playInterval)

      const slideLen = this.museums.length
      let firstItem = this.museums.shift()

      this.museums.push(firstItem)

      if(this.hiddenR !== slideLen) {
        this.hiddenR ++
      } else this.hiddenR = 1

      this.play()
    },

    hiddenRChecker(id) {
      if(id == this.hiddenR) {
        return true
      } else return false
    },

    hiddenLChecker(id) {
      const len = this.museums.length

      if(
        this.hiddenR <= len -3 &&
        id !== this.hiddenR + 1 &&
        id !== this.hiddenR + 2 &&
        id !== this.hiddenR + 3
      ) {
        return true
      } else if(
        this.hiddenR == len - 2 &&
        id !== 1 &&
        id !== this.hiddenR + 1 &&
        id !== this.hiddenR + 2
      ) {
        return true
      } else if (
        this.hiddenR == len - 1 &&
        id !== 1 &&
        id !== 2 &&
        id !== this.hiddenR + 1
      ) {
        return true
      } else if (
        this.hiddenR == len &&
        id !== 1 &&
        id !== 2 &&
        id !== 3
      ) {
        return true
      } else return false
    },

    animation() {
      const slideLen = this.museums.length
      let firstItem = this.museums.shift()

      this.museums.push(firstItem)

      if(this.hiddenR !== slideLen) {
        this.hiddenR ++
      } else this.hiddenR = 1
    },

    play() {
      this.playInterval = setInterval(() => {
        this.animation()
      }, 5000);
    }
  },

  mounted() {
    this.getOffsetTop()
    this.play()
  }
}
</script>

<style>

</style>