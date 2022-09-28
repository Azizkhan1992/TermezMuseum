<template>
  <div id="app" style="-webkit-overflow-scrolling: touch;overflow-y: scroll;">
  
    <preLoaderWindow
      v-if="state"
      @click.native="off"
    />
    
    <component :is="layout">
      <router-view/>
    </component>
  
  </div>
</template>

<script>
import additionalLayout from './layouts/additionalLayout.vue'
import mainLayout from './layouts/mainLayout.vue'
import preLoaderWindow from './components/preLoaderWindow.vue'

export default {
  name: 'app',

  components: {
    mainLayout, additionalLayout, preLoaderWindow
  },

  data() {
    return {
      text: '',
      state: this.$store.state.preloader
    }
  },

  computed: {
    layout() {
      return (this.$route.meta.layout || 'additional') + '-layout'
    }
  },

  methods: {
    getSelectionText() {
      let _t = this
      window.addEventListener('keydown', (event) => {
          if(event.ctrlKey && event.key == "Enter") {
          _t.text = window.getSelection().toString()

          console.log(_t.text);
        }
      });
    },

    async off() {
      await 
        this.$store.dispatch('preloaderOff')
        this.state = this.$store.state.preLoader
    }
  },

  mounted() {
    this.getSelectionText()
    this.$i18n.locale = localStorage.lang || 'uz'
    setTimeout(()=>{this.off()},1500)
  }
}
</script>