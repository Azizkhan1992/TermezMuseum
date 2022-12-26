<template>
  <div class="mainPage">

    <pageTitleAnimated
      :titleName="title[$i18n.locale]"
      background="events"
    />


    <!-- Tab Start -->

    <div class="tabsParent pos-rel w-100 ovr-hidden gap-24 bor-r-20 backgrnd-white pad-24p box-brb desctop-bar">
      <div class="w-100 h-50p align-c cur-ptr justify-c tab-bar">
        <div class="tab-items" :class="tab.value == choosenType ? 'active-tab' : ''" v-for="tab, idx in tabs.options" :key="idx" @click="changeTab(tab.value)">
          <p>{{tab.name}}</p>
        </div>
      </div>
      
    </div>

    <!-- Tab Stop -->

    <!-- Input Bar Start -->

    <div class="tabsParent2 exh-fl">

<div class="mobile-events">
  <div class="title-wr" @click="mobActive = !mobActive">
    <p >{{choosen.label}}</p>
    <Icons
    icon="arrDown"
    />
  </div>
  <div class="drop" :class="mobActive ? 'active' : 'deactive'">
    <div class="tab-items" :class="tab == choosen ? 'active': ''" v-for="tab, idy in tabs.options" :key="idy" @click="changeTabVal(tab)">
    <p>{{tab.name}}</p>
  </div>
  </div>
</div>

