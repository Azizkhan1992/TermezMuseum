<template>
  <div class="mainPage">

    <pageTitleAnimated
        :titleName="title?.[$i18n.locale]"
        background="news"
    />

    <!-- Input Bar Start -->
    <!-- <div class="tabsParent2 exh-fl">
      <selector
          @optionChanged="optionChanged"
          :options="this.typeEventOptions"
          id="aaSel"
      />
    </div> -->

    <div class="w-100 mt-60 z-idx100 fd-r gap-24 backgrnd-white bor-r-20 pad-24p box-brb mobile-flex">

      <div class="w-2 d-f fd-c">
        <label class="colorGreyD mb-4">{{ $t("year") }}</label>

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
        <label class="colorGreyD mb-4">{{ $t("month") }}</label>

        <dropDown
        @changeOption="changeMonth"
          :options="month"
          :current="chosenMonth"
        />

        <!-- <selector
            @optionChanged="optionChanged"
            :options="this.options"
            id="bbSel"
        /> -->
      </div>

      <div class="w-2 d-f fd-c">
        <label class="colorGreyD mb-4">{{ $t("categorySearch") }}</label>

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

        <label class="colorGreyD mb-4">{{ $t("section") }}</label>

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
      <p class="commonP colorGreyD bold line-h-20">{{ $t("top5Tag") }}:</p>

      <button class="top5TagBtn" v-for="el,index in topTags" :key="index" @click="chosenTag(el)">
        <span>{{ el._id }}</span>
      </button>
    </div>

    <div class="w-100 gap-48 mt-80">
      <p class="commonP line-h-30 colorGreyD">{{ $t("countPublicate") }}:</p>
      <p class="commonP line-h-30 bold colorType">{{ len }}</p>
    </div>

    <!-- Card Big Start -->

    <!-- <div class="w-100 h-420p mt-60 bor-r-20 gap-24 ovr-hidden backgrnd-white nw-card">
      <div class="w-50 pos-rel">
        <img
            @click="goToSingle"
            class="back-img cur-ptr" :src="allNews[0].mainImage.common.path" alt=""
        >
      </div>

      <div class="w-50 d-f fd-c box-brb pad-r-24p pad-t-24p pad-b-24p">
        <h4
            @click="goToSingle"
            class="commonT cur-ptr colorType h-108p"
        >
          {{ allNews[0].title?.[$i18n.locale] }}
        </h4>

        <p
            v-html="this.allNews[0].text?.[$i18n.locale]"
            @click="goToSingle"
            class="commonP cur-ptr colorGreyD mt-24 line-h-30 h-90p"
        >

        </p>

        <div class="w-100 gap-12 mt-a ovr-hidden">
          <button v-for="(tags,idx) in allNews[0].tags" :key="idx" class="newsCardTag">
              <span>
               {{ tags[idx] }}
              </span>
          </button>


          <button class="newsCardTag last">
              <span>
                + 7
              </span>
          </button>
        </div>

        <div class="w-100 justify-sb mt-48 mt-24-900">

          <div class="w-100 d-f fd-r gap-24 nw-card-btm">
            <div class="w-a d-f fd-r align-c gap-12">
              <Icons
                  icon="calendar"
                  size="middle"
              />
              <p class="helpers">{{ allNews[0].createdAt }}</p>
            </div>

            <div class="w-a d-f fd-r align-c gap-12">
              <Icons
                  icon="eye"
                  size="middle"
              />
              <p class="helpers">{{ $t("viewed") }} {{ allNews[0].numberOfViews }}</p>
            </div>

            <div class="w-a d-f fd-r align-c ml-a gap-12 cur-ptr">
              <Icons
                  icon="share"
                  size="middle"
              />
              <p class="helpers">{{ $t("share") }}</p>
            </div>
          </div>

        </div>
      </div>
    </div> -->

    <!-- Card Big Stop -->

    <!-- Card Grid Start -->

    <div class="w-100 mt-24 nw-lcard" :class="allNews.length == 4 || allNews.length == 8 ? 'jus-news': ''">

      <!-- Card Sm Start -->

      <div v-for="(item,ind) in allNews " :key="ind" class="ovr-hidden bor-r-20 backgrnd-white h-420p mms-items" >
        <div class="w-100 pos-rel h-220p">
          <img
              @click="goToSingle"
              class="back-img cur-ptr" :src="item?.mainImage?.common?.path" alt=""
          >
        </div>

        <div class="w-100 fd-c pad-24p h-200p ovr-hidden box-brb h-un-900">
          <h4
              @click="goToSingle"
              class="commonP cur-ptr colorType line-h-30 bold h-60p"
          >
            {{ item?.title?.[$i18n.locale] }}
          </h4>

          <p class="commonD" v-html="item?.text?.[$i18n.locale]"></p>

          <div class="w-100 gap-12 mt-a ovr-hidden ev-sn-tg">
            <button v-for="(tagss,idx) in item.tags" :key="idx" class="newsCardTag sm">
                <span>
                 {{tagss[idx]}}
                </span>
            </button>



            <button class="newsCardTag last">
                <span>
                  + 7
                </span>
            </button>
          </div>

          <div class="w-100 justify-sb mt-24 view-wr">

            <div class="w-100 d-f fd-r gap-24">
              <div class="w-a d-f fd-r align-c gap-12">
                <Icons
                    icon="calendar"
                    size="middle"
                />
                <p class="helpers">{{filPost(item?.createdAt) + " " + $t("year2")}}</p>
              </div>

              <div class="w-a d-f fd-r align-c gap-12 seen-wr">
                <Icons
                    icon="eye"
                    size="middle"
                />
                <p class="helpers">{{ $t("viewed") }} {{ item?.numberOfViews }}</p>
                <p class="mob-help">{{ item?.numberOfViews }}</p>
              </div>

              <div class="w-a d-f fd-r align-c ml-a gap-12 cur-ptr share-wr">
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

      <!-- Card Sm Stop -->

    </div>

    <!-- Card Grid Stop -->


    <paginate
    v-if="(len > 10)"
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
import Icons from '@/components/icons.vue'
import dropDown from '@/components/dropDown.vue'

