<template>
  <div class="mainPage">
    
    <div class="w-100 mt-120 singl-art">
      <h2 class="grandTitle txt-align-l">{{allDocuments?.title?.[$i18n.locale]}}</h2>
    </div>

    <div class="w-100 h-24p mt-80 art-items-wr">
      
      <div class="w-a d-f fd-r gap-64 art-items">
        <div class="w-a d-f fd-r align-c gap-24">
          <Icons
            icon="calendar"
            size=""
          />
          <p class="commonP colorGreyD line-h-20">{{ filPost(allDocuments?.createdAt) + " " + $t("year2") }}</p>
        </div>

        <div class="w-a d-f fd-r align-c gap-24">
          <Icons
            icon="eye"
            size=""
          />
          <p class="commonP colorGreyD line-h-20">{{$t('viewed')}}  {{ allDocuments?.numberOfViews }}</p>
        </div>

        <div class="w-a d-f fd-r align-c gap-24">
          <Icons
            icon="author"
            size=""
          />
          <p class="commonP colorGreyD line-h-20">{{ allDocuments?.author?.[$i18n.locale] }}</p>
        </div>

        <div class="w-a d-f fd-r align-c gap-24 cur-ptr">
          <Icons
            icon="share"
            size=""
          />
          <p class="commonP colorGreyD line-h-20">{{$t('share')}}</p>
        </div>

      </div>

    </div>


    <div class="w-100 ovr-hidden bor-r-20 mt-60 h-920p art-wr">
      <img :src="allDocuments?.img?.path" alt="">
    </div>

    <div class="w-100 mt-60">
      <h4 v-html="allDocuments?.text?.[$i18n.locale]" class="commonD"></h4>
    </div>




    <div class="w-100 gap-24 mt-60 singl-art-title">
      
      <div class="w-50 gap-24">
        <div class="w-100 gap-24">
          <p class="commonP line-h-20 colorGreyD">{{$t("countPage")}}:</p>
          <p class="commonP line-h-20 colorType bold">{{allDocuments?.pageCount}}</p>
        </div>

        <div class="w-100 gap-24">
          <p class="commonP line-h-20 colorGreyD">{{$t("datePublicate")}}:</p>
          <p class="commonP line-h-20 colorType bold">{{ filPost(allDocuments?.publishedAt) + " " + $t("year2") }}</p>
        </div>
      </div>

      <div class="w-50 gap-24">
        <div class="w-100 gap-24">
          <p class="commonP line-h-20 colorGreyD">{{$t("discipline")}}:</p>
          <p class="commonP line-h-20 colorType bold">{{allDocuments?.discipline?.[$i18n.locale]}}</p>
        </div>

        <div class="w-100 gap-24">
          <p class="commonP line-h-20 colorGreyD">{{$t("numberProduct")}}:</p>
          <p class="commonP line-h-20 colorType bold">{{allDocuments?.productNumber}}</p>
        </div>
      </div>

    </div>



    <!-- Card Start -->

    <div
      class="w-100 h-152p backgrnd-white mt-60 pad-24p ovr-hidden bor-r-20 box-brb align-c justify-c gap-24 art-down"
    >
      <img v-if="allDocuments?.file?.url?.path" class="obj-fit-cov h-64p" :src="require('@/assets/static/fileIcons/' + docTypeDetector(allDocuments?.file?.url?.path).toUpperCase() + '.png')" alt="">
      <div class="w-100 d-f fd-c h-104p">
        
        <p class="commonD bold h-60p">{{allDocuments?.title?.[$i18n.locale]}}</p>
        
        <div class="w-100 mt-a gap-48">
          <div class="w-a d-f fd-r align-c gap-12">
            <Icons
              icon="calendar"
              size="middle"
            />
            <p class="helpers">{{ filPost(allDocuments?.createdAt) + " " + $t("year2") }}</p>
          </div>

          <div class="w-a d-f fd-r align-c gap-12">
            <Icons
              icon="download"
              size="middle"
            />
            <p class="helpers">{{$t("downloads")}}:</p>
            <p class="mainers">{{allDocuments?.file?.NumberOfDownloads}}</p>
          </div>

          <div class="w-a d-f fd-r align-c gap-12 ml-a cur-ptr" @click="download(allDocuments.file.url.serverUrl, allDocuments.file.url.path)">
            <Icons
              icon="download"
              size="middle"
            />
            <p class="helpers colorPrim">{{$t("downloadDoc")}}</p>
          </div>
        </div>

      </div>
    </div>

    <!-- Card Stop -->

    <breadCrumbs
    v-if="allDocuments?.title?.[$i18n.locale]"
      :prevPageLink="prevPage.link"
      :prevPageName="prevPage.name[$i18n.locale]"
      :currentPage="allDocuments?.title?.[$i18n.locale]"
    />

  </div>
</template>

<script>
import Icons from '@/components/icons.vue'
import breadCrumbs from '@/components/breadCrumbs.vue'
import docTypeDetector from '@/mixins/docTypeDetector'
import axios from 'axios'

