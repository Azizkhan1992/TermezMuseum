<template>
  <div name="usefulLinksBlock" class="block">

    <animatedTitle
      :animateAt="this.offTop"
      :titleName="this.title"
    />


    <div class="sliderWrapper">
      <div class="wr-100 gap-24">
        <usefulLinkCard
          v-for="item in usefulLinks"
          :key="item.id"
          :id="item.id"
          :itemTitle="item.name"
          :img="item.img"
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
import usefulLinkCard from '../usefulLinkCard.vue';
import paginatorDots from '../paginatorDots.vue'

export default {
  name: 'blockUsefulLinks',

  components: {
    animatedTitle, usefulLinkCard, paginatorDots
  },

  data() {
    return {
      offTop: 1,
      title: 'Полезные ссылки',
      hiddenR: 1,
      playInterval: '',

      usefulLinks: [
        {id: 1, name: 'SomeLink1', link: '', img: '1.png'},
        {id: 2, name: 'SomeLink2', link: '', img: '2.png'},
        {id: 3, name: 'SomeLink3', link: '', img: '3.png'},
        {id: 4, name: 'SomeLink4', link: '', img: '4.png'},
        {id: 5, name: 'SomeLink5', link: '', img: '5.png'},
        {id: 6, name: 'SomeLink6', link: '', img: 'stones.jpg'},
      ]
    }
  },

  methods: {
    getOffsetTop() {
      this.offTop = document.getElementsByName('usefulLinksBlock')[0].offsetTop - 400
    },

    prev() {
      clearInterval(this.playInterval)

      const slideLen = this.usefulLinks.length
      let firstItem = this.usefulLinks.pop()

      this.usefulLinks.unshift(firstItem)

      if(this.hiddenR !== 1) {
        this.hiddenR --
      } else this.hiddenR = slideLen

      this.play()
    },

    next() {
      clearInterval(this.playInterval)

      const slideLen = this.usefulLinks.length
      let firstItem = this.usefulLinks.shift()

      this.usefulLinks.push(firstItem)

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
      const shown = []

      for(let i = 1; i <= 4; i++) {
        shown.push(this.usefulLinks[i].id)
      }

      if(shown.includes(id) == true && id !== this.hiddenR) {
        return false
      } else return true
    },

    animation() {
      const slideLen = this.usefulLinks.length
      let firstItem = this.usefulLinks.shift()

      this.usefulLinks.push(firstItem)

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