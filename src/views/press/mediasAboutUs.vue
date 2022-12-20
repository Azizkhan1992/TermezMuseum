<template>
  <div class="mainPage">

    <pageTitleAnimated
        :titleName="title?.[$i18n.locale]"
        background="news"
    />

    <!-- Input Bar Start -->
    <div class="tabsParent2 exh-fl">
      <selector
          @optionChanged="optionChanged"
          :options="this.typeEventOptions"
          id="aaSel"
      />
    </div>

    <div class="w-100 mt-60 z-idx100 fd-r gap-24 backgrnd-white bor-r-20 pad-24p box-brb mobile-flex">

      <div class="w-2 d-f fd-c">
        <label class="colorGreyD mb-4">{{ $t("year") }}</label>

        <selector
            @optionChanged="optionChanged"
            :options="this.options"
            id="aaSel"
        />
      </div>

      <div class="w-2 d-f fd-c">
        <label class="colorGreyD mb-4">{{ $t("month") }}</label>

        <selector
            @optionChanged="optionChanged"
            :options="this.options"
            id="bbSel"
        />
      </div>

      <div class="w-2 d-f fd-c">
        <label class="colorGreyD mb-4">{{ $t("categorySearch") }}</label>

        <selector
            @optionChanged="optionChanged"
            :options="this.options"
            id="ccSel"
        />
      </div>

      <div class="w-6 d-f fd-c">

        <label class="colorGreyD mb-4">{{ $t("section") }}</label>

        <iconedInput
            v-model="search"
            icon="search"
            :placeholder="$t('enterTextSearch')"
        />
      </div>

    </div>


    <!-- Input Bar Stop -->


    <div class="w-100 h-48p mt-60 align-c gap-24 flex-wrap h-auto">
      <p class="commonP colorGreyD bold line-h-20">{{ $t("top5Tag") }}:</p>

      <button class="top5TagBtn" v-for="el,index in topTags" :key="index">
        <span>{{ el._id }}</span>
      </button>
    </div>

    <div class="w-100 gap-48 mt-80">
      <p class="commonP line-h-30 colorGreyD">{{ $t("countPublicate") }}:</p>
      <p class="commonP line-h-30 bold colorType">1 694</p>
    </div>

    <!-- Card Big Start -->

    <div class="w-100 h-420p mt-60 bor-r-20 gap-24 ovr-hidden backgrnd-white nw-card">
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
    </div>

    <!-- Card Big Stop -->

    <!-- Card Grid Start -->

    <div class="grid-3 w-100 mt-24 grid-1-900 nw-lcard">

      <!-- Card Sm Start -->

      <div v-for="(item,ind) in allNews.slice(1) " :key="ind" class="w-4 ovr-hidden bor-r-20 backgrnd-white h-420p">
        <div class="w-100 pos-rel h-220p">
          <img
              @click="goToSingle"
              class="back-img cur-ptr" :src="item.mainImage.common.path" alt=""
          >
        </div>

        <div class="w-100 fd-c pad-24p h-200p ovr-hidden box-brb h-un-900">
          <h4
              @click="goToSingle"
              class="commonP cur-ptr colorType line-h-30 bold h-60p"
          >
            {{ item.title?.[$i18n.locale] }}
          </h4>

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

          <div class="w-100 justify-sb mt-24">

            <div class="w-100 d-f fd-r gap-24">
              <div class="w-a d-f fd-r align-c gap-12">
                <Icons
                    icon="calendar"
                    size="middle"
                />
                <p class="helpers">{{item.createdAt}}</p>
              </div>

              <div class="w-a d-f fd-r align-c gap-12">
                <Icons
                    icon="eye"
                    size="middle"
                />
                <p class="helpers">{{ $t("viewed") }} {{ item.numberOfViews }}</p>
              </div>

              <div class="w-a d-f fd-r align-c ml-a gap-12 cur-ptr">
                <Icons
                    icon="share"
                    size="middle"
                />
              </div>
            </div>

          </div>

        </div>
      </div>

      <!-- Card Sm Stop -->

    </div>

    <!-- Card Grid Stop -->


    <paginate
        :currentPageNumber="curPage"
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
import selector from '@/components/selector.vue'
import Icons from '@/components/icons.vue'

export default {
  name: 'exhibitionsPage',

  components: {
    pageTitleAnimated, breadCrumbs, paginate, iconedInput, selector, Icons
  },

  data() {
    return {
      allNews: [],
      title: {
        language_uzlatin: 'Yangiliklar',
        language_uzCyrillic: 'Янгиликлар',
        language_ru: 'Новости',
        language_en: 'News',
      },
      curPage: 7,
      pages: 122,
      search: '',
      eventsID: 'Музей - центр культуры и просвещения',

      chosenTab: 1,
      topTags: [
        {
          id: 1,
          name: {
            language_uzlatin: "Muhim",
            language_ru: "Важно",
            language_uzCyrillic: "Муҳим",
            language_en: "Important",
          },
        },
        {
          id: 2,
          name: {
            language_uzlatin: "Konkurs",
            language_ru: "Конкурс",
            language_uzCyrillic: "Конкурс",
            language_en: "Competition",
          },
        },
        {
          id: 3,
          name: {
            language_uzlatin: "O'zbekiston tarixi",
            language_ru: "История Узбекистана",
            language_uzCyrillic: "Ўзбекистон тарихи",
            language_en: "History of Uzbekistan",
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
      typeEventOptions: [
        {value: '1', label: 'Запланированные мероприятия'},
        {value: '2', label: 'Проведенные мероприятия'},
      ],
    }
  },

  methods: {
    optionChanged(opt) {
      console.log(opt);
    },
    async getSingleNews() {
      await this.$api.get('/press/mmsarticle/site')
          .then(resp => {
            this.allNews = resp.data.result.results
            this.topTags = resp.data.TopMMSDocuments
            for (let i = 1; i <= this.allNews.length; i++) {
              this.allNews[i - 1].id = i
            }
             console.log(this.allNews)
             console.log(this.topTags)

          }), err => {
        console.log(err)
      }
    },
    goToSingle() {
      this.$router.push({path: `/news/lang=${this.$i18n.locale}` + this.eventsID})
    }
  },

  mounted() {

    this.getSingleNews()
    console.log(this.allNews)

  }
}
</script>

<style>

</style>
