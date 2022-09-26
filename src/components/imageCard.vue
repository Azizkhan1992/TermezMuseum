<template>
  <div
    :id="id"
    class="imageCard w-4 h-320p pos-rel bor-r-20 ovr-hidden"
    :class="
      hiddenR ? 'hidden-r' : '' ||
      hiddenL ? 'hidden-l' : '' ||
      shown ? 'shown' : ''
    "
  >
    <div class="dark-layer-solid"></div>
    <img class="back-img" :src="require('@/assets/temporary/' + this.img + '.png')" alt="">
  </div>
</template>

<script>
export default {
  name: 'imageCardComponent',

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
    img: String,
    link: String,
    hiddenR: Boolean,
    hiddenL: Boolean,
  }
}
</script>

<style>

</style>