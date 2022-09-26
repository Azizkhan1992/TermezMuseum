<template>
  <div class="animatedTitle">
    <h2
      class="animated"
      :class="animating ? 'shrunked' : ''"
    >
      {{titleName}}
    </h2>
    <h2>{{titleName}}</h2>
  </div>
</template>

<script>

export default {
  name: 'animatedTitle',

  data() {
    return {
      animating: false
    }
  },

  props: {
    animateAt: Number,
    titleName: String
  },

  methods: {
    animatingTitle() {
      let _t = this
      window.addEventListener('wheel', function() {
        let yOffset = window.pageYOffset

        if(yOffset >= _t.animateAt) {
          _t.animating = true
        } else _t.animating = false
      })
    }
  },

  mounted() {
    this.animatingTitle()
  },

  beforeDestroy() {
    window.removeEventListener('wheel', this.animatingTitle())
  }
}
</script>

<style>

</style>