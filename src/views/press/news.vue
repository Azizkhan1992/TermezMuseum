<template>
  <div class="mainPage">

    <pageTitleAnimated
      :titleName="title[$i18n.locale]"
      background="news"
    />

    <!-- Input Bar Start -->

    <div class="w-100 mt-60 z-idx100 fd-r gap-24 backgrnd-white bor-r-20 pad-24p box-brb mobile-flex">
      
      <div class="w-2 d-f fd-c">
        <label class="colorGreyD mb-4">{{$t("year")}}</label>

        <dropDown
        @changeOption="changeYear"
          :options="year"
          :current="chosenYear"
        
        />
        
        <!-- <selector
          @optionChanged="optionChanged"
          :options="this.options"
          id="aaSel"
        /> -->
      </div>

      <div class="w-2 d-f fd-c">
        <label class="colorGreyD mb-4">{{$t("month")}}</label>

        <dropDown
        @changeOption="changeMonth"
        :options="month"
          :current="chosenYear"
        />
        
        <!-- <selector
          @optionChanged="optionChanged"
          :options="this.options"
          id="bbSel"
        /> -->
      </div>

      <div class="w-2 d-f fd-c">
        <label class="colorGreyD mb-4">{{$t("categorySearch")}}</label>

        <dropDown
        @changeOption="changeCategory"
          :options="searchCategories"
          :current="chosenSearchCategory"
        />
        
        <!-- <selector
          @optionChanged="optionChanged"
          :options="this.options"
          id="ccSel"
        /> -->
      </div>
      
      <div class="w-6 d-f fd-c">

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


    <div class="w-100 h-48p mt-60 align-c gap-24 flex-wrap h-auto">
      <p class="commonP colorGreyD bold line-h-20">{{$t("top5Tag")}}:</p>

      <button class="top5TagBtn" v-for="el,index in topTags" :key="index" @click="choosingTag(el)">
        <span>{{el?.text?.[$i18n.locale]}}</span>
      </button>
    </div>

    <div class="w-100 gap-48 mt-80">
      <p class="commonP line-h-30 colorGreyD">{{$t("countPublicate")}}:</p>
      <p class="commonP line-h-30 bold colorType">{{ allNews.length }}</p>
    </div>

      <!-- Card Big Start -->

      <div class="news-wr">

        <div class="w-100 h-420p mt-60 bor-r-20 gap-24 ovr-hidden backgrnd-white news-items" v-for="news, idx in allNews" :key="idx">
        <div class="w-50 pos-rel news-img">
          <img
            @click="goToSingle"
            class="back-img cur-ptr" :src="news?.mainImage?.common?.path" alt=""
          >
        </div>

        <div class="w-50 d-f fd-c box-brb pad-r-24p pad-t-24p pad-b-24p news-title">
          <h4
            @click="goToSingle"
            class="commonT cur-ptr colorType h-90p"
          >
            {{ news?.title?.[$i18n.locale] }}
          </h4>

          <p
            @click="goToSingle"
            class="commonP cur-ptr colorGreyD mt-24 line-h-30 h-90p"
            v-html="news?.text?.[$i18n.locale]"
          >
          </p>

          <div class="w-100 gap-12 ovr-hidden tag-items">

            <button class="newsCardTag" v-for="item, idy in news?.tags" :key="idy">
              <span>{{ item?.text?.[$i18n.locale] }}</span>
            </button>
            <!-- <button class="newsCardTag">
              <span>
                Click me
                Click me
                Click me
              </span>
            </button>

            <button class="newsCardTag">
              <span>
                Click me
              </span>
            </button>

            <button class="newsCardTag">
              <span>
                Click me
              </span>
            </button>

            <button class="newsCardTag">
              <span>
                Click me
              </span>
            </button>

            <button class="newsCardTag last">
              <span>
                + 7
              </span>
            </button> -->
          </div>

          <div class="w-100 justify-sb desc-items">
            
            <div class="w-100 d-f fd-r gap-24">
              <div class="w-a d-f fd-r align-c gap-12">
                <Icons
                  icon="calendar"
                  size="middle"
                />
                <p class="helpers">22 июнь 2022г</p>
              </div>

              <div class="w-a d-f fd-r align-c gap-12">
                <Icons
                  icon="eye"
                  size="middle"
                />
                <p class="helpers">{{$t("viewed")}} 1 396</p>
              </div>

              <div class="w-a d-f fd-r align-c ml-a gap-12 cur-ptr share"
              @click="shareIt(news)"
              >
                <Icons
                  icon="share"
                  size="middle"
                />
                <p class="helpers">{{$t("share")}}</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      </div>

      <!-- Card Big Stop -->

      <!-- Card Grid Start -->

      

      <!-- Card Grid Stop -->
    

    <paginate
    v-if="(len > 4)"
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
import pageTitleAnimated from '@/components/pageTitleAnimated.vue'
import breadCrumbs from '@/components/breadCrumbs.vue'
import paginate from '@/components/paginate.vue'
import iconedInput from '@/components/iconedInput.vue'
// import selector from '@/components/selector.vue'
import Icons from '@/components/icons.vue'
import dropDown from '@/components/dropDown.vue'

