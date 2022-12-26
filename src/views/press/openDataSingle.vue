<template>
  <div class="mainPage">
    
    <div class="w-100 mt-120">
      <h2 class="grandTitle txt-align-l">{{chosenOpenData?.name?.[$i18n.locale]}}</h2>
    </div>

    <div class="w-100 gap-48 mt-80">
      <div class="w-a d-f fd-r align-c gap-24">
        <Icons
          icon="eye"
        />

        <p class="commonP colorGreyD">{{$t("viewed")}} </p>
      </div>

      <div class="w-a d-f fd-r align-c gap-24 cur-ptr">
        <Icons
          icon="share"
        />

        <p class="commonP colorGreyD">{{$t("share")}}</p>
      </div>
    </div>

    <div class="openSingl">
      <div class="openHeader">
        <p class="fontCas">№</p>
        <p class="fontCas">{{ $t('description') }}</p>
        <p class="fontCas">{{ $t('content') }}</p>
      </div>
      <div class="fat">
        <p class="fontCas">1</p>
        <p class="fontCas">{{ $t('idName') }}</p>
        <p class="fontCas">{{ chosenOpenData?.model1?.[$i18n.locale]?.idNumber }}</p>
      </div>
      <div class="unfat">
        <p class="fontCas">2</p>
        <p class="fontCas">{{ $t('dataName') }}</p>
        <p class="fontCas">{{ chosenOpenData?.model1?.[$i18n.locale]?.dataName }}</p>
      </div>
      <div class="fat">
        <p class="fontCas">3</p>
        <p class="fontCas">{{ $t('contentData') }}</p>
        <p class="fontCas">{{ chosenOpenData?.model1?.[$i18n.locale]?.dataContent }}</p>
      </div>
      <div class="unfat">
        <p class="fontCas">4</p>
        <p class="fontCas">{{ $t('ownerData') }}</p>
        <p class="fontCas">{{ chosenOpenData?.model1?.[$i18n.locale]?.dataOwner }}</p>
      </div>
      <div class="fat">
        <p class="fontCas">5</p>
        <p class="fontCas">{{ $t('ownerPhone') }}</p>
        <p class="fontCas">{{ chosenOpenData?.model1?.[$i18n.locale]?.phoneNumber }}</p>
      </div>
      <div class="unfat">
        <p class="fontCas">6</p>
        <p class="fontCas">{{ $t('downData') }}</p>
        <p class="fontCas">{{ chosenOpenData?.model1?.[$i18n.locale]?.linkToDataSource }}</p>
      </div>
      <div class="fat">
        <p class="fontCas">7</p>
        <p class="fontCas">{{ $t('firstPublish') }}</p>
        <p class="fontCas">{{filPost(chosenOpenData?.createdAt)}}</p>
      </div>
      <div class="unfat">
        <p class="fontCas">8</p>
        <p class="fontCas">{{ $t('lastPublish') }}</p>
        <p class="fontCas">{{ filPost(chosenOpenData?.updatedAt) }}</p>
      </div>
      <div class="fat">
        <p class="fontCas">9</p>
        <p class="fontCas">{{ $t('addInfo') }}</p>
        <p class="fontCas">{{ chosenOpenData?.model1?.[$i18n.locale]?.additionalInformation }}</p>
      </div>
    </div>

    <!-- Open Data Single Table First Start -->



    <!-- Open Data Single Table Second Stop -->

    <div class="dataUpdateInfo mt-80">
      <div class="updateRow">
        <div class="w-50 d-f fd-r gap-24">
          <p class="published">{{$t("datePublicate")}}:</p>
          <p class="publishedDate">{{filPost(chosenOpenData?.createdAt)}}</p>
        </div>

        <div class="w-50 d-f fd-r gap-24">
          <p class="published">{{$t("lastUpdateDate")}}:</p>
          <p class="publishedDate">{{filPost(chosenOpenData?.updatedAt)}}</p>
        </div>
      </div>
    </div>


    <breadCrumbs
    v-if="chosenOpenData?.name"
      :prevPageName="prevPage.name[$i18n.locale]"
      :prevPageLink="prevPage.link"
      :currentPage="chosenOpenData?.name?.[$i18n.locale]"
    />

  </div>
