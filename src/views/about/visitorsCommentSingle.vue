<template>
  <div class="mainPage">
    
    <div class="w-100 mt-120">
      <div class="table-simple pos-rel pad-48p ovr-hidden box-brb bor-r-20 gap-48">
        <div class="w-100 gap-12">
          <p class="commonP colorType bold line-h-20">{{commentInfo.author}}</p>
          <p class="commonP colorGreyD line-h-20">from {{commentInfo.country}}</p>
        </div>

        <div class="w-100 gap-48 mb-32">
          <div class="w-a d-f fd-r align-c gap-12">
            <Icons
              class="cur-ptr"
              icon="like"
              size="middle"
            />
            <p class="commonP colorGreyD line-h-20">{{commentInfo.likes}}</p>
          </div>

          <div class="w-a d-f fd-r align-c gap-12">
            <Icons
              class="cur-ptr"
              icon="dislike"
              size="middle"
            />
            <p class="commonP colorGreyD line-h-20">{{commentInfo.dislikes}}</p>
          </div>

          <div class="w-a d-f fd-r align-c gap-12">
            <Icons
              icon="calendar"
              size="middle"
            />
            <p class="commonP colorGreyD line-h-20">{{commentInfo.publishedDate}}</p>
          </div>
        </div>



        <p class="commonD" v-html="commentInfo.txt"></p>

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
      prevLink: '/visitors-about-us'
    }
  },

  computed: {
    commentInfo() {
      const allComments =  this.$store.state.comments

      return allComments.find(comment => comment.id == this.id)
    }
  }
}
</script>

<style>

</style>