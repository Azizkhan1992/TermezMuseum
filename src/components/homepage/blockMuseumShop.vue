<template>
  <div name="museumShop" class="block">
    
    <animatedTitle
      :animateAt="this.offTop"
      :titleName="this.title[$i18n.locale]"
    />

    <div class="sliderWrapper">
      <div class="wr-100 gap-24">
        <shopCard
          v-for="item in shopItems"
          :key="item.id"
          :id="item.id"
          :itemTitle="item.itemTitle"
          :img="item.img"
          :price="item.price"
          :currency="item.currency"
          :link="item.link"
          :hiddenR="hiddenRChecker(item.id)"
          :hiddenL="hiddenLChecker(item.id)"
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
import animatedTitle from '../animatedTitle.vue';
import shopCard from '../shopCard.vue'
import paginatorDots from '../paginatorDots.vue'

export default {
  name: 'museumShopBlock',

  components: {
    animatedTitle, shopCard, paginatorDots
},

  data() {
    return {
      offTop: 1,
      title:{
        language_uzlatin: 'Muzey do\'koni',
        language_ru: 'Магазин музея',
        language_uzCyrillic: 'Музей дўкони',
        language_en: 'Museum shop',
      },
      hiddenR: 1,
      playInterval: '',

      shopItems: [
        {id: 1, itemTitle: 'Золотистые самовары', img: 'samovar.jpg', price: '21 564 890.20', currency: 'UZS', link: ''},
        {id: 2, itemTitle: 'Фигурки слонов', img: 'stones.jpg', price: '21 595 842.20', currency: 'UZS', link: ''},
        {id: 3, itemTitle: 'Древние монеты', img: 'monety.jpg', price: '21 525 970.20', currency: 'UZS', link: ''},
        {id: 4, itemTitle: 'Старинные тандуры', img: '1.png', price: '21 120 120.20', currency: 'UZS', link: ''},
        {id: 5, itemTitle: 'Скелеты мамонта', img: '2.png', price: '21 212 212.20', currency: 'UZS', link: ''},
      ]
    }
  },

  methods: {
    getOffsetTop() {
      this.offTop = document.getElementsByName('museumShop')[0].offsetTop - 400
    },

    prev() {
      clearInterval(this.playInterval)

      const slideLen = this.shopItems.length
      let firstItem = this.shopItems.pop()

      this.shopItems.unshift(firstItem)

      if(this.hiddenR !== 1) {
        this.hiddenR --
      } else this.hiddenR = slideLen

      this.play()
    },

    next() {
      clearInterval(this.playInterval)

      const slideLen = this.shopItems.length
      let firstItem = this.shopItems.shift()

      this.shopItems.push(firstItem)

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
      const len = this.shopItems.length

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
      const slideLen = this.shopItems.length
      let firstItem = this.shopItems.shift()

      this.shopItems.push(firstItem)

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