<template>
  <div name="usefulLinksBlock" class="block">
    <animatedTitle
      :animateAt="this.offTop"
      :titleName="this.title[$i18n.locale]"
    />

    <div class="sliderWrapper">
      <div class="wr-100 gap-24">
        <usefulLinkCard
          v-for="item in usefulLinks"
          :key="item.id"
          :id="item.id"
          :itemTitle="item.name[$i18n.locale]"
          :img="item.img"
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
        uz: "Foydali havolalar",
        ru: "Полезные ссылки",
        uzcyr: "Фойдали ҳаволалар",
        en: "Useful links",
      },
      hiddenR: 1,
      playInterval: "",

      usefulLinks: [
        {
          id: 1,
          name: {
            uz: "O'zbekiston Respublikasi Oliy Majlisi",
            ru: "Олий Мажлис Республики Узбекистан",
            uzcyr: "Ўзбекистон Республикаси Олий Мажлиси",
            en: "Oliy Majlis of the Republic of Uzbekistan",
          },
          link: "",
          img: "logo_small 2.png",
        },
        {
          id: 2,
          name: {
            uz: "O‘zbekiston Respublikasi Turizm va madaniy meros vazirligi",
            ru: "Министерство Туризма и культурного наследия Республики Узбекистан",
            uzcyr: "Ўзбекистон Республикаси Туризм ва маданий мерос вазирлиги",
            en: "Ministry of Tourism and Cultural Heritage of the Republic of Uzbekistan",
          },
          link: "",
          img: "Turizm_va_madaniy_meros_vazirligi (1).png",
        },
        {
          id: 3,
          name: {
            uz: "O'zbekiston Respublikasi PREZIDENTI sayti",
            ru: "Веб-сайт ПРЕЗИДЕНТА Республики Узбекистан",
            uzcyr: "Ўзбекистон Республикаси ПРEЗИДEНТИ сайти",
            en: "Website of the PRESIDENT of the Republic of Uzbekistan",
          },
          link: "",
          img: "image 110.png",
        },
        {
          id: 4,
          name: {
            uz: "O‘zbekiston Respublikasi qonun hujjatlari ma’lumotlari milliy bazasi",
            ru: "Национальная база данных законодательства Республики Узбекистан",
            uzcyr: "Ўзбекистон Республикаси қонун ҳужжатлари маълумотлари миллий базаси",
            en: "National database of legislation of the Republic of Uzbekistan",
          },
          link: "",
          img: "lex 1.png",
        },
        {
          id: 5,
          name: {
            uz: "O‘zbekiston Respublikasi Turizm va madaniy meros vazirligi",
            ru: "Министерство Туризма и культурного наследия Республики Узбекистан",
            uzcyr: "Ўзбекистон Республикаси Туризм ва маданий мерос вазирлиги",
            en: "Ministry of Tourism and Cultural Heritage of the Republic of Uzbekistan",
          },
          link: "",
          img: "Turizm_va_madaniy_meros_vazirligi (1).png",
        },
        {
          id: 6,
          name: {
            uz: "O'zbekiston Respublikasi PREZIDENTI sayti",
            ru: "Веб-сайт ПРЕЗИДЕНТА Республики Узбекистан",
            uzcyr: "Ўзбекистон Республикаси ПРEЗИДEНТИ сайти",
            en: "Website of the PRESIDENT of the Republic of Uzbekistan",
          },
          link: "",
          img: "image 110.png",
        },
      ],
    };
  },

  methods: {
    getOffsetTop() {
      this.offTop =
        document.getElementsByName("usefulLinksBlock")[0].offsetTop - 400;
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
      if(window.innerWidth>1100){
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
  },
};
</script>

<style>
</style>