export default {
  name: 'exhibitionsPage',

  components: {
    pageTitleAnimated, breadCrumbs, paginate, iconedInput, Icons, dropDown
  },

  data() {
    return {
      allNews: [],
      title: {
        language_uzlatin: 'OAV biz haqimizda',
        language_uzCyrillic: 'ОAВ биз ҳақимизда',
        language_ru: 'СМИ о нас',
        language_en: 'Mass Media about us',
      },
      pagination: {
        curPage: 1,
        limit: 10
      },
      len: '',
      search: '',
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
      searchWord: '',
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
          {value: 'source', label: this.$t('options.source')}
        ]
      },
      typeEventOptions: [
        {value: '1', label: 'Запланированные мероприятия'},
        {value: '2', label: 'Проведенные мероприятия'},
      ],
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

      if(this.$route.query.search == undefined && this.$route.query.search !== '') {
        this.$router.push({
          query: {
            ...this.$route.query,
            search: this.searchWord
          }
        })
        this.searchWord = this.$route.query.search
      } else this.searchWord = this.$route.query.search

    this.getSingleNews()
  },

  methods: {
    optionChanged(opt) {
      console.log(opt);
    },
    getSingleNews() {
      const params = {
        year: this.$route.query.year,
        month: this.$route.query.month,
        searchCategory: this.$route.query.searchCategory,
        searchWord: this.$route.query.search,
        page: this.$route.query.page,
        limit: this.pagination.limit
      }
      this.$store.dispatch('getMediasArticle', params)
      .then(() => {
        this.allNews = this.$store.state.mmasArticles

        let years = this.$store.state.mmasYear

        years.options.unshift({value: 'all', label: this.$t('all')})
        
        this.year = years

        const len = this.$store.state.mmasLen

        this.topTags = this.$store.state.mmsTopTags

        this.len = len
        // console.log(this.topTags)
      }).finally(() =>{
        if(this.$route.query.year == undefined || this.$route.query.year == '') {
          this.$router.push({
            query: {
              ...this.$route.query,
              year: this.chosenYear.value
            }
          })
          this.chosenYear = this.year.options.find(year => year.value == this.$route.query.year)
        } else this.chosenYear = this.year.options.find(year => year.value == this.$route.query.year)

        // this.topTags = this.$store.state.newsTags
        // console.log(this.topTags)
      })
    },

    changeYear(option) {
      // console.log(option)
      this.chosenYear = option
      this.$router.push({
        query: {
          ...this.$route.query,
          year: this.chosenYear.value
        }
      })
      this.getSingleNews()
    },
    changeMonth(option) {
      this.chosenMonth = option
      this.$router.push({
        query: {
          ...this.$route.query,
          month: this.chosenMonth.value
        }
      })
      this.getSingleNews()
    },
    changeCategory(option) {
      this.chosenSearchCategory = option
      // console.log(this.chosenSearchCategory)
      this.$router.push({
        query: {
          ...this.$route.query,
          searchCategory: this.chosenSearchCategory.value
        }
      })
      this.getSingleNews()
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
          this.getSingleNews()
        })
      }
    },
    chosenTag(tag){
      let temp = tag._id
      this.searchWord = tag._id
      this.$router.push({
        query:{
          ...this.$route.query,
          page: this.pagination.curPage,
          search: temp
        }
      })
      // console.log(temp)
      this.getSingleNews()
    },
    goToSingle() {
      this.$router.push({path: `/news/lang=${this.$i18n.locale}` + this.eventsID})
    },
    prev(){
      this.getSingleNews()
    },
    next(){
      this.getSingleNews()
    },
    goingToPage(){
      this.getSingleNews()
    },
    filPost(val) {
      if (val) {
        
        let temp = val.split("T");
        let year = new Date(temp[0]).getFullYear();
        let month = new Date(temp[0]).getMonth();
        let day = new Date(temp[0]).getDate();
        // console.log(day)
        let monId
        if(month !== 11){
          monId = month + 1;
        }else{monId = 11}

        let monthT = this.months[monId].monthName?.[this.$i18n.locale];

        return day + " " + monthT + " " + year;
      }
    },
  },

  computed:{
    pages() {
      // console.log(Math.ceil(this.len / this.pagination.limit))
      return Math.ceil(this.len / this.pagination.limit)
    }
  },
}
</script>

