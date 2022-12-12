<template>
  <div class="mainPage"
  @mouseup="stopRotate"
    @touchend="mobileStopRotate"
  >
    
    <div class="w-100 mt-120">
      <h2 class="grandTitle txt-align-l">{{title?.[$i18n.locale]}}</h2>
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


    <div class="w-100 ovr-hidden bor-r-20 mt-60 h-920p backgrnd-white playerWrapper">
      <div class="w-100 threeDPlayer">
        <div class="imgWrapper" @mousedown="beginRotate" @mousemove="move" @touchmove="resetMove" @touchstart="startRotate">
          <img draggable="false" :src="require('@/assets/temporary/3DFiles/'+ filesToPlay[chosenImg].img + '.jpg')" alt="" :style="{'transform': 'scale('+zoom+')'}">
        </div>
      </div>
    </div>

    <div class="playerButtonBar">
      <Icons
      @click.native="playing"
        class="cur-ptr"
        :icon="playButton"
        size="large"
      />

      <Icons
        class="cur-ptr"
        icon="zoomIn"
        size="large"
        @click.native="ZoomIn"
      />

      <Icons
        class="cur-ptr"
        icon="zoomOut"
        size="large"
        @click.native="ZoomOut"
      />

      <Icons
        class="cur-ptr"
        icon="refresh"
        size="large"
        @click.native="refresh"
      />
    </div>

    <div class="w-100 mt-60">
      <h4 v-html="description" class="commonD"></h4>
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
  name: 'threeDFilesSinglePage',

  components: {
    Icons, breadCrumbs
  },

  data() {
    return {
      title: this.$route.params.id,
      playButton: 'play',
      playInterval: '',
      chosenImg: 0,
      zoom: 1,
      pressed: false,
      initialPosition: '',
      cursorPosition: '',

      filesToPlay:[
        {img: '01'},
        {img: '02'},
        {img: '03'},
        {img: '04'},
        {img: '05'},
        {img: '06'},
        {img: '07'},
        {img: '08'},
        {img: '09'},
        {img: '10'},
        {img: '11'},
        {img: '12'},
        {img: '13'},
        {img: '14'},
        {img: '15'},
        {img: '16'},
        {img: '17'},
        {img: '18'},
        {img: '19'},
        {img: '20'},
        {img: '21'},
        {img: '22'},
        {img: '23'},
        {img: '24'}
      ],

      articlesnfo: {
        pagesCount: 156,
        publishedDate: '22 июнь 2022г',
        discipline: 'Технология исполнения',
        productNumber: 'F1U31-PGE-UZ'
      },
      prevPage: {
        name: {
          language_uzlatin: '3D fayllar',
          language_uzCyrillic: '3D файллар',
          language_ru: '3D файлы',
          language_en: '3D files',
        },
        link: '/3d-files'
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
  },

  methods: {

    refresh(){
      clearInterval(this.playInterval)
      this.playButton = 'play'
      this.chosenImg = 0
      this.zoom = 1
    },
    playing(){
      if(this.playButton == 'play'){
        this.playButton = 'pause'
        this.playInterval = setInterval(() => {
        this.animation()
      }, 150)
      }else if (this.playButton == 'pause'){
        this.playButton = 'play'
        clearInterval(this.playInterval)
      }
    },
    animation(){
      let len = this.filesToPlay.length

      if(this.chosenImg>0){
        this.chosenImg--
      }else this.chosenImg = len-1
    },
    ZoomIn(){
      if(this.zoom<4){
        this.zoom++
      }
    },
    ZoomOut(){
      if(this.zoom>1){
        this.zoom--
      }
    },
    beginRotate($e){
      this.initialPosition = $e.pageX
      this.pressed = true
      // console.log(this.initialPosition)
    },
    move($val){
      this.cursorPosition = $val.pageX
      const len = this.filesToPlay.length

      if(this.pressed == true && this.cursorPosition <= this.initialPosition-20){
        this.initialPosition = $val.pageX
        if(this.chosenImg<len-1){
          this.chosenImg++
        }else this.chosenImg = 0
      }
      else if(this.pressed == true && this.cursorPosition >= this.initialPosition+20){
        this.initialPosition = $val.pageX

        if(this.chosenImg>0){
          this.chosenImg--
        }else this.chosenImg = len-1
      }
      // console.log(this.cursorPosition, this.initialPosition)
    },
    resetMove(e){
      this.cursorPosition = e.pageX || e.changedTouches[0].pageX
      const len = this.filesToPlay.length

      if(this.pressed === true && this.cursorPosition <= this.initialPosition - 5) {
        this.initialPosition = e.pageX || e.changedTouches[0].pageX

        if(this.chosenImg < len - 1) {
          this.chosenImg ++
        } else this.chosenImg = 0
      }
      else if(this.pressed === true && this.cursorPosition >= this.initialPosition + 5) {
        this.initialPosition = e.pageX || e.changedTouches[0].pageX

        if(this.chosenImg > 0) {
          this.chosenImg --
        } else this.chosenImg = len - 1
      }
    },
    startRotate(e){
      this.initialPosition = e.pageX || e.changedTouches[0].pageX
      this.pressed = true
    },
    stopRotate() {
      this.pressed = false
    },
    mobileStopRotate() {
      this.pressed = false
    },
  },
  watch: {
    pressed(){
      if(this.pressed === true){
        this.playButton = 'play'
        clearInterval(this.playInterval)
      }
      // console.log(val)
    }
  }
}
</script>

<style lang="scss">

.playerWrapper{
  margin-top: 120px;
    user-select: none;
    width: 100vw;
    height: auto;
}
.threeDPlayer {
      display: flex;
      align-items: center;
      justify-content: center;
      height: auto;
      
      .imgWrapper {
        background-color: #fff;
        width: 1320px;
        height: 720px;
        border-radius: 40px;
        overflow: hidden;
        cursor: grab;
    
        img {
          height: 100%;
          width: 100%;
          object-fit: contain;
        }
      }
    }
</style>