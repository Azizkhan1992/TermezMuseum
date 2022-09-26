<template>
  <div class="w-100 pos-rel">
    <input
      class="w-100"
      type="text"
      :value="inputData"
      @input="onInput"
      :placeholder="placeholder"
    >

    <Icons
      class="pos-abs z-idx2 ml-a r-14 mt-12"
      :icon="icon"
      size=""
    />
  </div>
</template>

<script>
import Icons from './icons.vue'

export default {
  name: 'iconedInputComponent',

  components: {
    Icons
  },

  data() {
    return {
    }
  },

  props: {
    icon: String,
    placeholder: String,
    inputData: String
  },

  model: {
    prop: 'inputData',
    event: 'input'
  },

  methods: {
    onInput(e){
      this.$emit('input', e.target.value)
    }
  }
}
</script>

<style>

</style>