<template>
  <div class="mainPage">


    <pageTitleAnimated
        :titleName="title?.[$i18n.locale]"
        background="exhibits"
    />

    <!-- Input Bar Start -->
    <div class="w-100 z-idx100 fd-r gap-24 backgrnd-white bor-r-20 pad-24p box-brb exh-fl mob-select">
      <div class="w-3 d-f fd-c mob-inp">
        <label class="colorGreyD mb-4">{{$t("categoryExhibits")}}</label>

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
      <p class="commonP line-h-30 colorGreyD">{{$t("countExibits")}}:</p>
      <p class="commonP line-h-30 bold colorType">{{ len }}</p>
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
            <p v-if="xhbt?.additional?.foundDate" class="mainers colorWhite">{{filPost(xhbt?.additional?.foundDate) + " " + $t("year2")  }}</p>
          </div>
        </div>

        <div class="dark-layer-card z-idx1"></div>
        <img class="back-img" :src="xhbt?.mainImage?.path" alt="">
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
  name: 'exhibitsPage',

  components: {
    pageTitleAnimated, breadCrumbs, paginate, iconedInput, dropDown
  },
  data() {
    return {
      infoo:  null,
      URL: process.env.VUE_APP_API,
      // allExhibits: this.$store.state.exhibits,
      allExhibits: [],
      title: {
        language_uzlatin: 'Korgazmalar',
        language_uzCyrillic: 'Кўргазмалар',
        language_ru: 'Экспонаты',
        language_en: 'Exhibits',
      },
      searchCategories: {
        type: 'search',
        options: [
          {value: 'title', label: this.$t('options.title')},
          {value: 'tag', label: this.$t('options.tag')}
        ]
      },
      pagination: {
        curPage: 1,
        limit: 8,
      },
      len: '',
      searchWord: '',
      exhibitsID: 'Бюст неандертальца',

      exhibitsCategories: {
        type: 'exhibits',
        options: [
          {
            value: 'all',
            label: this.$t('all')
          },
        ]
      },
      months: [
        {
          id: 1,
          monthName: {
            language_uzlatin: "Yanvar",
            language_uzCyrillic: "Январ",
            language_en: "January",
            language_ru: "Январь",
          },
        },
        {
          id: 2,
          monthName: {
            language_uzlatin: "Fevral",
            language_uzCyrillic: "Феврал",
            language_en: "February",
            language_ru: "Февраль",
          },
        },
        {
          id: 3,
          monthName: {
            language_uzlatin: "Mart",
            language_uzCyrillic: "Март",
            language_en: "March",
            language_ru: "Март",
          },
        },
        {
          id: 4,
          monthName: {
            language_uzlatin: "Aprel",
            language_uzCyrillic: "Aпрел",
            language_en: "April",
            language_ru: "Апреля",
          },
        },
        {
          id: 5,
          monthName: {
            language_uzlatin: "May",
            language_uzCyrillic: "Май",
            language_en: "May",
            language_ru: "Май",
          },
        },
        {
          id: 6,
          monthName: {
            language_uzlatin: "Iyun",
            language_uzCyrillic: "Июн",
            language_en: "June",
            language_ru: "Июнь",
          },
        },
        {
          id: 7,
          monthName: {
            language_uzlatin: "Iyul",
            language_uzCyrillic: "Июл",
            language_en: "July",
            language_ru: "Июль",
          },
        },
        {
          id: 8,
          monthName: {
            language_uzlatin: "Avgust",
            language_uzCyrillic: "Август",
            language_en: "August",
            language_ru: "Август",
          },
        },
        {
          id: 9,
          monthName: {
            language_uzlatin: "Sentabr",
            language_uzCyrillic: "Сентабр",
            language_en: "September",
            language_ru: "Сентябрь",
          },
        },
        {
          id: 10,
          monthName: {
            language_uzlatin: "Oktabr",
            language_uzCyrillic: "Октабр",
            language_en: "Oktober",
            language_ru: "Октябрь",
          },
        },
        {
          id: 11,
          monthName: {
            language_uzlatin: "Noyabr",
            language_uzCyrillic: "Ноябр",
            language_en: "November",
            language_ru: "Ноябрь",
          },
        },
        {
          id: 12,
          monthName: {
            language_uzlatin: "Dekabr",
            language_uzCyrillic: "Декабр",
            language_en: "December",
            language_ru: "Декабрь",
          },
        },
      ],
      chosenSearchCategory: {value:'title', label: this.$t('options.title')},
      chosenCategory: {value: 'all', label: this.$t('all')},

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
    getSingleExhibits(){
      const params = {
        category: this.$route.query.category,
        searchCategory: this.$route.query.searchCategory,
        searchWord: this.$route.query.search,
        page: this.$route.query.page,
        limit: this.pagination.limit
      }
      // console.log(params.searchCategory)
      this.$store.dispatch('getExhibits', params)
      .then(() => {
        this.allExhibits = this.$store.state.exhibits.result.results

        this.len = this.$store.state.countExh
        // console.log(this.$store.state.categories)

        const len = this.$store.state.categories.length
        if(this.exhibitsCategories.options.length == 1){
          for(let i=0; i<len; i++){
          this.exhibitsCategories.options.push({
            value: this.$store.state.categories[i].text.language_en,
            label: this.$store.state.categories[i].text?.[this.$i18n.locale],
            _id: this.$store.state.categories[i]._id
          })
        }
        }
        // console.log(this.allExhibits)
      })
      // await this.$api.get('/collections/exhibits/site')
      //     .then(resp => {
      //       this.allExhibits = resp.data.result.results
      //       for(let i=1; i<=this.allExhibits.length; i++){
      //         this.allExhibits[i-1].id = i
      //       }
      //       // console.log(this.allExhibits)
      //     }), err => {console.log(err)}
    },

    changeCategory(option) {
      this.chosenCategory = option
      // console.log(option)
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
      }
      this.getSingleExhibits()
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
      this.getSingleExhibits()
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
          this.getSingleExhibits()
        })
      }
    },
    optionChanged(opt) {
      console.log(opt);
    },
    goToSingle(myid) {
      this.$router.push({ path: '/exhibits/' + this.exhibitsID, query: {exId: myid}})
    },
    next() {
      this.getSingleExhibits()
    },

    prev() {
      this.getSingleExhibits()
    },

    filPost(val) {
      if (val) {
        
        let temp = val.split("T");
        let year = new Date(temp[0]).getFullYear();
        let month = new Date(temp[0]).getMonth();
        let day = new Date(temp[0]).getDate();
        let monId
        if(month !== 11){
          monId = month + 1;
        }else{monId = 11}

        let monthT = this.months[monId].monthName?.[this.$i18n.locale];

        return day + " " + monthT + " " + year;
      }
    },

    goingToPage() {
      this.getSingleExhibits()
    },
  },
  mounted() {
    if(this.$route.query.searchCategory == undefined || this.$route.query.searchCategory == ''){
      this.$router.push({
        query:{
          ...this.$route.query,
          searchCategory: this.searchCategories.options[0].value
        }
      })
      this.chosenSearchCategory = this.searchCategories.options.find(chosen => chosen.value === this.$route.query.searchCategory)
    } else this.chosenSearchCategory = this.searchCategories.options.find(chosen => chosen.value === this.$route.query.searchCategory)

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
      // console.log(this.chosenSearchCategory)
    } else this.chosenCategory = this.exhibitsCategories.options.find(category => category.value == this.$route.query.category)
    this.getSingleExhibits()
    // console.log(this.exhibitsID)
  },
  created() {
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