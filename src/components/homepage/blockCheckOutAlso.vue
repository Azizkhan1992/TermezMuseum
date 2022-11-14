<template>
  <div name="checkOutAlsoBlock" class="block">
    <animatedTitle
      :animateAt="this.offTop"
      :titleName="this.title[$i18n.locale]"
    />
    <div class="slideWrapper">
      <div class="wr-100 gap-24 ovr-hidden">
        <otherMuseumsCard
          v-for="museumCard in museums"
          :key="museumCard.id"
          :id="museumCard.id"
          :museumsTitle="museumCard.name[$i18n.locale]"
          :img="museumCard.img"
          :link="museumCard.link"
          :hiddenR="hiddenRChecker(museumCard.id)"
          :hiddenL="hiddenLChecker(museumCard.id)"
        />
      </div>
    </div>

    <paginatorDots @left="prev" @right="next" />
  </div>
</template>

<script>
import animatedTitle from "../animatedTitle.vue";
import otherMuseumsCard from "../otherMuseumsCard.vue";
import paginatorDots from "../paginatorDots.vue";

export default {
  name: "blockCheckOutAlso",

  components: {
    animatedTitle,
    otherMuseumsCard,
    paginatorDots,
  },

  data() {
    return {
      offTop: 1,
      title: {
        language_uzlatin: "Shuningdek, tomosha qiling",
        language_ru: "Посмотрите также",
        language_uzCyrillic: "Шунингдек, томоша қилинг",
        language_en: "Check out also",
      },
      hiddenR: 1,
      playInterval: "",

      museums: [
        {
          id: 1,
          name: {
            language_ru: "Музей Вооруженных Сил Узбекистана",
            language_uzlatin: "Oʻzbekiston Qurolli Kuchlari muzeyi",
            language_uzCyrillic: "Ўзбекистон Қуролли Кучлари музейи",
            language_en: "Museum of the Armed Forces of Uzbekistan",
          },
          img: "armedForcesMuseum.png",
          link: "",
        },
        {
          id: 2,
          name: {
            language_ru: "Музей Прикладного Искусттва",
            language_uzlatin: "Amaliy san'at muzeyi",
            language_uzCyrillic: "Амалий санъат музейи",
            language_en: "Museum of Applied Arts",
          },
          img: "artMuseum.png",
          link: "",
        },
        {
          id: 3,
          name: {
            language_ru: "Государстенный Музей Природы",
            language_uzlatin: "Davlat tabiat muzeyi",
            language_uzCyrillic: "Давлат табиат музейи",
            language_en: "State Museum of Nature",
          },
          img: "natureMuseum.png",
          link: "",
        },
        {
          id: 4,
          name: {
            language_ru: "Музей Железнодорожной Техники",
            language_uzlatin: "Temir yo'l muhandisligi muzeyi",
            language_uzCyrillic: "Темир йўл муҳандислиги музейи",
            language_en: "Museum of Railway Engineering",
          },
          img: "railwaysMuseum.png",
          link: "",
        },
        {
          id: 5,
          name: {
            language_ru: "Государственный Музей Тимуридов",
            language_uzlatin: "Temuriylar davlat muzeyi",
            language_uzCyrillic: "Темурийлар давлат музейи",
            language_en: "Timurid State Museum",
          },
          img: "timuridMuseum.png",
          link: "",
        },
      ],
    };
  },

  methods: {
    getOffsetTop() {
      this.offTop =
        document.getElementsByName("checkOutAlsoBlock")[0].offsetTop - 400;
    },

    prev() {
      clearInterval(this.playInterval);

      const slideLen = this.museums.length;
      let firstItem = this.museums.pop();

      this.museums.unshift(firstItem);

      if (this.hiddenR !== 1) {
        this.hiddenR--;
      } else this.hiddenR = slideLen;

      this.play();
    },

    next() {
      clearInterval(this.playInterval);

      const slideLen = this.museums.length;
      let firstItem = this.museums.shift();

      this.museums.push(firstItem);

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
      const len = this.museums.length;

      if (
        this.hiddenR <= len - 3 &&
        id !== this.hiddenR + 1 &&
        id !== this.hiddenR + 2 &&
        id !== this.hiddenR + 3
      ) {
        return true;
      } else if (
        this.hiddenR == len - 2 &&
        id !== 1 &&
        id !== this.hiddenR + 1 &&
        id !== this.hiddenR + 2
      ) {
        return true;
      } else if (
        this.hiddenR == len - 1 &&
        id !== 1 &&
        id !== 2 &&
        id !== this.hiddenR + 1
      ) {
        return true;
      } else if (this.hiddenR == len && id !== 1 && id !== 2 && id !== 3) {
        return true;
      } else return false;
    },

    animation() {
      const slideLen = this.museums.length;
      let firstItem = this.museums.shift();

      this.museums.push(firstItem);

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

<style></style>
