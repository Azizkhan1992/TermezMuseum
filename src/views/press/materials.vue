<template>
  <div class="mainPage">


    <pageTitleAnimated
      :titleName="title[$i18n.locale]"
      background="materials-for-mms"
    />


    <div class="w-100 gap-48">
      <p class="commonP line-h-30 colorGreyD">{{$t("countFiles")}}:</p>
      <p class="commonP line-h-30 bold colorType">1 694</p>
    </div>

    <div class="grid-3 mt-60 r-gap-60 w-100">
      <div
        v-for="logo in allLogoFiles"
        :key="logo.id"
        class="w-100 fd-c"
      >
        <div class="logoForMedias pos-rel w-4 d-f h-230p bor-r-20 ovr-hidden backgrnd-white align-c justify-c">
          <img class="logoForMediasImg" :src="require('@/assets/temporary/' + logo.img + '.png')" alt="">
        </div>

        <div
          class="logoForMediasFiles fd-c gap-24 w-100 mt-48"
        >
          <div
            v-for="file in logo.files"
            :key="file.id"
            class="w-100 d-f align-c"
          >
            <Icons
              icon="download"
            />
      
            <a
              class="ml-24 d-f fd-r gap-12"
              href=""
            >
              <p class="commonP line-h-20 bold colorGreyD">{{$t("downloadF")}} .{{file.type}}</p>
              <p class="commonP line-h-20 colorType">({{file.size}})</p>
            </a>
          </div>
        </div>

      </div>
    </div>


    <!-- Card Start -->

    <div
      class="w-100 h-152p backgrnd-white mt-60 pad-24p ovr-hidden bor-r-20 box-brb align-c justify-c gap-24"
      v-for="doc in allDocuments"
      :key="doc.id"
    >
      <img class="obj-fit-cov h-64p" :src="require('@/assets/static/fileIcons/' + doc.fileType + '.png')" alt="">
      <div class="w-100 d-f fd-c h-104p">
        
        <p class="commonD bold h-60p">{{doc.title}}</p>
        
        <div class="w-100 mt-a gap-48">
          <div class="w-a d-f fd-r align-c gap-12">
            <Icons
              icon="calendar"
              size="middle"
            />
            <p class="helpers">{{doc.publishedDate}}</p>
          </div>

          <div class="w-a d-f fd-r align-c gap-12">
            <Icons
              icon="download"
              size="middle"
            />
            <p class="helpers">{{$t("downloads")}}:</p>
            <p class="mainers">{{doc.downloadsNumber}}</p>
          </div>

          <div class="w-a d-f fd-r align-c gap-12 ml-a cur-ptr">
            <Icons
              icon="download"
              size="middle"
            />
            <p class="helpers colorPrim">{{$t("downloadDoc")}}</p>
          </div>
        </div>

      </div>
    </div>

    <!-- Card Stop -->

    <breadCrumbs
      :currentPage="title[$i18n.locale]"
    />

  </div>
</template>

<script>
import pageTitleAnimated from '@/components/pageTitleAnimated.vue';
import Icons from '@/components/icons.vue'
import breadCrumbs from '@/components/breadCrumbs.vue';

export default {
  name: 'materialsPage',

  components: {
    pageTitleAnimated, Icons, breadCrumbs
  },

  data() {
    return {
      title:{
        uz: 'OAV materiallari',
        uzcyr: 'ОАВ материаллари',
        ru: 'Материалы для СМИ',
        en: 'Media materials',
      },
      allLogoFiles: this.$store.state.logoFile,

      allDocuments: [
        {
          id: 1,
          title: 'Материалы для СМИ (инструкция к пользованию, информация о файле). Все файлы в одном архиве',
          publishedDate: '22 июнь 2022г',
          downloadsNumber: '1 694',
          link: '',
          fileType: 'RAR'
        }
      ]
    }
  }
}
</script>

<style>

</style>