</div>

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
          :current="chosenMonth"
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

        <label class="colorGreyD mb-4">{{$t('section')}}</label>

        <iconedInput
        @iconClicked="searchEvent"
          v-model="searchWord"
          :placeholder="this.$t('placeholders.enterSearchText')"
          :value="searchWord"
        />
      </div>
      
    </div>

    <!-- Input Bar Stop -->


    <div class="w-100 h-48p mt-60 align-c gap-24  flex-wrap h-auto">
      <p class="commonP colorGreyD bold line-h-20">{{$t("top5Tag")}}:</p>

      <button class="top5TagBtn" v-for="el,index in topTags" :key="index" @click="choosingTag(el)">
        <span>{{el?.text?.[$i18n.locale]}}</span>
      </button>
      <!-- <button class="top5TagBtn">
        <span>Конкурс</span>
      </button>
      <button class="top5TagBtn">
        <span>История Узбекистана</span>
      </button>
      <button class="top5TagBtn">
        <span>Руководитель</span>
      </button>
      <button class="top5TagBtn">
        <span>Новые экспонаты</span>
      </button> -->
    </div>

    <div class="w-100 gap-48 mt-80">
      <p class="commonP line-h-30 colorGreyD">{{$t("countBook")}}:</p>
      <p class="commonP line-h-30 bold colorType">{{NumberEvents}}</p>
    </div>

    <div class="w-100 mt-60 gap-24 events">

      <!-- Card Start -->

      <div class="w-100 h-320p bor-r-20 gap-24 ovr-hidden backgrnd-white cw-t" v-for="item, idy in allEvents" :key="idy">
        <div class="w-4 pos-rel event-img-wr">
          <div class="dark-layer-solid z-idx1"></div>
          <img class="back-img" :src="item?.img?.path" alt="">
        </div>

        <div class="w-8c d-f fd-c box-brb pad-l-24p pad-r-48 pad-t-48 pad-b-48 event-title-wr">
          <h4 class="commonT colorGreyD">{{item?.title?.[$i18n.locale]}}</h4>

          <div class="w-100 justify-sb mt-a mobile-flex">
            
            <div class="w-a d-f fd-r gap-48">
              <div class="w-a d-f fd-r align-c gap-12 cur-ptr">
                <Icons
                  icon="calendar"
                  size="middle"
                />
                <p class="helpers">{{filPost(item?.createdAt) + " " + $t("year2")}}</p>
              </div>

              <div class="w-a d-f fd-r align-c gap-12 cur-ptr"
              @click="shareIt(item)"
              >
                <Icons
                  icon="share"
                  size="middle"
                />
                <p class="helpers">{{$t("share")}}</p>
              </div>
            </div>

            <button
              @click="goToSingle(item._id)"
              class="prim w-3"
            >
              <span>{{$t('more')}}</span>
            </button>
            
          </div>
        </div>
      </div>

      <!-- Card Stop -->

    </div>

    

    <paginate
    v-if="(len > 8)"
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
  name: 'eventsPage',

  components: {
    pageTitleAnimated, breadCrumbs, paginate, iconedInput, Icons, dropDown
  },

  data() {
    return {
      mobActive: false,
      title:{
        language_uzlatin: 'Voqealar',
        language_uzCyrillic: 'Воқеалар',
        language_ru: 'Мероприятия',
        language_en: 'Events',
      },
      chosenYear: {value: 'all', label: this.$t('all')},
      chosenMonth: {value: 'all', label: this.$t('all')},
      chosenSearchCategory: {value:'title', label: this.$t('options.title')},
      type: this.$route.query.type,
      choosenType: 'planned',
      searchWord: '',
      sortedYears: {
        type: 'year',
        options: [
        {value: 'all', label: this.$t('all')}
        ]
      },
      search: '',
      eventsID: 'Встреча с заместителем директора по научной работе Института востоковедения Российской Академии Наук',

      chosenTab: 1,
      tabs: {
        type: 'tabValues',
        options: [
          {name: this.$t('plannedEvents'), value: 'planned', label: this.$t('plannedEvents')},
          {name: this.$t('eventsHeld'), value: 'held', label: this.$t('eventsHeld')},
        ]
      },
      choosen: {name: this.$t('plannedEvents'), value: 'planned', label: this.$t('plannedEvents')},
      allEvents: '',
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

      options: [
        // {value: '1', label: 'Option 1'},
        // {value: '2', label: 'Option 2'},
        // {value: '3', label: 'Option 3'},
        // {value: '4', label: 'Option 4'},
        // {value: '5', label: 'Option 5'},
        // {value: '6', label: 'Option 6'},
        // {value: '7', label: 'Option 7'},
        // {value: '8', label: 'Option 8'},
        // {value: '9', label: 'Option 9'},
        // {value: '10', label: 'Option 10'},
      ],
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
      searchCategories: {
        type: 'search',
        options: [
          {value: 'title', label: this.$t('options.title')},
          {value: 'tags', label: this.$t('options.tags')}
        ]
      },
      NumberEvents: 0,
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
      typeEventOptions: [
        {value: '1', label: 'Запланированные мероприятия'},
        {value: '2', label: 'Проведенные мероприятия'},
      ],
      pagination: {
        curPage: 1,
        limit: 8
      },
      len: ''
    }
  },
  computed:{
    pages() {
      return Math.ceil(this.len / this.pagination.limit)
    }
  },
  mounted(){
    if(this.$route.query.page == undefined || this.$route.query.page == '') {
      this.$router.push({
        query: {
          ...this.$route.query,
          page: this.pagination.curPage
        }
      })
    } else this.pagination.curPage = this.$route.query.page

    if(this.$route.query.type == undefined || this.$route.query.type == ''){
      this.$router.push({
        query: {
          ...this.$route.query,
          type: this.tabs.options[0].value
        }
      })
      this.choosenType = this.$route.query.type

    }else this.choosenType = this.$route.query.type

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


    this.getEvents()
  },

  methods: {
    getEvents(){
      const params = {
        type: this.$route.query.type,
        year: this.$route.query.year,
        month: this.$route.query.month,
        searchCategory: this.$route.query.searchCategory,
        searchWord: this.$route.query.search,
        page: this.$route.query.page,
        limit: this.pagination.limit
      }
      this.$store.dispatch('getEvents', params)
      .then(() => {
        // console.log(resp)
        this.allEvents = this.$store.state.events.result.results
        
        let years = this.$store.state.sortedYears
        // console.log(years)

        years.options.unshift({value: 'all', label: this.$t('all')})
        
        this.year = years
        this.len = this.$store.state.events.NumberOfEvents
        this.NumberEvents = this.$store.state.events.NumberOfEvents
        // console.log(this.$store.state.events)
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

        this.topTags = this.$store.state.events.topTags
        // console.log(this.$store.state.events)
      })
    },

    changeYear(option) {
      this.chosenYear = option
      this.$router.push({
        query: {
          ...this.$route.query,
          year: this.chosenYear.value
        }
      })
      this.getEvents()
    },

    changeMonth(option) {
      this.chosenMonth = option
      this.$router.push({
        query: {
          ...this.$route.query,
          month: this.chosenMonth.value
        }
      })
      this.getEvents()
    },

    changeCategory(option) {
      this.chosenSearchCategory = option
      this.$router.push({
        query: {
          ...this.$route.query,
          searchCategory: this.chosenSearchCategory.value
        }
      })
      this.getEvents()
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
          this.getEvents()
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

    changeTab(val){
      this.chosenTab = val
      this.$router.push({
        query: {
          ...this.$route.query,
          type: val
        }
      })
      // console.log(val)
      this.choosenType = val
      this.getEvents()
      // console.log()
    },

    next() {
      this.getEvents()
    },

    prev() {
      this.getEvents()
    },

    goingToPage() {
      this.getEvents()
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
    changeTabVal(val){
      this.mobActive = false
      this.choosen = val
      this.chosenTab = val.value
      this.$router.push({
        query: {
          ...this.$route.query,
          type: val.value
        }
      })
      // console.log(val)
      this.choosenType = val.value
      this.getEvents()
      // console.log(val)
    },

    goToSingle(id) {
      // console.log(this.choosenType)
      this.$router.push({ path: `/events/${id}`, query: {...this.$route.query ,type: this.choosenType}})
    }
  },
}
</script>

<style lang="scss">

@media screen and (max-width: 899px) {

  .events{
    .cw-t{

      .event-img-wr{
        width: 100% !important;
        height: calc(50% - 12px) !important;
      }
      .event-title-wr{
        width: 100% !important;
        height: calc(50% - 12px) !important;
        padding: 0 12px 12px 12px !important;
      }
    }
  }
  .tabsParent2{
    width: 100%;
    margin-bottom: 40px;

    .mobile-events{
    display: flex;
    position: relative;
    width: 100%;
    height: 48px;
    align-items: center;

    .title-wr{
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      background: #fff;
      border-radius: 8px;
      justify-content: space-between;
      padding: 0 10px;
      box-sizing: border-box;
      cursor: pointer;

      p{
        font-size: 1rem;
        line-height: 20px;
        font-weight: 700;
        letter-spacing: 0.04em;
        color: #a4abbd;
      }
    }

    .drop{
      position: absolute;
      top: 50px;
      left: 0;
      width: 100%;
      height: 90px;
      background: #fff;
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding: 0 10px;
      box-sizing: border-box;
      z-index: 199;
      overflow: hidden;
      transform-origin: top;
      transition: transform 0.5s ease-in-out;

      &.active{
        transform: scaleY(1);

        .tab-items{
          width: 100%;
          height: 40px;
          display: flex;
          align-items: center;
          cursor: pointer;

          p{
                font-size: 1rem;
            line-height: 20px;
            font-weight: 700;
            letter-spacing: 0.04em;
            color: #a4abbd;
          }

          &.active{

            p{
              color: #4582D3;
            }
          }
        }
      }
      &.deactive{
        transform: scaleY(0);

        .tab-items{
          width: 100%;
          height: 40px;
          display: flex;
          align-items: center;
          cursor: pointer;

          p{
                font-size: 1rem;
            line-height: 20px;
            font-weight: 700;
            letter-spacing: 0.04em;
            color: #a4abbd;
          }

          &.active{

            p{
              color: #4582D3;
            }
          }
        }
      }
    }
}
  }

  .desctop-bar{
    display: none;
  }
}
@media screen and (min-width: 1200px){
  .mobile-events{
    display: none;
  }
  .events{

    .cw-t{

      .event-title-wr{

        .mobile-flex{

          button.prim{
            width: 312px !important;
          }
        }
      }
    }
  }
}
@media screen and (min-width: 900px) and (max-width: 1099px) {
  .mobile-events{
  display: none;
}
  .desctop-bar{
    display: block;
  }
}
.events{
  flex-direction: column;

  .cw-t{
    .event-img-wr{
      width: calc(50% - 12px);
    }

    .event-title-wr{
      width: calc(50% - 12px);
      padding: 12px 12px 12px 0;

      h4.commonT{
        font-size: 1rem !important;
        line-height: 24px;
      }

      .mobile-flex{

        .gap-48{
          flex-direction: column;
        }

        button.prim{
          align-self: flex-end;
          width: 180px;
        }
      }
    }

  }
}
.tab-bar{

  .tab-items{
    width: calc(50% - 24px);
    height: 85%;
    display: flex;
    align-items: center;
    justify-content: center;

    p{
      font-size: 1rem;
        line-height: 20px;
        color: #737679;
        letter-spacing: 0.04em;
        font-weight: 700;
        font-family: 'Caviar Dreams';
    }

    &.active-tab{
      background: #4582D3;
      border-radius: 12px;

      p{
        color: #fff;
      }
    }
  }
}
</style>