<template>
  <div name="homePageBlock" class="homePageBlock fd-c">
    <animatedTitle :titleName="linkTitle?.[$i18n.locale]" :animateAt="offTop" />

    <div class="w-100 d-f pos-rel ovr-hidden gap-24">
      <div
        @click="goToLink(link.link)"
        v-for="link in clonedLinks"
        :key="link.id"
        class="sliderCard usefulLinks w-3c pos-rel"
        :class="classingLink(link.id)"
      >
        <img
          class="obj-fit-cntn w-100 h-182p"
          :src="link?.image?.path"
          alt=""
        />
        <p class="ms-24 line-h-24 mt-24 t-align-c">{{ link?.title?.[$i18n.locale] }}</p>
      </div>
    </div>

    <paginatorDots class="w-100 mt-48" @left="prev" @right="next" />
  </div>
</template>

<script>
import animatedTitle from "@/components/animatedTitle.vue";
import paginatorDots from "@/components/paginatorDots.vue";

export default {
  name: "usefulLinksBlock",

  components: {
    animatedTitle,
    paginatorDots,
  },

  data() {
    return {
      playInterval: "",
      offTop: 1,
      linkTitle: {
        language_uzlatin: 'Foydali havolalar',
        language_uzCyrillic: 'Фойдали ҳаволалар',
        language_en: 'Usefull Links',
        language_ru: 'Полезные ссылки'
      },
      getUsefulLink: [],
      clonedLinks: [],

      usefulLinks: [
        // {
        //   id: 1,
        //   img: "2",
        //   title: "Олий Мажлис Республики Узбекистан",
        //   link: "https://parliament.gov.uz/ru/",
        // },
        // {
        //   id: 2,
        //   img: "1",
        //   title:
        //     "Национальная база данных законодательства Республики Узбекистан",
        //   link: "https://lex.uz/uz/",
        // },
        // {
        //   id: 3,
        //   img: "2",
        //   title:
        //     "Министерство Туризма и культурного наследия Республики Узбекистан",
        //   link: "https://uzbektourism.uz/",
        // },
        // {
        //   id: 4,
        //   img: "1",
        //   title: "Веб-сайт ПРЕЗИДЕНТА Республики Узбекистан",
        //   link: "https://president.uz/uz",
        // },
        // {
        //   id: 5,
        //   img: "2",
        //   title: "Олий Мажлис Республики Узбекистан",
        //   link: "https://parliament.gov.uz/ru/",
        // },
        // {
        //   id: 6,
        //   img: "1",
        //   title:
        //     "Национальная база данных законодательства Республики Узбекистан",
        //   link: "https://lex.uz/uz/",
        // },
        // {
        //   id: 7,
        //   img: "2",
        //   title:
        //     "Министерство Туризма и культурного наследия Республики Узбекистан",
        //   link: "https://uzbektourism.uz/",
        // },
        // {
        //   id: 8,
        //   img: "1",
        //   title: "Веб-сайт ПРЕЗИДЕНТА Республики Узбекистан",
        //   link: "https://president.uz/uz",
        // },
      ],
    };
  },

  methods: {
    getOffsetTop() {
      this.offTop = document.getElementsByName('homePageBlock')[0]?.offsetTop - 400
    },
    getLinksData(){
      this.$api.get('/home/usefulLink')
      .then(resp => {
        this.getUsefulLink = resp.data.usefulLinkDocument
        const cloned = JSON.parse(JSON.stringify(this.getUsefulLink))
        this.clonedLinks = [...this.getUsefulLink, ...cloned]
        for(let i=1; i<=this.clonedLinks.length; i++){
          this.clonedLinks[i-1].id = i
        }

      }).catch(err => {console.log(err)})
    },
    goToLink(link) {
      window.open(link, "_blank");
    },

    classingLink(id) {
      if (id === this.clonedLinks[0]?.id) {
        return "hiddenLeftSmall";
      } else if (
        id === this.clonedLinks[1]?.id ||
        id === this.clonedLinks[2]?.id ||
        id === this.clonedLinks[3]?.id ||
        id === this.clonedLinks[4]?.id
      ) {
        return "shown";
      } else return "hiddenRightSmall";
    },

    prev() {
      clearInterval(this.playInterval);
      let lastItem = this.clonedLinks.pop();
      this.clonedLinks.unshift(lastItem);

      this.play();
    },

    next() {
      clearInterval(this.playInterval);
      let firstItem = this.clonedLinks.shift();
      this.clonedLinks.push(firstItem);

      this.play();
    },

    animation() {
      let firstItem = this.clonedLinks.shift();
      this.clonedLinks.push(firstItem);
    },

    play() {
      this.playInterval = setInterval(() => {
        this.animation();
      }, 6000);
    },
  },

  mounted() {
    this.getOffsetTop()
    this.getLinksData()
    this.play();
  },

  beforeDestroy() {
    clearInterval(this.playInterval);
  },
};
</script>

<style lang="scss" scoped>
$gridWidth: 1320px;
$prim10: #004BB610;
$prim: #004BB6;
$primLight: #5481C1;
$type: #000000;
$greyD: #A4ABBD;
$greyL: #A9A9A9;
$white: #FFFFFF;
$green: #0FAA3A;
$red: #EB194C;
$brown: #B4A081;

.animatedTitle{
  width: 100%;
}

