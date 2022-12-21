<template>
  <div class="mainPage">


    <pageTitleAnimated
        :titleName="title?.[$i18n.locale]"
        background="library"
    />

    <div class="w-100 gap-48">
      <p class="commonP line-h-30 colorGreyD">{{$t("countBook")}}:</p>
      <p class="commonP line-h-30 bold colorType">355</p>
    </div>

    <div class="w-100 grid-2 mt-60">

      <!-- Card Start -->

      <div
          class="w-100 gap-24 h-480p backgrnd-white bor-r-20 ovr-hidden lib-card"
          v-for="book in allBooks"
          :key="book.id"
      >
        <div class="w-100 pos-rel">
          <div class="books-tag mt-a ml-a">
            <p
                :class="book.free = true ? 'Free':'paid for' "
            >
              {{book.free}}
            </p>
          </div>
          <img class="back-img" :src="book.img.path" alt="">
        </div>
        <div class="w-100 fd-c pad-t-48 pad-b-48 pad-r-24p box-brb">
          <h3 class="commonT h-72p colorType">{{book.title?.[$i18n.locale]}}</h3>
          <p class="commonP mt-24 h-60p bold colorGreyD">{{book.text?.[$i18n.locale]}}</p>

          <div class="w-100 mt-12 gap-12">
            <p class="helpers">{{$t("year")}}:</p>
            <p class="mainers bold">{{book.createdAt}}</p>
          </div>

          <div class="w-100 mt-24 gap-12">
            <p class="helpers">{{$t("author")}}:</p>
            <p class="mainers bold">{{book.lastNameOfAuthor?.[$i18n.locale]}}</p>
          </div>

          <div class="w-100 mt-24 gap-12">
            <p class="helpers">{{$t("countPage")}}:</p>
            <p class="mainers bold">{{book.numberOfPages}}</p>
          </div>

          <div class="w-100 mt-24 gap-12">
            <p class="helpers">{{$t("langs")}}:</p>
            <p
                v-for="(languegess,is) in book.writtenLanguages"
                :key="is" class="mainers bold">{{languegess.name?.[$i18n.locale]}}</p>
          </div>
          <button class="prim w-100 mt-a">
             <span>{{ book?.fileObject?.link ? $t("goLink") : $t("buy2")}}</span>
          </button>
        </div>
      </div>

      <!-- Card Stop -->

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

export default {
  name: 'libraryPage',

  components: {
    pageTitleAnimated, breadCrumbs, paginate
  },

  data() {
    return {
      title:{
        language_uzlatin: 'Kutubxona',
        language_uzCyrillic: 'Кутубхона',
        language_ru: 'Библиотека',
        language_en: 'Library',
      },
      curPage: 4,
      pages: 122,

      allBooks: this.$store.state.books
    }
  },
  methods: {
    async getSingleExhibits(){
      await this.$api.get('/collections/books/site')
          .then(resp => {
            this.allBooks = resp.data.result.results
            for(let i=1; i<=this.allBooks.length; i++){
              this.allBooks[i-1].id = i
            }
            // console.log(this.allBooks)
          }), err => {console.log(err)}
    },
    optionChanged(opt) {
      console.log(opt);
    },

    goToSingle() {
      this.$router.push({ path: '/statues/' + this.statuesID})
    }
  },
  mounted() {
    this.getSingleExhibits()
  }

}
</script>

<style>

</style>