<template>
  <div name="newsBlock" class="block" v-if="news.length > 0"
  >
    <animatedTitle
      :animateAt="this.offTop"
      :titleName="this.title[$i18n.locale]"
    />

    <div class="wrapper-h mb-60">
      <button class="prim w-3 a-left">
        <span>{{ $t("allNews") }}</span>
      </button>

      <topTags :topTags="this.topTags" />
    </div>

    <newsCard :bigCard="true" />

    <div class="row-3 mb-24">
      <newsCard />
      <newsCard />
      <newsCard />
    </div>

    <subscriberComponent />
  </div>
</template>

<script>
import animatedTitle from "../animatedTitle.vue";
import topTags from "../topTags.vue";
import newsCard from "../newsCard.vue";
import subscriberComponent from "../subscriber.vue";

export default {
  name: "newsBlock",
  components: {
    animatedTitle,
    topTags,
    newsCard,
    subscriberComponent,
  },

  data() {
    return {
      offTop: 1,
      title: {
        language_uzlatin: "Yangiliklar",
        language_ru: "Новости",
        language_uzCyrillic: "Янгиликлар",
        language_en: "News",
      },
      topTags: [
          {
            id: 1,
            name: {
              uz: "Muhim",
              ru: "Важно",
              uzcyr: "Муҳим",
              en: "Important",
            },
          },
          {
            id: 2,
            name: {
              uz: "Konkurs",
              ru: "Конкурс",
              uzcyr: "Конкурс",
              en: "Competition",
            },
          },
          {
            id: 3,
            name: {
              uz: "O'zbekiston tarixi",
              ru: "История Узбекистана",
              uzcyr: "Ўзбекистон тарихи",
              en: "History of Uzbekistan",
            },
          },
        ],
      news: [],
    };
  },

  methods: {
    getOffsetTop() {
      this.offTop = document.getElementsByName("newsBlock")[0]?.offsetTop - 400;
    },
    async getNews() {
      const data = await this.$api('/press/news');
      this.news = data.data.result.results
    },
  },

  mounted() {
    this.getOffsetTop();
    this.getNews()
  },
};
</script>

<style>
</style>
