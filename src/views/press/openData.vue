<template>
  <div class="mainPage">

    <pageTitleAnimated
      :titleName="title?.[$i18n.locale]"
      background="open-data"
    />

    <div class="w-100 h-a backgrnd-white ovr-hidden bor-r-20 pad-24p box-brb">
      <table class="openDataTable">
        <tr
          @click="goToSingle(data)"
          class="openDataRow"
          v-for="data, idx in allOpenData"
          :key="idx"
        >
          <p class="openDataTitle">{{data?.name?.[$i18n.locale]}}</p>
          <Icons
            @click="goToSingle(data)"
            icon="tailArrRight"
            size="32"
            color="type"
          />
        </tr>
      </table>
    </div>


    <paginate
        v-if="len>8"
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
import Icons from '@/components/icons.vue'
import paginate from '@/components/paginate.vue'
import breadCrumbs from '@/components/breadCrumbs.vue';

export default {
  name: 'openDataPage',

  components: {
    pageTitleAnimated, Icons, paginate, breadCrumbs
  },

  data() {
    return {
        title: {
          language_uzCyrillic: 'Очиқ маълумотлар',
          language_uzlatin: 'Ochiq ma\'lumotlar',
          language_ru: 'Открытые данные',
          language_en: 'Open data',
        },
      // allOpenData: this.$store.state.openData,
      allOpenData: [],
      len: '',
      pagination: {
        curPage: 1,
        limit: 8
      },

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

    this.getOpenData()
  },
  methods: {
    getOpenData(){
      const params = {
        page: this.$route.query.page,
        limit: this.pagination.limit
      }
      this.$store.dispatch('getOpenData', params)
      .then(() =>{
        this.allOpenData = this.$store.state.openData
        this.len = this.$store.state.openDataLen
        // console.log(this.allOpenData)
      })
    },
    goToSingle(id) {
      // console.log(id)
      this.$router.push({ path: `/open-data/lang=${this.$i18n.locale}` + '_' + id.name?.[this.$i18n.locale] + '_' + id._id})
    },
    prev(){
      this.getOpenData()
    },
    next(){
      this.getOpenData()
    },
    goingToPage(){
      this.getOpenData()
    }
  },
  computed:{
    pages(){
      return Math.ceil(this.len/this.pagination.limit)
    }
  }
}
</script>

<style>

</style>