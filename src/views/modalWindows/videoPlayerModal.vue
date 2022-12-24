<template>
    <div
      @click="closeMe"
      class="videoPlayer"
    >
      <iframe
        class="videoPlayerFrame"
        frameborder="0"
        allowfullscreen="1"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        :width="1320"
        :height="800"
        :src="`https://www.youtube-nocookie.com/embed/${videoID}?rel=0&amp;amp;showinfo=0?origin=http%3A%2F%2Flocalhost%3A8080&amp;enablejsapi=1&amp;widgetid=1`"
        sandbox="allow-same-origin allow-scripts allow-modals allow-forms allow-popups allow-popups-to-escape-sandbox allow-presentation"
      >
      </iframe>
    </div>
  </template>
  
  <script>
  export default {
    name: 'videoPlayerModal',
  
    data() {
      return {
        width: 1320
      }
    },
  
    props: {
      videoID: {
        type: String,
        required: true
      }
    },
  
    methods: {
      closeMe() {
        this.$emit('closeMe')
      }
    },
  
    mounted() {
    //   console.log(this.videoID);
  
      window.onresize = () => {
        if(window.innerWidth <= 900) {
          this.width = 1080
        } else if(window.innerWidth < 1100 && window.innerWidth >= 900) {
          this.width = 804
        } else {
          this.width = window.innerWidth - 48
        }
      }
    },
  }
  </script>
  <style lang="scss">
.videoPlayer {
  z-index: 201;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #00000098;
  
  .videoPlayerFrame {
    width: 1320px;
    height: 800px;
    background: aliceblue;
  }
  
  .ytp-pause-overlay {
    display: none;
  }
}
</style>