export default {
  name: 'exhibitionsPage',

  components: {
    pageTitleAnimated, breadCrumbs, paginate, iconedInput, Icons, dropDown
  },

  data() {
    return {
      title: {
        language_uzlatin: 'Yangiliklar',
        language_uzCyrillic: 'Янгиликлар',
        language_ru: 'Новости',
        language_en: 'News',
      },
      pagination: {
        curPage: 1,
        limit: 4
      },
      len: '',
      search: '',
      searchWord: '',
      eventsID: 'Музей - центр культуры и просвещения',

      chosenTab: 1,
      topTags: [
          // {
          //   id: 1,
          //   name: {
          //     language_uzlatin: "Muhim",
          //     language_ru: "Важно",
          //     language_uzCyrillic: "Муҳим",
          //     language_en: "Important",
          //   },
          // },
          // {
          //   id: 2,
          //   name: {
          //     language_uzlatin: "Konkurs",
          //     language_ru: "Конкурс",
          //     language_uzCyrillic: "Конкурс",
          //     language_en: "Competition",
          //   },
          // },
          // {
          //   id: 3,
          //   name: {
          //     language_uzlatin: "O'zbekiston tarixi",
          //     language_ru: "История Узбекистана",
          //     language_uzCyrillic: "Ўзбекистон тарихи",
          //     language_en: "History of Uzbekistan",
          //   },
          // },
        ],

        year: {
        type: 'year',
        options: [
          {value: 'all', label: this.$t('all')}
        ]
      },
      chosenYear: {value: 'all', label: this.$t('all')},
      chosenMonth: {value: 'all', label: this.$t('all')},
      chosenSearchCategory: {value:'title', label: this.$t('options.title')},


      allNews: [],
      month: {
        type: 'month',
        options: [
          {value: 'all', label: this.$t('all')},
          {value: '0', label: this.$t('months.january')},
          {value: '1', label: this.$t('months.february')},
          {value: '2', label: this.$t('months.march')},
          {value: '3', label: this.$t('months.april')},
          {value: '4', label: this.$t('months.may')},
          {value: '5', label: this.$t('months.june')},
          {value: '6', label: this.$t('months.july')},
          {value: '7', label: this.$t('months.august')},
          {value: '8', label: this.$t('months.september')},
          {value: '9', label: this.$t('months.october')},
          {value: '10', label: this.$t('months.november')},
          {value: '11', label: this.$t('months.december')}
        ]
      }, 
      searchCategories: {
        type: 'search',
        options: [
          {value: 'title', label: this.$t('options.title')},
          {value: 'tags', label: this.$t('options.tags')}
        ]
      },

      // options: [
      //   {value: '1', label: 'Option 1'},
      //   {value: '2', label: 'Option 2'},
      //   {value: '3', label: 'Option 3'},
      //   {value: '4', label: 'Option 4'},
      //   {value: '5', label: 'Option 5'},
      //   {value: '6', label: 'Option 6'},
      //   {value: '7', label: 'Option 7'},
      //   {value: '8', label: 'Option 8'},
      //   {value: '9', label: 'Option 9'},
      //   {value: '10', label: 'Option 10'},
      // ],
    }
  },
  computed:{
    pages() {
      return Math.ceil(this.len / this.pagination.limit)
    }
  },

  mounted(){

    if(this.$route.query.year == undefined || this.$route.query.year == '') {
        this.$router.push({
          query: {
            ...this.$route.query,
            year: this.chosenYear.value
          }
        })
        this.chosenYear = this.year.options.find(year => year.value == this.$route.query.year)
      } else this.chosenYear = this.year.options.find(year => year.value == this.$route.query.year)

    if(this.$route.query.page == undefined || this.$route.query.page == '') {
      this.$router.push({
        query: {
          ...this.$route.query,
          page: this.pagination.curPage
        }
      })
    } else this.pagination.curPage = this.$route.query.page

    if(this.$route.query.month == undefined || this.$route.query.month == '') {
      this.$router.push({
        query: {
          ...this.$route.query,
          month: this.month.options[0].value
        }
      })
      this.chosenMonth = this.month.options.find(month => month.value === this.$route.query.month)
    } else this.chosenMonth = this.month.options.find(month => month.value === this.$route.query.month)

    if(this.$route.query.searchCategory == undefined || this.$route.query.searchCategory == '') {
      this.$router.push({
        query: {
          ...this.$route.query,
          searchCategory: this.searchCategories.options[0].value
        }
      })
      this.chosenSearchCategory = this.searchCategories.options.find(category => category.value === this.$route.query.searchCategory)
    } else this.chosenSearchCategory = this.searchCategories.options.find(category => category.value === this.$route.query.searchCategory)

    if(this.$route.query.searchCategory == undefined || this.$route.query.searchCategory == '') {
      this.$router.push({
        query: {
          ...this.$route.query,
          searchCategory: this.searchCategories.options[0].value
        }
      })
      this.chosenSearchCategory = this.searchCategories.options.find(category => category.value === this.$route.query.searchCategory)
    } else this.chosenSearchCategory = this.searchCategories.options.find(category => category.value === this.$route.query.searchCategory)

    if(this.$route.query.search == undefined && this.$route.query.search !== '') {
      this.$router.push({
        query: {
          ...this.$route.query,
          search: this.searchWord
        }
      })
      this.searchWord = this.$route.query.search
    } else this.searchWord = this.$route.query.search

    this.getNews()
  },

  methods: {
    getNews(){
      const params = {
        year: this.$route.query.year,
        month: this.$route.query.month,
        searchCategory: this.$route.query.searchCategory,
        searchWord: this.$route.query.search,
        page: this.$route.query.page,
        limit: this.pagination.limit
      }
      // console.log(params.year)

      this.$store.dispatch('getNews', params)
      .then(()=>{
        this.allNews = this.$store.state.news.result.results

        let years = this.$store.state.newsYears

        years.options.unshift({value: 'all', label: this.$t('all')})

        this.year = years
        this.len = this.$store.state.countNews
        // console.log(this.allNews)
      })
      .finally(() => {
        if(this.$route.query.year == undefined || this.$route.query.year == '') {
          this.$router.push({
            query: {
              ...this.$route.query,
              year: this.chosenYear.value
            }
          })
          this.chosenYear = this.year.options.find(year => year.value == this.$route.query.year)
        } else this.chosenYear = this.year.options.find(year => year.value == this.$route.query.year)

        this.topTags = this.$store.state.newsTags
        // console.log(this.$store.state.newsTags)
      })
    },

    async shareIt(event) {
      // console.log(event)
      if(navigator.canShare) {
        navigator.share({
          title: event.title?.[this.$i18n.locale],
          text: event.text?.[this.$i18n.locale],
          url: `${window.location.pathname}/${event._id}`
        })
      } else {
        try {
          await navigator.clipboard.writeText(`${window.location.pathname}/${event._id}`);
          alert('Copied');
        } catch($e) {
          alert('Cannot copy');
        }
      }
    },

    changeYear(option) {
      this.chosenYear = option
      this.$router.push({
        query: {
          ...this.$route.query,
          year: this.chosenYear.value
        }
      })
      this.getNews()
    },
    changeMonth(option){
      this.chosenMonth = option
      this.$router.push({
        query: {
          ...this.$route.query,
          month: this.chosenMonth.value
        }
      })
      this.getNews()
    },
    changeCategory(option) {
      this.chosenSearchCategory = option
      this.$router.push({
        query: {
          ...this.$route.query,
          searchCategory: this.chosenSearchCategory.value
        }
      })
      this.getNews()
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
    choosingTag(tag) {
      // console.log(tag)
      const chosenTag = tag.text?.[this.$i18n.locale]

      if(chosenTag !== this.searchWord) {
        this.searchWord = chosenTag
        this.chosenSearchCategory = this.searchCategories.options.find(category => category.value === 'tags')
        this.$router.push({
          query: {
            ...this.$route.query,
            search: chosenTag,
            searchCategory: 'tags'
          }
        })
        this.getEvents()
      } else return
    },
    // optionChanged(opt) {
    //   console.log(opt);
    // },

    next() {
      this.getEvents()
    },

    prev() {
      this.getEvents()
    },

    goingToPage() {
      this.getEvents()
    },

    goToSingle() {
      this.$router.push({ path: '/news/' + this.eventsID})
    }
  },
}
</script>

<style lang="scss">
.news-wr{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  column-gap: 24px;
  justify-content: space-between;

  .news-items{
    width: 31%;
    flex-direction: column;
    align-items: center;

    .news-img{
      width: 100%;
      height: calc(50% - 12px);
    }

    .news-title{
      width: 95%;
      height: calc(50% - 12px);
      padding: 0;
      justify-content: space-around;

      .commonT{
        font-size: 1rem;
        line-height: 30px;
      }

      .commonP{
        display: none;
      }
    }

    &:nth-child(1){
      width: 100%;
      flex-direction: row;

      .news-img{
        width: calc(50% - 12px);
        height: 100%;
      }
      .news-title{
        width: calc(50% - 12px);
        height: 100%;
        padding-top: 12px;

        .share{

          .helpers{
            display: block;
          }
        }

        h4.commonT{
          width: 90% !important;
        }

        .commonP{
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          max-height: 90px;
          pre{
            white-space: pre-wrap;
          }
        }
      }
    }
  }
}

.commonT{
  display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          max-height: 90px;
}
.desc-items{
  width: 95%;
  align-self: center;
}

.share{
  padding-right: 20px;
  box-sizing: border-box;

  .helpers{
    display: none;
  }
}

@media screen and (max-width: 899px) {
  .news-wr{
    flex-direction: column !important;

    .news-items{
      width: 100% !important;
      height: 508px !important;

      &:nth-child(1){
        flex-direction: column !important;

        .news-img{
          width: 100%;
          height: calc(50% - 12px) !important;
        }

        .news-title{
          width: 95% !important;
          height: calc(50% - 12px) !important;
          align-self: center;

          .commonP{
            display: none;
          }

          .share{
            .helpers{
              display: none;
            }
          }
        }
      }
    }
  }
}
</style>