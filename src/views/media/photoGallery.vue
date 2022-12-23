<template>
  <div class="mainPage">


    <pageTitleAnimated
      :titleName="title[$i18n.locale]"
      background="photogallery"
    />



    <div class="w-100 gap-48">
      <p class="commonP line-h-30 colorGreyD">{{$t("countPicture")}}:</p>
      <p class="commonP line-h-30 bold colorType">{{ len }}</p>
    </div>


    <div class="gridGalleryP mt-60">
      <div class="photos pos-rel bor-r-20 ovr-hidden" v-for="photo, idx in photos" :key="idx" @click.stop="selected(photo)">
        <div class="dark-layer-solid"></div>
        <img class="back-img" :src="photo?.path" alt="">
      </div>

      
    </div>

    <paginate
    v-if="(len>12)"
      @next="next"
      @prev="prev"
      @goingToPage="goingToPage()"
      :currentPageNumber="pagination.curPage"
      :pages="pages"
    />

    <breadCrumbs
      :currentPage="title[$i18n.locale]"
    />

    <blockGalleryModal
        v-if="isModal"
        :images="photos"
        :activeImgId="activeImgId"
        @modalDeactive="modalDeactive"
        />

  </div>
</template>

<script>
import pageTitleAnimated from '@/components/pageTitleAnimated.vue';
import paginate from '@/components/paginate.vue';
import breadCrumbs from '@/components/breadCrumbs.vue';
import blockGalleryModal from "@/components/blockGalleryModal.vue";

export default {
  name: 'photoGalleryPage',

  components: {
    pageTitleAnimated, paginate, breadCrumbs, blockGalleryModal
  },

  data() {
    return {
      title:{
        language_uzlatin: 'Fotogalereya',
        language_uzCyrillic: 'Фотогалерея',
        language_ru: 'Фотогалерея',
        language_en: 'Photo gallery',
      },
      photos: [],
      isModal: false,
      len: '',
      pagination:{
        curPage: 1,
        limit: 12
      },
      activeImgId: null
    }
  },
  mounted(){
    if(this.$route.query.page == undefined || this.$route.query.page == ''){
      this.$router.push({
        query: {
          ...this.$route.query,
          page: this.pagination.curPage
        }
      })
    }else this.pagination.curPage = this.$route.query.page
    this.getPhotos()
  },
  computed:{
    pages() {
      // console.log(Math.ceil(this.len / this.pagination.limit))
      return Math.ceil(this.len / this.pagination.limit)
    }
  },
  methods:{
    getPhotos(){
      const params = {
        page: this.$route.query.page,
        limit: this.pagination.limit
      }
      this.$store.dispatch('getPhotoGallery', params)
      .then(() => {
        this.photos = this.$store.state.photoGallery
        this.len = this.$store.state.photoGalleryLen
        for(let i=1; i<=this.photos.length; i++){
          this.photos[i-1].id = i
        }
        // console.log(this.photos)
      })
    },
    selected(img){
      // console.log(img)
      this.isModal = true
      this.activeImgId =img.id
    },
    modalDeactive(){
      this.isModal = false
    },
    prev(){
      this.getPhotos()
    },
    next(){
      this.getPhotos()
    },
    goingToPage(){
      this.getPhotos()
    }
  }
}
</script>

<style lang="scss">
.gridGalleryP{
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(3, calc((100% - 48px)/3));
  grid-gap: 24px;

  .photos{




    &:nth-child(1){
      grid-column: 1/3;
      grid-row: 1/3;
      width: 872px;
      height: 872px;
    }
    &:nth-child(2){
      grid-column: 3/3;
      grid-row: 1/1;
      width: 424px;
      height: 424px;
    }
    &:nth-child(3){
      grid-column: 3/3;
      grid-row: 2/2;
      width: 424px;
      height: 424px;
    }
    &:nth-child(4){
      grid-column: 1/1;
      grid-row: 3/3;
      width: 424px;
      height: 424px;
    }
    &:nth-child(5){
      grid-column: 2/3;
      grid-row: 3/5;
      width: 872px;
      height: 872px;
    }
    &:nth-child(6){
      grid-column: 1/1;
      grid-row: 4/4;
      width: 424px;
      height: 424px;
    }
    &:nth-child(7){
      grid-column: 1/3;
      grid-row: 5/7;
      width: 872px;
      height: 872px;
    }
    &:nth-child(8){
      grid-column: 3/3;
      grid-row: 5/5;
      width: 424px;
      height: 424px;
    }
    &:nth-child(9){
      grid-column: 3/3;
      grid-row: 6/6;
      width: 424px;
      height: 424px;
    }
    &:nth-child(10){
      grid-column: 1/1;
      grid-row: 7/7;
      width: 424px;
      height: 424px;
    }
    &:nth-child(11){
      grid-column: 2/3;
      grid-row: 7/9;
      width: 872px;
      height: 872px;
    }
    &:nth-child(12){
      grid-column: 1/1;
      grid-row: 8/8;
      width: 424px;
      height: 424px;
    }
  }
}

