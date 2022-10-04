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
        uz: 'Termiz',
        uzcyr: 'Термиз',
        ru: 'Термезский',
        en: 'Termez',
      },
      title2:{
        uz: 'Arxeologik',
        uzcyr: 'Археологик',
        ru: 'Археологический',
        en: 'Archaeological',
      },
      title3:{
        uz: 'Muzeyi',
        uzcyr: 'Музейи',
        ru: 'Музей',
        en: 'Museum',
      }
    }
  }
}
</script>

<style>

</style>