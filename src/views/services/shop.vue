<template>
  <div class="mainPage">

    <pageTitleAnimated
      :titleName="title[$i18n.locale]"
      background="shop"
    />


    <!-- Input Bar Start -->

    <div class="w-100 z-idx100 fd-r gap-24 backgrnd-white bor-r-20 pad-24p box-brb">
      <div class="w-100 d-f fd-c">

        <label class="colorGreyD mb-4">{{$t("section")}}</label>

        <iconedInput
        @iconClicked="searchEvent"
          v-model="searchWord"
          :placeholder="this.$t('placeholders.enterSearchText')"
          :value="searchWord"
        />

      </div>
    </div>

    <!-- Input Bar Stop -->


    <div class="w-100 gap-48 mt-80">
      <p class="commonP line-h-30 colorGreyD">{{$t("countItem")}}:</p>
      <p class="commonP line-h-30 bold colorType">{{ len }}</p>
    </div>


    <div class="w-100 grid-4 mt-60 mobile-grid">
    
      <div
        @click="goToSingle(xhbt._id)"
        v-for="xhbt in allExhibits"
        :key="xhbt._id"
        class="w-100 bor-r-20 cur-ptr box-brb ovr-hidden pos-rel h-480p shop-items"
      >
        <div class="w-100 fd-c pad-24p">
          <p class="commonP bold line-h-24 mt-a">{{xhbt?.name?.[$i18n.locale]}}</p>
          
          <div class="w-100 gap-12 mt-24">
            <p v-if="xhbt?.category" class="helpers">{{$t("category")}}:</p>
            <p v-if="xhbt?.category" class="mainers colorWhite">{{xhbt?.createdAt}}</p>
          </div>
        </div>

        <div class="dark-layer-card z-idx1"></div>
        <div class="shop-img-wr">
          <img v-for="img, idx in xhbt?.img" :key="idx" :src="img?.path" alt="">
        </div>
      </div>

    </div>


    <paginate
    v-if="len>12"
      :currentPageNumber="pagination.curPage"
      :pages="pages"
      @prev="prev"
      @next="next"
      @goingToPage="goingToPage()"
    />

    <breadCrumbs
      :currentPage="title[$i18n.locale]"
    />

  </div>
</template>

<script>
import pageTitleAnimated from '@/components/pageTitleAnimated.vue';
import iconedInput from '@/components/iconedInput.vue';
import paginate from '@/components/paginate.vue';
import breadCrumbs from '@/components/breadCrumbs.vue';

export default {
  name: 'shopPage',

  components: {
    pageTitleAnimated, iconedInput, paginate, breadCrumbs
  },

  data() {
    return {
      // allExhibits: this.$store.state.exhibits,
      allExhibits: [],
      itemsID: 'Статуя будды',
      searchWord: '',

      title:{
        language_uzlatin: 'Do\'kon',
        language_uzCyrillic: 'Дўкон',
        language_ru: 'Магазин',
        language_en: 'Shop',
      },
      search: '',
      len: '',
      pagination:{
        curPage: 1,
        limit: 12
      }
    }
  },
  mounted(){
    if(this.$route.query.page == undefined || this.$route.query.page == ''){
      this.$router.push({
        query: {
          ...this.$route.query,
          page: this.pagination.page
        }
      })
    }else this.pagination.page = this.$route.query.page

    if(this.$route.query.search == undefined && this.$route.query.search !== '') {
      this.$router.push({
        query: {
          ...this.$route.query,
          search: this.searchWord
        }
      })
      this.searchWord = this.$route.query.search
    } else this.searchWord = this.$route.query.search


    this.getShopItems()
  },

  methods: {
    getShopItems(){
      const params = {
        search: this.$route.query.search,
        page: this.$route.query.page,
        limit: this.pagination.limit
      }
      this.$store.dispatch('getAllShopItems', params)
      .then(() => {
        this.allExhibits = this.$store.state.AllShop
        this.len = this.$store.state.AllShopLen
        // console.log(this.allExhibits)
      }).catch(err => {console.log(err)})
    },

    searchEvent() {
      if(this.$route.query.search !== this.searchWord) {
        this.$router.push({
          query: {
            ...this.$route.query,
            search: this.searchWord
          }
        })
        .then(() => {
          this.getNews()
        })
      }
    },
    prev(){
      this.getShopItems()
    },
    next(){
      this.getShopItems()
    },
    goingToPage(){
      this.getShopItems()
    },
    goToSingle(id) {
      this.$router.push({ path: '/shop/' + id})
    }
  },
  computed: {
    pages(){
      return Math.ceil(this.len/this.pagination.limit)
    }
  }
}
</script>

<style lang="scss">
.mobile-grid{

  .shop-items{
    .shop-img-wr{
      width: fit-content;
      height: 100%;
      position: absolute;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;

      img{
        height: 100%;
        object-fit: cover;
      }
    }
  }
}

@media screen and (min-width: 900px) and (max-width: 1099px) {
  .mobile-grid{
    display: flex !important;
    flex-wrap: wrap;
    row-gap: 24px;

    .shop-items{
      width: calc(50% - 12px);
    }
  }
}
</style>