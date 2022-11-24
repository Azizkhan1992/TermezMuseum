<template>
  <div name="usefulLinksBlock" class="block">
    <animatedTitle
      :animateAt="offTop"
      :titleName="title[$i18n.locale]"
    />

    <div class="sliderWrapper">
      <div class="wr-100 gap-24">

        <usefulLinkCard
          v-for="item in usefulLinks"
          :key="item.id"
          :id="item.id"
          :itemTitle="item.title[$i18n.locale]"
          :img="item.image.path"
          :link="item.link"
          :hiddenR="hiddenRChecker(item.id)"
          :hiddenL="hiddenLChecker(item.id)"
        />
      </div>
    </div>

    <paginatorDots @left="prev" @right="next" />
  </div>
</template>

<script>
import animatedTitle from "../animatedTitle.vue";
import usefulLinkCard from "../usefulLinkCard.vue";
import paginatorDots from "../paginatorDots.vue";

export default {
  name: "blockUsefulLinks",

  components: {
    animatedTitle,
    usefulLinkCard,
    paginatorDots,
  },

  data() {
    return {
      offTop: 1,
      title: {
        language_uzlatin: "Foydali havolalar",
        language_ru: "Полезные ссылки",
        language_uzCyrillic: "Фойдали ҳаволалар",
        language_en: "Useful links",
      },
      hiddenR: 1,
      playInterval: "",
      usefulLinks: []
    };
  },

  methods: {
    getOffsetTop() {
      this.offTop =
        document.getElementsByName("usefulLinksBlock")[0]?.offsetTop - 400;
    },
    async getUsefulLinks() {
      const data = await this.$api('/home/usefulLink');

      this.usefulLinks = data.data.usefulLinkDocument


      for(let i=1; i<=  this.usefulLinks.length; i++){
        this.usefulLinks[i-1].id = i
      }

    },
    prev() {
      clearInterval(this.playInterval);

      const slideLen = this.usefulLinks.length;
      let firstItem = this.usefulLinks.pop();

      this.usefulLinks.unshift(firstItem);

      if (this.hiddenR !== 1) {
        this.hiddenR--;
      } else this.hiddenR = slideLen;

      this.play();
    },

    next() {
      clearInterval(this.playInterval);

      const slideLen = this.usefulLinks.length;
      let firstItem = this.usefulLinks.shift();

      this.usefulLinks.push(firstItem);

      if (this.hiddenR !== slideLen) {
        this.hiddenR++;
      } else this.hiddenR = 1;

      this.play();
    },

    hiddenRChecker(id) {
      if (id == this.hiddenR) {
        return true;
      } else return false;
    },

    hiddenLChecker(id) {
      const shown = [];
      if(window.innerWidth > 1100){
        for (let i = 1; i <= 4; i++) {
            shown.push(this.usefulLinks[i].id);
        }
      }else{
        for (let i = 1; i <= 3; i++) {
            shown.push(this.usefulLinks[i].id);
        }
      }

      if (shown.includes(id) == true && id !== this.hiddenR) {
        return false;
      } else return true;
    },

    animation() {
      const slideLen = this.usefulLinks.length;
      let firstItem = this.usefulLinks.shift();

      this.usefulLinks.push(firstItem);

      if (this.hiddenR !== slideLen) {
        this.hiddenR++;
      } else this.hiddenR = 1;
    },

    play() {
      this.playInterval = setInterval(() => {
        this.animation();
      }, 5000);
    },
  },

  mounted() {
    this.getOffsetTop();
    this.play();
    this.getUsefulLinks()
  },
};
</script>

<style>
</style>
