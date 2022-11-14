<template>
  <div name="mobileAppBlock" class="block" v-if="mobileApp != null">

    <animatedTitle
      :animateAt="offTop"
      :titleName="title[$i18n.locale]"
    />

    <div class="w-100 gap-24   h-720p">

      <div class="w-50 pos-rel bor-r-20 ovr-hidden">
        <img class="back-img" :src="mobileApp.imageMobileApp.extraImage.path ? mobileApp.imageMobileApp.extraImage.path : mobileApp.imageMobileApp.mainImage.path" alt="err">
      </div>

      <div class="w-50">
        <p class="commonP rem-13 clr-type ta-r" v-html="mobileApp?.title[$i18n.locale]">

        </p>

        <div class="w-100 mt-a h-72p gap-24">
          <a :href="mobileApp.appStoreLink" target="_blank" class="market-btn w-3">
            <img src="@/assets/icons/apple-logo.svg" alt="">
            <div class="aligner">
              <p class="appleFontReg">{{$t("downloadApp")}}</p>
              <span class="appleFontBold">App Store</span>
            </div>
          </a>

          <a :href="mobileApp.playMarketLink" target="_blank" class="market-btn w-3">

            <img src="@/assets/icons/google-logo.svg" alt="">
            <div class="aligner">
              <p class="appleFontReg">{{$t("appAvailable")}}</p>
              <span class="googleFontBold">Google Play</span>
            </div>

          </a>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import animatedTitle from '../animatedTitle.vue'

export default {
  name: 'blockMobileApp',

  components: {
    animatedTitle
  },

  data() {
    return {
      offTop: 1,
      title:{
        language_uzlatin: 'Mobil ilova',
        language_ru: 'Мобильное приложение',
        language_uzCyrillic: 'Мобил илова',
        language_en: 'Mobile application',
      },
      mobileApp: null,
      txt: {
        ru:`Узбекистан расположена в раю культурных и природных богатств, которые считаются общим достоянием всего человечества и имеют общечеловеческие ценности. Со своей древней историей, культурными кодами, географическими исследованиями и расширениями она обладает характеристиками очень ценной страны для всего мира.

Музеи Узбекистан, которые ждут с распростертыми объятиями тысячи лет, теперь находятся всего в одном приложении. Загрузите приложение сейчас и познакомьтесь со своим прошлым.

Узбекистан расположена в раю культурных и природных богатств, которые считаются общим достоянием всего человечества и имеют общечеловеческие ценности. Со своей древней историей, культурными кодами, географическими исследованиями и расширениями она обладает характеристиками очень ценной страны для всего мира.`,
          uz: `O‘zbekiston butun insoniyatning umumiy merosi hisoblangan, umuminsoniy qadriyatlarga ega bo‘lgan madaniy va tabiiy boyliklar jannatida joylashgan. Oʻzining qadimiy tarixi, madaniy kodlari, geografik izlanishlari va kengayishlari bilan butun dunyo uchun juda qadrli mamlakat xususiyatlariga ega.

Ming yillar davomida quchoq ochib intiqlik bilan kutgan O‘zbekiston muzeylari endi faqat bitta ilovada. Ilovani hozir yuklab oling va o'tmishingizni bilib oling.

O‘zbekiston butun insoniyatning umumiy merosi hisoblangan, umuminsoniy qadriyatlarga ega bo‘lgan madaniy va tabiiy boyliklar jannatida joylashgan. Oʻzining qadimiy tarixi, madaniy kodlari, geografik izlanishlari va kengayishlari bilan butun dunyo uchun juda qadrli mamlakat xususiyatlariga ega.`,
          uzcyr: `Ўзбекистон бутун инсониятнинг умумий мероси ҳисобланган, умуминсоний қадриятларга эга бўлган маданий ва табиий бойликлар жаннатида жойлашган. Ўзининг қадимий тарихи, маданий кодлари, географик изланишлари ва кенгайишлари билан бутун дунё учун жуда қадрли мамлакат хусусиятларига эга.

Минг йиллар давомида қучоқ очиб интиқлик билан кутган Ўзбекистон музейлари энди фақат битта иловада. Иловани ҳозир юклаб олинг ва ўтмишингизни билиб олинг.

Ўзбекистон бутун инсониятнинг умумий мероси ҳисобланган, умуминсоний қадриятларга эга бўлган маданий ва табиий бойликлар жаннатида жойлашган. Ўзининг қадимий тарихи, маданий кодлари, географик изланишлари ва кенгайишлари билан бутун дунё учун жуда қадрли мамлакат хусусиятларига эга.`,
          en: `Uzbekistan is located in a paradise of cultural and natural resources, which are considered the common heritage of all mankind and have universal values. With its ancient history, cultural codes, geographical explorations and expansions, it has the characteristics of a very valuable country for the whole world.

Museums of Uzbekistan, which have been waiting with open arms for thousands of years, are now in just one application. Download the app now and get to know your past.

Uzbekistan is located in a paradise of cultural and natural resources, which are considered the common heritage of all mankind and have universal values. With its ancient history, cultural codes, geographical explorations and expansions, it has the characteristics of a very valuable country for the whole world.`
          }
    }
  },

  methods: {
    getOffsetTop() {
      this.offTop = document.getElementsByName('mobileAppBlock')[0]?.offsetTop - 400
    },
    async getMobileApp() {
      const data = await this.$api('/home/mobileApp');
      this.mobileApp = data.data.mobileAppDocument
    },
  },

  mounted() {
    this.getOffsetTop()
    this.getMobileApp()
  }
}
</script>

<style>

</style>
