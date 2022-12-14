<template>
  <div class="mainPage">

    <div class="w-100 mt-120">
      <h2 class="grandTitle">{{ allInfos.title?.[$i18n.locale] }}</h2>
    </div>

    <div class="w-100 ovr-hidden bor-r-20 mt-60 h-920p exh-img">
      <img :src="allInfos.mainImage.path" alt="">
    </div>

    <div class="w-100 mt-60">
      <h4 v-html="allInfos.text?.[$i18n.locale]" class="commonD"></h4>
    </div>

    <div
        class="w-100 pad-t-48 fd-c gap-36 pad-b-48 pad-r-24p pad-l-24p box-brb ovr-hidden bor-r-20 backgrnd-white mt-60">

      <!-- Grid Start -->

      <div
          class="w-100 gap-12 fd-c exh-si-900"

      >
        <div class="w-100 gap-24">

          <div
              class="customGrid-r-w w-100 d-f fd-c gap-8"
          >
            <p class="commonP colorGreyD">{{$t("nameexhb")}}</p>
            <p class="commonP bold colorType">{{ allInfos.title?.[$i18n.locale] }}</p>
          </div>

          <div class="customGrid-r-w w-100 d-f fd-c gap-8">
            <p class="commonP colorGreyD">{{$t("category")}}</p>
            <p class="commonP bold colorType">{{ allInfos.additional.category.text?.[$i18n.locale]}}</p>
          </div>
          <div
              class="customGrid-r-w w-100 d-f fd-c gap-8"
          >
            <p class="commonP colorGreyD">{{$t("tags")}}</p>
            <p class="commonP bold colorType">{{ allInfos.additional.tags[0].text?.[$i18n.locale]}}</p>
          </div>
          <div
              class="customGrid-r-w w-100 d-f fd-c gap-8"
          >
            <p class="commonP colorGreyD">{{$t("exhType")}}</p>

            <p class="commonP bold colorType">{{ allInfos.additional.typeOfObject?.[$i18n.locale] }}</p>
          </div>


        </div>


        <hr v-if="idx !== chunkedInfo.length - 1" class="divider">
        <div class="w-100 gap-24">
          <div
              class="customGrid-r-w w-100 d-f fd-c gap-8"
          >
            <p class="commonP colorGreyD">{{$t("exhAuth")}}</p>
            <p class="commonP bold colorType">{{ allInfos.additional.author?.[$i18n.locale] }}</p>
          </div>
          <div
              class="customGrid-r-w w-100 d-f fd-c gap-8"
          >
            <p class="commonP colorGreyD">{{$t("dateCreate")}}</p>
            <p class="commonP bold colorType">{{ allInfos.createdAt }}</p>
          </div>
          <div
              class="customGrid-r-w w-100 d-f fd-c gap-8"
          >
            <p class="commonP colorGreyD">{{$t("createdPlace")}}</p>
            <p class="commonP bold colorType">{{ allInfos.additional.createdPlace?.[$i18n.locale] }}</p>
          </div>
          <div
              class="customGrid-r-w w-100 d-f fd-c gap-8"
          >
            <p class="commonP colorGreyD">{{$t("discoverIn")}}</p>
            <p class="commonP bold colorType">{{ allInfos.additional.foundDate }}</p>
          </div>

        </div>
        <hr v-if="idx !== chunkedInfo.length - 1" class="divider">
        <div class="w-100 gap-24">

          <div
              class="customGrid-r-w w-100 d-f fd-c gap-8"
          >
            <p class="commonP colorGreyD">{{$t("discoverPlace")}}</p>
            <p class="commonP bold colorType">{{ allInfos.additional.foundPlace?.[$i18n.locale] }}</p>
          </div>
          <div class="customGrid-r-w w-100 d-f fd-c gap-8">
            <p class="commonP colorGreyD">{{$t("usedMater")}}</p>
            <p class="commonP bold colorType">{{ allInfos.additional.usedMaterial.text?.[$i18n.locale] }}</p>
          </div>
          <div class="customGrid-r-w w-100 d-f fd-c gap-8">
            <p class="commonP colorGreyD">{{$t("usedTechnology")}}</p>
            <p class="commonP bold colorType">{{ allInfos.additional.usedTechnology.text?.[$i18n.locale] }}</p>
          </div>
          <div class="customGrid-r-w w-100 d-f fd-c gap-8">
            <p class="commonP colorGreyD">{{$t("sizeAndWeight")}}</p>
            <p class="commonP bold colorType">{{ allInfos.additional.sizeAndWeight.height }}</p>
            <p class="commonP bold colorType">{{ allInfos.additional.sizeAndWeight.width }}</p>
          </div>
        </div>
        <hr v-if="idx !== chunkedInfo.length - 1" class="divider">
        <div class="w-100 gap-24">

          <div
              class="customGrid-r-w w-100 d-f fd-c gap-8"
          >
            <p class="commonP colorGreyD">{{$t("additionInfo")}}</p>
            <p class="commonP bold colorType">{{ allInfos.additional.additionalInformation }}</p>
          </div>
          <div class="customGrid-r-w w-100 d-f fd-c gap-8">
            <p class="commonP colorGreyD">{{$t("theme")}}</p>
            <p class="commonP bold colorType">{{ allInfos.additional.subject?.[$i18n.locale] }}</p>
          </div>
          <div class="customGrid-r-w w-100 d-f fd-c gap-8">
            <p class="commonP colorGreyD">{{$t("dateBought")}}</p>
            <p class="commonP bold colorType">{{ allInfos.additional.purchasedDate }}</p>
          </div>
          <div class="customGrid-r-w w-100 d-f fd-c gap-8">
            <p class="commonP colorGreyD">{{$t("boughtFrom")}}</p>
            <p class="commonP bold colorType">{{ allInfos.additional.purchasedFrom?.[$i18n.locale] }}</p>

          </div>
        </div>
        <hr v-if="idx !== chunkedInfo.length - 1" class="divider">
        <div class="w-100 gap-24">

          <div
              class="customGrid-r-w w-100 d-f fd-c gap-8"
          >
            <p class="commonP colorGreyD">{{$t("sponsorship")}}</p>
            <p class="commonP bold colorType">{{ allInfos.additional.sponsorship?.[$i18n.locale] }}</p>
          </div>
          <div class="customGrid-r-w w-100 d-f fd-c gap-8">
            <p class="commonP colorGreyD">{{$t("registNumber")}}</p>
            <p class="commonP bold colorType">{{ allInfos.additional.registrationNumber }}</p>
          </div>
        </div>
      </div>
      <!-- Grid Stop -->
    </div>

    <div class="grid-2 w-100 mt-60">
      <div v-for="(photos,num) in allInfos.additional.additionalImages" :key="num" class="w-100 h-432p bor-r-20 ovr-hidden">
        <img class="w-100 h-100 obj-fit-cover" :src="photos.path" alt="">
      </div>

    </div>


    <breadCrumbs
        :currentPage="title"
        :prevPageName="prevPage.name"
        :prevPageLink="prevPage.link"
    />

  </div>
