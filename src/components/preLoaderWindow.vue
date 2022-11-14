<template>
  <div
    class="preLoaderWindow"
  >
    <div class="lighter">
    </div>

    <div class="logoText gap-24">
      
      <img class="h-120p" src="@/assets/logo-white.svg" alt="">
      
      <div class="w-100 fd-c align-c gap-3">
        <h2>{{title1[$i18n.locale]}}</h2>
        <h2>{{title2[$i18n.locale]}}</h2>
        <h2>{{title3[$i18n.locale]}}</h2>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'preLoaderWindowModal',
  data(){
    return{
      title1:{
        language_uzlatin: 'Termiz',
        language_uzCyrillic: 'Термиз',
        language_ru: 'Термезский',
        language_en: 'Termez',
      },
      title2:{
        language_uzlatin: 'Arxeologik',
        language_uzCyrillic: 'Археологик',
        language_ru: 'Археологический',
        language_en: 'Archaeological',
      },
      title3:{
        language_uzlatin: 'Muzeyi',
        language_uzCyrillic: 'Музейи',
        language_ru: 'Музей',
        language_en: 'Museum',
      }
    }
  }
}
</script>

<style>

</style>