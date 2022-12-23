<template>
  <div class="mainPage">

    <pageTitleAnimated
      :titleName="title[$i18n.locale]"
      background="3d-files"
    />


    <div class="w-100 gap-48">
      <p class="commonP line-h-30 colorGreyD">{{$t("countFiles")}}:</p>
      <p class="commonP line-h-30 bold colorType">{{ len }}</p>
    </div>



    <div class="grid-4 w-100 mt-60 mobile-grid">
      <div
        @click="goToSingle(xhbt)"
        v-for="xhbt, idx in allExhibits"
        :key="idx"
        class="threeDFileContainer w-100 bor-r-20 cur-ptr box-brb ovr-hidden pos-rel h-480p"
      >

        <div class="w-100 fd-c pad-24p">
          
          <div class="playButton z-idx2">
            <Icons
              icon="play"
              size="large"
            />
          </div>

          <p class="commonP bold line-h-24 mt-a">{{xhbt?.title?.[$i18n.locale]}}</p>
          
          <div class="w-100 gap-12 mt-24">
            <p class="helpers">{{$t("discoverIn")}}:</p>
            <p class="mainers colorWhite">{{getYear(xhbt?.createdAt)+' ' + $t('year2')}}</p>
          </div>
        </div>

        <div class="dark-layer-file z-idx1"></div>
        <img class="back-img" :src="xhbt?.img[0]?.path" alt="">
      </div>
    </div>



    <paginate
    v-if="(len>8)"
      @next="next"
      @prev="prev"
      @goingToPage="goingToPage()"
      :currentPageNumber="pagination.curPage"
      :pages="pages"
    />

    <breadCrumbs
      :currentPage="title[$i18n.locale]"
    />

  </div>
</template>

<script>
import pageTitleAnimated from '@/components/pageTitleAnimated.vue';
import paginate from '@/components/paginate.vue';
import breadCrumbs from '@/components/breadCrumbs.vue';
import Icons from '@/components/icons.vue'

export default {
  name: 'threeDFilesPage',

  components: {
    pageTitleAnimated, breadCrumbs, paginate, Icons
  },

  data() {
    return {
      // allExhibits: this.$store.state.exhibits,
      allExhibits: [],
      title: {
        language_uzlatin: '3D fayllar',
        language_uzCyrillic: '3D файллар',
        language_ru: '3D файлы',
        language_en: '3D files',
      },
      pagination: {
        curPage: 1,
        limit: 8
      },
      len: '',

      threeDFilesID: 'Бюст неандертальца',
    }
  },
  mounted(){
    if(this.$route.query.page == undefined || this.$route.query.page == ''){
      this.$router.push({
        query:{
          ...this.$route.query,
          page: this.pagination.curPage
        }
      })
    }else this.pagination.curPage = this.$route.query.page
    this.get3DFiles()
  },
  computed:{
    pages() {
      // console.log(Math.ceil(this.len / this.pagination.limit))
      return Math.ceil(this.len / this.pagination.limit)
    }
  },

  methods: {
    get3DFiles(){
      const params = {
        page: this.$route.query.page,
        limit: this.pagination.limit
      }
      this.$store.dispatch('getAll3D', params)
      .then(() => {
        this.allExhibits = this.$store.state.all3DFiles
        this.len = this.$store.state.all3DFilesLen
        // console.log(this.allExhibits)
      })
    },
    goToSingle(val) {
      // console.log(val)
      this.$router.push({ path: '/3d-files/' + val.title?.[this.$i18n.locale]+'_'+val._id})
    },
    getYear(year){
      let temp = new Date(year).getFullYear()
      // console.log(temp)
      return temp
    },
    prev(){
      this.get3DFiles()
    },
    next(){
      this.get3DFiles()
    },
    goingToPage(){
      this.get3DFiles()
    }
  }
}
</script>

<style>

</style>