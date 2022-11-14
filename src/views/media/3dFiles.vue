<template>
  <div class="mainPage">

    <pageTitleAnimated
      :titleName="title[$i18n.locale]"
      background="3d-files"
    />


    <div class="w-100 gap-48">
      <p class="commonP line-h-30 colorGreyD">{{$t("countFiles")}}:</p>
      <p class="commonP line-h-30 bold colorType">1 694</p>
    </div>



    <div class="grid-4 w-100 mt-60 mobile-grid">
      <div
        @click="goToSingle"
        v-for="xhbt in allExhibits"
        :key="xhbt.id"
        class="threeDFileContainer w-100 bor-r-20 cur-ptr box-brb ovr-hidden pos-rel h-480p"
      >

        <div class="w-100 fd-c pad-24p">
          
          <div class="playButton z-idx2">
            <Icons
              icon="play"
              size="large"
            />
          </div>

          <p class="commonP bold line-h-24 mt-a">{{xhbt.title}}</p>
          
          <div class="w-100 gap-12 mt-24">
            <p class="helpers">{{$t("discoverIn")}}:</p>
            <p class="mainers colorWhite">{{xhbt.year}}</p>
          </div>
        </div>

        <div class="dark-layer-file z-idx1"></div>
        <img class="back-img" :src="require('@/assets/temporary/' + xhbt.img + '.jpg')" alt="">
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
import pageTitleAnimated from '@/components/pageTitleAnimated.vue';
import paginate from '@/components/paginate.vue';
import breadCrumbs from '@/components/breadCrumbs.vue';
import Icons from '@/components/icons.vue'

export default {
  name: 'threeDFilesPage',

  components: {
    pageTitleAnimated, breadCrumbs, paginate, Icons
  },

  data() {
    return {
      allExhibits: this.$store.state.exhibits,
      title: {
        language_uzlatin: '3D fayllar',
        language_uzCyrillic: '3D файллар',
        language_ru: '3D файлы',
        language_en: '3D files',
      },
      curPage: 5,
      pages: 522,

      threeDFilesID: 'Бюст неандертальца',
    }
  },

  methods: {
    goToSingle() {
      this.$router.push({ path: '/3d-files/' + this.threeDFilesID})
    }
  }
}
</script>

<style>

</style>