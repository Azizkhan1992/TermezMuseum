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
        v-for="doc in Docs"
        :key="doc._id"
      >
      <img v-if="doc?.imgUrl" class="obj-fit-cov h-64p" :src="require(`../../assets/static/fileIcons/${doc.imgUrl}.png`)" alt="">
        <img v-else src="@/assets/static/fileIcons/DOC.png" class="obj-fit-cov h-64p" alt="">
        <div class="w-100 d-f fd-c h-104p">
          
          <p class="commonD bold h-60p">{{doc?.title?.[$i18n.locale]}}</p>
          
          <div class="w-100 mt-a gap-48 document-dates">
            <div class="w-a d-f fd-r align-c gap-12">
              <Icons
                icon="calendar"
                size="middle"
              />
              <p class="helpers">{{doc?.createdAt | filterCreat}}</p>
            </div>

            <div class="w-a d-f fd-r align-c gap-12">
              <Icons
                icon="download"
                size="middle"
              />
              <p class="helpers">{{$t("downloads")}}:</p>
              <p class="mainers">{{doc?.NumberOfDownloads}}</p>
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
      // allDocuments: this.$store.state.documents
      allDocuments: [],
      Docs: []
    }
  },
  mounted(){
    this.getAllDocs()
  },

  methods: {
    async getAllDocs(){
      await this.$api.get('/about/documents/site')
      .then(resp => {
        this.allDocuments = resp.data.result.results
        this.getTypeDocs()
        // console.log(this.allDocuments)
      }), err => {console.log(err)}
    },

    getTypeDocs(){
      if(this.allDocuments.length>0){
        this.allDocuments.forEach(elem => {
          const path = elem.documentUrl.path.split('.')
          let url = path.pop()
          elem.imgUrl = url.toUpperCase()
          // console.log(elem)
        })
        this.Docs = this.allDocuments
      }
    }
  },
  filters: {
    filterCreat(val){
      let date = val.split('T')
      return date[0]
    }
  }
}
</script>

<style>

</style>