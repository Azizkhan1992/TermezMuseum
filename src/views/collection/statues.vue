<template>
  <div class="mainPage">


    <pageTitleAnimated
        :titleName="title?.[$i18n.locale]"
        background="statues"
    />

    <!-- Input Bar Start -->

    <div class="w-100 z-idx100 fd-r gap-24 backgrnd-white bor-r-20 pad-24p box-brb exh-fl mob-select">

      <div class="w-3 d-f fd-c mob-inp">
        <label class="colorGreyD mb-4">{{$t("sculptureGenre")}}</label>

        <dropDown
        :options="exhibitsCategories"
          :current="chosenCategory"
          @changeOption="changeCategory"
        />

        <!-- <selector
            @optionChanged="optionChanged"
            :options="this.options"
            id="aaa"
        /> -->
      </div>

      <div class="w-3 d-f fd-c mob-inp">
        <label class="colorGreyD mb-4">{{$t("categorySearch")}}</label>

        <dropDown
        :options="searchCategories"
          :current="chosenSearchCategory"
          @changeOption="changeSearchCategory"
        />

        <!-- <selector
            @optionChanged="optionChanged"
            :options="this.options"
            id="bbb"
        /> -->
      </div>

      <div class="w-6 d-f fd-c mob-inp">

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

    <div class="w-100 mt-80 gap-48">
      <p class="commonP line-h-30 colorGreyD">{{$t("countStatues")}}:</p>
      <p class="commonP line-h-30 bold colorType">{{ exhLen }}</p>
    </div>

    <div class="w-100 grid-4 mt-60 grid-1-900 mobile-items">

      <div
          @click="goToSingle(xhbt._id)"
          v-for="(xhbt,ix) in allExhibits"
          :key="ix"
          class="w-100 bor-r-20 cur-ptr box-brb ovr-hidden pos-rel h-480p exh-items"
      >
        <div class="w-100 fd-c pad-24p">
          <p class="commonP bold line-h-24 mt-a">{{xhbt.title?.[$i18n.locale]}}</p>

          <div class="w-100 gap-12 mt-24">
            <p v-if="xhbt?.additional?.foundDate" class="helpers">{{$t("discoverIn")}}:</p>
            <p v-if="xhbt?.additional?.foundDate" class="mainers colorWhite">{{filPost(xhbt?.additional?.foundDate) + " " + $t("year2")}}</p>
          </div>
        </div>

        <div class="dark-layer-card z-idx1"></div>
        <img class="back-img" :src="xhbt.mainImage.path" alt="">
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
        :currentPage="title?.[$i18n.locale]"
    />


  </div>
</template>

<script>
import pageTitleAnimated from '@/components/pageTitleAnimated.vue'
import breadCrumbs from '@/components/breadCrumbs.vue'
import paginate from '@/components/paginate.vue'
import iconedInput from '@/components/iconedInput.vue'
// import selector from '@/components/selector.vue'
import dropDown from '@/components/dropDown.vue'

