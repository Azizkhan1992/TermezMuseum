<template>
  <div class="mainPage">

    <pageTitleAnimated
      :titleName="title[$i18n.locale]"
      background="sections"
    />

    
    <div class="w-100 z-idx100 fd-c backgrnd-white bor-r-20 pad-24p box-brb">
      
      <label class="colorGreyD mb-4">{{$t("section")}}</label>
      
      <selector
      v-if="currentOpt !== ''"
        @optionChanged="optionChanged"
        :options="this.options"
        :currentOpt="this.currentOpt"
        id="aaa"
      />
      
    </div>

    <div class="w-100 mt-60 sect-wr">
      <div class="w-8c">
        <img class="w-100 h-726p obj-fit-cov" :src="Section?.img?.path" alt="">
      </div>

      <div class="w-4 d-f fd-c">
        <h4
          class="commonD"
          v-html="Section?.text?.[$i18n.locale]"
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

    <div class="w-100 mt-60 sectLoad">

      <!-- Card Start -->

      <div
        class="w-100 h-152p backgrnd-white pad-24p ovr-hidden bor-r-20 box-brb align-c justify-c gap-24"
      >
        <img class="obj-fit-cov h-64p" src="@/assets/static/fileIcons/FilesIcon.png" alt="">
        <div class="w-100 d-f fd-c h-104p">
          
          <p class="commonD bold h-60p">{{$t('secMuseum')}}</p>
          
          <div class="w-100 mt-a gap-48">
            <div class="w-a d-f fd-r align-c gap-12">
              <Icons
                icon="calendar"
                size="middle"
              />
              <p class="helpers">{{filPost(allDocuments?.createdAt) + " " + $t("year2")}}</p>
            </div>

            <div class="w-a d-f fd-r align-c gap-12">
              <Icons
                icon="download"
                size="middle"
              />
              <p class="helpers">{{$t("downloads")}}:</p>
              <p class="mainers">{{allDocuments?.NumberOfDownloads}}</p>
            </div>

            <div class="w-a d-f fd-r align-c gap-12 ml-a cur-ptr"
            @click="downloadFile( allDocuments.documentPath)"
            >
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
import downloadFile from '@/mixins/fileDownloader'

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
      currentOpt: '',
      options: [
        // {value: '1', label: 'Option 1'},
        // {value: '2', label: 'Option 2'},
        // {value: '3', label: 'Option 3'},
        // {value: '4', label: 'Option 4'},
        // {value: '5', label: 'Option 5'},
        // {value: '6', label: 'Option 6'},
        // {value: '7', label: 'Option 7'},
        // {value: '8', label: 'Option 8'},
        // {value: '9', label: 'Option 9'},
        // {value: '10', label: 'Option 10'},
      ],
      museumSection: [],
      Section: {},
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

      txt: `
        Зал посвящен к археологическим находкам в Сурханском оазисе каменного века и имеет огромную коллекцию самых разных и дорогих экспонатов в виде статуй, картин и тд.
        <br/><br/>
        Термезский Археологический Музей традиционно находится в авангарде современных тенденций развития музейных технологий. Осуществление высокопрофессиональных научных, реставрационных, выставочных, образовательных, издательских и других музейных проектов возможно благодаря координации деятельности музея и его партнеров. С целью объединения усилий организаций и частных лиц, желающих оказать поддержку музею, в 2007 году, в год столетнего юбилея коллекции, было создано Общество друзей Термезского Археологического Музея.
      `,
      allDocuments: [
        // {
        //   id: 1,
        //   title: 'Схема музея',
        //   publishedDate: '22 июнь 2022г',
        //   downloadsNumber: '1 694',
        //   link: '',
        //   fileType: 'PDF'
        // }
      ]
    }
  },
  mixins: [downloadFile],
  mounted(){
    this.getSections()
  },

  methods: {
    optionChanged(opt) {
      if(opt){
        let tempArr = this.museumSection.filter(e => (e.id == opt.value+1))
        this.Section = tempArr[0]
      }
      // console.log(opt);
    },

    async getSections(){
      await this.$api.get('/inmuseum/section/site')
      .then(resp => {
        this.allDocuments = resp.data.fileDocument
        this.museumSection = resp.data.result
        this.Section = this.museumSection[0]
        for(let i=1; i<=this.museumSection.length; i++){
          this.museumSection[i-1].id = i
        }
        this.getOptions()
        // console.log(this.allDocuments)
      }), err => {console.log(err)}
    },
    getOptions(){
      for(let i=0; i<=this.museumSection.length-1; i++){
        let temp = {value: i, label: `${this.museumSection[i]?.title?.[this.$i18n.locale]}`}
        this.options.push(temp)
      }
      this.currentOpt = this.options[0]
      // console.log(this.currentOpt)
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

    goToSingle() {
      this.$router.push({ path: `/sections/${this.Section._id}_${this.Section?.title?.[this.$i18n.locale]}`})
    }
  }
}
</script>

<style>

</style>