@media screen and (max-width: 1439px) and (min-width: 1100px) {
  .gridGalleryP{

    .photos{

      &:nth-child(1){
        width: 712px !important;
        height: 712px !important;
      }
      &:nth-child(2){
        width: 344px !important;
        height: 344px !important;
      }
      &:nth-child(3){
        width: 344px !important;
        height: 344px !important;
      }
      &:nth-child(4){
        width: 344px !important;
        height: 344px !important;
      }
      &:nth-child(5){
        width: 712px !important;
        height: 712px !important;
      }
      &:nth-child(6){
        width: 344px !important;
        height: 344px !important;
      }
      &:nth-child(7){
        width: 712px !important;
        height: 712px !important;
      }
      &:nth-child(8){
        width: 344px !important;
        height: 344px !important;
      }
      &:nth-child(9){
        width: 344px !important;
        height: 344px !important;
      }
      &:nth-child(10){
        width: 344px !important;
        height: 344px !important;
      }
      &:nth-child(11){
        width: 712px !important;
        height: 712px !important;
      }
      &:nth-child(12){
        width: 344px !important;
        height: 344px !important;
      }
    }
  }
}

@media screen and (max-width: 1099px) and (min-width: 900px) {
  .gridGalleryP{
    grid-template-columns: repeat(2, calc((100% - 48px)/2)) !important;

    .photos{

      &:nth-child(1){
        grid-column: 1/1 !important;
        width: 390px !important;
        height: 804px !important;
      }
      &:nth-child(2){
        grid-column: 2/2 !important;
        width: 390px !important;
        height: 390px !important;
      }
      &:nth-child(3){
        grid-column: 2/2 !important;
        width: 390px !important;
        height: 390px !important;
      }
      &:nth-child(4){
        grid-column: 1/1 !important;
        width: 390px !important;
        height: 390px !important;
      }
      &:nth-child(5){
        grid-column: 2/2 !important;
        width: 390px !important;
        height: 804px !important;
      }
      &:nth-child(6){
        grid-column: 1/1 !important;
        width: 390px !important;
        height: 390px !important;
      }
      &:nth-child(7){
        grid-column: 1/1 !important;
        width: 390px !important;
        height: 804px !important;
      }
      &:nth-child(8){
        grid-column: 2/2 !important;
        width: 390px !important;
        height: 390px !important;
      }
      &:nth-child(9){
        grid-column: 2/2 !important;
        width: 390px !important;
        height: 390px !important;
      }
      &:nth-child(10){
        grid-column: 1/1 !important;
        width: 390px !important;
        height: 390px !important;
      }
      &:nth-child(11){
        grid-column: 2/2 !important;
        width: 390px !important;
        height: 804px !important;
      }
      &:nth-child(12){
        grid-column: 1/1 !important;
        width: 390px !important;
        height: 390px !important;
      }
    }
  }
}

@media screen and (max-width: 899px) {
  .gridGalleryP{
    grid-template-columns: repeat(2, calc((100% - 48px)/2)) !important;

    .photos{

      &:nth-child(1){
        grid-column: 1/1 !important;
        width: 151px !important;
        height: 366px !important;
      }
      &:nth-child(2){
        grid-column: 2/2 !important;
        width: 151px !important;
        height: 171px !important;
      }
      &:nth-child(3){
        grid-column: 2/2 !important;
        width: 151px !important;
        height: 171px !important;
      }
      &:nth-child(4){
        grid-column: 1/1 !important;
        width: 151px !important;
        height: 171px !important;
      }
      &:nth-child(5){
        grid-column: 2/2 !important;
        width: 151px !important;
        height: 366px !important;
      }
      &:nth-child(6){
        grid-column: 1/1 !important;
        width: 151px !important;
        height: 171px !important;
      }
      &:nth-child(7){
        grid-column: 1/1 !important;
        width: 151px !important;
        height: 366px !important;
      }
      &:nth-child(8){
        grid-column: 2/2 !important;
        width: 151px !important;
        height: 171px !important;
      }
      &:nth-child(9){
        grid-column: 2/2 !important;
        width: 151px !important;
        height: 171px !important;
      }
      &:nth-child(10){
        grid-column: 1/1 !important;
        width: 151px !important;
        height: 171px !important;
      }
      &:nth-child(11){
        grid-column: 2/2 !important;
        width: 151px !important;
        height: 366px !important;
      }
      &:nth-child(12){
        grid-column: 1/1 !important;
        width: 151px !important;
        height: 171px !important;
      }
    }
  }
}
</style>