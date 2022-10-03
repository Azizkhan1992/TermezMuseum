<template>
  <div class="mainPage">


    <pageTitleAnimated
      :titleName="title[$i18n.locale]"
      background="photogallery"
    />



    <div class="w-100 gap-48">
      <p class="commonP line-h-30 colorGreyD">{{$t("countPicture")}}:</p>
      <p class="commonP line-h-30 bold colorType">1 694</p>
    </div>


    <div class="gridGallery mt-60">
      <div class="photoDiv pos-rel bor-r-20 ovr-hidden">
        <div class="dark-layer-solid"></div>
        <img class="back-img" src="@/assets/temporary/1.png" alt="">
      </div>

      <div class="photoDiv pos-rel bor-r-20 ovr-hidden">
        <div class="dark-layer-solid"></div>
        <img class="back-img" src="@/assets/temporary/1.png" alt="">
      </div>

      <div class="photoDiv pos-rel bor-r-20 ovr-hidden">
        <div class="dark-layer-solid"></div>
        <img class="back-img" src="@/assets/temporary/1.png" alt="">
      </div>

      <div class="photoDiv pos-rel bor-r-20 ovr-hidden">
        <div class="dark-layer-solid"></div>
        <img class="back-img" src="@/assets/temporary/1.png" alt="">
      </div>

      <div class="photoDiv pos-rel bor-r-20 ovr-hidden">
        <div class="dark-layer-solid"></div>
        <img class="back-img" src="@/assets/temporary/1.png" alt="">
      </div>

      <div class="photoDiv pos-rel bor-r-20 ovr-hidden">
        <div class="dark-layer-solid"></div>
        <img class="back-img" src="@/assets/temporary/1.png" alt="">
      </div>

      <div class="photoDiv pos-rel bor-r-20 ovr-hidden">
        <div class="dark-layer-solid"></div>
        <img class="back-img" src="@/assets/temporary/1.png" alt="">
      </div>

      <div class="photoDiv pos-rel bor-r-20 ovr-hidden">
        <div class="dark-layer-solid"></div>
        <img class="back-img" src="@/assets/temporary/1.png" alt="">
      </div>

      <div class="photoDiv pos-rel bor-r-20 ovr-hidden">
        <div class="dark-layer-solid"></div>
        <img class="back-img" src="@/assets/temporary/1.png" alt="">
      </div>

      <div class="photoDiv pos-rel bor-r-20 ovr-hidden">
        <div class="dark-layer-solid"></div>
        <img class="back-img" src="@/assets/temporary/1.png" alt="">
      </div>

      <div class="photoDiv pos-rel bor-r-20 ovr-hidden">
        <div class="dark-layer-solid"></div>
        <img class="back-img" src="@/assets/temporary/1.png" alt="">
      </div>

      <div class="photoDiv pos-rel bor-r-20 ovr-hidden">
        <div class="dark-layer-solid"></div>
        <img class="back-img" src="@/assets/temporary/1.png" alt="">
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

export default {
  name: 'photoGalleryPage',

  components: {
    pageTitleAnimated, paginate, breadCrumbs
  },

  data() {
    return {
      title:{
        uz: 'Fotogalereya',
        uzcyr: 'Фотогалерея',
        ru: 'Фотогалерея',
        en: 'Photo gallery',
      },

      curPage: 4,
      pages: 156
    }
  }
}
</script>

<style>

</style>