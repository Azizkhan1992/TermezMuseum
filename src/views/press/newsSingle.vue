<template>
  <div class="mainPage">

    <div class="w-100 mt-120">
      <h2 class="grandTitle txt-align-l">{{allInfos?.title?.[$i18n.locale]}}</h2>
    </div>

    <div class="w-100 fd-c gap-24 mt-80">
      
      <div class="w-a d-f fd-r gap-64">
        <div class="w-a d-f fd-r align-c gap-24">
          <Icons
            icon="calendar"
            size=""
          />
          <p class="commonP colorGreyD line-h-20">{{ filPost(allInfos?.createdAt) + " " + $t("year2") }}</p>
        </div>

        <div class="w-a d-f fd-r align-c gap-24">
          <Icons
            icon="eye"
            size=""
          />
          <p class="commonP colorGreyD line-h-20">{{$t("viewed")}}  {{ allInfos?.numberOfViews }}</p>
        </div>

        <div class="w-a d-f fd-r align-c gap-24">
          <Icons
            class="cur-ptr"
            icon="like"
            size=""
          />
          <p class="commonP colorGreyD line-h-20">{{ allInfos?.numberOfLikes }}</p>
        </div>

        <div class="w-a d-f fd-r align-c gap-24">
          <Icons
            class="cur-ptr"
            icon="dislike"
            size=""
          />
          <p class="commonP colorGreyD line-h-20">{{ allInfos?.numberOfDislikes }}</p>
        </div>

        <div class="w-a d-f fd-r align-c gap-24 cur-ptr"
        @click="shareIt(allInfos)"
        >
          <Icons
            icon="share"
            size=""
          />
          <p class="commonP colorGreyD line-h-20">{{$t("share")}}</p>
        </div>
      </div>

      <div class="w-a d-f fd-r gap-24 align-c">
        <p class="commonP colorGreyD line-h-20">{{$t("tags")}}:</p>

        <button class="singlePageTags" v-for="el,index in topTags" :key="index">
          <span>{{el.name[$i18n.locale]}}</span>
        </button>
      </div>

    </div>

    <div class="w-100 ovr-hidden bor-r-20 mt-60 h-920p img-wr">
      <img :src="allInfos?.mainImage?.common?.path" alt="">
    </div>

    <div class="w-100 mt-60">
      <h4 v-html="allInfos?.text?.[$i18n.locale]" class="commonD"></h4>
    </div>

    <!-- Static Block Start -->

    <div
      v-if="imgs.length < 4"
      class="w-100 justify-c gap-24 mt-60"
    >
      
      <div
        v-for="img in imgs"
        :key="img.id"
        class="w-4 h-320p pos-rel bor-r-20 ovr-hidden cur-ptr"
      >
        <div class="dark-layer-solid"></div>
        <img class="back-img" :src="require('@/assets/temporary/' + img.img + '.png')" alt="">
      </div>

    </div>

    <!-- Static Block Stop -->

    <!-- Static Grid Start -->

    <div
      v-else-if="imgs.length == 4"
      class="grid-2 w-100 mt-60"
    >
      
      <div
        v-for="img in imgs"
        :key="img.id"
        class="w-100 h-432p pos-rel bor-r-20 ovr-hidden cur-ptr"
      >
        <div class="dark-layer-solid"></div>
        <img class="back-img" :src="require('@/assets/temporary/' + img.img + '.png')" alt="">
      </div>

    </div>

    <!-- Static Grid Stop -->

    <!-- Slider Carousel Start -->

    <div
      v-else
      class="w-100 ovr-hidden pos-rel gap-24 mt-60"
    >

      <ImageCard
        v-for="img in imgs"
        :key="img.id"
        :id="img.id"
        :img="img.img"
        :link="img.link"
        :hiddenR="hiddenRChecker(img.id)"
        :hiddenL="hiddenLChecker(img.id)"
      />

    </div>

    <PaginatorDots
      v-if="imgs.length > 4"
      @left="prev"
      @right="next"
    />

    <Subscriber
      class="mt-80imp"
    />


    <breadCrumbs
    v-if="allInfos?.title"
      :currentPage="allInfos?.title?.[$i18n.locale]"
      :prevPageName="prevPage.name[$i18n.locale]"
      :prevPageLink="prevPage.link"
    />

  </div>
</template>

<script>
import breadCrumbs from '@/components/breadCrumbs.vue'
import Icons from '@/components/icons.vue'
import ImageCard from '@/components/imageCard.vue'
import PaginatorDots from '@/components/paginatorDots.vue'
import Subscriber from '@/components/subscriber.vue'

