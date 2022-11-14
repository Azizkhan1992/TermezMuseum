<template>
  <div name="vrTour" class="block">

    <animatedTitle
      :animateAt="this.offTop"
      :titleName="this.title[$i18n.locale]"
    />

    <div class="wr-100 gap-24">
      <div class="w-50">
        <span class="vr-text">
            {{text[$i18n.locale]}}
        </span>
        
        <button
          class="prim w-4 mt-a"
        >
          <span>{{$t("gotoView")}}</span>
        </button>
      </div>

      <div class="w-50">
        <img class="vr" src="@/assets/static/vr.jpg" alt="">
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
    }
  },

  methods: {
    getOffsetTop() {
      this.offTop = document.getElementsByName('vrTour')[0].offsetTop - 400
    }
  },

  mounted() {
    this.getOffsetTop()
  }
}
</script>

<style>

</style>