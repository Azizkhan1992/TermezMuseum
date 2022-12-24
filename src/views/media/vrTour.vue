<template>
  <div class="mainPage">


    <pageTitleAnimated
      :titleName="title[$i18n.locale]"
      background="vr-tour"
    />


    <div class="w-100 gap-48">
      <p class="commonP line-h-30 colorGreyD">{{$t("countFiles")}}:</p>
      <p class="commonP line-h-30 bold colorType">{{ len }}</p>
    </div>

    <div class="grid-2 w-100 r-gap-60 mt-60">
      <div
        v-for="vr in vrTours"
        :key="vr._id"
        class="w-100 fd-c gap-24 align-c cur-ptr"
        @click="goToVr(vr)"
      >
        <div class="w-100 pos-rel h-380p bor-r-20 ovr-hidden">
          <img class="vrIcon" src="@/assets/static/vrIcon.png" alt="">
          <div class="dark-layer-light z-idx1"></div>
          <img class="back-img" :src="vr?.img?.path" alt="">
        </div>
        <h4 class="commonT colorType txt-align-c">{{ vr?.title?.[$i18n.locale] }}</h4>
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
import breadCrumbs from '@/components/breadCrumbs.vue';
import paginate from '@/components/paginate.vue';

export default {
  name: 'vrTourPage',

  components: {
    pageTitleAnimated, paginate, breadCrumbs
  },

  data() {
    return {
      title: {
        language_uzlatin: '3D muzey sayohati',
        language_uzCyrillic: '3D музей саёҳати',
        language_ru: '3D Тур по музею',
        language_en: '3D Museum Tour',
      },
      pagination: {
        curPage: 1,
        limit: 8
      },
      len: '',

      vrTours: []
    }
  },
  mounted(){
    if(this.$route.query.page == undefined || this.$route.query.page == ''){
      this.$router.push({
        query:{
          ...this.$route.query,
          page: this.pagination.page
        }
      })
    }else this.pagination.page = this.$route.query.page

    this.getVr()
  },

  methods: {
    getVr(){
      const params = {
        page: this.$route.query.page,
        limit: this.pagination.limit
      }
      this.$store.dispatch('getVrTour', params)
      .then(() =>{
        this.vrTours = this.$store.state.vrTourItems
        this.len = this.$store.state.vrLen
        // console.log(this.vrTours)
      })
    },
    goToVr(vr){
      window.open(vr.link, "_blank")
      // console.log(vr)
    },
    prev(){
      this.getVr()
    },
    next(){
      this.getVr()
    },
    goingToPage(){
      this.getVr()
    }
  },
  computed:{
    pages() {
      // console.log(Math.ceil(this.len / this.pagination.limit))
      return Math.ceil(this.len / this.pagination.limit)
    }
  },
}
</script>

<style>

</style>