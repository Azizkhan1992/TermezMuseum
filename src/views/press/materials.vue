<template>
  <div class="mainPage">


    <pageTitleAnimated
      :titleName="title[$i18n.locale]"
      background="materials-for-mms"
    />


    <div class="w-100 gap-48">
      <p class="commonP line-h-30 colorGreyD">{{$t("countFiles")}}:</p>
      <p class="commonP line-h-30 bold colorType">{{allLogoFiles?.materials?.length}}</p>
    </div>

    <div class="grid-3 mt-60 r-gap-60 w-100 material-wr">
      <div
        v-for="logo in allLogoFiles?.materials"
        :key="logo.id"
        class="w-100 fd-c item-wr"
      >
        <div class="logoForMedias pos-rel w-4 d-f h-230p bor-r-20 ovr-hidden backgrnd-white align-c justify-c">
          <img class="logoForMediasImg" :src="logo?.mainImage?.path" alt="">
        </div>

        <div
          class="logoForMediasFiles fd-c gap-24 w-100 mt-48 down-wr"
        >
          <div
            v-for="file in logo?.images"
            :key="file._id"
            class="w-100 d-f align-c"
          >
            <Icons
              icon="download"
            />
      
            <div
              class="ml-24 d-f fd-r gap-12"
              @click="getFile(file.imageName, file.path)"
            >
              <p class="commonP line-h-20 bold colorGreyD">{{$t("downloadF")}} .{{docTypeDetector(file.imageName)}}</p>
              <p class="commonP line-h-20 colorType">({{calculateSize(file.size)}})</p>
            </div>
          </div>
        </div>

      </div>
    </div>


    <!-- Card Start -->

    <div
      class="w-100 h-152p backgrnd-white mt-60 pad-24p ovr-hidden bor-r-20 box-brb align-c justify-c gap-24 all-materials-down"
    >
      <img class="obj-fit-cov h-64p" :src="require('@/assets/static/fileIcons/' + 'ZIP' + '.png')" alt="">
      <div class="w-100 d-f fd-c h-104p">
        
        <p class="commonD bold h-60p">{{ $t('materialsForMediasAllInOne') }}</p>
        
        <div class="w-100 mt-a gap-48">
          <div class="w-a d-f fd-r align-c gap-12">
            <Icons
              icon="calendar"
              size="middle"
            />
            <p class="helpers">{{filPost(allLogoFiles?.createdAt) + " " + $t("year2")}}</p>
          </div>

          <div class="w-a d-f fd-r align-c gap-12">
            <Icons
              icon="download"
              size="middle"
            />
            <p class="helpers">{{$t("downloads")}}:</p>
            <p class="mainers">{{ allLogoFiles?.numberOfDownloads }}</p>
          </div>

          <div class="w-a d-f fd-r align-c gap-12 ml-a cur-ptr"
          @click="downloadFileNew()"
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

    <breadCrumbs
      :currentPage="title[$i18n.locale]"
    />

  </div>
</template>

<script>
import pageTitleAnimated from '@/components/pageTitleAnimated.vue';
import Icons from '@/components/icons.vue'
import breadCrumbs from '@/components/breadCrumbs.vue';
import axios from 'axios';

export default {
  name: 'materialsPage',

  components: {
    pageTitleAnimated, Icons, breadCrumbs
  },

  data() {
    return {
      title:{
        language_uzlatin: 'OAV materiallari',
        language_uzCyrillic: 'ОАВ материаллари',
        language_ru: 'Материалы для СМИ',
        language_en: 'Media materials',
      },
      // allLogoFiles: this.$store.state.logoFile,
      allLogoFiles: {},
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

      allDocuments: [
        {
          id: 1,
          title: 'Материалы для СМИ (инструкция к пользованию, информация о файле). Все файлы в одном архиве',
          publishedDate: '22 июнь 2022г',
          downloadsNumber: '1 694',
          link: '',
          fileType: 'RAR'
        }
      ]
    }
  },
  mounted(){
    this.getMaterials()
  },
  methods: {
    async getMaterials(){
      await this.$api.get('/press/material')
      .then(resp => {
        this.allLogoFiles = resp.data.result

        for(let i=1; i<this.allLogoFiles.materials.length; i++){
          this.allLogoFiles.materials[i-1].id = i
        }
        // console.log(this.allLogoFiles)
      }), err => {console.log(err)}
    },
    getFile(name, path) {
      axios({
        method: 'get',
        url: path,
        data: {
          document: 'file'
        },
        responseType: 'arraybuffer'
      })
      .then((response) => {
        const title = name
        const url = window.URL.createObjectURL(new Blob([response.data]))
        const link = document.createElement('a')

        link.href = url
        link.setAttribute('download', title)
        document.body.appendChild(link)
        link.click()
      })
    },
    downloadFileNew() {

axios({
  method: 'post',
  url: `https://termezmuseum.daac.uz/api/v1/press/material/download/zip`,
  data: {
    document: 'file'
  },
  responseType: 'arraybuffer',
})
.then((response) => {
  const title = 'all_materials_for_medias.zip'
  const url = window.URL.createObjectURL(new Blob([response.data]))
  const link = document.createElement('a')

  link.href = url
  link.setAttribute('download', title)
  document.body.appendChild(link)
  link.click()
})
.catch((e) => console.log(e.response))
},
    docTypeDetector(link) {
      const type = link.split('.').pop()
      const formattedType = type.toString()[0] + type.toString()[1] + type.toString()[2]
      return formattedType
    },
    calculateSize(size, b=2) {
      {if(!+size)return"0 Bytes";const c=0>b?0:b,d=Math.floor(Math.log(size)/Math.log(1024));return`${parseFloat((size/Math.pow(1024,d)).toFixed(c))} ${["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][d]}`}
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
  }
}
</script>

<style lang="scss">

.down-wr{
  .w-100{
    .gap-12{
      p{
        cursor: pointer;
      }
    }
  }
}
@media screen and (max-width: 899px) {
  .material-wr{
    display: flex !important;
    flex-direction: column !important;

  }

  .mainPage{

    .all-materials-down{
      height: 210px;

      img{
        width: calc(20% - 12px);
      }

      .h-104p{
        width: calc(80% - 12px);
        row-gap: 12px;
        align-self: flex-start;

        p{
          line-height: 20px;
        }

        .w-100{
          flex-direction: column;
          gap: 8px;

          .ml-a{
            margin-left: 0;
          }
        }
      }
    }
  }
}
</style>