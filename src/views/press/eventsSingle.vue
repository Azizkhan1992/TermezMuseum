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

        <div class="w-a d-f fd-r align-c gap-24 cur-ptr">
          <Icons
            icon="share"
            size=""
          />
          <p class="commonP colorGreyD line-h-20">Поделиться</p>
        </div>

        <div class="w-a d-f fd-r gap-24 align-c">
          <p class="commonP colorGreyD line-h-20">Тэги:</p>

          <button class="singlePageTags">
            <span>Важно</span>
          </button>

          <button class="singlePageTags">
            <span>Конкурс</span>
          </button>

          <button class="singlePageTags">
            <span>История Узбекистана</span>
          </button>

          <button class="singlePageTags">
            <span>ururururu</span>
          </button>

          <button class="singlePageTags">
            <span>ururururu</span>
          </button>
        </div>
      </div>

    </div>

    <div class="w-100 ovr-hidden bor-r-20 mt-60 h-920p">
      <img src="@/assets/temporary/neandertal.jpg" alt="">
    </div>

    <div class="w-100 mt-60">
      <h4 v-html="description" class="commonD"></h4>
    </div>

    <div class="w-100 mt-60">
      <h3 class="commonT colorGreyD line-h-36">Отчет проведении мероприятия</h3>
    </div>

    <div class="w-100 mt-24">
      <h4 v-html="description" class="commonD"></h4>
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
      :currentPage="title"
      :prevPageName="prevPage.name"
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
  name: 'eventsSinglePage',

  components: {
    breadCrumbs,
    Icons,
    ImageCard,
    PaginatorDots,
    Subscriber
},

  data() {
    return {
      allInfos: this.$store.state.exhibitsInfo,
      title: this.$route.params.id,
      
      hiddenR: 1,
      playInterval: '',

      prevPage: {
        name: 'Мероприятия',
        link: '/events'
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
    }
  },

  methods: {
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

      console.log(this.imgs);
    },

    play() {
      this.playInterval = setInterval(() => {
        this.animation()
      }, 5000);
    }
  },

  mounted() {
    if(this.imgs.length >= 5) {
      this.play()
    }
  }
}
</script>

<style>

</style>