<template>
  <div name="museumsFundBlock" class="block" v-show="fond !== undefined">

    <animatedTitle
      :animateAt="offTop"
      :titleName="title[$i18n.locale]"
    />

    <div class="w-100 bor-r-20 ovr-hidden pos-rel h-680p">

      <div class="w-50 pad-48p box-brb ml-a z-idx2">

        <h3 class="commonT"> {{ fond?.title[$i18n.locale] }} </h3>

        <p class="commonP mt-60">
          {{ fond?.text[$i18n.locale] }}
        </p>

        <a :href="fond?.link" target="_blank" class="white-ghost mt-a ml-a w-3 h-48p m__btn_100 put_center">
          <span>{{$t("donate")}}</span>
        </a>

      </div>

      <div class="dark-layer-hrz"></div>
      <img class="back-img" src="@/assets/static/main.jpg" alt="">

    </div>

  </div>
</template>

<script>
import animatedTitle from '../animatedTitle.vue'

export default {
  name: 'blockMuseumsFund',

  components: {
    animatedTitle
  },

  data() {
    return {
      offTop: 1,
      title:{
        language_uzCyrillic: 'Музей фонди',
        language_ru: 'Фонд музея',
        language_uzlatin: 'Muzey fondi',
        language_en: 'Museum Foundation',
      },
      fond: null
    }
  },

  methods: {
    getOffsetTop() {
      this.offTop = document.getElementsByName('museumsFundBlock')[0]?.offsetTop - 400
    },
    async getFondMuseum() {
      await this.$api.get('/home/fondMuseum/site')
      .then(resp => {
        this.fond = resp.data.result
        // console.log(this.fond)
      }), err => {console.log(err)}
    },
  },

  mounted() {
    this.getOffsetTop()
    this.getFondMuseum()
  }
}
</script>

<style>

</style>
