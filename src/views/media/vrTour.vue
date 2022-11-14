<template>
  <div class="mainPage">


    <pageTitleAnimated
      :titleName="title[$i18n.locale]"
      background="vr-tour"
    />


    <div class="w-100 gap-48">
      <p class="commonP line-h-30 colorGreyD">{{$t("countFiles")}}:</p>
      <p class="commonP line-h-30 bold colorType">1 694</p>
    </div>

    <div class="grid-2 w-100 r-gap-60 mt-60">
      <div
        v-for="vr in vrTours"
        :key="vr.id"
        class="w-100 fd-c gap-24 align-c cur-ptr"
      >
        <div class="w-100 pos-rel h-380p bor-r-20 ovr-hidden">
          <img class="vrIcon" src="@/assets/static/vrIcon.png" alt="">
          <div class="dark-layer-light z-idx1"></div>
          <img class="back-img" src="@/assets/temporary/3.png" alt="">
        </div>
        <h4 class="commonT colorType txt-align-c">Title</h4>
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
import breadCrumbs from '@/components/breadCrumbs.vue';
import paginate from '@/components/paginate.vue';

export default {
  name: 'vrTourPage',

  components: {
    pageTitleAnimated, paginate, breadCrumbs
  },

  data() {
    return {
      title: {
        language_uzlatin: '3D muzey sayohati',
        language_uzCyrillic: '3D музей саёҳати',
        language_ru: '3D Тур по музею',
        language_en: '3D Museum Tour',
      },
      curPage: 9,
      pages: 922,

      vrTours: [
        {
          id: 1
        },
        {
          id: 2
        },
        {
          id: 3
        },
        {
          id: 4
        },
        {
          id: 5
        },
        {
          id: 6
        },
        {
          id: 7
        },
        {
          id: 8
        },
        {
          id: 9
        },
        {
          id: 10
        },
        {
          id: 11
        },
        {
          id: 12
        },
      ]
    }
  },
}
</script>

<style>

</style>