<template>
  <div class="mainPage">

    <pageTitleAnimated
      :titleName="title[$i18n.locale]"
      background="events"
    />


    <!-- Tab Start -->

    <div class="tabsParent pos-rel w-100 ovr-hidden gap-24 bor-r-20 backgrnd-white pad-24p box-brb">
      <div
        @click="chosenTab = 1"
        class="w-100 h-50p align-c cur-ptr justify-c"
      >
        <p
          class="commonP bold"
          :class="chosenTab !== 1 ? 'colorGreyD' : ''"
        >
          {{$t("plannedEvents")}}
        </p>
      </div>

      <div
        @click="chosenTab = 2"
        class="w-100 h-50p align-c cur-ptr justify-c"
      >
        <p
          class="commonP bold"
          :class="chosenTab !== 2 ? 'colorGreyD' : ''"
        >
          {{$t("eventsHeld")}}
        </p>
      </div>

      <div
        class="tabBack pos-abs h-50p backgrnd-prim bor-r-4 mb-24"
        :class="chosenTab == 2 ? 'moveTo2' : ''"
      >
      </div>
    </div>

    <!-- Tab Stop -->

    <!-- Input Bar Start -->

    <div class="w-100 mt-60 z-idx100 fd-r gap-24 backgrnd-white bor-r-20 pad-24p box-brb mobile-flex">
      
      <div class="w-2 d-f fd-c">
        <label class="colorGreyD mb-4">{{$t("year")}}</label>
        
        <selector
          @optionChanged="optionChanged"
          :options="this.options"
          id="aaSel"
        />
      </div>

      <div class="w-2 d-f fd-c">
        <label class="colorGreyD mb-4">{{$t("month")}}</label>
        
        <selector
          @optionChanged="optionChanged"
          :options="this.options"
          id="bbSel"
        />
      </div>

      <div class="w-2 d-f fd-c">
        <label class="colorGreyD mb-4">{{$t("categorySearch")}}</label>
        
        <selector
          @optionChanged="optionChanged"
          :options="this.options"
          id="ccSel"
        />
      </div>
      
      <div class="w-6 d-f fd-c">

        <label class="colorGreyD mb-4">{{$t('section')}}</label>

        <iconedInput
          v-model="search"
          icon="search"
          :placeholder="$t('enterTextSearch')"
        />
      </div>
      
    </div>

    <!-- Input Bar Stop -->


    <div class="w-100 h-48p mt-60 align-c gap-24  flex-wrap h-auto">
      <p class="commonP colorGreyD bold line-h-20">{{$t("top5Tag")}}:</p>

      <button class="top5TagBtn" v-for="el,index in topTags" :key="index">
        <span>{{el.name[$i18n.locale]}}</span>
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
      <p class="commonP line-h-30 bold colorType">355</p>
    </div>

    <div class="w-100 mt-60 gap-24">

      <!-- Card Start -->

      <div class="w-100 h-320p bor-r-20 gap-24 ovr-hidden backgrnd-white cw-t">
        <div class="w-4 pos-rel">
          <div class="dark-layer-solid z-idx1"></div>
          <img class="back-img" src="@/assets/temporary/samovar.jpg" alt="">
        </div>

        <div class="w-8c d-f fd-c box-brb pad-l-24p pad-r-48 pad-t-48 pad-b-48">
          <h4 class="commonT colorGreyD">This is title</h4>

          <div class="w-100 justify-sb mt-a mobile-flex">
            
            <div class="w-a d-f fd-r gap-48">
              <div class="w-a d-f fd-r align-c gap-12 cur-ptr">
                <Icons
                  icon="calendar"
                  size="middle"
                />
                <p class="helpers">22 июнь 2022г</p>
              </div>

              <div class="w-a d-f fd-r align-c gap-12 cur-ptr">
                <Icons
                  icon="share"
                  size="middle"
                />
                <p class="helpers">{{$t("share")}}</p>
              </div>
            </div>

            <button
              @click="goToSingle"
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
      :currentPageNumber="curPage"
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
import selector from '@/components/selector.vue'
import Icons from '@/components/icons.vue'

export default {
  name: 'eventsPage',

  components: {
    pageTitleAnimated, breadCrumbs, paginate, iconedInput, selector, Icons
  },

  data() {
    return {
      title:{
        uz: 'Voqealar',
        uzcyr: 'Воқеалар',
        ru: 'Мероприятия',
        en: 'Events',
      },
      curPage: 7,
      pages: 122,
      search: '',
      eventsID: 'Встреча с заместителем директора по научной работе Института востоковедения Российской Академии Наук',

      chosenTab: 1,
      topTags: [
          {
            id: 1,
            name: {
              uz: "Muhim",
              ru: "Важно",
              uzcyr: "Муҳим",
              en: "Important",
            },
          },
          {
            id: 2,
            name: {
              uz: "Konkurs",
              ru: "Конкурс",
              uzcyr: "Конкурс",
              en: "Competition",
            },
          },
          {
            id: 3,
            name: {
              uz: "O'zbekiston tarixi",
              ru: "История Узбекистана",
              uzcyr: "Ўзбекистон тарихи",
              en: "History of Uzbekistan",
            },
          },
        ],

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

  methods: {
    optionChanged(opt) {
      console.log(opt);
    },

    goToSingle() {
      this.$router.push({ path: '/events/' + this.eventsID})
    }
  },

  mounted() {
  }
}
</script>

<style>

</style>