<template>
  <div class="paginatorWrapper mt-60">
    <div
      @click="left"
      class="paginator-btn"
    >
    </div>

    <div
      class="paginator-dot"
      :class="dotAnimator ? 'sm' : 'big'"
    >
    </div>

    <div
      @click="right"
      class="paginator-btn"
    >
    </div>

  </div>
</template>

<script>
export default {
  name: 'paginatorDotsComponent',

  data() {
    return {
      dotAnimator: false
    }
  },

  methods: {
    left() {
      this.$emit('left')
      this.dotAnimator = true
      this.dotAnimate()
    },

    right() {
      this.$emit('right')
      this.dotAnimator = true
      this.dotAnimate()
    },

    dotAnimate() {
      setTimeout(() => {
        this.dotAnimator = false
      }, 200);
    }
  }
}
</script>

<style>

</style>