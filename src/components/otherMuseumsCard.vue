<template>
  <div
    :id="id"
    class="otherMuseumsCard"
    :class="
      hiddenR ? 'hidden-r' : '' ||
      hiddenL ? 'hidden-l' : '' ||
      shown ? 'shown' : ''
    "
  >
    <div class="dark-layer-solid"></div>
    <img class="back-img" :src="require('@/assets/temporary/' + this.img)" alt="">

    <h3 class="mb-48 mr-s-48 mt-a z-idx2">{{museumsTitle}}</h3>

  </div>
</template>

<script>
export default {
  name: 'otherMuseumsCardComponent',

  data() {
    return {

    }
  },

  computed: {
    shown() {
      if(
        this.hiddenR !== true &&
        this.hiddenL !== true
      ) {
        return true
      } else return false
    }
  },

  props: {
    id: Number,
    museumsTitle: String,
    img: String,
    link: String,
    hiddenR: Boolean,
    hiddenL: Boolean,
  }
}
</script>

<style>

</style>