<template>
  <div
    @click="scrollToTop"
    class="scrollToTop"
  >
    
    <Icons
      class="mt-4"
      icon="arrUp"
      color="white"
      size="middle"
    />
    
    <div class="progressBarBack mt-4">
      <div
        class="progressBar"
        :style="{width: `${progress}%`}"
      >
      </div>
    </div>

  </div>
</template>

<script>
import Icons from './icons.vue'

export default {
  name: 'scrollToTopComponent',

  components: {
    Icons
  },

  data() {
    return {
      progress: 0,
      width: '100%',
      interval: null
    }
  },

  methods: {
    scrollToTop() {
      let currentScroll = document.documentElement.scrollTop,
        int = setInterval(frame, 6)

      function frame() {
        if (0 > currentScroll)
          clearInterval(int)
        else
          currentScroll = currentScroll - 60
        document.documentElement.scrollTop = currentScroll
      }
    },

    onScroll() {
      clearInterval(this.interval);
      this.interval = setTimeout(() => {
        this.progressPos();
      }, 50);
    },

    progressPos() {
      let app = document.documentElement;
      let height = app.scrollHeight - app.clientHeight;
      let width = (window.pageYOffset / height) * 100;
      this.progress = Math.ceil(width);
      clearInterval(this.interval);
    },
  },

  mounted() {
    this.progressPos();
    window.addEventListener('scroll', this.onScroll);
  },

  beforeDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
      this.progress = 0;
    }

    window.removeEventListener('scroll', this.onScroll);
  }
}
</script>

<style>

</style>