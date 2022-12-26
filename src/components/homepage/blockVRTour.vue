<template>
  <div name="vrTour" class="block" v-show="threeD">

    <animatedTitle
      :animateAt="this.offTop"
      :titleName="this.title?.[$i18n.locale]"
    />

    <div class="wr-100 gap-24">
      <div class="w-50">
        <span class="vr-text">
            {{threeD?.title?.[$i18n.locale]}}
        </span>

        <button
          class="prim w-4 mt-a"
          @click="goToVr(threeD.link)"
        >
          <span>{{$t("gotoView")}}</span>
        </button>
      </div>

      <div class="w-50 vr-img-wr">
        <img class="vr" :src="threeD?.img?.path" alt="">
        <img class="vrIcon" src="@/assets/static/vrIcon.png" alt="">
      </div>
    </div>


  </div>
</template>

<script>
import animatedTitle from '../animatedTitle.vue'

export default {
  name: 'vrTourBlock',
  components: {
    animatedTitle
  },

  data() {
    return {
      offTop: 1,
      title:{
        language_uzCyrillic: 'Музей бўйлаб 3D саёҳат',
        language_ru: '3D Тур по музею',
        language_uzlatin: 'Muzey bo\'ylab 3D sayohat',
        language_en: '3D Tour in museum',
      },
      text:{
        language_uzCyrillic: 'Уйингиздан чиқмасдан Сурхондарёнинг ўтмишига саёҳат қилиб, таърифлаб бўлмас таассуротлар олишни хоҳлайсизми? Унда сизни 3Д музей экскурсиясига таклиф қиламиз.',
        language_ru: 'Хотите путешествовать в прошлое Сурхандарьи и получить неописуемые впечатления и при этом не выходя из дома? Тогда мы приглашаем вас в 3D Тур по музею.',
        language_uzlatin: `Uyingizdan chiqmasdan Surxondaryoning o'tmishiga sayohat qilib, ta'riflab bo'lmas taassurotlar olishni xohlaysizmi? Unda sizni 3D muzey ekskursiyasiga taklif qilamiz.`,
        language_en: 'Do you want to travel into the past of Surkhandarya and get indescribable impressions without leaving your home? Then we invite you to the 3D Museum Tour.',
      },
      threeD: {},
    }
  },

  methods: {
    getOffsetTop() {
      this.offTop = document.getElementsByName('vrTour')[0]?.offsetTop - 400
    },
    getThreeD() {
      const params = {
        page: 1,
        limit: 1
      }
      this.$store.dispatch('getVrTour', params)
      .then(() => {
        this.threeD = this.$store.state.vrTourItems[0]
        // console.log(this.threeD)
      })
    },
    goToVr(link){
      window.open(link, "_blank")
    }
  },

  mounted() {
    this.getOffsetTop();
    this.getThreeD();
  }
}
</script>

<style lang="scss">
.vr-img-wr{
  position: relative;
  align-items: center;
  justify-content: center;

  .vrIcon{
    position: absolute;
    top: 45%;
  }
}
</style>