export default {
  name: 'newsSinglePage',

  components: {
    breadCrumbs,
    Icons,
    ImageCard,
    PaginatorDots,
    Subscriber
},

  data() {
    return {
      // allInfos: this.$store.state.exhibitsInfo,
      allInfos: {},
      // title: this.$route.params.id,
      
      hiddenR: 1,
      playInterval: '',
      ID: this.$route.params.id,
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

      prevPage: {
        name:  {
          language_uzlatin: 'Yangiliklar',
          language_uzCyrillic: 'Янгиликлар',
          language_ru: 'Новости',
          language_en: 'News',
        },
        link: '/news'
      },
      topTags: [
          {
            id: 1,
            name: {
              language_uzlatin: "Muhim",
              language_ru: "Важно",
              language_uzCyrillic: "Муҳим",
              language_en: "Important",
            },
          },
          {
            id: 2,
            name: {
              language_uzlatin: "Konkurs",
              language_ru: "Конкурс",
              language_uzCyrillic: "Конкурс",
              language_en: "Competition",
            },
          },
          {
            id: 3,
            name: {
              language_uzlatin: "O'zbekiston tarixi",
              language_ru: "История Узбекистана",
              language_uzCyrillic: "Ўзбекистон тарихи",
              language_en: "History of Uzbekistan",
            },
          },
        ],
      description: `
        Головка из латуни (цинковая латунь с высоким содержанием свинца) отлита с использованием техники выплавляемого воска (cire perdue). Голова немного меньше в натуральную величину и выполнена в натуралистическом стиле. Головной убор, напоминающий корону, сложной конструкции. Основная трубчатая часть короны проходит вокруг головы трехслойной композицией. Верхний слой имеет полосу из четырех горизонтальных прямоугольников, представляющих собой плоские дискообразные бусины, увенчанные трубчатой бусиной, окрашенной в красный цвет, и кисточкой. Центральный слой имеет ряд вертикальных прямоугольников, представляющих собой трубчатые бусины с кисточками. Нижний слой имеет ряд розеток, окрашенных в красный цвет. Основная трубчатая часть короны также имеет выступающую дугу вокруг лба, состоящую из небольших трубчатых бусин, окаймленных рядом окрашенных в красный цвет перьев. На задней части тульи находится шейный чехол. В центральной части переплета восемнадцать вертикальных элементов, прорезанных для обозначения плетения со следами черной краски. Внизу и по бокам есть ряд розеток, окрашенных в красный цвет. Спереди над центральной короной возвышается гребень. Он представляет собой конический медальон с центральной выпуклостью, окруженный семью концентрическими кольцами, вероятно, представляющими собой бусины. За медальоном возвышается элемент плетения, оканчивающийся заостренным яйцевидным кончиком; оба элемента имеют следы черной краски.
        <br/>
        <br/>
        Лицо слегка удлиненное, с вертикальными насечками (исчерченностью). Две линии отверстий проходят между мочками ушей, одна проходит через угол шеи и челюсть, а вторая пересекает челюсть ниже нижней губы. Через верхнюю губу проходит двойная линия отверстий. Миндалевидные глаза маленькие по отношению к голове, надбровные дуги резко очерчены. Губы не исчерчены.
        <br/>
        <br/>
        Вокруг передней части шеи есть бороздки, представляющие кожные складки. В горловине спереди и с обеих сторон пробиты отверстия. На правой стороне челюсти имеется большое отверстие неправильной формы.
      `,
      imgs: [
        {id: 1, img: '1'},
        {id: 2, img: '2'},
        {id: 3, img: '3'},
        {id: 4, img: '4'},
        {id: 5, img: '5'},
      ],
    }
  },

  computed: {
    shown() {
      if(
        this.hiddenR !== true &&
        this.hiddenL !== true
      ) {
        return true
      } else return false
    },
    getId(){
      let temp = this.ID.split('_')
      // console.log(temp[1])
      return temp[1]
    }
  },

  methods: {

    async getSingleNews(){
      await this.$api.get(`press/news/site/${this.getId}`)
      .then(resp => {
        this.allInfos = resp.data.result
        // console.log(this.allInfos)
      }), err => {console.log(err)}
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
        }else {monId = 11}
        
        let monthT = this.months[monId].monthName?.[this.$i18n.locale];
        
        return day + " " + monthT + " " + year;
      }
    },
    async shareIt(event) {
      // console.log(event)
      if(navigator.canShare) {
        navigator.share({
          title: event.title?.[this.$i18n.locale],
          text: event.text?.[this.$i18n.locale],
          url: `${window.location.pathname}/${event._id}`
        })
      } else {
        try {
          await navigator.clipboard.writeText(`${window.location.pathname}/${event._id}`);
          alert('Copied');
        } catch($e) {
          alert('Cannot copy');
        }
      }
    },

    prev() {
      clearInterval(this.playInterval)

      const slideLen = this.imgs.length
      let firstItem = this.imgs.pop()

      this.imgs.unshift(firstItem)

      if(this.hiddenR !== 1) {
        this.hiddenR --
      } else this.hiddenR = slideLen

      this.play()
    },

    next() {
      clearInterval(this.playInterval)

      const slideLen = this.imgs.length
      let firstItem = this.imgs.shift()

      this.imgs.push(firstItem)

      if(this.hiddenR !== slideLen) {
        this.hiddenR ++
      } else this.hiddenR = 1

      this.play()
    },

    hiddenRChecker(id) {
      if(id == this.hiddenR) {
        return true
      } else return false
    },

    hiddenLChecker(id) {
      const shown = []

      for(let i = 1; i <= 3; i++) {
        shown.push(this.imgs[i].id)
      }

      if(shown.includes(id) == true && id !== this.hiddenR) {
        return false
      } else return true
    },

    animation() {
      const slideLen = this.imgs.length
      let firstItem = this.imgs.shift()

      this.imgs.push(firstItem)

      if(this.hiddenR !== slideLen) {
        this.hiddenR ++
      } else this.hiddenR = 1

    },

    play() {
      this.playInterval = setInterval(() => {
        this.animation()
      }, 5000);
    }
  },

  mounted() {
    this.getSingleNews()
    if(this.imgs.length >= 5) {
      this.play()
    }
  }
}
</script>

<style lang="scss">
.img-wr{
  height: fit-content;
  img{
    width: 100%;
    object-fit: contain;
  }
}
</style>