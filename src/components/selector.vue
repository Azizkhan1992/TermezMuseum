<template>
  <div
    class="w-100 h-100"
  >
    <div
      class="selectorMain w-100 h-100 fd-c pos-rel"
    >
      <div
        class="selectorParent w-100 h-100 pos-rel"
        :class="open ? 'open' : ''"
      >
        <input
          :id="id"
          @mousedown="closingListener"      
          v-model="chosenOption.label"
          class="selector w-100 h-48p z-idx0"
          type="button"
        >

        <Icons
          class="pos-abs z-idx2 ml-a r-12 mt-12"
          icon="arrDown"
          size="middle"
        />
      </div>

      <ul
        class="pos-abs"
        :class="open ? 'open' : ''"
      >
        <button
          @click="changingOption(option)"
          v-for="option in options"
          :key="option.value"
          :class="option.value == chosenOption.value ? 'chosen' : ''"
        >
          <span>
            {{option.label}}
          </span>
        </button>
      </ul>
    </div>
  </div>
</template>

<script>
import Icons from './icons.vue'

export default {
  name: 'selectorComponent',

  components: {
    Icons
  },

  data() {
    return {
      open: false,
      chosenOption: {value: '1', label: 'Option 1'},
    }
  },

  props: {
    options: {
      type: Array,
      require: true
    },
    id: {
      type: String,
      require: true
    }
  },

  methods: {
    loggerFunc() {
      if(this.open == true) {
        this.open = false
      } else return
    },

    logProp(){
      console.log(this.options)
    },

    choosingOption() {
      this.chosenOption = this.options[0]
    },

    changingOption(opt) {
      this.chosenOption = opt
      this.$emit('optionChanged', opt)
    },

    closingListener() {
      const _t = this
      const checkingId = this.id

      if(this.open == true) {
        this.open = false
        document.removeEventListener('mouseup', this.loggerFunc)
      } else {
        this.open = true
        document.addEventListener('mouseup', function(e){
          if(e.target && e.target.id !== checkingId){
            _t.loggerFunc()
          }
        })
      }
    }
  },

  mounted() {
    this.logProp()
  },

  beforeDestroy() {
    document.removeEventListener('mousedown', this.loggerFunc)
  }
}
</script>

<style>

</style>