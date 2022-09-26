<template>
  <div class="mainPage">
    
    <div class="w-100 mt-120">
      <h2 class="grandTitle txt-align-l">{{chosenOpenData.title}}</h2>
    </div>

    <div class="w-100 gap-48 mt-80">
      <div class="w-a d-f fd-r align-c gap-24">
        <Icons
          icon="eye"
        />

        <p class="commonP colorGreyD">Посмотрели  1 358</p>
      </div>

      <div class="w-a d-f fd-r align-c gap-24 cur-ptr">
        <Icons
          icon="share"
        />

        <p class="commonP colorGreyD">Поделиться</p>
      </div>
    </div>

    <!-- Open Data Single Table First Start -->

    <table
      v-if="chosenOpenData.typeOfData == '1'"
      class="openDataSingleOne mt-60 backgrnd-white pad-24p ovr-hidden box-brb bor-r-20"
    >
      <th
        class="head"
      >
        
        <div class="num">
          <h4>№</h4>
        </div>
        
        <div class="description">
          <h4>Описание</h4>
        </div>

        <div class="content">
          <h4>Содеражение</h4>
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
                Скачать файл ({{file.type}})
              </p>
              <a
                v-else
                href=""
                target="_blanc"
              >
                Ссылка на источник
              </a>
            </div>
          </div>
        </div>
      </tr>
    </table>

    <!-- Open Data Single Table First Stop -->

    <!-- Open Data Single Table Second Start -->

    <table
      v-else-if="chosenOpenData.typeOfData == '2'"
      class="openDataSingleTwo mt-60 backgrnd-white pad-24p ovr-hidden box-brb bor-r-20"
    >
      <th
        class="head"
      >
        
        <div class="num">
          <h4>№</h4>
        </div>
        
        <div class="description">
          <h4>Название отчета</h4>
        </div>

        <div class="content">
          <h4>Файл</h4>
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
            Скачать файл ({{data.file.type}})
          </a>
        </div>
      </tr>
    </table>

    <!-- Open Data Single Table Second Stop -->

    <div class="dataUpdateInfo mt-80">
      <div class="updateRow">
        <div class="w-50 d-f fd-r gap-24">
          <p class="published">Дата публикации:</p>
          <p class="publishedDate">{{chosenOpenData.publishingDates.publishedDate}}</p>
        </div>

        <div class="w-50 d-f fd-r gap-24">
          <p class="published">Дата последнего обновления:</p>
          <p class="publishedDate">{{chosenOpenData.publishingDates.updatedDate}}</p>
        </div>
      </div>
    </div>


    <breadCrumbs
      :prevPageName="prevPage.name"
      :prevPageLink="prevPage.link"
      :currentPage="chosenOpenData.title"
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
        name: 'Открытые данные',
        link: '/open-data'
      }
    }
  },

  computed: {
  },

  methods: {
    getOpenData() {
      this.chosenOpenData = this.$store.state.openData.find(data => data.id == this.openDataID)
    }
  },

  mounted() {
    this.getOpenData()
  }
}
</script>

<style>

</style>