</template>

<script>
import breadCrumbs from '@/components/breadCrumbs.vue'

export default {
  name: 'exhibitsSinglePage',

  components: {
    breadCrumbs
  },

  data() {
    return {
      allInfos: [],
      title: this.$route.params.id,
      prevPage: {
        name: 'Картины',
        link: '/paintings'
      },
      description: `
        Головка из латуни (цинковая латунь с высоким содержанием свинца) отлита с использованием техники выплавляемого воска (cire perdue). Голова немного меньше в натуральную величину и выполнена в натуралистическом стиле. Головной убор, напоминающий корону, сложной конструкции. Основная трубчатая часть короны проходит вокруг головы трехслойной композицией. Верхний слой имеет полосу из четырех горизонтальных прямоугольников, представляющих собой плоские дискообразные бусины, увенчанные трубчатой бусиной, окрашенной в красный цвет, и кисточкой. Центральный слой имеет ряд вертикальных прямоугольников, представляющих собой трубчатые бусины с кисточками. Нижний слой имеет ряд розеток, окрашенных в красный цвет. Основная трубчатая часть короны также имеет выступающую дугу вокруг лба, состоящую из небольших трубчатых бусин, окаймленных рядом окрашенных в красный цвет перьев. На задней части тульи находится шейный чехол. В центральной части переплета восемнадцать вертикальных элементов, прорезанных для обозначения плетения со следами черной краски. Внизу и по бокам есть ряд розеток, окрашенных в красный цвет. Спереди над центральной короной возвышается гребень. Он представляет собой конический медальон с центральной выпуклостью, окруженный семью концентрическими кольцами, вероятно, представляющими собой бусины. За медальоном возвышается элемент плетения, оканчивающийся заостренным яйцевидным кончиком; оба элемента имеют следы черной краски.
        <br/>
        <br/>
        Лицо слегка удлиненное, с вертикальными насечками (исчерченностью). Две линии отверстий проходят между мочками ушей, одна проходит через угол шеи и челюсть, а вторая пересекает челюсть ниже нижней губы. Через верхнюю губу проходит двойная линия отверстий. Миндалевидные глаза маленькие по отношению к голове, надбровные дуги резко очерчены. Губы не исчерчены.
        <br/>
        <br/>
        Вокруг передней части шеи есть бороздки, представляющие кожные складки. В горловине спереди и с обеих сторон пробиты отверстия. На правой стороне челюсти имеется большое отверстие неправильной формы.
      `,
      chunkedInfo: [],
    }
  },
  methods: {
    async getSingleExhibits() {
      await this.$api.get('/collections/paintings/site/' + this.$route.query.exId)
          .then(resp => {
            this.allInfos = resp.data.result
          }), err => {
        console.log(err)
      }
    },
    chunker() {
      const chunkSize = 4
      let opts = this.allInfos
      for (let i = 0; i < opts.length; i += chunkSize) {
        const chunk = opts.slice(i, i + chunkSize);
        this.chunkedInfo.push(chunk)
      }
    }
  },
  mounted() {
    this.chunker()
    this.getSingleExhibits()
  }
}
</script>

<style>

</style>