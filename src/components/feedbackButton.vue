<template>
  <div class="feedbackButton gap-12">
    <Icons
      icon="mail"
      color="white"
      size="middle"
    />
    <p class="commonP line-h-20">{{title[$i18n.locale]}}</p>
  </div>
</template>

<script>
import Icons from './icons.vue'

export default {
  name: 'feedbackButtonComponent',

  components: {
    Icons
  },

  data() {
    return {
      title:{
        uz: 'Shikoyat qilish',
        uzcyr: 'Шикоят қилиш',
        ru: 'Обращение',
        en: 'Appeal',
      }
    }
  }
}
</script>

<style>

</style>