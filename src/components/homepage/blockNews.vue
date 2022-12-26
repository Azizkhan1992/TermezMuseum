<template>
  <div name="newsBlock" class="block" v-show="news.length > 0"
  >
    <animatedTitle
      :animateAt="this.offTop"
      :titleName="this.title[$i18n.locale]"
    />

    <div class="wrapper-h mb-60">
      <button class="prim w-3 a-left" @click="goAllNews">
        <span>{{ $t("allNews") }}</span>
      </button>

      <topTags :topTags="topTags" />
    </div>

    <div class="news-wrapper">
      <div class="news-items" v-for="item, idx in news" :key="idx" @click="go(item)">
        <div class="img-wr">
          <img :src="item?.mainImage?.common?.path" alt="">
        </div>

        <div class="news-title">
          <h1>{{ item?.title?.[$i18n.locale] }}</h1>

          <p class="news-desc" v-html="item?.text?.[$i18n.locale]"></p>

          <span v-for="tag, idy in item?.tags" :key="idy" class="tags">
          {{ tag?.text?.[$i18n.locale] }}
          </span>

          <div class="wr-100 w--48p mt-24 mb-24 z-idx2 mr-s-24 justify-sb">
          <div class="calendar-wr">
            <Icons
                  icon="calendar"
                  size="middle"
                  color="a4abbd"
                />
                <p class="colorWhite creat">{{filPost(item?.createdAt) + " " + $t("year2")}}</p>
          </div>

          <div class="w-a d-f fd-r align-c gap-12">
                <Icons
                  icon="eye"
                  size="middle"
                />
                <p class="helpers">{{$t("viewed")}} {{ item?.numberOfViews }}</p>
                <p class="views"> {{ item?.numberOfViews }}</p>
              </div>

          <div class="w-a d-f fd-r align-c cur-ptr gap-8 share-wr" @click.stop="shareIt(item)">
                    <Icons
                      icon="share"
                      color="a4abbd"
                      size="sm"
                    />
                    <p class="commonP colorGreyD line-h-20">{{$t("share")}}</p>
                  </div>
        </div>
        </div>
      </div>
    </div>

    <!-- <newsCard :bigCard="true" />

    <div class="row-3 mb-24">
      <newsCard />
      <newsCard />
      <newsCard />
    </div> -->

    <subscriberComponent />
  </div>
</template>

<script>
import animatedTitle from "../animatedTitle.vue";
import topTags from "../topTags.vue";
// import newsCard from "../newsCard.vue";
import subscriberComponent from "../subscriber.vue";
import Icons from "../icons.vue";

export default {
  name: "newsBlock",
  components: {
    animatedTitle,
    topTags,
    subscriberComponent,
    Icons
  },

  data() {
    return {
      offTop: 1,
      eventsID: 'Музей - центр культуры и просвещения',
      title: {
        language_uzlatin: "Yangiliklar",
        language_ru: "Новости",
        language_uzCyrillic: "Янгиликлар",
        language_en: "News",
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
      topTags: [],
      news: [],
    };
  },

  methods: {
    getOffsetTop() {
      this.offTop = document.getElementsByName("newsBlock")[0]?.offsetTop - 400;
    },
    async getNews() {
      await this.$api.get('/press/news/site')
      .then(resp => {
        let len = resp.data.result.results.length
        this.topTags = resp.data.topTags

        if(len>4){
          this.news = resp.data.result.results.slice(0, 4)
        }else{
          this.news = resp.data.result.results
        }
        // console.log(resp.data.topTags)
      }), err => {console.log(err)}
      // const data = await this.$api('/press/news/site');
      // console.log(data)
      // this.news = data.data.result.results
    },
    goAllNews(){
      this.$router.push({path: '/news'})
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
        }else {monId = 11}
        
        let monthT = this.months[monId].monthName?.[this.$i18n.locale];
        
        return day + " " + monthT + " " + year;
      }
    },

    async shareIt(news) {
      if(navigator.canShare) {
        navigator.share({
          title: news.title?.[this.$i18n.locale],
          text: news.text?.[this.$i18n.locale],
          url: `${window.location.pathname}news/${news._id}`
        })
      } else {
        try {
          await navigator.clipboard.writeText(`${window.location.pathname}news/${news._id}`);
          alert('Copied');
        } catch($e) {
          alert('Cannot copy');
        }
      }
    },

    go(val){
      // console.log(val) 
      this.$router.push({ path: '/news/'  + val._id})
    }
  },

  mounted() {
    this.getOffsetTop();
    this.getNews()
  },
};
</script>

<style lang="scss">
.news-wrapper{
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 24px;

  .news-items{
    width: 31%;
    height: 420px;
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 20px;
    row-gap: 24px;
    align-items: center;

    .news-title{
      display: flex;
      width: 95%;
      height: calc(50% - 12px);
      flex-direction: column;
      justify-content: space-between;

      p.helpers{
          display: block;
        }

        p.views{
          display: none;
        }

      .mr-s-24{
        margin-right: 0;
        margin-left: 0;
        width: 95% !important;
      }

      h1{
        font-size: 1.5rem;
        font-weight: 700;
        line-height: 36px;
        color: #2F3232;
      }

      p.news-desc{
        display: none;
      }

      span.tags{
        display: flex;
        width: fit-content;
        height: 26px;
        background: #DDE0E7;
        border-radius: 13px;
        align-items: center;
        padding: 0 10px;
        box-sizing: border-box;
        font-size: 1rem;
        line-height: 26px;
        font-weight: 400;
        color: #2F3232;
        letter-spacing: 0.04em;
      }

      .calendar-wr{

p.creat{
  color: #A4ABBD !important;
}
}

      
    }

    .img-wr{
      width: 100%;
      height: calc(50% - 12px);

      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 20px 20px 0 0;
      }
    }

    &:first-child{
      width: 100%;
      flex-direction: row;
      column-gap: 24px;
      align-items: flex-start;

      .news-title{
        width: calc(50% - 12px);
        height: 100%;
        padding: 16px;
        box-sizing: border-box;

        p.news-desc{
        font-size: 1rem;
        font-weight: 400;
        line-height: 25px;
        width: 95%;
        height: 75px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
        color: #A4ABBD;
      }

      
      }


      .img-wr{
        width: calc(50% - 12px);
        height: 100%;

        img{
          border-radius: 20px 0 0 20px;
          object-fit: contain;
        }
      }

    }
  }
}

@media screen and (max-width: 899px) {
  .news-wrapper{
    flex-direction: column;


    .news-items{
      height: 584px;
      width: 100%;

      .news-title{

        .share-wr{

          p.commonP{
            display: none;
          }
        }

        p.helpers{
          display: none;
        }

        p.views{
          display: block;
        }

        p.news-desc{
          font-size: 1rem;
        font-weight: 400;
        line-height: 25px;
        width: 95%;
        height: 55px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        color: #A4ABBD;
        }
      }

      &:first-child{
        flex-direction: column;
        align-items: center;

        p.news-desc{
        height: 55px !important;
        -webkit-line-clamp: 2 !important;
        overflow: hidden;
        color: #A4ABBD;
        }

        .img-wr{
          width: 100%;
          height: calc(50% - 12px);
        }
        .news-title{
          width: 95%;
          height: calc(50% - 12px);
          padding: 8px !important;
        }
      }
    }
  }
}

@media screen and (max-width: 1099px) and (min-width: 900px) {
  .news-wrapper{
    
    .news-items{
      width: calc(50% - 12px);


      &:last-child{
        display: none;
      }
    }
  }
}
</style>
