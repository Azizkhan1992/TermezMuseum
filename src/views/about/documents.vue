<template>
  <div class="mainPage">

    <pageTitleAnimated
      :titleName="title[$i18n.locale]"
      background="documents"
    />

    <div class="w-100 d-f fd-c gap-24">

      <!-- Card Start -->

      <div
        class="w-100 h-152p backgrnd-white pad-24p ovr-hidden bor-r-20 box-brb align-c justify-c gap-24 document-card"
        v-for="doc in allDocuments"
        :key="doc.id"
      >
        <img class="obj-fit-cov h-64p" :src="require('@/assets/static/fileIcons/' + doc.fileType + '.png')" alt="">
        <div class="w-100 d-f fd-c h-104p">
          
          <p class="commonD bold h-60p">{{doc.title}}</p>
          
          <div class="w-100 mt-a gap-48 document-dates">
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

    </div>
    

    <paginate
      :currentPageNumber="curPage"
      :pages="pages"
    />

    <breadCrumbs
      :currentPage="title[$i18n.locale]"
    />

  </div>
</template>

<script>
import pageTitleAnimated from '@/components/pageTitleAnimated.vue'
import breadCrumbs from '@/components/breadCrumbs.vue'
import paginate from '@/components/paginate.vue'
import Icons from '@/components/icons.vue'

export default {
  name: 'documentsPage',

  components: {
    pageTitleAnimated, breadCrumbs, paginate, Icons
  },

  data() {
    return {
      title:{
      language_uzlatin: 'Hujjatlar',
        language_ru: 'Документы',
        language_uzCyrillic: 'Ҳужжатлар',
        language_en: 'Documents',
      },
      curPage: 3,
      pages: 384,
      allDocuments: this.$store.state.documents
    }
  }
}
</script>

<style>

</style>