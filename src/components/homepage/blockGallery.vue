<template>
  <div name="galleryBlock" class="block" v-show="gallery.length > 0">
    <animatedTitle
      :animateAt="this.offTop"
      :titleName="this?.title[$i18n.locale]"
    />

    <div class="wr-100 gap-24">
      <div class="gallery-content">
        <div class="gallery-items" v-for="(img, idx) in gallery" :key="idx" @click.stop="selectedImg(img)">
          <img :src="img?.path" alt="" />
        </div>
      </div>
    </div>

    <blockGalleryModal v-if="isModal" :selectedId='selectedImgId' :modalImages="gallery" @modalDeactive="modalDeactive"/>
  </div>
</template>

<script>
import blockGalleryModal from '@/components/blockGalleryModal.vue'
import animatedTitle from "../animatedTitle.vue";

export default {
  name: "blockGallery",

  components: {
    animatedTitle,
    blockGalleryModal
  },

  data() {
    return {
      offTop: 1,
      title: {
        language_uzlatin: "Galereya",
        language_ru: "Галерея",
        language_uzCyrillic: "Галерея",
        language_en: "Gallery",
      },
      gallery: [],
      selectedImgId: 1,
      isModal: false
    };
  },

  methods: {
    getOffsetTop() {
      this.offTop =
        document.getElementsByName("galleryBlock")[0]?.offsetTop - 400;
    },
    async getGallery() {
      await this.$api.get("/media/photos").then((resp) => {
        this.gallery = resp.data.values[0].results;
        for(let i=1; i<=this.gallery.length; i++){
          this.gallery[i-1].id = i
        }
        // console.log(this.gallery);
      }),
        (err) => {
          console.log(err);
        };
    },

    selectedImg(img){
      if(img){
        this.isModal = true
        this.selectedImgId = img.id
      }
    },
    modalDeactive(){
      this.isModal = false
    }
  },

  mounted() {
    this.getOffsetTop();
    this.getGallery();
  },
};
</script>

<style lang="scss">
.gallery-content {
  width: 100%;
  margin-top: 60px;
  display: grid;
  grid-template-columns: repeat(3, calc(100% / 3 - 24px));
  grid-gap: 24px;

  .gallery-items {
    position: relative;

    &::after {
      content: "";
      width: 100%;
      aspect-ratio: 1/1;
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.26);
      border-radius: 20px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 20px;
    }

    &:nth-child(1) {
      grid-column: 1/3;
      grid-row: 1/3;
      width: 870px;
      aspect-ratio: 1/1;
    }
    &:nth-child(2) {
      grid-column: 1/1;
      grid-row: 3/3;
      width: 420px;
      aspect-ratio: 1/1;
    }
    &:nth-child(3) {
      grid-column: 1/1;
      grid-row: 4/4;
      width: 420px;
      aspect-ratio: 1/1;
    }
    &:nth-child(4) {
      grid-column: 3/3;
      grid-row: 1/1;
      width: 420px;
      aspect-ratio: 1/1;
    }
    &:nth-child(5) {
      grid-column: 3/3;
      grid-row: 2/2;
      width: 420px;
      aspect-ratio: 1/1;
    }
    &:nth-child(6) {
      grid-column: 2/4;
      grid-row: 3/5;
      width: 870px;
      aspect-ratio: 1/1;
    }
  }
}

@media screen and (max-width: 1439px) and (min-width: 1101px) {
  .gallery-items {
    &:nth-child(1),
    &:nth-child(6) {
      width: 712px !important;
    }
    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4),
    &:nth-child(5) {
      width: 344px !important;
    }
  }
}

@media screen and (max-width: 1100px) and (min-width: 900px) {
  .gallery-content {
    grid-template-columns: repeat(2, calc(100% / 2 - 24px)) !important;
    justify-content: space-around;

    .gallery-items {
      &::after {
        width: 100%;
        height: 100% !important;
      }

      &:nth-child(1) {
        grid-column: 1/1 !important;
        grid-row: 1/3 !important;
        width: 390px !important;
        height: 804px !important;
      }
      &:nth-child(2) {
        grid-column: 1/1;
        grid-row: 3/3;
        height: 390px !important;
        width: 390px !important;
      }
      &:nth-child(3) {
        grid-column: 1/1;
        grid-row: 4/4;
        height: 390px !important;
        width: 390px !important;
      }
      &:nth-child(4) {
        grid-column: 2/2 !important;
        grid-row: 1/1;
        height: 390px !important;
        width: 390px !important;
      }
      &:nth-child(5) {
        grid-column: 2/2 !important;
        grid-row: 2/2;
        height: 390px !important;
        width: 390px !important;
      }
      &:nth-child(6) {
        grid-column: 2/2 !important;
        grid-row: 3/5 !important;
        width: 390px !important;
        height: 804px !important;
      }
    }
  }
}

@media screen and (max-width: 899px) and (min-width: 471px) {
  .gallery-content {
    grid-template-columns: repeat(2, calc(100% / 2 - 24px)) !important;
    justify-content: space-around;

    .gallery-items {
      &::after {
        width: 100%;
        height: 100% !important;
      }

      &:nth-child(1) {
        grid-column: 1/1 !important;
        grid-row: 1/3 !important;
        width: 171px !important;
        height: 366px !important;
      }
      &:nth-child(2) {
        grid-column: 1/1;
        grid-row: 3/3;
        height: 171px !important;
        width: 171px !important;
      }
      &:nth-child(3) {
        grid-column: 1/1;
        grid-row: 4/4;
        height: 171px !important;
        width: 171px !important;
      }
      &:nth-child(4) {
        grid-column: 2/2 !important;
        grid-row: 1/1;
        height: 171px !important;
        width: 171px !important;
      }
      &:nth-child(5) {
        grid-column: 2/2 !important;
        grid-row: 2/2;
        height: 171px !important;
        width: 171px !important;
      }
      &:nth-child(6) {
        grid-column: 2/2 !important;
        grid-row: 3/5 !important;
        width: 171px !important;
        height: 366px !important;
      }
    }
  }
}

@media screen and (max-width: 470px) {
  .gallery-content {
    grid-template-columns: repeat(2, calc(100% / 2 - 24px)) !important;
    justify-content: space-around;

    .gallery-items {
      &::after {
        width: 100%;
        height: 100% !important;
      }

      &:nth-child(1) {
        grid-column: 1/1 !important;
        grid-row: 1/3 !important;
        width: 155px !important;
        height: 344px !important;
      }
      &:nth-child(2) {
        grid-column: 1/1;
        grid-row: 3/3;
        height: 160px !important;
        width: 155px !important;
      }
      &:nth-child(3) {
        grid-column: 1/1;
        grid-row: 4/4;
        height: 160px !important;
        width: 155px !important;
      }
      &:nth-child(4) {
        grid-column: 2/2 !important;
        grid-row: 1/1;
        height: 160px !important;
        width: 155px !important;
      }
      &:nth-child(5) {
        grid-column: 2/2 !important;
        grid-row: 2/2;
        height: 160px !important;
        width: 155px !important;
      }
      &:nth-child(6) {
        grid-column: 2/2 !important;
        grid-row: 3/5 !important;
        width: 155px !important;
        height: 344px !important;
      }
    }
  }
}
</style>
