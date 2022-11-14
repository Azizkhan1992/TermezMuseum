<template>
  <div class="mainPage">

    <pageTitleAnimated
      :titleName="title[$i18n.locale]"
      background="sections"
    />

    
    <div class="w-100 z-idx100 fd-c backgrnd-white bor-r-20 pad-24p box-brb">
      
      <label class="colorGreyD mb-4">{{$t("section")}}</label>
      
      <selector
        @optionChanged="optionChanged"
        :options="this.options"
        id="aaa"
      />
      
    </div>

    <div class="w-100 mt-60">
      <div class="w-8c">
        <img class="w-100 h-726p obj-fit-cov" src="@/assets/temporary/building-scheme.png" alt="">
      </div>

      <div class="w-4 d-f fd-c">
        <h4
          class="commonD"
          v-html="txt"
        >
        </h4>

        <button
          @click="goToSingle"
          class="prim w-100 h-48p mt-a"
        >
          <span>{{$t("moreAbSec")}}</span>
        </button>
      </div>
    </div>

    <div class="w-100 mt-60">

      <!-- Card Start -->

      <div
        class="w-100 h-152p backgrnd-white pad-24p ovr-hidden bor-r-20 box-brb align-c justify-c gap-24"
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
              <p class="helpers">{{$t("downloads")}}:</p>
              <p class="mainers">{{doc.downloadsNumber}}</p>
            </div>

            <div class="w-a d-f fd-r align-c gap-12 ml-a cur-ptr">
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

    </div>


    <breadCrumbs
      :currentPage="title[$i18n.locale]"
    />

  </div>
</template>

<script>
import pageTitleAnimated from '@/components/pageTitleAnimated.vue'
import breadCrumbs from '@/components/breadCrumbs.vue'
import selector from '@/components/selector.vue'
import Icons from '@/components/icons.vue'

export default {
  name: 'sectionsPage',

  components: {
    pageTitleAnimated, breadCrumbs, selector, Icons
  },

  data() {
    return {
      title: {
        language_uzlatin: 'Bo\'limlar',
        language_uzCyrillic: 'Бўлимлар',
        language_en: 'Sections',
        language_ru: 'Разделы',
      },
      options: [
        {value: '1', label: 'Option 1'},
        {value: '2', label: 'Option 2'},
        {value: '3', label: 'Option 3'},
        {value: '4', label: 'Option 4'},
        {value: '5', label: 'Option 5'},
        {value: '6', label: 'Option 6'},
        {value: '7', label: 'Option 7'},
        {value: '8', label: 'Option 8'},
        {value: '9', label: 'Option 9'},
        {value: '10', label: 'Option 10'},
      ],

      txt: `
        Зал посвящен к археологическим находкам в Сурханском оазисе каменного века и имеет огромную коллекцию самых разных и дорогих экспонатов в виде статуй, картин и тд.
        <br/><br/>
        Термезский Археологический Музей традиционно находится в авангарде современных тенденций развития музейных технологий. Осуществление высокопрофессиональных научных, реставрационных, выставочных, образовательных, издательских и других музейных проектов возможно благодаря координации деятельности музея и его партнеров. С целью объединения усилий организаций и частных лиц, желающих оказать поддержку музею, в 2007 году, в год столетнего юбилея коллекции, было создано Общество друзей Термезского Археологического Музея.
      `,
      allDocuments: [
        {
          id: 1,
          title: 'Схема музея',
          publishedDate: '22 июнь 2022г',
          downloadsNumber: '1 694',
          link: '',
          fileType: 'PDF'
        }
      ]
    }
  },

  methods: {
    optionChanged(opt) {
      console.log(opt);
    },

    goToSingle() {
      this.$router.push({ path: '/sections/' + 'Раздел “Монеты VII века”'})
    }
  }
}
</script>

<style>

</style>