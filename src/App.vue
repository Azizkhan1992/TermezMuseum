<template>
  <div id="app">

    <preLoaderWindow
      v-if="state"
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
// import googleOneTapSignin from "@/composables/googleOneTapSignin";

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
    setTimeout(()=>{this.off()},1500)

    // const { googleOptions, oneTapSignin, userData } = googleOneTapSignin()
    // oneTapSignin(googleOptions)
    // console.log(userData)
  }
}
</script>
