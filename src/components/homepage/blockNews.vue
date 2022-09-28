<template>
  <div name="newsBlock" class="block">
    <animatedTitle
      :animateAt="this.offTop"
      :titleName="this.title"
    />

    <div class="wrapper-h mb-60">
      <button class="prim w-3 a-left">
        <span>Все новости</span>
      </button>

      <topTags
        :topTags="this.topTags"
      />
    </div>

    <newsCard
      :bigCard="true"
    />

    <div class="row-3 mb-24">
      <newsCard/>
      <newsCard/>
      <newsCard/>
    </div>

    <subscriberComponent/>
    
  </div>
</template>

<script>
import animatedTitle from '../animatedTitle.vue';
import topTags from '../topTags.vue'
import newsCard from '../newsCard.vue'
import subscriberComponent from '../subscriber.vue'

export default {
  name: 'newsBlock',
  components: {
    animatedTitle, topTags, newsCard, subscriberComponent
  },

  data() {
    return {
      offTop: 1,
      title: 'Новости',
      topTags: [
        {name: 'Важно', id: 1},
        {name: 'Конкурс', id: 2},
        {name: 'История Узбекистана', id: 3},
      ]
    }
  },

  methods: {
    getOffsetTop() {
      this.offTop = document.getElementsByName('newsBlock')[0].offsetTop - 400
    }
  },

  mounted() {
    this.getOffsetTop()
  }
}
</script>

<style>

</style>