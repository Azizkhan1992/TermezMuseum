<template>
  <div class="mainPage">

    <pageTitleAnimated
      :titleName="title?.[$i18n.locale]"
      background="vacancies"
    />

    <div class="w-100 grid-2">

      <!-- Card Start -->

      <div
        class="w-100 h-152p backgrnd-white pad-24p ovr-hidden bor-r-20 box-brb align-c justify-c gap-24 vacancy-card"
        v-for="vac, i in allVacancies"
        :key="i"
      >
      <img v-if="vac?.imgPath" class="obj-fit-cov h-64p" :src="require(`@/assets/static/fileIcons/${vac?.imgPath}`)" alt="">
        <div class="w-100 d-f fd-c h-104p">
          
          <p class="commonD bold h-60p">{{vac?.title?.[$i18n.locale]}}</p>
          
          <div class="w-100 mt-a gap-48 document-dates">
            <div class="w-a d-f fd-r align-c gap-12">
              <Icons
                icon="calendar"
                size="middle"
              />
              <p class="helpers">{{filPost(vac?.createdAt)}}<i>{{$t('fullY')}}</i></p>
            </div>

            <div class="w-a d-f fd-r align-c gap-12 ml-a cur-ptr"
            @click="downloadFile(vac?.documentUrl?.path)"
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


    <paginate
    v-if="length>5"
      @goingToPage="goingToPage()"
      :pages="pages"
      @prev="prev"
      @next="next"
    />

    <breadCrumbs
      :currentPage="title[$i18n.locale]"
    />

  </div>
</template>

<script>
import pageTitleAnimated from '@/components/pageTitleAnimated.vue'
import breadCrumbs from '@/components/breadCrumbs.vue'
import paginate from '@/components/paginate.vue'
import Icons from '@/components/icons.vue'
import downloadFile from '@/mixins/fileDownloader'

export default {
  name: 'vacanciesPage',

  components: {
    pageTitleAnimated, breadCrumbs, paginate, Icons
  },
  mixins: [downloadFile],

  data() {
    return {
      title:{
        language_uzlatin: 'Bo\'sh ish o\'rinlari',
        language_uzCyrillic: 'Бўш иш ўринлари',
        language_ru: 'Вакансии',
        language_en: 'Vacancies',
      },
      pagination: {
        curPage: 1,
        limit: 5
      },
      length: 0,
      docLen: '',
      // allVacancies: this.$store.state.vacancies,
      allVacancies: [],
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
  mounted(){
    this.getAllVacancies()

    if(this.$route.query.page == undefined){
      this.pagination.curPage = 1
    }else this.pagination.curPage = Number(this.$route.query.page)
  },

  computed:{
    pages(){
      return Math.ceil(this.length/this.pagination.limit)
    }
  },


  methods: {
    async getAllVacancies(){

      const params = {
        page: this.$route.query.page,
        limit: this.pagination.limit
      }

      await this.$api.get(`/about/vacancies/site?page=${params.page}&limit=${params.limit}`)
      .then(resp => {
        const data = resp.data.result.results
        this.length = resp.data.length
        this.getVacansiesDoc(data) 
        // console.log(resp.data)
      })
    },
    prev(){
      this.getAllVacancies()
    },
    next(){
      this.getAllVacancies()
    },
    goingToPage(){
      this.getAllVacancies()
    },
    filPost(val) {
      if (val) {
        let temp = val.split("T");
        let year = new Date(temp[0]).getFullYear();
        let month = new Date(temp[0]).getMonth();
        let day = new Date(temp[0]).getDate();
        // let monId = month + 1;

        let monId
        if(month !== 11){
          monId = month + 1;
        }else{monId = 11}

        let monthT = this.months[monId].monthName?.[this.$i18n.locale];

        return day + " " + monthT + " " + year;
      }
    },
    getVacansiesDoc(val){
      val.forEach(element => {
        let doctype = this.getDoc(element.documentUrl.path).toUpperCase()+'.png'
        element.imgPath = doctype
      });
      this.allVacancies = val
    },
    getDoc(doc){
      let temp = doc.split('.')
      return temp[temp.length-1]
    }
  },
  filters:{
    filteredAt(val){
      let temp = val.split('T')
      return temp[0]
    }
  }
}
</script>

<style scoped lang="scss">
p{
  i{
    display: inline-block;
    margin-left: 2px;
    font-family: "Casper Reg";
    font-style: normal;
    font-size: 0.8rem;
    line-height: 16px;
    letter-spacing: 0.04em;
    color: #a4abbd;
  }
}
</style>