<style lang="scss">


.nw-lcard{
  flex-wrap: wrap;
  height: auto;
  column-gap: 24px;
  row-gap: 24px;

  &.jus-news{
      justify-content: space-between;
    }

  .mms-items{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: calc(33% - 24px);

    

    .w-100{
      width: 100%;
      height: calc(50% - 12px);
    }

    .h-un-900{
      justify-content: space-between;

      .ev-sn-tg{
        height: 20%;
      }

      .view-wr{
        margin-top: 12px;
        align-items: center;

        .share-wr{

          p.helpers{
            display: none;
          }
        }

        .seen-wr{

          p.mob-help{
            display: none;
          }
        }
      }

      p.commonD{
        display: none;
      }
    }

    &:nth-child(1){
      width: 100%;
      display: flex;
      flex-direction: row;

      .w-100{
        width: calc(50% - 12px);
        height: 100%;
      }

      .h-un-900{
        h4.commonP{
          font-size: 1.5rem;
          line-height: 36px;
          font-weight: 700;
        }

        p.commonD{
          white-space: pre-wrap;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          height: 85px;
          overflow: hidden;
          font-size: 1rem;
          line-height: 30px;
          color: #A4ABBD;

          pre{
            white-space: pre-wrap;
            display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          height: 85px;
          }
        }

        .ev-sn-tg{
          height: 20%;
          width: 100%;
        }

        .view-wr{
          height: 20%;
          width: 100%;

          .share-wr{

            p.helpers{
              display: block;
            }
          }

          .w-100{
            width: 100%;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 1099px) and (min-width: 900px) {
  .nw-lcard{
    justify-content: space-between;

    .mms-items{
      width: calc(50% - 24px) !important;

      .h-un-900{

        .view-wr{

          .share-wr{

            p.helpers{
              display: none;
            }
          }
        }
      }

      &:nth-child(1){
        width: 100% !important;

        .h-un-900{

.view-wr{

  .share-wr{

    p.helpers{
      display: block;
    }
  }
}
}
      }
    }
  }
}

@media screen and (max-width: 899px) {
  .nw-lcard{
    flex-direction: column;
    flex-wrap: nowrap;

    .mms-items{
      width: 100% !important;

      .h-un-900{
        padding: 12px;

        h4.commonP{
          font-size: 1rem;
        }

.view-wr{

  .share-wr{

    p.helpers{
      display: none;
    }
  }
  .seen-wr{

    p.helpers{
      display: none;
    }

    p.mob-help{
      display: block;
    }
  }
}
}

      &:nth-child(1){
        flex-direction: column;

        .w-100{
          width: 100% !important;
          height: calc(50% - 12px) !important;
        }

        .h-un-900{

          h4.commonP{
            font-size: 1rem;
            line-height: 30px;
          }

          .view-wr{

            .share-wr{

              p.helpers{
                display: none;
              }
            }
          }

          p.commonD{
            display: none;
          }
        }
      }
    }
  }
}
</style>
