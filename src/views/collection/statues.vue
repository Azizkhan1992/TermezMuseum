<template>
  <div class="mainPage">


    <pageTitleAnimated
        :titleName="title?.[$i18n.locale]"
        background="statues"
    />

    <!-- Input Bar Start -->

    <div class="w-100 z-idx100 fd-r gap-24 backgrnd-white bor-r-20 pad-24p box-brb exh-fl">

      <div class="w-3 d-f fd-c">
        <label class="colorGreyD mb-4">{{$t("sculptureGenre")}}</label>

        <selector
            @optionChanged="optionChanged"
            :options="this.options"
            id="aaa"
        />
      </div>

      <div class="w-3 d-f fd-c">
        <label class="colorGreyD mb-4">{{$t("categorySearch")}}</label>

        <selector
            @optionChanged="optionChanged"
            :options="this.options"
            id="bbb"
        />
      </div>

      <div class="w-6 d-f fd-c">

        <label class="colorGreyD mb-4">{{$t("section")}}</label>

        <iconedInput
            v-model="search"
            icon="search"
            :placeholder="$t('enterTextSearch')"
        />
      </div>

    </div>

    <!-- Input Bar Stop -->

    <div class="w-100 mt-80 gap-48">
      <p class="commonP line-h-30 colorGreyD">{{$t("countStatues")}}:</p>
      <p class="commonP line-h-30 bold colorType">1 694</p>
    </div>

    <div class="w-100 grid-4 mt-60 grid-1-900">

      <div
          @click="goToSingle(xhbt._id)"
          v-for="(xhbt,ix) in allExhibits"
          :key="ix"
          class="w-100 bor-r-20 cur-ptr box-brb ovr-hidden pos-rel h-480p"
      >
        <div class="w-100 fd-c pad-24p">
          <p class="commonP bold line-h-24 mt-a">{{xhbt.title?.[$i18n.locale]}}</p>

          <div class="w-100 gap-12 mt-24">
            <p class="helpers">{{$t("discoverIn")}}:</p>
            <p class="mainers colorWhite">{{xhbt.additional.foundDate}}</p>
          </div>
        </div>

        <div class="dark-layer-card z-idx1"></div>
        <img class="back-img" :src="xhbt.mainImage.path" alt="">
      </div>

    </div>



    <paginate
        :currentPageNumber="curPage"
        :pages="pages"
    />

    <breadCrumbs
        :currentPage="title?.[$i18n.locale]"
    />


  </div>
</template>

<script>
import pageTitleAnimated from '@/components/pageTitleAnimated.vue'
import breadCrumbs from '@/components/breadCrumbs.vue'
import paginate from '@/components/paginate.vue'
import iconedInput from '@/components/iconedInput.vue'
import selector from '@/components/selector.vue'

export default {
  name: 'statuesPage',

  components: {
    pageTitleAnimated, breadCrumbs, paginate, iconedInput, selector
  },

  data() {
    return {
      allExhibits: this.$store.state.exhibits,
      title:{
        language_uzlatin: 'Haykallar',
        language_uzCyrillic: 'Ҳайкаллар',
        language_ru: 'Статуи',
        language_en: 'Statues',
      },
      curPage: 3,
      pages: 658,
      search: '',
      statuesID: 'Статуя будды',

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
    }
  },

  methods: {
    async getSingleExhibits(){
      await this.$api.get('/collections/statue/site')
          .then(resp => {
            this.allExhibits = resp.data.result.results
            for(let i=1; i<=this.allExhibits.length; i++){
              this.allExhibits[i-1].id = i
            }
            console.log(this.allExhibits)
          }), err => {console.log(err)}
    },
    optionChanged(opt) {
      console.log(opt);
    },

    goToSingle(myid) {
      this.$router.push({ path: '/statues/' + this.statuesID, query: {exId: myid}})
    }
  },
  mounted() {
    this.getSingleExhibits()
  }
}
</script>

<style>

</style>