<template>
  <div class="mainPage">
    
    <div class="w-100 mt-120">
      <h2 class="grandTitle txt-align-l">{{title}}</h2>
    </div>

    <div class="w-100 h-24p mt-80">
      
      <div class="w-a d-f fd-r gap-64">
        <div class="w-a d-f fd-r align-c gap-24">
          <Icons
            icon="calendar"
            size=""
          />
          <p class="commonP colorGreyD line-h-20">22 июнь 2022г</p>
        </div>

        <div class="w-a d-f fd-r align-c gap-24">
          <Icons
            icon="eye"
            size=""
          />
          <p class="commonP colorGreyD line-h-20">Посмотрели  1 358</p>
        </div>

        <div class="w-a d-f fd-r align-c gap-24">
          <Icons
            icon="author"
            size=""
          />
          <p class="commonP colorGreyD line-h-20">Касымов А</p>
        </div>

        <div class="w-a d-f fd-r align-c gap-24 cur-ptr">
          <Icons
            icon="share"
            size=""
          />
          <p class="commonP colorGreyD line-h-20">Поделиться</p>
        </div>

      </div>

    </div>


    <div class="w-100 ovr-hidden bor-r-20 mt-60 h-920p">
      <img src="@/assets/temporary/neandertal.jpg" alt="">
    </div>

    <div class="w-100 mt-60">
      <h4 v-html="description" class="commonD"></h4>
    </div>




    <div class="w-100 gap-24 mt-60">
      
      <div class="w-50 gap-24">
        <div class="w-100 gap-24">
          <p class="commonP line-h-20 colorGreyD">Количество страниц:</p>
          <p class="commonP line-h-20 colorType bold">{{articlesnfo.pagesCount}} стр.</p>
        </div>

        <div class="w-100 gap-24">
          <p class="commonP line-h-20 colorGreyD">Дата публикации:</p>
          <p class="commonP line-h-20 colorType bold">{{articlesnfo.publishedDate}} стр.</p>
        </div>
      </div>

      <div class="w-50 gap-24">
        <div class="w-100 gap-24">
          <p class="commonP line-h-20 colorGreyD">Дисциплина:</p>
          <p class="commonP line-h-20 colorType bold">{{articlesnfo.discipline}} стр.</p>
        </div>

        <div class="w-100 gap-24">
          <p class="commonP line-h-20 colorGreyD">Номер продукта:</p>
          <p class="commonP line-h-20 colorType bold">{{articlesnfo.productNumber}} стр.</p>
        </div>
      </div>

    </div>



    <!-- Card Start -->

    <div
      class="w-100 h-152p backgrnd-white mt-60 pad-24p ovr-hidden bor-r-20 box-brb align-c justify-c gap-24"
      v-for="doc in allDocuments"
      :key="doc.id"
    >
      <img class="obj-fit-cov h-64p" :src="require('@/assets/static/fileIcons/' + doc.fileType + '.png')" alt="">
      <div class="w-100 d-f fd-c h-104p">
        
        <p class="commonD bold h-60p">{{doc.title}}</p>
        
        <div class="w-100 mt-a gap-48">
          <div class="w-a d-f fd-r align-c gap-12">
            <Icons
              icon="calendar"
              size="middle"
            />
            <p class="helpers">{{doc.publishedDate}}</p>
          </div>

          <div class="w-a d-f fd-r align-c gap-12">
            <Icons
              icon="download"
              size="middle"
            />
            <p class="helpers">Количество скачиваний:</p>
            <p class="mainers">{{doc.downloadsNumber}}</p>
          </div>

          <div class="w-a d-f fd-r align-c gap-12 ml-a cur-ptr">
            <Icons
              icon="download"
              size="middle"
            />
            <p class="helpers colorPrim">Скачать документ</p>
          </div>
        </div>

      </div>
    </div>

    <!-- Card Stop -->

    <breadCrumbs
      :prevPageLink="prevPage.link"
      :prevPageName="prevPage.name"
      :currentPage="title"
    />

  </div>
</template>

<script>
import Icons from '@/components/icons.vue'
import breadCrumbs from '@/components/breadCrumbs.vue'

export default {
  name: 'articlesSinglePage',

  components: {
    Icons, breadCrumbs
  },

  data() {
    return {
      title: this.$route.params.id,
      articlesnfo: {
        pagesCount: 156,
        publishedDate: '22 июнь 2022г',
        discipline: 'Технология исполнения',
        productNumber: 'F1U31-PGE-UZ'
      },
      prevPage: {
        name: 'Статьи',
        link: '/articles'
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
      allDocuments: [
        {
          id: 1,
          title: 'Технологии древних скульпторов. Как они прилумывали новые технологии и применяли в широком круге',
          publishedDate: '22 июнь 2022г',
          downloadsNumber: '1 694',
          link: '',
          fileType: 'PDF'
        }
      ]
    }
  }
}
</script>

<style>

</style>