</template>

<script>
import Icons from '@/components/icons.vue'
import breadCrumbs from '@/components/breadCrumbs.vue'

export default {
  name: 'openDataSinglePage',

  components: {
    Icons, breadCrumbs
  },

  data() {
    return {
      openDataID: this.$route.params.id,
      chosenOpenData: {},
      prevPage: {
        name: {
          language_uzCyrillic: 'Очиқ маълумотлар',
          language_uzlatin: 'Ochiq ma\'lumotlar',
          language_ru: 'Открытые данные',
          language_en: 'Open data',
        },
        link: '/opendata'
      },
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
      year: {
        language_uzlatin: 'y',
        language_uzCyrillic: 'й',
        language_en: 'y',
        language_ru: 'г'
      }
    }
  },

  computed: {
    getID(){
      let temp = this.openDataID.split('_')
      if(temp.length == 4){return temp[3]}
      else return temp[2]
    }
  },

  methods: {
    async getOpenData() {
      await this.$api.get(`/press/opendata/${this.getID}`)
      .then(resp => {
        this.chosenOpenData = resp.data.result
        console.log(this.chosenOpenData)
      }).catch(err => {console.log(err)})
    },
    filPost(val) {
      if (val) {
        // console.log(val)
        let hour = new Date(val).getHours()
        let minut = new Date(val).getMinutes()
        
        let temp = val.split("T");
        // console.log(val, new Date(val).getHours())
        let year = new Date(temp[0]).getFullYear();
        let month = new Date(temp[0]).getMonth();
        let day = new Date(temp[0]).getDate();
        let monId
        if(month !== 11){
          monId = month + 1;
        }else{monId = 11}

        let monthT = this.months[monId].monthName?.[this.$i18n.locale];

        return day + " " + monthT + " " + year + ' ' +  `${this.year?.[this.$i18n.locale]}` + '  ' + hour + " : " + minut;
      }
    },
  },

  mounted() {
    this.getOpenData()
  }
}
</script>

<style lang="scss">
.openSingl{
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  background: #fff;
  margin-top: 64px;
  border-radius: 20px;
  padding: 24px;
  box-sizing: border-box;
  row-gap: 24px;

  .openHeader{
    width: 100%;
    height: 64px;
    display: flex;
    padding: 22px 24px;
    box-sizing: border-box;
    justify-content: space-between;

    p{
      width: calc(50% - 24px);
      font-size: 1.5rem;
      line-height: 36px;
      color: #a4abbd;
      text-transform: uppercase;
      font-weight: 500;
      letter-spacing: 0.04em;

      &:nth-child(1){
        width: 36px;
      }
    }
  }

  .fat{
    width: 100%;
    height: fit-content;
    background: #dde0e7;
    border-radius: 4px;
    display: flex;
    padding: 22px 24px;
    box-sizing: border-box;
    justify-content: space-between;

    p{
      width: calc(50% - 24px);
      font-size: 1rem;
      line-height: 20px;
      color: #2f3232;
      font-weight: 500;
      letter-spacing: 0.04em;

      &:nth-child(1){
        width: 36px;
      }
    }
  }

  .unfat{
    width: 100%;
    height: fit-content;
    display: flex;
    padding: 22px 24px;
    box-sizing: border-box;
    justify-content: space-between;

    p{
      width: calc(50% - 24px);
      font-size: 1rem;
      line-height: 20px;
      color: #2f3232;
      font-weight: 500;
      letter-spacing: 0.04em;

      &:nth-child(1){
        width: 36px;
      }
    }
  }
}
</style>