export default {
  name: 'articlesSinglePage',

  components: {
    Icons, breadCrumbs
  },

  data() {
    return {
      titleId: this.$route.params.id,
      articlesnfo: {
        pagesCount: 156,
        publishedDate: '22 июнь 2022г',
        discipline: 'Технология исполнения',
        productNumber: 'F1U31-PGE-UZ'
      },
      prevPage: {
        name: {
          language_uzCyrillic: 'Мақолалар',
          language_uzlatin: 'Maqolalar',
          language_ru: 'Статьи',
          language_en: 'Articles',
        },
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
      allDocuments: {},
      months: [
        {
          id: 1,
          monthName: {
            language_uzlatin: "Yanvar",
            language_uzCyrillic: "Январ",
            language_en: "January",
            language_ru: "Январь",
          },
        },
        {
          id: 2,
          monthName: {
            language_uzlatin: "Fevral",
            language_uzCyrillic: "Феврал",
            language_en: "February",
            language_ru: "Февраль",
          },
        },
        {
          id: 3,
          monthName: {
            language_uzlatin: "Mart",
            language_uzCyrillic: "Март",
            language_en: "March",
            language_ru: "Март",
          },
        },
        {
          id: 4,
          monthName: {
            language_uzlatin: "Aprel",
            language_uzCyrillic: "Aпрел",
            language_en: "April",
            language_ru: "Апреля",
          },
        },
        {
          id: 5,
          monthName: {
            language_uzlatin: "May",
            language_uzCyrillic: "Май",
            language_en: "May",
            language_ru: "Май",
          },
        },
        {
          id: 6,
          monthName: {
            language_uzlatin: "Iyun",
            language_uzCyrillic: "Июн",
            language_en: "June",
            language_ru: "Июнь",
          },
        },
        {
          id: 7,
          monthName: {
            language_uzlatin: "Iyul",
            language_uzCyrillic: "Июл",
            language_en: "July",
            language_ru: "Июль",
          },
        },
        {
          id: 8,
          monthName: {
            language_uzlatin: "Avgust",
            language_uzCyrillic: "Август",
            language_en: "August",
            language_ru: "Август",
          },
        },
        {
          id: 9,
          monthName: {
            language_uzlatin: "Sentabr",
            language_uzCyrillic: "Сентабр",
            language_en: "September",
            language_ru: "Сентябрь",
          },
        },
        {
          id: 10,
          monthName: {
            language_uzlatin: "Oktabr",
            language_uzCyrillic: "Октабр",
            language_en: "Oktober",
            language_ru: "Октябрь",
          },
        },
        {
          id: 11,
          monthName: {
            language_uzlatin: "Noyabr",
            language_uzCyrillic: "Ноябр",
            language_en: "November",
            language_ru: "Ноябрь",
          },
        },
        {
          id: 12,
          monthName: {
            language_uzlatin: "Dekabr",
            language_uzCyrillic: "Декабр",
            language_en: "December",
            language_ru: "Декабрь",
          },
        },
      ],
    }
  },
  mixins: [docTypeDetector],
  mounted(){
    this.getSingleArt()
  },

  methods: {
    async getSingleArt(){
      await this.$api.get(`/press/article/site/${this.titleId}`)
      .then(resp => {
        this.allDocuments = resp.data.result
        // console.log(this.allDocuments)
      }).catch(err => {console.log(err)})
    },
    filPost(val) {
      if (val) {
        
        let temp = val.split("T");
        let year = new Date(temp[0]).getFullYear();
        let month = new Date(temp[0]).getMonth();
        let day = new Date(temp[0]).getDate();
        let monId
        if(month !== 11){
          monId = month + 1;
        }else{monId = 11}

        let monthT = this.months[monId].monthName?.[this.$i18n.locale];

        return day + " " + monthT + " " + year;
      }
    },
    download(name, path){
      // console.log(path)
      axios({
        method: 'get',
        url: path,
        responseType: 'arraybuffer'
      })
      // console.log(name.split('/')[2])
      .then(resp => {
        const title = name.split('/')[2]
              const url = window.URL.createObjectURL(new Blob([resp.data]))
              const link = document.createElement('a')
      
              link.href = url
              link.setAttribute('download', title)
              document.body.appendChild(link)
              link.click()
      }).catch(err => console.log(err))

    }
  }
}
</script>

<style lang="scss">
.art-wr{
  height: fit-content;

  img{
    width: 100%;
    object-fit: cover;
  }
}

@media screen and (max-width: 899px) {
  .mainPage{
    .singl-art{
      h2{
        line-height: 42px;
      }
    }

    .art-items-wr{
      height: fit-content;

      .art-items{
        flex-direction: column;
        gap: 24px;
      }
    }

    .singl-art-title{
      flex-direction: column;

      .w-50{
        width: 100%;
      }
    }

    .art-down{
      height: 210px;

      img{
        width: calc(20% - 12px);
        height: fit-content;
      }

      .h-104p{
        width: calc(80% - 12px);
        height: fit-content;
        row-gap: 12px;

        .w-100{
          width: 100%;
          flex-direction: column;
          gap: 12px;

          .ml-a{
            margin-left: 0;
          }
        }
      }
    }
  }
}
</style>