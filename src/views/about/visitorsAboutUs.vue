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

    <div class="w-100 mb-60 h-a align-c">
      <div class="w-a d-f fd-r gap-48">
        <p class="commonP colorGreyD">{{$t("numberReview")}}:</p>
        <p class="commonP bold colorType">1 694</p>
      </div>

      <div class="w-a d-f fd-r gap-48 ml-120 align-c">
        <p class="commonP colorGreyD">{{$t("sort")}}:</p>
        <button
          class="ghost w-2 h-54p"
          :class="sortedBy == 1 ? 'active' : ''"
        >
          <span>{{$t("pubDate")}}</span>
        </button>

        <button
          class="ghost w-2 h-54p"
          :class="sortedBy == 2 ? 'active' : ''"
        >
          <span>{{$t("amountLikes")}}</span>
        </button>
      </div>
    </div>

    <div class="w-100 mb-60 align-c gap-120">
      <h3 class="commonT colorGreyD">{{$t("wouldShare")}}</h3>

      <button
        @click="modalIsOpen = true"
        class="prim w-3"
      >
        <span>{{$t("comment")}}</span>
      </button>
    </div>


    <div class="w-100 grid-2">
      
      <div
        class="ovr-hidden d-f fd-c pos-rel pad-t-48 pad-b-24 pad-l-48 pad-r-48 box-brb w-100 backgrnd-white bor-r-20 h-358p"
        v-for="comment in comments"
        :key="comment.id"
      >
        
        <p class="commonD truncate-5 w-100 h-150p">
          {{comment.txt}}
        </p>

        <div class="w-100 mt-48 gap-12">
          <p class="commonP colorType bold line-h-20">{{comment.author}}</p>
          <p class="commonP colorGreyD line-h-20">from {{comment.country}}</p>
        </div>

        <div class="w-100 mt-48 gap-48">
          
          <div class="w-a d-f fd-r align-c gap-12">
            <Icons
              class="cur-ptr"
              icon="like"
              size="middle"
            />
            <p class="commonP colorGreyD line-h-20">{{comment.likes}}</p>
          </div>

          <div class="w-a d-f fd-r align-c gap-12">
            <Icons
              class="cur-ptr"
              icon="dislike"
              size="middle"
            />
            <p class="commonP colorGreyD line-h-20">{{comment.dislikes}}</p>
          </div>

          <div class="w-a d-f fd-r align-c gap-12">
            <Icons
              icon="calendar"
              size="middle"
            />
            <p class="commonP colorGreyD line-h-20">{{comment.publishedDate}}</p>
          </div>

          <div
            @click="goToSingle(comment.id)"
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
import Icons from '@/components/icons.vue'
import newComment from '../modalWindows/newComment.vue'

export default {
  name: 'visitorsAboutUsPage',

  components: {
    pageTitleAnimated, breadCrumbs, Icons, paginate, newComment
  },

  data() {
    return {
      modalIsOpen: false,
      curPage: 3,
      pages: 384,
      sortedBy: 1,
      title:{
        ru:'Посетители о нас',
        uz:'Biz haqimizda tashrif buyuruvchilar',
        uzcyr:'Биз ҳақимизда ташриф буюрувчилар',
        en:'Visitors about us',
      },
      comments: this.$store.state.comments
    }
  },

  methods: {
    goToSingle(id) {
      this.$router.push({ path: '/visitors-about-us/' + id})
    },

    closeModal() {
      this.modalIsOpen = false
    }
  }
}
</script>

<style>

</style>