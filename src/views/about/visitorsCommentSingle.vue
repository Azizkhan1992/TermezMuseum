<template>
  <div class="mainPage">
    
    <div class="w-100 mt-120">
      <div class="table-simple pos-rel pad-48p ovr-hidden box-brb bor-r-20 gap-48">
        <div class="w-100 gap-12">
          <p class="commonP colorType bold line-h-20">{{comment?.firstName}} {{comment?.lastName}}</p>
          <!-- <p class="commonP colorGreyD line-h-20">from {{commentInfo.country}}</p> -->
        </div>

        <div class="w-100 gap-48 mb-32">
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
            <p class="commonP colorGreyD line-h-20" :class="{'colorPrimB': comment.reactionBy === 'like'}">{{comment?.NumberOfLikes}}</p>
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
            <p class="commonP colorGreyD line-h-20"
            :class="{'colorPrimB' : comment.reactionBy === 'dislike'}"
            >{{comment?.NumberOfDislikes}}</p>
          </div>

          <div class="w-a d-f fd-r align-c gap-12">
            <Icons
              icon="calendar"
              size="middle"
            />
            <p class="commonP colorGreyD line-h-20">{{filPost(comment?.createdAt) + " " + $t("year2")}}</p>
          </div>
        </div>



        <p class="commonD" v-html="comment?.text"></p>

        <img class="quoteImg" src="@/assets/static/quote.png" alt="">
        <img class="quoteImg-sm mt-180" src="@/assets/static/quote-sm.png" alt="">
      </div>
    </div>

    <breadCrumbs
      :prevPageName="prevPage"
      :prevPageLink="prevLink"
      :currentPage="'Comment #' + this.id"
    />

  </div>
</template>

<script>
import breadCrumbs from '@/components/breadCrumbs.vue';
import Icons from '@/components/icons.vue';

export default {
  name: 'visitorsCommentSinglePage',

  components: {
    breadCrumbs, Icons
  },

  data() {
    return {
      id: this.$route.params.id,
      prevPage: 'Посетители о нас',
      prevLink: '/visitors-about-us',
      comment: {},
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
    this.getSingleComments()
  },

  // computed: {
  //   commentInfo() {
  //     const allComments =  this.$store.state.comments

  //     return allComments.find(comment => comment.id == this.id)
  //   }
  // }

  methods: {
    async getSingleComments(){
      await this.$api.get(`/about/comments/${this.id}`)
      .then(resp => {
        this.comment = resp.data.result
        // console.log(this.comment)
      }), err => {console.log(err)}
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
    background: #b4a081;
    // color: burlywood;
  }
}

</style>