<template>
  <div name="galleryBlock" class="block" v-show="getPhoto.length > 0">
    <animatedTitle
      :animateAt="this.offTop"
      :titleName="this?.title?.[$i18n.locale]"
    />

    <div class="wr-100 gap-24 gallery-items-wr">
      <div class="gallery-museum-d">
        <div class="img-wrapper-gallery" v-for="(img, idx) in cuttedPhotos" :key="idx" @click.stop="selected(img)">
          <img v-if="img?.path" :src="img?.path" alt="" />
        </div>

        
      </div>

      

      <div class="gallery-mobile-wrapper">
        <div class="img-wrapper">
          <div
            class="gallery-items"
            v-for="img in clonedPhotos"
            :key="img.id"
            :class="checkClass(img.id)"
            @click.stop="selectMImg(img)"
          >
            <img :src="img?.path" alt="" />
          </div>
        </div>

        <paginatorDots
          class="d3-paginate"
          :topMargin="false"
          @left="prev"
          @right="next"
        />
      </div>

      <blockGalleryModal
        v-if="isModal"
        :images="cuttedPhotos"
        :activeImgId="activeImgId"
        :activeMImgId="activeMImgId"
        @modalDeactive="modalDeactive"
        />
    </div>
  </div>
</template>

<script>
import animatedTitle from "../animatedTitle.vue";
import paginatorDots from "../paginatorDots.vue";
import blockGalleryModal from "../blockGalleryModal.vue";

export default {
  name: "blockGallery",

  components: {
    animatedTitle,
    paginatorDots,
    blockGalleryModal,
  },

  data() {
    return {
      offTop: 1,
      stepper: 1,
      playInterval: "",
      title: {
        language_uzlatin: "Galereya",
        language_ru: "Галерея",
        language_uzCyrillic: "Галерея",
        language_en: "Gallery",
      },
      getPhoto: [],
      cuttedPhotos: [],
      clonedPhotos: [],
      URL: process.env.VUE_APP_API,
      isModal: false,
      activeImgId: 0,
      activeMImgId: ''
    };
  },

  methods: {
    getOffsetTop() {
      this.offTop =
        document.getElementsByName("galleryBlock")[0]?.offsetTop - 400;
    },
    async getOtherPhotos() {
      await this.$api.get("/media/photos").then((resp) => {
        this.getPhoto = resp.data.values[0].results;
        this.cuttedPhotos = this.getPhoto.slice(0, 6);
        let cutted = this.getPhoto.slice(0, 6);
        let cloned = JSON.parse(JSON.stringify(cutted));
        this.getClonedItems(cloned);
        this.play();
      }),
        (err) => {
          console.log(err);
        };
    },

    getClonedItems(val) {
      this.clonedPhotos = [...this.cuttedPhotos, ...val];
      for (let i = 1; i <= this.clonedPhotos.length; i++) {
        this.clonedPhotos[i - 1].id = i;
      }
    },

    selected(img){
      this.isModal = true
      this.activeImgId =img.id
    },

    selectMImg(img){
      this.isModal = true
      this.activeMImgId = img._id
    },
    modalDeactive(){
      this.isModal = false
    },
    checkClass(id) {
      if (id == this.clonedPhotos[0].id || id == this.clonedPhotos[1].id) {
        return "hidden-left";
      } else if (id == this.clonedPhotos[2].id) {
        return "hidden-left-shown";
      } else if (id == this.clonedPhotos[3].id) {
        return "shown";
      } else if (id == this.clonedPhotos[4].id) {
        return "hidden-right-shown";
      } else return "hidden-right";
    },

    prev() {
      clearInterval(this.playInterval);
      let item = this.clonedPhotos.pop();
      this.clonedPhotos.unshift(item);

      this.play();
    },
    next() {
      clearInterval(this.playInterval);
      let item = this.clonedPhotos.shift();
      this.clonedPhotos.push(item);

      this.play();
    },

    play() {
      this.playInterval = setInterval(() => {
        this.animation();
      }, 4000);
    },
    animation() {
      let slideLen = this.clonedPhotos.length;
      let firstItem = this.clonedPhotos.shift();

      this.clonedPhotos.push(firstItem);

      if (this.stepper < slideLen - 1) {
        this.stepper++;
      } else this.stepper = 0;
    },
  },

  mounted() {
    this.getOffsetTop();
    this.getOtherPhotos();
  },

  beforeDestroy() {
    clearInterval(this.playInterval);
  },
};
</script>

