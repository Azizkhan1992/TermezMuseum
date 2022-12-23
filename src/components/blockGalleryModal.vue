<template>
  <div class="modall-gallery" @click="modalDeactive">
    <div class="modal-slider-content">
      <button class="left-btn" @click.stop="moveL">
        <Icons icon="arrLeft" size="24  " />
      </button>
      <div
        class="slider-items"
        v-show="modalImages.length > 0"
        v-for="img in modalImages"
        :key="img.id"
        :class="
          img.id == imgStepper
            ? 'active-img'
            : '' || img.id < imgStepper
            ? 'hidden-left'
            : '' || img.id > imgStepper
            ? 'hidden-right'
            : ''
        "
      >
        <img :src="img?.path" alt="" />
      </div>
      <button class="right-btn" @click.stop="moveR">
        <Icons icon="arrRight" size="24  " />
      </button>
    </div>
  </div>
</template>
<script>
import Icons from "@/components/icons.vue";
export default {
  name: "gallery-modal",
  components: { Icons },
  props: {
    images: {
      type: Array,
      default: () => [],
    },
    activeImgId: {
      type: Number,
      default: 1,
    },
    activeMImgId: {
      type: [String, Number],
      default: 1,
    },
    activeMediaId: {
      type: [Number, String],
      default: 1
    }
  },
  data() {
    return {
      modalImages: [],
      imgStepper: 0,
    };
  },

  mounted() {
    this.getModalImages();
    this.getImageStepper();
    this.getMobImgItem();
    this.getPulls()
    // this.logProp()
  },

  methods: {
    // logProp() {
    //   console.log(this.activeMImgId);
    // },
    getPulls(){
      document.addEventListener('keydown', (event) => {
        if(event.keyCode === 37){
          this.moveR()
        }
        else if(event.keyCode === 39){
          this.moveL()
        }
      })
    },
    getMobImgItem() {
      if (this.activeMImgId && this.activeMImgId !== 1) {
        let item = this.modalImages.filter((e) => e._id == this.activeMImgId);
        this.imgStepper = item[0].id;
      }
    },
    // getMediaItems(){
    //   if(this.activeMediaId){
    //     console.log(this.modalImages)
    //   }
    // },
    getModalImages() {
      if (this.images.length > 0) {
        this.modalImages = this.images;
      }
    },
    getImageStepper() {
      this.imgStepper = this.activeImgId;
    },
    modalDeactive() {
      this.$emit("modalDeactive");
    },
    moveR() {
      if (this.imgStepper < this.modalImages.length) {
        this.imgStepper++;
      } else this.imgStepper = 1;
    },
    moveL() {
      if (this.imgStepper > 1) {
        this.imgStepper--;
      } else this.imgStepper = this.modalImages.length;
    },
  },
};
</script>
<style lang="scss">
.modall-gallery {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.86);
  z-index: 200;

  .modal-slider-content {
    // width: calc(100vw - 1000px);
    // max-height: calc(100vh - 200px);
    // height: calc(100vh - 200px);
    min-height: 100vh;
    height: auto;
    position: absolute;
    // top: calc(100vh - 95%);
    left: 2%;
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      width: 64px;
      height: 64px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      background: #4582D3;
      border: 0;

      &:hover {
        background: #fff;
      }

      &.left-btn {
        margin-right: 20px;
      }
      &.right-btn {
        margin-left: 20px;
      }
    }

    .slider-items {
      &.active-img {
        width: calc(100vw - 240px);
        height: calc(100vh - 120px);

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }

      &.hidden-left {
        width: 100%;
        height: 0;
        overflow: hidden;
        position: absolute;
        margin-left: -600px;
      }
      &.hidden-right {
        width: 100%;
        height: 0;
        overflow: hidden;
        position: absolute;
        margin-right: -600px;
      }
    }
  }
}

@media screen and (min-width: 1440px) {
  .modal-slider-content {
    // min-width: calc(100vw - 400px) !important;
    // left: calc(100vw - 90%) !important;
    // top: calc(100vh - 97%) !important;

    .slider-items {
      &.active-img {
        width: auto;
        height: calc(100vh - 120px) !important;
      }
    }
  }
}

@media screen and (max-width: 1439px) {
  .modal-slider-content {
    width: calc(100vw - 400px) !important;
    left: calc(100vw - 85%) !important;
    top: calc(100vh - 97%) !important;

    &.active-img {
      width: calc(100vw - 668px) !important;
      height: calc(100vh - 40px) !important;
    }
  }
}

@media screen and (max-width: 900px) and (min-width: 470px) {
  .modal-slider-content {
    min-width: calc((100vw - 150px)) !important;
    width: auto;
    left: calc(100vw - 90%) !important;
    top: calc(100vh - 95%) !important;

    .slider-items {
      &.active-img {
        height: auto !important;
      }
    }
  }
}

@media screen and (max-width: 470px) {
  .modal-slider-content {
    min-width: calc(100vw - 20px) !important;
    width: auto;
    left: calc(100vw - 95%) !important;

    button {
      width: 40px !important;
      height: 40px !important ;
    }

    .slider-items {
      &.active-img {
        height: auto !important;
      }
    }
  }
}
</style>
