<template>
  <div
    :id="id"
    class="shopCard"
    :class="
      hiddenR ? 'hidden-r' : '' ||
      hiddenL ? 'hidden-l' : '' ||
      shown ? 'shown' : ''
    "
  >
    <img :src="require('@/assets/temporary/' + this.img)" alt="">

    <h3 class="mb-24">{{itemTitle}}</h3>

    <h4>{{price}}<span> {{currency}}</span></h4>

    <button class="prim w-4-48 mt-a mb-24">
      <span>Click me</span>
    </button>

  </div>
</template>

<script>
export default {
  name: 'shopCardComponent',

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
    price: String,
    currency: String,
    link: String,
    hiddenR: Boolean,
    hiddenL: Boolean,
  }
}
</script>

<style>

</style>