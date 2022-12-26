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
        <p class="fontCas">{{ chosenOpenData?.model1?.[$i18n.locale] }}</p>
      </div>
      <div class="unfat">
        <p class="fontCas">6</p>
        <p class="fontCas">{{ $t('downData') }}</p>
        <p class="fontCas">{{ chosenOpenData?.model1?.[$i18n.locale] }}</p>
      </div>
      <div class="fat">
        <p class="fontCas">7</p>
        <p class="fontCas">{{ $t('firstPublish') }}</p>
        <p class="fontCas">{{ chosenOpenData?.model1?.[$i18n.locale] }}</p>
      </div>
      <div class="unfat">
        <p class="fontCas">8</p>
        <p class="fontCas">{{ $t('lastPublish') }}</p>
        <p class="fontCas">{{ chosenOpenData?.model1?.[$i18n.locale] }}</p>
      </div>
      <div class="fat">
        <p class="fontCas">9</p>
        <p class="fontCas">{{ $t('addInfo') }}</p>
        <p class="fontCas">{{ chosenOpenData?.model1?.[$i18n.locale] }}</p>
      </div>
    </div>

    <!-- Open Data Single Table First Start -->

    <!-- v-if="chosenOpenData.typeOfData == '1'" -->
    <!-- <table
      class="openDataSingleOne mt-60 backgrnd-white pad-24p ovr-hidden box-brb bor-r-20"
    >
      <th
        class="head"
      >
        
        <div class="num">
          <h4>№</h4>
        </div>
        
        <div class="description">
          <h4>{{$t("description")}}</h4>
        </div>

        <div class="content">
          <h4>{{$t("content")}}</h4>
        </div>

      </th>
      
      <tr
        v-for="data in chosenOpenData.content"
        :key="data.id"
        class="tableRow"
      >
        <div class="dataNum">
          <h4>{{data.id}}</h4>
        </div>

        <div class="dataDescription">
          <h4>{{data.title}}</h4>
        </div>

        <div class="dataContent">
          <h4 v-if="Array.isArray(data.content) == false">{{data.content}}</h4>

          <div v-else class="dataContentLinks">
            <div
              v-for="file in data.content"
              :key="file.id"
            >
              <p v-if="file.type !== 'link'">
                {{$t("downloadFile")}} ({{file.type}})
              </p>
              <a
                v-else
                href=""
                target="_blanc"
              >
                {{$t("sourceLink")}}
              </a>
            </div>
          </div>
        </div>
      </tr>
    </table> -->

    <!-- Open Data Single Table First Stop -->

    <!-- Open Data Single Table Second Start -->

    <!-- v-else-if="chosenOpenData.typeOfData == '2'" -->
    <!-- <table
      class="openDataSingleTwo mt-60 backgrnd-white pad-24p ovr-hidden box-brb bor-r-20"
    >
      <th
        class="head"
      >
        
        <div class="num">
          <h4>№</h4>
        </div>
        
        <div class="description">
          <h4>{{$T("reportTitle")}}</h4>
        </div>

        <div class="content">
          <h4>{{$t("file")}}</h4>
        </div>

      </th>
      
      <tr
        v-for="data in chosenOpenData.content"
        :key="data.id"
        class="tableRow"
      >
        <div class="dataNum">
          <h4>{{data.id}}</h4>
        </div>

        <div class="dataDescription">
          <h4>{{data.title}}</h4>
        </div>

        <div class="dataContent">
          <a
            href=""
            target="_blanc"
          >
            {{$t("downloadFile")}} ({{data.file.type}})
          </a>
        </div>
      </tr>
    </table> -->

    <!-- Open Data Single Table Second Stop -->

    <div class="dataUpdateInfo mt-80">
      <div class="updateRow">
        <div class="w-50 d-f fd-r gap-24">
          <p class="published">{{$t("datePublicate")}}:</p>
          <p class="publishedDate">{{chosenOpenData?.createdAt}}</p>
        </div>

        <div class="w-50 d-f fd-r gap-24">
          <p class="published">{{$t("lastUpdateDate")}}:</p>
          <p class="publishedDate">{{chosenOpenData?.updatedAt}}</p>
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
        link: '/open-data'
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
    }
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