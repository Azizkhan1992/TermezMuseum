<template>
  <div class="mainPage">

    <pageTitleAnimated
      :titleName="title[$i18n.locale]"
      background="partners"
    />

    <div class="w-100 mb-60">
      <p v-if="allPartners?.partnerTextDocument" class="commonD">
        {{allPartners?.partnerTextDocument?.[$i18n.locale]}}
      </p>
    </div>


    <div class="w-100 d-f fd-c gap-24 partner-cards">
    
      <!-- Card Start -->
    
      <div 
        class="w-100 h-240p bor-r-20 ovr-hidden backgrnd-white partner-card"
        v-for="partner in allPartners?.partners?.results"
        :key="partner._id"
      >
        <div class="w-4 d-f pad-24p box-brb align-c justify-c backgrnd-greyD h-a">
          <img v-if="partner?.image?.path" class="h-100 w-100 obj-fit-con" :src="partner?.image?.path" alt="">
        </div>

        <div class="w-8 box-brb h-100 d-f fd-c pad-24p">
          <h3 class="commonT colorType">{{partner?.title?.[$i18n.locale]}}</h3>
          <p class="commonD mt-12 colorType">{{partner?.text?.[$i18n.locale]}}</p>

          <div class="w-a d-f fd-r align-c gap-12 mt-a">
            <Icons
              icon="globus"
              size="middle"
            />
            <p class="helpers">Website:</p>
            <a target="_blanc" :href="partner?.url" class="mainers">{{partner?.url}}</a>
          </div>

          <div class="w-100 mt-24 gap-48 partner-phone">
            <div class="w-a d-f fd-r align-c gap-12">
            <Icons
              icon="phone"
              size="middle"
            />
            <p class="helpers">{{$t("phoneNumber")}}:</p>
            <a :href="partner?.phoneNumber" class="mainers">{{partner?.phoneNumber}}</a>
          </div>
          <div class="w-a d-f fd-r align-c gap-12">
            <Icons
              icon="mail"
              size="middle"
            />
            <p class="helpers">{{$t("email")}}:</p>
            <a :href="partner?.email" class="mainers">{{partner?.email}}</a>
          </div>
          </div>
        </div>
      </div>

      <!-- Card Stop -->

    </div>
      

    <paginate
    v-if="length>4"
      @goingToPage="goingToPage()"
      :pages="pages"
      @prev="prev"
      @next="next"
    />

    <breadCrumbs
      :currentPage="title?.[$i18n.locale]"
    />
  </div>
</template>

<script>
import pageTitleAnimated from '@/components/pageTitleAnimated.vue'
import breadCrumbs from '@/components/breadCrumbs.vue'
import paginate from '@/components/paginate.vue'
import Icons from '@/components/icons.vue'

export default {
  name: 'partnersPage',

  components: {
    pageTitleAnimated, breadCrumbs, Icons, paginate
  },

  data() {
    return {
      pagination: {
        curPage: 1,
        limit: 4
      },
      length: 0,
      docLen: '',
      title:{
        language_uzlatin:'Muzey hamkorlari',
        language_ru:'Партнеры музея',
        language_uzCyrillic:'Музей ҳамкорлари',
        language_en:'Museum partners',
      },
      // comments: this.$store.state.comments,
      // comments: this.$store.state.comments,
      // allPartners: this.$store.state.partners
      allPartners: {}
    }
  },
  mounted(){
    this.getPartners()

    if(this.$route.query.page == undefined){
      this.pagination.curPage = 1
    }else this.pagination.curPage = Number(this.$route.query.page)
  },
  computed:{
    pages(){
      return Math.ceil(this.length/this.pagination.limit)
    }
  },

  methods: {
    async getPartners(){

      const params = {
        page: this.$route.query.page,
        limit: this.pagination.limit
      }

      await this.$api.get(`/about/partners/site?page=${params.page}&limit=${params.limit}`)
      .then(resp => {
        this.allPartners = resp.data
        this.length = resp.data.length
        // console.log(resp.data.length)
      })
    },
    prev(){
      this.getPartners()
    },
    next(){
      this.getPartners()
    },
    goingToPage(){
      this.getPartners()
    },
    cuttingUrl(url) {
      const cutUrl = 'www.' + url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").slice(0, -1)
      return cutUrl
    }
  }
}
</script>

<style>

</style>