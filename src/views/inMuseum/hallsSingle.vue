<template>
  <div class="mainPage">

    <h1 class="grandTitle w-100 mt-120">{{title}}</h1>

    <div class="w-100 mt-60">
      <img class="w-100 obj-fit-cov" src="@/assets/temporary/building-scheme.png" alt="">
    </div>

    <h3 v-html="description" class="commonD reg mt-60">
    </h3>

    <div class="w-100 mt-80 gap-48">
      <p class="commonP line-h-30 colorGreyD">Количество экпонатов:</p>
      <p class="commonP line-h-30 bold colorType">1 694</p>
    </div>

    <div class="w-100 grid-4 mt-60">
    
      <div
        v-for="xhbt in allExhibits"
        :key="xhbt.id"
        class="w-100 bor-r-20 cur-ptr box-brb ovr-hidden pos-rel h-480p"
      >
        <div class="w-100 fd-c pad-24p">
          <p class="commonP bold line-h-24 mt-a">{{xhbt.title}}</p>
          
          <div class="w-100 gap-12 mt-24">
            <p class="helpers">Год находки:</p>
            <p class="mainers colorWhite">{{xhbt.year}}</p>
          </div>
        </div>

        <div class="dark-layer-card z-idx1"></div>
        <img class="back-img" :src="require('@/assets/temporary/' + xhbt.img + '.jpg')" alt="">
      </div>
   
    </div>



    <paginate
      :currentPageNumber="curPage"
      :pages="pages"
    />

    <breadCrumbs
      :currentPage="title"
      :prevPageName="prevPage.name"
      :prevPageLink="prevPage.link"
    />
    
  </div>
</template>

<script>
import paginate from '@/components/paginate.vue';
import breadCrumbs from '@/components/breadCrumbs.vue';

export default {
  name: 'hallsSinglePage',

  components: {
    paginate, breadCrumbs
  },

  data() {
    return {
      allExhibits: this.$store.state.exhibits,
      prevPage: {
        name: 'Залы',
        link: '/halls'
      },
      title: this.$route.params.id,
      curPage: 3,
      pages: 657,
      description: `
        Зал посвящен к археологическим находкам в Сурханском оазисе каменного века и имеет огромную коллекцию самых разных и дорогих экспонатов в виде статуй, картин и тд.
        <br/><br/>
        Термезский Археологический Музей традиционно находится в авангарде современных тенденций развития музейных технологий. Осуществление высокопрофессиональных научных, реставрационных, выставочных, образовательных, издательских и других музейных проектов возможно благодаря координации деятельности музея и его партнеров. С целью объединения усилий организаций и частных лиц, желающих оказать поддержку музею, в 2007 году, в год столетнего юбилея коллекции, было создано Общество друзей Термезского Археологического Музея.
      `,
    }
  }
}
</script>

<style>

</style>