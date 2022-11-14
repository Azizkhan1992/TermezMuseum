<template>
  <div name="aboutMuseumBlock" class="block">
    <animatedTitle
      :animateAt="offTop"
      :titleName="title[$i18n.locale]"
    />

    <div class="mainPhoto">
      <img class="mainImage" :src="about?.imagePath?.path" alt="err" />
      <p class="line__clap_8">{{about?.text[$i18n.locale]}}</p>
      <div class="dark-layer"></div>
    </div>

    <button class="prim w-4" @click="goAbout"><span>{{$t("more")}}</span></button>

  </div>
</template>

<script>
import animatedTitle from '../animatedTitle.vue';

export default {
  name: 'aboutMuseumBlock',
  components: {
    animatedTitle
  },

  data() {
    return {
      offTop: 1,
      title:
      {
        language_uzlatin: 'Muzey haqida',
        language_ru: 'О музее',
        language_en: 'About museum',
        language_uzCyrillic: 'Музей ҳақида',
      },
      about: null,
    }
  },

  methods: {
    getOffsetTop() {
      this.offTop = document.getElementsByName('aboutMuseumBlock')[0]?.offsetTop - 400
    },
    async getHis() {
      const data = await this.$api.get('/home/about')
      this.about = data.data.result
    },
    goAbout() {
      this.$router.push('/museum-history')
    }
  },

  mounted() {
    this.getOffsetTop()
    this.getHis()
  }
}
</script>

<style>

</style>
