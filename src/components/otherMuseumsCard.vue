<template>
  <div
    :id="id"
    class="otherMuseumsCard"
    :class="
      hiddenR ? 'hidden-r' : '' ||
      hiddenL ? 'hidden-l' : '' ||
      shown ? 'shown' : ''
    "
    @click="goToPage(link)"
  >
    <div class="dark-layer-solid"></div>
    <img class="back-img" :src="img" alt="err">

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
  },
  methods: {
    goToPage(link){
      window.open(link, "_blank");
      // console.log(link)
    }
  },
}
</script>

<style>

</style>
