<template>
  <div
    class="iconText"
    :class="lastItem ? 'ml-a' : ''"
  >
    <Icons
      :icon="this.icon"
      :color="this.color"
    />
    <p
      v-if="text.length"
      :class="this.color"
    >
      <span>{{this.title}}</span>
      {{this.text}}
    </p>
  </div>
</template>

<script>
import Icons from './icons.vue'

export default {
  name: 'iconTextButton',

  components: {
    Icons
  },

  props: {
    icon: {
      type: String,
      default: ''
    },
    text: String,
    title: String,
    lastItem: {
      type: Boolean,
      default: false
    },
    color: String,
  }
}
</script>

<style>

</style>