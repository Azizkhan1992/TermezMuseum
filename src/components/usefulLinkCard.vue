<template>
  <div
    :id="id"
    class="usefulLinkCard"
    :class="
      hiddenR ? 'hidden-r' : '' ||
      hiddenL ? 'hidden-l' : '' ||
      shown ? 'shown' : ''
    "
  >
    <div class="w-3 pos-rel h-182p">
      <img class="back-img" :src="img" alt="">
    </div>

    <h3 class="mb-24 z-idx2">{{itemTitle}}</h3>

  </div>
</template>

<script>
export default {
  name: 'usefulLinkCardComponent',

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
    itemTitle: String,
    img: String,
    link: String,
    hiddenR: Boolean,
    hiddenL: Boolean,
  }
}
</script>

<style>

</style>
