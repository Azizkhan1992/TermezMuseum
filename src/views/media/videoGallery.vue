<template>
  <div class="mainPage">

    <pageTitleAnimated
      :titleName="title[$i18n.locale]"
      background="video-gallery"
    />

    <videoPlayer
      v-if="playerOn === true"
      :videoID="videoID"
      @closeMe="closeVideoPlayer"
    />


    <!-- Input Bar Start -->

    <div class="w-100 z-idx100 fd-r gap-24 backgrnd-white bor-r-20 pad-24p box-brb mobile-flex">
      
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

    <div class="w-100 gap-48 mt-80">
      <p class="commonP line-h-30 colorGreyD">{{$t("countVideoFiles")}}:</p>
      <p class="commonP line-h-30 bold colorType">{{ len }}</p>
    </div>


    <div class="w-100 mt-60 gap-24 videos-wr">

      <!-- Card Start -->

      <div class="w-100 h-320p bor-r-20 gap-24 ovr-hidden backgrnd-white cw-t" v-for="video, idy in videos" :key="idy">
        <div class="w-4 pos-rel video-img-wr">
          <div class="dark-layer-solid z-idx1"></div>
          <img class="back-img" :src="video?.img?.path" alt="">
        </div>

        <div class="w-8c d-f fd-c box-brb pad-l-24p pad-r-48 pad-t-48 pad-b-48 video-title-wr">
          <h4 class="commonT colorGreyD">{{ video?.title?.[$i18n.locale] }}</h4>

          <div class="w-100 justify-sb mt-a title-items">
            
            <div class="w-a d-f fd-c gap-24 like-wr">
              <div class="w-a d-f fd-r gap-48">
                <div class="w-a d-f fd-r align-c gap-12 liked"
                @click="reactingToComment({reaction: 'like', id: video._id, reactionBy: video.reactionBy})"
                :class="{'pressed' : video.reactionBy === 'like'}"
                >
                  <Icons
                    class="cur-ptr"
                    icon="like"
                    size="middle"
                    :color="likeColor(video.reactionBy)"
                  />
                  <p class="helpers likeItem" :class="video.reactionBy === 'like' ? 'colorPrimB' : 'colorB'">{{ video?.numberOfLikes }}</p>
                </div>

                <div class="w-a d-f fd-r align-c gap-12 liked"
                @click="reactingToComment({reaction: 'dislike', id: video._id, reactionBy: video.reactionBy})"
              :class="{'pressed' : video.reactionBy === 'dislike'}"
                >
                  <Icons
                    class="cur-ptr"
                    icon="dislike"
                    size="middle"
                    :color="dislikeColor(video.reactionBy)"
                  />
                  <p class="helpers likeItem" :class="video.reactionBy === 'dislike' ? 'colorPrimB' : 'colorB'">{{ video?.numberOfDislikes }}</p>
                </div>
              </div>

              <div class="w-a d-f fd-r gap-48">
                <div class="w-a d-f fd-r align-c gap-12 descripts">
                  <Icons
                    icon="calendar"
                    size="middle"
                  />
                  <p class="helpers">{{ filPost(video?.createdAt) + " " + $t("year2") }}</p>
                </div>

                <div class="w-a d-f fd-r align-c gap-12 descripts">
                  <Icons
                    icon="driver"
                    size="middle"
                  />
                  <p class="helpers">{{ video?.source }}</p>
                </div>

                <div class="w-a d-f fd-r align-c gap-12 cur-ptr descripts share-wr"
                @click="shareIt(video)"
                >
                  <Icons
                    icon="share"
                    size="middle"
                  />
                  <p class="helpers">{{$t("share")}}</p>
                </div>
              </div>
            </div>

            <button
            @click="openVideo(video.link)"
              class="iconedButton prim w-3 gap-12 mt-a"
            >
              <Icons
                color="blue"
                icon="play"
                size="middle"
              />
              <span>{{$t("look")}}</span>
            </button>
            
          </div>
        </div>
      </div>

      <!-- Card Stop -->

    </div>


    <paginate
    v-if="(len > 5)"
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
import videoPlayer from '@/views/modalWindows/videoPlayerModal.vue'

