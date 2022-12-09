<template>
  <div class="paginate d-f fd-r">
    
    <div class="w-a d-f fd-r gap-24">
      <button
        @click="prev()"
        class="primPaginator w-2 h-48p gap-12"
        :disabled="currentPageNumber === 1 ? true : false"
      >
        <Icons
          icon="arrLeft"
          size="middle"
        />
        <span>{{$t("prev")}}</span>
      </button>

      <button
      @click="next()"
        class="primPaginator w-2 h-48p gap-12"
        :disabled="currentPageNumber === pages ? true : false"
      >
        <span>{{$t("next")}}</span>
        <Icons
          icon="arrRight"
          size="middle"
        />
      </button>
    </div>

    <div class="w-a d-f fd-r ml-a gap-72">
      <div class="w-a d-f fd-r ml-a align-c gap-24">
        <p class="commonP colorGreyD">{{$t("page")}}</p>
        <input
          v-model="goToPage"
          type="number"
          class="pageInput w-1"
          min="1"
          :max="this.pages"
        >
        <p class="commonP colorGreyD">{{$t("from")}} {{pages}}</p>
      </div>

      <div class="w-a">
        <button @click="goingToPage" class="primPaginator primPagGo w-2 h-48p gap-12">
        <span>{{$t("go")}}</span>
        <Icons
          icon="arrRight"
          size="middle"
        />
      </button>
      </div>
    </div>

  </div>
</template>

<script>
import Icons from './icons.vue'

export default {
  name: 'paginateComponent',

  components: {
    Icons
  },

  data() {
    return {
      goToPage: 1,
      currentPageNumber: 1
    }
  },

  props: {
    pages: {
      type: Number,
      required: true
    },
  },

  methods: {
    goToPageChanger() {
      this.goToPage = this.currentPageNumber
    },

    goingToPage(){
      if(this.goToPage > this.pages){
        this.goToPage = this.pages
        this.$emit('goingToPage')
        this.$router.push({
          query: {
            ...this.$route.query,
            page: this.pages
          }
        })
      }else{
        this.$emit('goingToPage')
        console.log(this.goToPage)
        this.$router.push({
          query: {
            ...this.$route.query,
            page: this.goToPage
          }
        })
      }
    },

    prev(){
      this.$emit('prev')
      this.$router.push({
        query: {
          ...this.$route.query,
          page: this.currentPageNumber - 1
        }
      })
      this.$router.go()
    },
    next(){
      this.$emit('next')
      this.$router.push({
        query: {
          ...this.$route.query,
          page: this.currentPageNumber + 1
        }
      })
      this.$router.go()
    }

  },

  mounted() {
    this.goToPageChanger()

    if(this.$route.query.page === undefined){
      this.currentPageNumber = 1
      this.goToPage = 1
    }else{
      this.currentPageNumber = Number(this.$route.query.page)
      this.goToPage = Number(this.$route.query.page)
    }
  },

  watch: {
    '$route'(){
      this.$router.go()
    }
  }
}
</script>

<style>

</style>