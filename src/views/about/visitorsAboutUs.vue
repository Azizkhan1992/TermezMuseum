<template>
  <div class="mainPage">

    <!-- Modal Window -->

    <newComment
      v-if="modalIsOpen"
      @closeModal="closeModal"
    />

    <!-- Modal Window -->

    <pageTitleAnimated
      :titleName="title[$i18n.locale]"
      background="visitors-about-us"
    />

    <VisitModal v-if="isVisitModal" @sendM="withM"/>

    <div class="w-100 mb-60 h-a align-c mobile-us">
      <div class="w-a d-f fd-r gap-48 show">
        <p class="commonP colorGreyD">{{$t("numberReview")}}:</p>
        <p class="commonP bold colorType">{{docLen}}</p>
      </div>

      <div class="w-a d-f fd-r gap-48 ml-120 align-c mobile-sort">
        <p class="commonP colorGreyD">{{$t("sort")}}:</p>
        <button
        @click="changeSortingType('date')"
          class="ghost w-2 h-54p"
          :class="sortedBy == 'date' ? 'active' : ''"
        >
          <span>{{$t("pubDate")}}</span>
        </button>

        <button
        @click="changeSortingType('like')"
          class="ghost w-2 h-54p"
          :class="sortedBy == 'like' ? 'active' : ''"
        >
          <span>{{$t("amountLikes")}}</span>
        </button>
      </div>
    </div>

    <div class="w-100 mb-60 align-c gap-120 send-us">
      <h3 class="commonT colorGreyD">{{$t("wouldShare")}}</h3>

      <button
        @click="addComment"
        class="prim w-3"
      >
        <span>{{$t("comment")}}</span>
      </button>
    </div>


    <div class="w-100 grid-2">
      
      <div
        class="ovr-hidden d-f fd-c pos-rel pad-t-48 pad-b-24 pad-l-48 pad-r-48 box-brb w-100 backgrnd-white bor-r-20 h-358p"
        v-show="comments.length>0"
        v-for="comment, idx in comments"
        :key="idx"
      >
        
        <p class="commonD truncate-5 w-100 h-150p">
          {{comment?.text}}
        </p>

        <div class="w-100 mt-48 gap-12">
          <p class="commonP colorType bold line-h-20">{{comment?.firstName}} {{comment?.lastName}}</p>
          <!-- <p class="commonP colorGreyD line-h-20">from {{comment.country}}</p> -->
        </div>

        <div class="w-100 mt-48 gap-48 mobile-us-items">
          
          <div class="w-a d-f fd-r align-c gap-12 liked"
          @click="reactingToComment({reaction: 'like', id: comment._id, reactionBy: comment.reactionBy})"
          :class="{'pressed' : comment.reactionBy === 'like'}"
          >
            <Icons
              class="cur-ptr"
              icon="like"
              size="middle"
              :color="likeColor(comment.reactionBy)"
            />
            <p class="commonP colorGreyD line-h-20" :class="{'colorPrimB': comment.reactionBy === 'like'}">{{comment?.numberOfLikes}}</p>
          </div>

          <div class="w-a d-f fd-r align-c gap-12 liked"
          @click="reactingToComment({reaction: 'dislike', id: comment._id, reactionBy: comment.reactionBy})"
          :class="{'pressed' : comment.reactionBy === 'dislike'}"
          >
            <Icons
              class="cur-ptr"
              icon="dislike"
              size="middle"
              :color="dislikeColor(comment.reactionBy)"
            />
            <p class="commonP colorGreyD line-h-20" :class="{'colorPrimB' : comment.reactionBy === 'dislike'}">{{comment?.numberOfDislikes}}</p>
          </div>

          <div class="w-a d-f fd-r align-c gap-12">
            <Icons
              icon="calendar"
              size="middle"
            />
            
            <p class="commonP colorGreyD line-h-20">{{filPost(comment?.createdAt) + " " + $t("year2")}}</p>
          </div>

          <div
            @click="goToSingle(comment._id)"
            class="w-a d-f fd-r align-c cur-ptr gap-12 ml-a"
          >
            <p class="commonP colorGreyD line-h-20">{{$t("read")}}</p>
            <Icons
              icon="arrRight"
              size="middle"
            />
          </div>

        </div>

        <img class="quoteImg" src="@/assets/static/quote.png" alt="">
        <img class="quoteImg-sm" src="@/assets/static/quote-sm.png" alt="">
      </div>
    </div>

    <paginate
    v-if="(docLen>8)"
      @goingToPage="goingToPage()"
      :pages="pages"
      @prev="prev"
      @next="next"
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
import Icons from '@/components/icons.vue'
import newComment from '../modalWindows/newComment.vue'
import VisitModal from '@/views/about/visitorsModal.vue'

