<template>
  <div name="eventsBlock" class="block" v-show="events.length > 0">

    <animatedTitle
      :animateAt="this.offTop"
      :titleName="this.title[$i18n.locale]"
    />

    <div class="w-100 h-420p gap-24">
<!-- First item -->
      <div class="wc-4 ovr-hidden bor-r-20 pos-rel" v-if="events?.[0]">

        <div class="w-100 w--48p mt-a z-idx2 mr-s-24">
          <h3>{{events?.[0]?.title?.[$i18n.locale]}}</h3>
        </div>

        <div class="wr-100 w--48p mt-24 mb-24 z-idx2 mr-s-24 justify-sb">
          <div class="calendar-wr">
            <Icons
                  icon="calendar"
                  size="middle"
                  color="white"
                />
                <p class=" colorWhite">{{filPost(events?.[0]?.createdAt) + " " + $t("year2")}}</p>
          </div>

          <div class="w-a d-f fd-r align-c cur-ptr gap-8 share-wr" @click="shareIt">
                    <Icons
                      icon="share"
                      color="white"
                      size="sm"
                    />
                    <p class="commonP colorGreyD line-h-20">{{$t("share")}}</p>
                  </div>
        </div>

        <div class="dark-layer z-idx1"></div>
        <img class="back-img" :src="events?.[0]?.img?.path" alt="">

      </div>
<!-- First item -->

<!-- Second item -->
      <div class="w-8 df-c ovr-hidden bor-r-20 pos-rel" v-if="events?.[1]">

        <div class="w-100 w--48p mt-a z-idx2 mr-s-24">
          <h3>{{events?.[1]?.title?.[$i18n.locale]}}</h3>
        </div>

        <div class="wr-100 w--48p mt-24 mb-24 z-idx2 mr-s-24 justify-sb">
          <div class="calendar-wr">
            <Icons
                  icon="calendar"
                  size="middle"
                  color="white"
                />
                <p class=" colorWhite">{{filPost(events?.[0]?.eventDate) + " " + $t("year2")}}</p>
          </div>

          <div class="w-a d-f fd-r align-c cur-ptr gap-8 share-wr" @click="shareIt">
                    <Icons
                      icon="share"
                      color="white"
                      size="sm"
                    />
                    <p class="commonP colorGreyD line-h-20">{{$t("share")}}</p>
                  </div>
        </div>

        <div class="dark-layer z-idx1"></div>
        <img class="back-img" :src="events?.[1]?.img?.path" alt="">
      </div>
<!-- Second item -->
    </div>

    <div class="w-100 h-420p gap-24 mt-24">
<!-- Third item -->
      <div class="w-8 df-c ovr-hidden bor-r-20 pos-rel" v-if="events?.[2]">

        <div class="w-100 w--48p mt-a z-idx2 mr-s-24">
          <h3>{{events?.[2]?.title?.[$i18n.locale]}}</h3>
        </div>

        <div class="wr-100 w--48p mt-24 mb-24 z-idx2 mr-s-24 justify-sb">
          <div class="calendar-wr">
            <Icons
                  icon="calendar"
                  size="middle"
                  color="white"
                />
                <p class=" colorWhite">{{filPost(events?.[0]?.eventDate) + " " + $t("year2")}}</p>
          </div>

          <div class="w-a d-f fd-r align-c cur-ptr gap-8 share-wr" @click="shareIt">
                    <Icons
                      icon="share"
                      color="white"
                      size="sm"
                    />
                    <p class="commonP colorGreyD line-h-20">{{$t("share")}}</p>
                  </div>
        </div>

        <div class="dark-layer z-idx1"></div>
        <img class="back-img" :src="events?.[2]?.img?.path" alt="">
      </div>
<!-- Third item -->

<!-- Fourth item -->
      <div class="wc-4 ovr-hidden bor-r-20 pos-rel" v-if="events?.[3]">

        <div class="w-100 w--48p mt-a z-idx2 mr-s-24">
          <h3>{{events?.[3]?.title?.[$i18n.locale]}}</h3>
        </div>

        <div class="wr-100 w--48p mt-24 mb-24 z-idx2 mr-s-24 justify-sb">
          <div class="calendar-wr">
            <Icons
                  icon="calendar"
                  size="middle"
                  color="white"
                />
                <p class=" colorWhite">{{filPost(events?.[0]?.eventDate) + " " + $t("year2")}}</p>
          </div>

          <div class="w-a d-f fd-r align-c cur-ptr gap-8 share-wr" @click="shareIt">
                    <Icons
                      icon="share"
                      color="white"
                      size="sm"
                    />
                    <p class="commonP colorGreyD line-h-20">{{$t("share")}}</p>
                  </div>
        </div>

        <div class="dark-layer z-idx1"></div>
        <img class="back-img" :src="events?.[3]?.img?.path" alt="">

      </div>

<!-- Fourth item -->
    </div>

  </div>
</template>

<script>
import animatedTitle from '../animatedTitle.vue'
import Icons from '../icons.vue'

export default {
  name: 'blockEvents',

  components: {
    animatedTitle, Icons
  },

  data() {
    return {
      offTop: 1,
      title:{
        language_ru:'Мероприятия',
        language_uzlatin:'Voqealar',
        language_en:'Events',
        language_uzCyrillic:'Воқеалар',
      },
      events: [],
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

  methods: {
    getOffsetTop() {
      this.offTop = document.getElementsByName('eventsBlock')[0]?.offsetTop - 400
    },
    async getEvents() {
      await this.$api.get('/press/events/site?type=planned')
      .then(resp => {
        const data = resp.data.result.results

        if(data.length> 4){
          this.events = data.slice(0, 4)
        }else this.events = data
        // console.log(resp.data)
      }), err => {console.log(err)}
    },
    async shareIt() {
      if(navigator.canShare) {
        navigator.share({
          title: 'Title to be shared',
          text: 'Text to be shared',
          url: 'URL to be shared'
        })
      } else {
        try {
          await navigator.clipboard.writeText('mytext');
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
        }else {monId = 11}
        
        let monthT = this.months[monId].monthName?.[this.$i18n.locale];
        
        return day + " " + monthT + " " + year;
      }
    },
  },

  mounted() {
    this.getOffsetTop()
    this.getEvents()
  }
}
</script>

<style lang="scss">
.calendar-wr{
  display: flex;
  align-items: center;
  column-gap: 12px;

  p{
    font-size: 0.8rem;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0.04em;
  }
}
.share-wr{

  .commonP{
    font-size: 0.8rem;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0.04em;
    color: #fff;
  }
}
</style>
