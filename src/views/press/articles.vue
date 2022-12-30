<template>
  <div class="mainPage">

    <pageTitleAnimated
      :titleName="title[$i18n.locale]"
      background="articles"
    />


    <div class="w-100 gap-48 mt-80">
      <p class="commonP line-h-30 colorGreyD">{{$t("countPublicate")}}:</p>
      <p class="commonP line-h-30 bold colorType">{{ len }}</p>
    </div>

    <div class="w-100 mt-60 gap-24 article-wr">

      <!-- Card Start -->

      <div class="w-100 h-320p bor-r-20 gap-24 ovr-hidden backgrnd-white" v-for="art, idx in articles" :key="idx">
        <div class="w-4 pos-rel art-img">
          <div class="dark-layer-solid z-idx1"></div>
          <img v-if="art?.img?.path" class="back-img" :src="art?.img?.path" alt="">
        </div>

        <div class="w-8c d-f fd-c box-brb pad-l-24p pad-r-48 pad-t-48 pad-b-48 art-title">
          <h4 class="commonT colorGreyD" @click="goToSingle(art._id)">{{ art?.title?.[$i18n.locale] }}</h4>

          <div class="w-100 justify-sb mt-a">
            
            <div class="w-a d-f fd-r gap-48 art-items">
              <div class="w-a d-f fd-r align-c gap-12">
                <Icons
                  icon="calendar"
                  size="middle"
                />
                <p class="helpers">{{ filPost(art?.publishedAt) + " " + $t("year2") }}</p>
              </div>

              <div class="w-a d-f fd-r align-c gap-12">
                <Icons
                  icon="author"
                  size="middle"
                />
                <p class="helpers">{{ art?.author?.[$i18n.locale] }}</p>
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
              @click="goToSingle(art._id)"
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
    v-if="len>9"
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
import paginate from '@/components/paginate.vue';
import breadCrumbs from '@/components/breadCrumbs.vue';
import Icons from '@/components/icons.vue'

export default {
  name: 'articlesPage',

  components: {
    pageTitleAnimated, paginate, breadCrumbs, Icons
  },

  data() {
    return {
      title: {
        language_uzCyrillic: 'Мақолалар',
        language_uzlatin: 'Maqolalar',
        language_ru: 'Статьи',
        language_en: 'Articles',
      },

      articles: [],
      len: '',
      pagination:{
        curPage: 1,
        limit: 9
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
    this.getArticles()
  },

  methods: {
    getArticles(){
      const params = {
        page: this.$route.query.page,
        limit: this.pagination.limit
      }
      this.$store.dispatch('getArticles', params)
      .then(() => {
        this.articles = this.$store.state.articles
        this.len = this.$store.state.articlesLen
        // console.log(this.articles)
      })
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
    prev(){
      this.getArticles()
    },
    next(){
      this.getArticles()
    },
    goingToPage(){
      this.goingToPage()
    },
    goToSingle(id) {
      // console.log(id)
      this.$router.push({ path: `/articles/${id}`})
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
.article-wr{
  flex-direction: column;

  .art-title{

    h4{
      cursor: pointer;
    }
  }
}

@media screen and (max-width: 1099px) and (min-width: 900px) {
  .article-wr{

    .backgrnd-white{
      .art-img{
        width: calc(40% - 12px);
      }
      .art-title{
        width: calc(60% - 12px);
        padding: 24px 24px 24px 12px;


        .art-items{
          flex-direction: column;
          gap: 24px;
        }

        button.prim{
          width: 180px;
          align-self: flex-end;
        }
      }
    }
  }
}

@media screen and (max-width: 899px) {
  .article-wr{
    .backgrnd-white{
      height: 528px;
      flex-direction: column;

      .art-img{
        width: 100%;
        height: calc(60% - 12px);
      }

      .art-title{
        width: 100%;
        height: calc(40% - 12px);
        padding: 8px 12px 12px 12px;

        h4{
          font-size: 1rem;
          line-height: 26px;
        }

        .art-items{
          gap: 8px;
          flex-wrap: wrap;
        }

        button.prim{
          align-self: flex-end;
        }
      }
    }
  }
}
</style>