export default {
  name: 'visitorsAboutUsPage',

  components: {
    pageTitleAnimated, breadCrumbs, Icons, paginate, newComment, VisitModal
  },

  data() {
    return {
      modalIsOpen: false,
      userInfo: null,
      isVisitModal: false,
      pagination: {
        curPage: 1,
        limit: 8
      },
      docLen: '',
      sortedBy: 1,
      title:{
        language_ru:'Посетители о нас',
        language_uzlatin:'Biz haqimizda tashrif buyuruvchilar',
        language_uzCyrillic:'Биз ҳақимизда ташриф буюрувчилар',
        language_en:'Visitors about us',
      },
      // comments: this.$store.state.comments
      comments: [],
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

    if(window.sessionStorage.userInfo){
      this.userInfo = window.sessionStorage.userInfo
      // console.log(this.userInfo)
    }

    if(this.$route.query.sorting == undefined  || this.$route.query.sorting == ''){
      this.sortedBy = 'date'
      this.$router.push({
        query: {
          ...this.$route.query,
          sorting: 'date'
        }
      })
    }else this.sortedBy = this.$route.query.sorting

    if(this.$route.query.page == undefined || this.$route.query.page == ''){
      this.$router.push({
        query: {
          ...this.$route.query,
          page: this.pagination.curPage
        }
      })
    }else this.pagination.curPage = Number(this.$route.query.page)


    this.getAboutUs()
    
  },

  methods: {
    getAboutUs(){
      const params = {
        page: this.$route.query.page,
        limit: this.pagination.limit,
        sorting: this.$route.query.sorting
      }

      this.$store.dispatch('getComments', params)
      .then(()=>{
        // console.log(this.comments)
        this.comments = this.$store.state.comments
        this.docLen = this.$store.state.documentLength
        // console.log(this.docLen)
      })



      // await this.$api.get('/about/comments')
      // .then(resp => {
      //   this.comments = resp.data.result
      //   for(let i=1; i<=this.comments.length; i++){
      //     this.comments[i-1].id = i
      //   }
      //   console.log(this.comments)
      // }),err => {console.log(err)}
    },

    goingToPage(){
      this.getAboutUs()
    },
    prev(){
      this.getAboutUs()
    },
    next(){
      this.getAboutUs()
    },
    goToSingle(id) {
      this.$router.push({ path: '/visitors-about-us/' + id})
    },

    closeModal() {
      this.modalIsOpen = false
    },

    withM(){
      this.isVisitModal = false
    },
    addComment(){
      if(this.userInfo  && this.userInfo !== '' && window.sessionStorage.userInfo !== "''"){
        this.modalIsOpen = true
        // console.log(this.userInfo) 
      }else{
        this.$router.push({path: '/visitModal'})
        // console.log('Ups')
      }
    },
    likeColor(like){
      if(like == 'like'){
        return 'white'
      }else return 'burlywood'
      // console.log(like)
    },

    dislikeColor(dislike){
      // console.log(dislike)
      if(dislike == 'dislike'){
        return 'white'
      }else return 'burlywood'
    },

    changeSortingType(type){
      if(type !== this.sortedBy){
        this.sortedBy = type
        this.$router.push({
          query: {
            ...this.$route.query,
            sorting: type
          }
        })
        .then(()=>{
          this.$router.go()
        })
      }
    },
    async reactingToComment(react){
      // console.log(react)
      if(window.sessionStorage.userInfo !== undefined && window.sessionStorage.userInfo !== "''"){
        if(react.reactionBy === ''){
          await this.$api.put(`about/comments/reaction/${react.id}`, {reactionType: react.reaction})
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
          await this.$api.put(`about/comments/reaction/${react.id}`, {reactionType: react.reaction})
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
          await this.$api.put(`about/comments/reaction/${react.id}`, {reactionType: `un${react.reaction}`})
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
  }
}
</script>

<style lang="scss">

.colorGreyD{
  &.colorPrimB{
    color: #fff !important;
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

@media screen and (max-width: 899px) {
  .mobile-us{
    flex-direction: column;
    row-gap: 24px;
    align-items: flex-start;

    .mobile-sort{
      margin-left: 0;
      flex-wrap: wrap;
      row-gap: 24px;
      gap: 12px;

      p.commonP{
        width: 100%;
      }

      button.ghost{
        width: 161px;

        span{
          font-size: 0.85rem;
        }
      }
    }
  }
  .send-us{
    flex-direction: column;
    gap: 48px;
    align-items: flex-start;

    h3.commonT{
      font-size: 1rem !important;
    }
  }

  .grid-2{
    .h-358p{
      height: 506px;

      .mobile-us-items{
    flex-wrap: wrap;
    gap: 36px;
    justify-content: space-between;

    .ml-a{
      margin-left: calc(50% - 48px);
    }
  }
    }
  }
}
</style>