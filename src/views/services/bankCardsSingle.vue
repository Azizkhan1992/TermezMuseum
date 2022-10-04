<template>
  <div class="mainPage">

    <div class="w-100 mt-120">
      <h2 class="grandTitle txt-align-l">{{title}}</h2>
    </div>

    <div class="w-100 mt-80 gap-48">
      <h4 class="commonT colorGreyD">{{$t("cardType")}}:</h4>
      <div class="w-a d-f fd-r gap-8">
        <h4 class="commonT colorType">VISA</h4>
      </div>
    </div>


    <div class="w-100 h-24p mt-80">
      <div class="w-a d-f fd-r gap-64">

        <div class="w-a d-f fd-r align-c gap-24">
          <Icons
            icon="eye"
            size=""
          />
          <p class="commonP colorGreyD line-h-20">{{$t("viewed")}}  1 358</p>
        </div>

        <div class="w-a d-f fd-r align-c gap-24 cur-ptr">
          <Icons
            icon="share"
            size=""
          />
          <p class="commonP colorGreyD line-h-20">{{$t("share")}}</p>
        </div>

      </div>
    </div>



    <div class="w-100 ovr-hidden pad-24p box-brb backgrnd-white bor-r-20 mt-60 h-920p">
      <img class="bankCard-img obj-fit-con" src="@/assets/temporary/bank-card-img.png" alt="">
    </div>

    <div class="w-100 mt-60">
      <h4 class="commonT colorGreyD">{{$t("briefDescDesign")}}:</h4>
    </div>

    <div class="w-100 mt-24">
      <h4 v-html="description" class="commonD"></h4>
    </div>


    <div class="w-100 mt-80 gap-48">
      <h4 class="commonT colorGreyD">{{$t("purchasedBank")}}:</h4>
    </div>


    <div class="grid-4 r-gap-60">

      <div
        class="w-3 cur-ptr"
        v-for="bank in allBanks"
        :key="bank.id"
      >
        <div class="w-100 pad-24p backgrnd-white ovr-hidden asp-sqr bor-r-20 align-c justify-c box-brb">
          <img class="bankCard-img obj-fit-con" :src="require('@/assets/static/bankImgs/bank-' + bank.img + '.png')" alt="">
        </div>
        <p class="commonT colorType txt-align-c align-c justify-c mt-24 w-100">{{bank.title}}</p>
      </div>

    </div>


    <breadCrumbs
      :prevPageLink="prevPage.link"
      :prevPageName="prevPage.name[$i18n.locale]"
      :currentPage="title"
    />

  </div>
</template>

<script>
import Icons from '@/components/icons.vue'
import breadCrumbs from '@/components/breadCrumbs.vue'

export default {
  name: 'bankCardsSinglePage',

  components: {
    Icons, breadCrumbs
  },

  data() {
    return {
      allBanks: this.$store.state.banks,
      title: this.$route.params.id,

      prevPage: {
        name:{
          uz: 'Bank kartalari',
          uzcyr: 'Банк карталари',
          ru: 'Банковские карты',
          en: 'Bank cards',
        },
        link: '/bank-cards'
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
    }
  }
}
</script>

<style>

</style>