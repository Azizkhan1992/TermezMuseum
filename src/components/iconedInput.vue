<template>
  <div class="w-100 pos-rel">
    <input
      class="w-100"
      @keyup.enter="iconClicked()"
      type="text"
      :placeholder="placeholder"
      :value="value"
      @input="$emit('input', $event.target.value)"
    >

    <Icons
      class="pos-abs z-idx2 ml-a r-14 mt-12"
      icon="search"
      @click.native="iconClicked()"
      size="middle"
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
    placeholder: {
      type: String,
      required: false
    },
    inputData: String,

    value: {}
  },

  model: {
    prop: 'inputData',
    event: 'input'
  },

  methods: {
    iconClicked(){
      this.$emit('iconClicked')
    }
  }
}
</script>

<style>

</style>