export default {
  name: 'videoGalleryPage',

  components: {
    pageTitleAnimated, iconedInput, Icons, paginate, breadCrumbs, dropDown, videoPlayer
  },

  data() {
    return {
      title: {
        language_uzlatin: 'Video galereya',
        language_uzCyrillic: 'Видео галерея',
        language_ru: 'Видео галерея',
        language_en: 'Video gallery',
      },
      search: '',
      pagination: {
        curPage: 1,
        limit: 5
      },

      videos: [],
      len: '',

      year: {
        type: 'year',
        options: [
          {value: 'all', label: this.$t('all')}
        ]
      },
      searchCategories: {
        type: 'search',
        options: [
          {value: 'title', label: this.$t('options.title')},
          {value: 'source', label: this.$t('options.source')}
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
      videoID: '',
      playerOn: false,

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

    this.getAllVideos()
  },

  methods: {
    getAllVideos(){
      const params = {
        year: this.$route.query.year,
        month: this.$route.query.month,
        searchCategory: this.$route.query.searchCategory,
        searchWord: this.$route.query.search,
        page: this.$route.query.page,
        limit: this.pagination.limit
      }
      this.$store.dispatch('getVideos', params)
      .then(() => {
        this.videos = this.$store.state.videoGallery
        this.len = this.$store.state.videosLen

        let years = this.$store.state.videosYear

        years.options.unshift({value: 'all', label: this.$t('all')})
        
        this.year = years

        // console.log(this.videos)
      }).finally(() => {
        if(this.$route.query.year == undefined || this.$route.query.year == '') {
          this.$router.push({
            query: {
              ...this.$route.query,
              year: this.chosenYear.value
            }
          })
          this.chosenYear = this.year.options.find(year => year.value == this.$route.query.year)
        } else this.chosenYear = this.year.options.find(year => year.value == this.$route.query.year)
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
      this.getAllVideos()
    },
    changeMonth(option) {
      this.chosenMonth = option
      this.$router.push({
        query: {
          ...this.$route.query,
          month: this.chosenMonth.value
        }
      })
      this.getAllVideos()
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
      this.getAllVideos()
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
          this.getAllVideos()
        })
      }
    },

    async reactingToComment(react){
      // console.log(react)
      if(window.sessionStorage.userInfo !== undefined && window.sessionStorage.userInfo !== "''"){
        if(react.reactionBy === ''){
          await this.$api.put(`media/video/reaction/${react.id}`, {reactionType: react.reaction})
          .then(resp => {
            if(resp.status !== 401){
              // console.log(resp)
              this.$router.go()
            }
            else{
              this.$router.push({path: '/visitModal'})
            }
          })
        }else if(react.reactionBy !== '' && react.reaction !== react.reactionBy){
          await this.$api.put(`media/video/reaction/${react.id}`, {reactionType: react.reaction})
          .then(resp => {
            if(resp.status !== 401){
              // console.log(resp)
              this.$router.go()
            }
            else{
              this.$router.push({path: '/visitModal'})
            }
          })
        }else if(react.reactionBy !== '' && react.reaction === react.reactionBy){
          await this.$api.put(`media/video/reaction/${react.id}`, {reactionType: `un${react.reaction}`})
          .then(resp => {
            if(resp.status !== 401){
              // console.log(resp)
              this.$router.go()
            }
            else{
              this.$router.push({path: '/visitModal'})
            }
          })
        }
        // console.log(react)
      }else{
        this.$router.push({
          path: '/visitModal'
        })
      }
    },

    likeColor(like){
      // console.log(like)
      if(like == 'like'){
        return 'white'
      }else return 'burlywood'
    },

    dislikeColor(dislike){
      // console.log(dislike)
      if(dislike == 'dislike'){
        return 'white'
      }else return 'burlywood'
    },
    async shareIt(event) {
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
    openVideo(link) {
      
      const format = /[?]+/
      
      if(format.test(link)) {
        this.videoID = link.split('/')[3].split('?')[1].split('=')[1].split('&')[0]
        this.playerOn = true
      }
      else
      this.videoID = link.split('/')[3]
      this.playerOn = true
      console.log(this.videoID)
    },
    closeVideoPlayer() {
      this.playerOn = false
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
    optionChanged(opt) {
      console.log(opt);
    },
    prev(){
      this.getAllVideos()
    },
    next(){
      this.getAllVideos()
    },
    goingToPage(){
      this.getAllVideos()
    },
    goToSingle() {
      // console.log("Single");
      // this.$router.push({ path: '/articles/' + this.articlesID})
    }
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
.videos-wr{
  flex-direction: column;
}

@media screen and (max-width: 1099px) and (min-width: 900px) {
  .videos-wr{
    .cw-t{

      .video-img-wr{
        width: calc(50% - 12px) !important;
      }

      .video-title-wr{
        width: calc(50% - 12px) !important;
        padding: 12px !important;

        .title-items{

          .iconedButton{
            width: 48px;

            span{
              display: none;
            }
          }
          .like-wr{
            width: 80%;

            .share-wr{

              p.helpers{
                display: none;
              }
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 899px) {
  .videos-wr{

    .cw-t{

      .video-img-wr{
        height: calc(45% - 12px) !important;
      }
      .video-title-wr{
        height: calc(55% - 12px) !important;
        padding: 12px;
        gap: 12px;

        .title-items{

          .iconedButton{
            width: 48px;
            // height: 24px;

            span{
              display: none;
            }
          }

          .like-wr{

            .descripts{
              
              .icon{
                width: 18px;
                height: 18px;
              }
            }

            .liked{

              .icon{
                width: 18px;
                height: 18px;
              }

              .burlywood{
                width: 16px;
                height: 16px;
              }
            }
          }
        }

        h4.commonT{
          font-size: 1rem !important;
          line-height: 30px;
        }
      }
    }
  }
}

.img-wr{
  height: fit-content;
  img{
    width: 100%;
    object-fit: contain;
  }
}

.likeItem{
  &.colorPrimB{
    color: #fff !important;

    &.colorB{
      color: #a4abbd !important;
    }
  }
}

.liked{
  padding: 4px 8px;
  border-radius: 12px;
  box-sizing: border-box;
  cursor: pointer;
  &.pressed{
    background: #4582D3;
    // color: burlywood;
  }
}
.desc-like-wr{
    display: flex;
  }

  .mob-like-wr{
    display: none;
  }
</style>