.homePageBlock {
  width: 100%;
  height: fit-content;
  display: flex;
  padding-top: 200px;
  box-sizing: border-box;
  overflow: hidden;
}
.w-3c {
  width: calc(($gridWidth - 72px) / 12 * 3);
}
.sliderCard {
  height: 680px;
  border-radius: 1000px;
  overflow: hidden;
  background-color: #004BB6;
  transition: all 400ms ease-out;

  &.usefulLinks {
    border-radius: 0;
    background-color: transparent;
    height: auto;
    cursor: pointer;
    filter: grayscale(100);

    p {
      color: $greyD;
      text-align: center;
      font-size: 1rem;
    }

    &:hover {
      filter: grayscale(0);

      p {
        color: $prim;
      }
    }
  }

  .curtain {
    height: 322px;
    bottom: -166px;
    transition: all 200ms ease-in;
  }

  .curtainFixed {
    height: 322px;
  }

  &:hover {
    .curtain {
      bottom: 0;
    }
  }

  &.hiddenLeft {
    margin-left: -448px;
  }

  &.hiddenRight {
    margin-right: -448px;
  }

  &.hiddenLeftBig {
    margin-left: -648px;
  }

  &.hiddenRightBig {
    margin-right: -648px;
  }

  &.hiddenLeftSmall {
    margin-left: -300px;
  }

  &.hiddenRightSmall {
    margin-right: -320px;
  }
}
.obj-fit-cntn {
  object-fit: contain;
}
@media (max-width: 1439px) {
  $gridWidth: 1080px;
  .w-3c {
    width: calc(($gridWidth - 72px) / 12 * 3);
  }
  .sliderCard {

&.usefulLinks {
  display: block;
  width: calc(($gridWidth - 48px) / 12 * 4);
  filter: none;

  &:nth-child(5) {
    margin-right: -360px;
  }
  
  &.hiddenLeftSmall {
    margin-left: -344px;
  }
  
  &.hiddenRightSmall {
    margin-right: -360px;
  }
}


&.hiddenLeft {
  margin-left: -344px;
}

&.hiddenRight {
  margin-right: -344px;
}

&.hiddenLeftBig {
  margin-left: -528px;
}

&.hiddenRightBig {
  margin-right: -528px;
}
}
.h-358p{
  height: 368px !important;
}
}

@media (max-width: 1100px) {
  $gridWidth: 804px;
  .w-3c {
    width: calc(($gridWidth - 72px) / 12 * 3);
  }
  .sliderCard {
  width: calc(($gridWidth - 24px) / 2);
  height: 640px;

  .curtain {
    button {
      width: calc(($gridWidth - 72px) / 4);
    }
  }

  &.shown:nth-child(4) {
    margin-right: -414px;
    transition: margin-right;
  }

  &.hiddenLeft {
    margin-left: -414px;
  }

  &.hiddenRight {
    margin-right: -414px;
  }

  &.horizontalCard {
    width: calc(($gridWidth - 24px) / 2);
    height: 320px;

    h4 {
      font-size: 1.5rem;
      line-height: 36px;
    }
  }

  &.hiddenLeftBig {
    margin-left: -390px;
  }

  &.hiddenRightBig {
    margin-right: -390px;
  }


  &.usefulLinks {
    display: block;
    width: calc(($gridWidth - 24px) / 2);
    filter: none;

    &:nth-child(4) {
      margin-right: -390px;
    }

    &:nth-child(5) {
      margin-right: -390px;
    }
  }

  &.hiddenRightSmall {
    margin-right: -400px !important;
  }

  &.hiddenLeftSmall {
    margin-left: -390px !important;
  }
}

}

@media (max-width: 900px) {
  $gridWidth: calc(100vw - 48px);
  .w-3c {
    width: calc(($gridWidth - 72px) / 12 * 3) !important;
  }

  .gap-24{
    gap: 0 !important;
  }
  
  .sliderCard {
  width: calc(100vw - 24px) !important;
  height: 340px !important;

  &:nth-child(2){
    display: flex;
    flex-direction: column;
    align-items: center;

    p{
      width: 300px;
    }
  }

  &:nth-child(3) {
    margin-right: -160px !important;
  }
  
  &:nth-child(4) {
    margin-right: calc(-100vw + 24px);
  }

  &.hiddenLeft {
    margin-left: calc(-100vw + 24px);
  }
  
  &.hiddenRight {
    margin-right: calc(-100vw + 24px);
  }

  &.horizontalCard {
    height: 180px;

    h4 {
      font-size: 1rem;
      line-height: 24px;
      margin: auto 48px 24px 48px;
    }
  }

  &.usefulLinks {
    filter: none;

    // &:nth-child(3) {
    //   margin-right: calc(-100vw + 24px);
    // }

    &:nth-child(4) {
      margin-right: calc(-100vw + 24px);
    }

    &:nth-child(5) {
      margin-right: calc(-100vw + 24px);
    }
  }

  &.hiddenLeftBig {
    margin-left: calc(-100vw + 24px);
  }
  
  &.hiddenRightBig {
    margin-right: calc(-100vw + 24px);
  }

  &.hiddenLeftSmall {
    margin-left: calc(-100vw + 24px) !important;
  }
  
  &.hiddenRightSmall {
    margin-right: calc(-100vw + 24px) !important;
  }
}
}

@media (max-width: 470px) {

  .gap-24{
    gap: 24px !important;
  }
.sliderCard{

  &:nth-child(2){
    width: 100% !important;
    margin: 0 calc(100% - 340px) !important;
  }

  &:nth-child(3){
    margin-right: -300px !important;
  }

  &:nth-child(4){
    margin-right: -340px !important;
  }
  &:nth-child(5){
    margin-right: -340px !important;
  }
}

}
</style>
