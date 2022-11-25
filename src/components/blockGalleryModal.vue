<template>
  <div class="modall-gallery" @click="modalDeactive()">
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
    modalImages: {
      type: Array,
      default: () => [],
    },
    selectedId: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      imgStepper: 1,
    };
  },
  mounted(){
    this.getImageStepper()
  },

  methods: {
    modalDeactive() {
      this.$emit("modalDeactive");
    },
    getImageStepper() {

      this.imgStepper = this.selectedId;
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
      background: #4582d3;
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
