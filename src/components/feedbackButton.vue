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
        language_uzlatin: 'Shikoyat qilish',
        language_uzCyrillic: 'Шикоят қилиш',
        language_ru: 'Обращение',
        language_en: 'Appeal',
      }
    }
  }
}
</script>

<style>

</style>