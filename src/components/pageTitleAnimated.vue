<template>
  <div
    class="pageTitleAnimated"
  >
    <img class="back-img" :src="require('@/assets/static/bckgrnd/' + this.background + '.jpg')" alt="">
    <h2
      class="animated z-idx1"
      :class="animating ? 'shrunked' : ''"
    >
      {{titleName}}
    </h2>
    <h2 class="z-idx1 mt-a mb-80">{{titleName}}</h2>
  </div>
</template>

<script>

export default {
  name: 'pageTitleAnimatedComponent',

  data() {
    return {
      animating: false
    }
  },

  props: {
    titleName: String,
    background: String
  },

  methods: {
    animatingTitle() {
      setTimeout(() => {
        this.animating = true
      }, 100);
    }
  },

  mounted() {
    this.animatingTitle()
  }
}
</script>

<style>

</style>