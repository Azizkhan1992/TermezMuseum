<template>
  <div class="mainPage">

    <h1 class="grandTitle w-100 mt-120">{{singleSection?.title?.[$i18n.locale]}}</h1>

    <div class="w-100 mt-60">
      <img class="w-100 obj-fit-cov" :src="singleSection?.img?.path" alt="">
    </div>

    <h3 v-html="singleSection?.text?.[$i18n.locale]" class="commonD reg mt-60">
    </h3>

    <div class="w-100 mt-80 gap-48">
      <p class="commonP line-h-30 colorGreyD">{{$t("countExibits")}}:</p>
      <p class="commonP line-h-30 bold colorType">{{len}}</p>
    </div>

    <div class="w-100 grid-4 mt-60 singlDescHall">
    
      <div
        v-for="xhbt in allExhibits"
        :key="xhbt.id"
        class="w-100 bor-r-20 cur-ptr box-brb ovr-hidden pos-rel h-480p"
      >
        <div class="w-100 fd-c pad-24p">
          <p class="commonP bold line-h-24 mt-a">{{xhbt?.title?.[$i18n.locale]}}</p>
          
          <div class="w-100 gap-12 mt-24">
            <p v-if="xhbt?.additional?.createdDate" class="helpers">{{$t("discoverIn")}}:</p>
            <p v-if="xhbt?.additional?.createdDate" class="mainers colorWhite">{{getYear(xhbt?.additional?.createdDate)+ ' ' + $t('year2')}}</p>
          </div>
        </div>

        <div class="dark-layer-card z-idx1"></div>
        <img class="back-img" :src="(xhbt?.mainImage?.path)" alt="">
      </div>
    </div>



    <paginate
    v-if="(len>10)"
      @next="next"
      @prev="prev"
      @goingToPage="goingToPage()"
      :currentPageNumber="pagination.curPage"
      :pages="pages"
    />

    <breadCrumbs
    v-if="singleSection?.title"
      :currentPage="singleSection?.title?.[$i18n.locale]"
      :prevPageName="prevPage.name[$i18n.locale]"
      :prevPageLink="prevPage.link"
    />
    
  </div>
</template>

<script>
import paginate from '@/components/paginate.vue';
import breadCrumbs from '@/components/breadCrumbs.vue';

export default {
  name: 'sectionsSinglePage',

  components: {
    paginate, breadCrumbs
  },

  data() {
    return {
      // allExhibits: this.$store.state.exhibits,
      allExhibits: [],
      routeId: this.$route.params.id,
      singleSection: {},
      allExhNum: '',
      prevPage: {
        name: {
          language_uzlatin: 'Bo\'limlar',
          language_uzCyrillic: 'Бўлимлар',
          language_en: 'Sections',
          language_ru: 'Разделы',
        },
        link: '/sections'
      },
      title: this.$route.params.id,
      pagination: {
        curPage: 1,
        limit: 10,
      },
      len: '',
      description: `
        Зал посвящен к археологическим находкам в Сурханском оазисе каменного века и имеет огромную коллекцию самых разных и дорогих экспонатов в виде статуй, картин и тд.
        <br/><br/>
        Термезский Археологический Музей традиционно находится в авангарде современных тенденций развития музейных технологий. Осуществление высокопрофессиональных научных, реставрационных, выставочных, образовательных, издательских и других музейных проектов возможно благодаря координации деятельности музея и его партнеров. С целью объединения усилий организаций и частных лиц, желающих оказать поддержку музею, в 2007 году, в год столетнего юбилея коллекции, было создано Общество друзей Термезского Археологического Музея.
      `,
    }
  },
  mounted(){

    if(this.$route.query.page == undefined || this.$route.query.page == ''){
      this.$router.push({
        query:{
          ...this.$route.query,
          page : this.pagination.curPage
        }
      })
    }else this.pagination.curPage = this.$route.query.page
    this.getSingleSect()
    this.getSectExhibits()
  },
  computed: {
    getRouteId(){
      let temp = this.routeId.split('_')
      return temp[0]
    },
    pages() {
      return Math.ceil(this.len / this.pagination.limit)
    }
  },
  methods: {
    async getSingleSect(){
      await this.$api.get(`inmuseum/section/${this.getRouteId}`)
      .then(resp => {
        this.singleSection = resp.data.result
        // console.log(this.singleSection)
      }), err => {console.log(err)}
    },
    async getSectExhibits(){
      const params = {
        page: this.$route.query.page,
        limit: this.pagination.limit
      }
      this.$store.dispatch('getSectionSingle', params)
      .then(() => {

        this.allExhibits = this.$store.state.sectionItems
        this.len = this.$store.state.sectionItemsNum
        // this.allExhibits = resp.data.result.results
        // for(let i=1; i<=this.allExhibits.length; i++){
        //   this.allExhibits[i-1].id = i
        // }
        // this.allExhNum = resp.data.NumberOfExhibitions
        // console.log(resp.data.NumberOfExhibitions)
      }), err => {console.log(err)}
    },
    getYear(date){
      let year
      if(date){
        let data = date.split('T')
         year = new Date(data[0]).getFullYear()
      }
      // console.log(year)
      return year
    },
    next(){
      this.getSectExhibits()
    },
    prev(){
      this.getSectExhibits()
    },
    goingToPage(){
      this.getSectExhibits()
    }
  }
}
</script>

<style>

</style>