export default {
  name: 'statuesPage',

  components: {
    pageTitleAnimated, breadCrumbs, paginate, iconedInput, dropDown
  },

  data() {
    return {
      // allExhibits: this.$store.state.exhibits,
      allExhibits: [],
      title:{
        language_uzlatin: 'Haykallar',
        language_uzCyrillic: 'Ҳайкаллар',
        language_ru: 'Статуи',
        language_en: 'Statues',
      },
      statuesID: 'Статуя будды',

      exhibitsCategories: {
        type: 'exhibits',
        options: [
          {
            value: 'all',
            label: this.$t('all')
          },
        ]
      },
      pagination: {
        curPage: 1,
        limit: 8,
      },
      len: '',
      searchWord: '',
      searchCategories: {
        type: 'search',
        options: [
          {value: 'title', label: this.$t('options.title')},
          {value: 'tag', label: this.$t('options.tag')}
        ]
      },
      chosenCategory: {value: 'all', label: this.$t('all')},
      chosenSearchCategory: {value:'title', label: this.$t('options.title')},
      exhLen: '',

      options: [
        {value: '1', label: 'Option 1'},
        {value: '2', label: 'Option 2'},
        {value: '3', label: 'Option 3'},
        {value: '4', label: 'Option 4'},
        {value: '5', label: 'Option 5'},
        {value: '6', label: 'Option 6'},
        {value: '7', label: 'Option 7'},
        {value: '8', label: 'Option 8'},
        {value: '9', label: 'Option 9'},
        {value: '10', label: 'Option 10'},
      ],
    }
  },
  computed: {
    pages() {
      return Math.ceil(this.len / this.pagination.limit)
    }
  },

  methods: {
    async getStatues(){
      const params = {
        category: this.$route.query.category,
        searchCategory: this.$route.query.searchCategory,
        searchWord: this.$route.query.search,
        page: this.$route.query.page,
        limit: this.pagination.limit
      }

      this.$store.dispatch('getStatues', params)
      .then(() => {

        this.allExhibits = this.$store.state.statues

        this.exhLen = this.$store.state.countStatues
        // console.log(this.$store.state.countStatues)

        this.len = this.$store.state.countStatues
        // console.log(this.$store.state.categories)

        const len = this.$store.state.categories.length

        // console.log(len)
        if(this.exhibitsCategories.options.length == 1){
          for(let i=0; i<len; i++){
          this.exhibitsCategories.options.push({
            value: this.$store.state.categories[i].text.language_en,
            label: this.$store.state.categories[i].text?.[this.$i18n.locale],
            _id: this.$store.state.categories[i]._id
          })
        }
        }
      })
      // await this.$api.get('/collections/statue/site')
      //     .then(resp => {
      //       this.allExhibits = resp.data.result.results
      //       for(let i=1; i<=this.allExhibits.length; i++){
      //         this.allExhibits[i-1].id = i
      //       }
      //       console.log(this.allExhibits)
      //     }), err => {console.log(err)}
    },
    changeCategory(option) {
      this.chosenCategory = option
      // console.log(this.chosenCategory)
      if(option.value == 'all'){
        this.$router.push({
          query: {
            ...this.$route.query,
            category: option.value
          }
        })
      }else{
        this.$router.push({
          query: {
            ...this.$route.query,
            category: option._id
          }
        })
        // this.chosenCategory = this.exhibitsCategories.options.find(chosen => chosen.value == this.$route.query.category)
      }
      this.getStatues()
      // console.log(this.chosenCategory)
    },
    changeSearchCategory(option) {
      // console.log(option)
      this.chosenSearchCategory = option
      this.$router.push({
        query: {
          ...this.$route.query,
          searchCategory: option.value
        }
      })
      this.getStatues()
    },
    searchEvent(){
      if(this.$route.query.search !== this.searchWord) {
        this.$router.push({
          query: {
            ...this.$route.query,
            search: this.searchWord
          }
        })
        .then(() => {
          this.getStatues()
        })
      }
    },

    next() {
      this.getStatues()
    },

    prev() {
      this.getStatues()
    },
    goingToPage(){
      this.getStatues()
    },
    optionChanged(opt) {
      console.log(opt);
    },

    filPost(val) {
      if (val) {
        
        let temp = val.split("T");
        let year = new Date(temp[0]).getFullYear();
        // let month = new Date(temp[0]).getMonth();
        // let day = new Date(temp[0]).getDate();
        // let monId
        // if(month !== 11){
        //   monId = month + 1;
        // }else{monId = 11}

        // let monthT = this.months[monId].monthName?.[this.$i18n.locale];

        return year;
      }
    },

    goToSingle(myid) {
      this.$router.push({ path: '/statues/' + this.statuesID, query: {exId: myid}})
    }
  },
  mounted() {
    if(this.$route.query.search == undefined || this.$route.query.search !== ''){
      this.$router.push({
        query: {
          ...this.$route.query,
          search: this.searchWord
        }
      })
      this.searchWord = this.$route.query.search
    }else this.searchWord = this.$route.query.search
    if(this.$route.query.page == undefined || this.$route.query.page == ''){
      this.$router.push({
        query:{
          ...this.$route.query,
          page : this.pagination.curPage
        }
      })
    }else this.pagination.curPage = this.$route.query.page

    if(this.$route.query.category == undefined || this.$route.query.category == ''){
      this.$router.push({
        query: {
          ...this.$route.query, 
          category: this.exhibitsCategories.options[0].value
        }
      })
      this.chosenCategory = this.exhibitsCategories.options.find(category => category.value === this.$route.query.category)
    } else this.chosenCategory = this.exhibitsCategories.options.find(category => category.value == this.$route.query.category)

    if(this.$route.query.searchCategory == undefined || this.$route.query.searchCategory == ''){
      this.$router.push({
        query:{
          ...this.$route.query,
          searchCategory: this.searchCategories.options[0].value
        }
      })
      this.chosenSearchCategory = this.searchCategories.options.find(chosen => chosen.value === this.$route.query.searchCategory)
    } else this.chosenSearchCategory = this.searchCategories.options.find(chosen => chosen.value === this.$route.query.searchCategory)
    // console.log(this.chosenCategory)

    this.getStatues()
  }
}
</script>

<style lang="scss">

@media screen and (max-width: 899px) {
  .mob-select{
    width: 100% !important;
    height: 312px !important;
    flex-direction: column !important;

    .mob-inp{
      width: 100% !important;

      ul{
        &.open{
          z-index: 399;
        }
      }
    }
  }

  .mobile-items{
    display: flex !important;
    flex-direction: column !important;
  }
}

@media screen and (max-width: 1099px) and (min-width: 900px) {
  .mobile-items{
    grid-template-columns: repeat(2, calc(50% - 24px));
    grid-row: 1/2 !important;

    .exh-items{
      width: 390px !important;
      height: 560px !important;
    }
  }
}
</style>