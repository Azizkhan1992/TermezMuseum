<template>
  <div name="checkOutAlsoBlock" class="block">

    <animatedTitle
      :animateAt="offTop"
      :titleName="title[$i18n.locale]"
    />

    <div class="slideWrapper">
      <div class="wr-100 gap-24 ovr-hidden">

        <otherMuseumsCard
          v-for="museumCard in otherMuseums"
          :key="museumCard.id"
          :id="museumCard.id"
          :museumsTitle="museumCard?.title[$i18n.locale]"
          :img="museumCard?.image?.path"
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
    animatedTitle,
    otherMuseumsCard,
    paginatorDots,
  },

  data() {
    return {
      offTop: 1,
      title:{
        language_uzlatin: 'Shuningdek, tomosha qiling',
        language_ru: 'Посмотрите также',
        language_uzCyrillic: 'Шунингдек, томоша қилинг',
        language_en: 'Check out also',
      },
      hiddenR: 1,
      playInterval: '',

      otherMuseums: []
    }
  },

  methods: {
    getOffsetTop() {
      this.offTop = document.getElementsByName('checkOutAlsoBlock')[0]?.offsetTop - 400
    },
    async getOtherMuseum() {
      const data = await this.$api('/home/otherMuseums');
      this.otherMuseums = data.data.otherWebsiteDocument

      // console.log(this.otherMuseums)

      for(let i=1; i<=  this.otherMuseums.length; i++){
        this.otherMuseums[i-1].id = i
      }
    },
    prev() {
      clearInterval(this.playInterval)

      const slideLen = this.otherMuseums.length
      let firstItem = this.otherMuseums.pop()

      this.otherMuseums.unshift(firstItem)

      if (this.hiddenR !== 1) {
        this.hiddenR--;
      } else this.hiddenR = slideLen;

      this.play();
    },

    next() {
      clearInterval(this.playInterval);

      const slideLen = this.otherMuseums.length
      let firstItem = this.otherMuseums.shift()

      this.otherMuseums.push(firstItem);

      if(this.hiddenR !== slideLen) {
        this.hiddenR++;
      } else this.hiddenR = 1

      this.play()
    },

    hiddenRChecker(id) {
      if(id == this.hiddenR) {
        return true
      } else return false
    },

    hiddenLChecker(id) {
      const len = this.otherMuseums.length

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
      const slideLen = this.otherMuseums.length
      let firstItem = this.otherMuseums.shift()

      this.otherMuseums.push(firstItem)

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
    this.getOtherMuseum()
  }
}
</script>

<style>

</style>
