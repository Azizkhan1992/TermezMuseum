<template>
  <div class="mainPage">

    <pageTitleAnimated
      :titleName="title[$i18n.locale]"
      background="mms-about-us"
    />

    <!-- Input Bar Start -->

    <div class="w-100 mt-60 z-idx100 fd-r gap-24 backgrnd-white bor-r-20 pad-24p box-brb">
      
      <div class="w-2 d-f fd-c">
        <label class="colorGreyD mb-4">{{$t("year")}}</label>
        
        <selector
          @optionChanged="optionChanged"
          :options="this.options"
          id="aaSel"
        />
      </div>

      <div class="w-2 d-f fd-c">
        <label class="colorGreyD mb-4">{{$t("month")}}</label>
        
        <selector
          @optionChanged="optionChanged"
          :options="this.options"
          id="bbSel"
        />
      </div>

      <div class="w-2 d-f fd-c">
        <label class="colorGreyD mb-4">{{$t("categorySearch")}}</label>
        
        <selector
          @optionChanged="optionChanged"
          :options="this.options"
          id="ccSel"
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


    <div class="w-100 h-48p mt-60 align-c gap-24  ">
      <p class="commonP colorGreyD bold line-h-20">{{$t("top5Tag")}}:</p>

      <button class="top5mmBtn">
        <span>kun.uz</span>
      </button>
      <button class="top5mmBtn">
        <span>uznews.uz</span>
      </button>
      <button class="top5mmBtn">
        <span>gazeta.uz</span>
      </button>
      <button class="top5mmBtn">
        <span>repost.uz</span>
      </button>
      <button class="top5mmBtn">
        <span>podrobno.uz</span>
      </button>
    </div>

    <div class="w-100 gap-48 mt-80">
      <p class="commonP line-h-30 colorGreyD">{{$t("countPublicate")}}:</p>
      <p class="commonP line-h-30 bold colorType">1 694</p>
    </div>

      <!-- Card Big Start -->

      <div class="w-100 h-420p mt-60 bor-r-20 gap-24 ovr-hidden backgrnd-white">
        <div class="w-50 pos-rel">
          <img
            @click="goToSingle"
            class="back-img cur-ptr" src="@/assets/temporary/samovar.jpg" alt=""
          >
        </div>

        <div class="w-50 d-f fd-c box-brb pad-r-24p pad-t-24p pad-b-24p">
          <h4
            @click="goToSingle"
            class="commonT cur-ptr colorType h-108p"
          >
            This is title
          </h4>

          <p
            @click="goToSingle"
            class="commonP cur-ptr colorGreyD mt-24 line-h-30 h-90p"
          >
            This is description
          </p>

          <div class="w-100 mt-a">
            <div class="w-a d-f fd-r align-c gap-12 cur-ptr">
                <Icons
                  icon="link"
                  size="middle"
                />
                <p class="helpers">kun.uz</p>
              </div>
          </div>

          <div class="w-100 mt-24">
            <div class="w-a d-f fd-r align-c gap-12">
                <Icons
                  icon="calendar"
                  size="middle"
                />
                <p class="helpers">22 июнь 2022г</p>
              </div>
          </div>

          <div class="w-100 justify-sb mt-24">
            <div class="w-a d-f fd-r align-c gap-12">
              <Icons
                icon="eye"
                size="middle"
              />
              <p class="helpers">{{$t("viewed")}} 1 396</p>
            </div>

            <div class="w-a d-f fd-r align-c ml-a gap-12 cur-ptr">
              <Icons
                icon="share"
                size="middle"
              />
              <p class="helpers">{{$t("share")}}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Card Big Stop -->

      <!-- Card Grid Start -->

      <div class="grid-3 w-100 mt-24">

        <!-- Card Sm Start -->

        <div class="w-4 ovr-hidden bor-r-20 backgrnd-white h-420p">
          <div class="w-100 pos-rel h-220p">
            <img
              @click="goToSingle"
              class="back-img cur-ptr" src="@/assets/static/museums-collection.png" alt=""
            >
          </div>

          <div class="w-100 fd-c pad-24p h-200p ovr-hidden box-brb">
            <h4
              @click="goToSingle"
              class="commonP cur-ptr colorType line-h-30 bold h-60p"
            >
              This is title
            </h4>

            <div class="w-100 mt-a">
              <div class="w-a d-f fd-r align-c gap-12 cur-ptr">
                <Icons
                  icon="link"
                  size="middle"
                />
                <p class="helpers">kun.uz</p>
              </div>
            </div>
            
            <div class="w-100 d-f fd-r gap-24 mt-24">
              <div class="w-a d-f fd-r align-c gap-12">
                <Icons
                  icon="calendar"
                  size="middle"
                />
                <p class="helpers">22 июнь 2022г</p>
              </div>

              <div class="w-a d-f fd-r align-c gap-12">
                <Icons
                  icon="eye"
                  size="middle"
                />
                <p class="helpers">{{$t("viewed")}} 1 396</p>
              </div>

              <div class="w-a d-f fd-r align-c ml-a gap-12 cur-ptr">
                <Icons
                  icon="share"
                  size="middle"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Card Sm Stop -->

      </div>

      <!-- Card Grid Stop -->
    

    <paginate
      :currentPageNumber="curPage"
      :pages="pages"
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
import iconedInput from '@/components/iconedInput.vue'
import selector from '@/components/selector.vue'
import Icons from '@/components/icons.vue'

export default {
  name: 'exhibitionsPage',

  components: {
    pageTitleAnimated, breadCrumbs, paginate, iconedInput, selector, Icons
  },

  data() {
    return {
      title: {
        uz: 'OAV biz haqimizda',
        uzcyr: 'ОАВ биз ҳақимизда',
        ru: 'СМИ о нас',
        en: 'Mass Medias about Us',
      },
      curPage: 7,
      pages: 122,
      search: '',
      eventsID: 'Музей - центр культуры и просвещения',

      chosenTab: 1,

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
    optionChanged(opt) {
      console.log(opt);
    },

    goToSingle() {
      this.$router.push({ path: '/medias-about-us/' + this.eventsID})
    }
  },

  mounted() {
  }
}
</script>

<style>

</style>