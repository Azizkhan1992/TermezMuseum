<template>
  <div name="aboutMuseumBlock" class="block">
    <animatedTitle
      :animateAt="this.offTop"
      :titleName="this.title[$i18n.locale]"
    />

    <div class="mainPhoto">
      <img class="mainImage" src="@/assets/static/main.jpg" alt="">
      <p>{{txt[$i18n.locale]}}</p>
      <div class="dark-layer"></div>
    </div>

    <button class="prim w-4"><span>{{$t("more")}}</span></button>
    
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
        uz: 'Muzey haqida',
        ru: 'О музее',
        en: 'About museum',
        uzcyr: 'Музей ҳақида',
      },
      txt:{
        ru: `Термезский археологический музей является единственным археологическим музеем в 
      нашей стране и относится к числу специализированных музеев. Этот музей является одним 
      из самых замечательных мест нашего города, в котором возрождается история древнего Сурханского 
      оазиса на протяжении тысячелетий. Термезский археологический музей состоит из вестибюля, 9 основных 
      выставочных залов, нумизматического выставочного зала, выставочного зала, посвященного японскому 
      археологу Като Кюдзо, небольшого выставочного зала и галереи под крыльцом. В музее также есть 
      библиотека с редкими рукописями и литературой. По состоянию на 2020 год общее количество экспонатов 
      в фонде Термезского археологического музея составляет более 100 тысяч. Из них более 70 000 экспонатов 
      археологии и около 30 000 экспонатов, принадлежащих нумизматическому фонду.`,
        uz: `Termiz arxeologiya muzeyi mamlakatdagi yagona arxeologiya muzeyidir
      mamlakatimiz va ixtisoslashgan muzeylardan biri hisoblanadi. Bu muzey bitta
      shahrimizning eng diqqatga sazovor joylari, qadimiy Surxon tarixi
      ming yillar davomida voha. Termiz arxeologiya muzeyi vestibyul, 9 ta asosiy
      ko'rgazma zallari, numizmatik ko'rgazma zali, yaponlarga bag'ishlangan ko'rgazma zali
      arxeolog Kato Kyuzo, ayvon ostidagi kichik ko'rgazma zali va galereya. Muzeyda ham bor
      nodir qoʻlyozma va adabiyotlarga ega kutubxona. 2020 yil holatiga ko'ra, eksponatlarning umumiy soni
      Termiz arxeologiya muzeyi fondida 100 mingdan ortiq. Ulardan 70 mingdan ortiq eksponatlar
      arxeologiya va numizmatika fondiga tegishli 30 mingga yaqin eksponatlar.`,
        uzcyr: `Термиз археология музейи мамлакатдаги ягона археология музейидир
      мамлакатимиз ва ихтисослашган музейлардан бири ҳисобланади. Бу музей битта
      шаҳримизнинг энг диққатга сазовор жойлари, қадимий Сурхон тарихи
      минг йиллар давомида воҳа. Термиз археология музейи вестибюл, 9 та асосий
      кўргазма заллари, нумизматик кўргазма зали, японларга бағишланган кўргазма зали
      археолог Като Кюзо, айвон остидаги кичик кўргазма зали ва галерея. Музейда ҳам бор
      нодир қўлёзма ва адабиётларга эга кутубхона. 2020 йил ҳолатига кўра, экспонатларнинг умумий сони
      Термиз археология музейи фондида 100 мингдан ортиқ. Улардан 70 мингдан ортиқ экспонатлар
      археология ва нумизматика фондига тегишли 30 мингга яқин экспонатлар.`,
        en: `Termez Archaeological Museum is the only archaeological museum in
      our country and is one of the specialized museums. This museum is one
      of the most remarkable places of our city, in which the history of the ancient Surkhan
      oasis for thousands of years. Termez Archaeological Museum consists of a vestibule, 9 main
      exhibition halls, numismatic exhibition hall, exhibition hall dedicated to Japanese
      archaeologist Kato Kyuzo, a small exhibition hall and gallery under the porch. The museum also has
      library with rare manuscripts and literature. As of 2020, the total number of exhibits
      in the fund of the Termez Archaeological Museum is more than 100 thousand. Of these, more than 70,000 exhibits
      archeology and about 30,000 exhibits belonging to the numismatic fund.`,
      }
    }
  },

  methods: {
    getOffsetTop() {
      this.offTop = document.getElementsByName('aboutMuseumBlock')[0].offsetTop - 400
    }
  },

  mounted() {
    this.getOffsetTop()
  }
}
</script>

<style>

</style>