<style lang="scss">
.gallery-mobile-wrapper {
  display: none;

  .paginatorWrapper {
    width: auto;
  }
}
.gallery-museum-d {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, calc((100% - 24px) / 3));
  grid-gap: 24px;
  position: relative;

  .img-wrapper-gallery {
    // width: 100%;
    width: auto !important;
    border-radius: 32px;
    position: relative;
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
      border-radius: 32px;
      object-fit: cover;
    }

    &::after {
      content: "";
      width: 100%;
      height: 100%;
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 32px;
      background: rgba(0, 0, 0, 0.26);
    }

    &:nth-child(1) {
      grid-column: 1/1;
      grid-row: 1/3;
      height: 800px;
    }
    &:nth-child(2) {
      grid-column: 1/1;
      grid-row: 3/3;
      height: 320px;
    }
    &:nth-child(3) {
      grid-column: 2/2;
      grid-row: 1/1;
      height: 320px;
    }
    &:nth-child(4) {
      grid-column: 2/2;
      grid-row: 2/4;
      height: 800px;
    }
    &:nth-child(5) {
      grid-column: 3/3;
      grid-row: 1/3;
      height: 800px;
    }
    &:nth-child(6) {
      grid-column: 3/3;
      grid-row: 3/3;
      height: 320px;
    }
  }
}

@media screen and (max-width: 900px) and (min-width: 470px) {
  .gallery-museum-d {
    display: none;
  }

  .gallery-items-wr {
    width: 100vw !important;
  }

  .gallery-mobile-wrapper {
    display: block;
    width: 100%;
    z-index: 1;
    // width: 100vw !important;

    .img-wrapper-gallery {
      display: flex;
      width: 100%;
      overflow: hidden;
      flex-direction: row;
      justify-content: center;
      margin-bottom: 60px;
      z-index: 1;

      .gallery-items {
        width: 320px;
        height: 480px;
        border-radius: 32px;
        position: relative;
        transition: all 0.65s ease-in-out;
        z-index: 10;
        cursor: pointer;

        &::after {
          content: "";
          width: 100%;
          height: 100%;
          position: absolute;
          left: 0;
          top: 0;
          border-radius: 32px;
          background: rgba(0, 0, 0, 0.26);
        }

        &.hidden-left {
          margin-left: -320px;
          transform: scale(0.5);
          z-index: 0;
          opacity: 0.7;
        }

        &.hidden-left-shown {
          margin-left: -200px;
          transform: scale(0.7);
        }

        &.hidden-right-shown {
          margin-right: -160px;
          transform: scale(0.7);
          z-index: 0;
        }

        &.hidden-right {
          margin-right: -320px;
          opacity: 0.1;
          // display: none;
          z-index: -1;
          transform: scale(0.5);
        }

        &.shown {
          margin: 0;
          z-index: 10;
        }

        img {
          width: 100%;
          height: 100%;
          border-radius: 32px;
          object-fit: cover;
        }
      }
    }
  }
}

@media screen and (max-width: 470px) {
  .gallery-museum-d {
    display: none;
  }

  .gallery-items-wr {
    width: 100vw;
  }
  .gallery-mobile-wrapper {
    display: block;
    width: 100% !important;
    overflow: hidden;

    .img-wrapper-gallery {
      display: flex;
      flex-direction: row;
      margin-bottom: 60px;

      .gallery-items {
        width: 200px;
        height: 380px;
        border-radius: 32px;
        position: relative;
        transition: all 0.65s ease-in-out;

        &::after {
          content: "";
          width: 100%;
          height: 100%;
          position: absolute;
          left: 0;
          top: 0;
          border-radius: 32px;
          background: rgba(0, 0, 0, 0.26);
        }

        &.hidden-left {
          margin-left: -200px;
          transform: scale(0.5);
          z-index: 0;
          opacity: 0.7;
        }

        &.hidden-left-shown {
          margin-left: -120px;
          transform: scale(0.7);
          opacity: 1;
        }

        &.hidden-right-shown {
          margin-right: -100px;
          transform: scale(0.7);
          z-index: 0;
          opacity: 1;
        }

        &.hidden-right {
          margin-right: -200px;
          opacity: 0.5;
          transform: scale(0.5);
          z-index: -1;
        }

        &.shown {
          margin: 0;
          z-index: 3;
        }

        img {
          width: 100%;
          height: 100%;
          border-radius: 32px;
          object-fit: cover;
        }
      }
    }
  }
}
</style>
