<template>
  <div class="mainPage">


    <pageTitleAnimated
      :titleName="title"
      background="library"
    />

    <div class="w-100 gap-48">
      <p class="commonP line-h-30 colorGreyD">Количество книг:</p>
      <p class="commonP line-h-30 bold colorType">355</p>
    </div>

    <div class="w-100 grid-2 mt-60">
      
      <!-- Card Start -->

      <div
        class="w-100 gap-24 h-480p backgrnd-white bor-r-20 ovr-hidden"
        v-for="book in allBooks"
        :key="book.id"
      >
        <div class="w-100 pos-rel">
          <div class="books-tag mt-a ml-a">
            <p
              :class="book.tag == 'free' ? 'blue':'' || book.tag == 'popular' ? 'golden':''"
            >
              {{book.tag}}
            </p>
          </div>
          <img class="back-img" :src="require('@/assets/temporary/' + book.img + '.jpg')" alt="">
        </div>
        <div class="w-100 fd-c pad-t-48 pad-b-48 pad-r-24p box-brb">
          <h3 class="commonT h-72p colorType">{{book.title}}</h3>
          <p class="commonP mt-24 h-60p bold colorGreyD">{{book.description}}</p>

          <div class="w-100 mt-12 gap-12">
            <p class="helpers">Год:</p>
            <p class="mainers bold">{{book.year}}</p>
          </div>

          <div class="w-100 mt-24 gap-12">
            <p class="helpers">Автор:</p>
            <p class="mainers bold">{{book.author}}</p>
          </div>

          <div class="w-100 mt-24 gap-12">
            <p class="helpers">Количество страниц:</p>
            <p class="mainers bold">{{book.pagescount}}</p>
          </div>

          <div class="w-100 mt-24 gap-12">
            <p class="helpers">Языки:</p>
            <p class="mainers bold">{{book.langs}}</p>
          </div>

          <button class="prim w-100 mt-a">
            <span>Click me</span>
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
      :currentPage="title"
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
      title: 'Библиотека',
      curPage: 4,
      pages: 122,

      allBooks: this.$store.state.books
    }
  }
}
</script>

<style>

</style>