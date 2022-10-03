<template>
  <div class="mainPage">

    <pageTitleAnimated
      :titleName="title[$i18n.locale]"
      background="video-gallery"
    />


    <!-- Input Bar Start -->

    <div class="w-100 z-idx100 fd-r gap-24 backgrnd-white bor-r-20 pad-24p box-brb mobile-flex">
      
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

    <div class="w-100 gap-48 mt-80">
      <p class="commonP line-h-30 colorGreyD">{{$t("countVideoFiles")}}:</p>
      <p class="commonP line-h-30 bold colorType">1 694</p>
    </div>


    <div class="w-100 mt-60 gap-24">

      <!-- Card Start -->

      <div class="w-100 h-320p bor-r-20 gap-24 ovr-hidden backgrnd-white cw-t">
        <div class="w-4 pos-rel">
          <div class="dark-layer-solid z-idx1"></div>
          <img class="back-img" src="@/assets/temporary/samovar.jpg" alt="">
        </div>

        <div class="w-8c d-f fd-c box-brb pad-l-24p pad-r-48 pad-t-48 pad-b-48">
          <h4 class="commonT colorGreyD">This is title</h4>

          <div class="w-100 justify-sb mt-a">
            
            <div class="w-a d-f fd-c gap-24">
              <div class="w-a d-f fd-r gap-48">
                <div class="w-a d-f fd-r align-c gap-12">
                  <Icons
                    class="cur-ptr"
                    icon="like"
                    size="middle"
                  />
                  <p class="helpers">1 694</p>
                </div>

                <div class="w-a d-f fd-r align-c gap-12">
                  <Icons
                    class="cur-ptr"
                    icon="dislike"
                    size="middle"
                  />
                  <p class="helpers">26</p>
                </div>
              </div>

              <div class="w-a d-f fd-r gap-48">
                <div class="w-a d-f fd-r align-c gap-12">
                  <Icons
                    icon="calendar"
                    size="middle"
                  />
                  <p class="helpers">22 июнь 2022г</p>
                </div>

                <div class="w-a d-f fd-r align-c gap-12">
                  <Icons
                    icon="driver"
                    size="middle"
                  />
                  <p class="helpers">youtube.com</p>
                </div>

                <div class="w-a d-f fd-r align-c gap-12 cur-ptr">
                  <Icons
                    icon="share"
                    size="middle"
                  />
                  <p class="helpers">{{$t("share")}}</p>
                </div>
              </div>
            </div>

            <button
              @click="goToSingle"
              class="iconedButton prim w-3 gap-12 mt-a"
            >
              <Icons
                color="blue"
                icon="play"
                size="middle"
              />
              <span>{{$t("look")}}</span>
            </button>
            
          </div>
        </div>
      </div>

      <!-- Card Stop -->

    </div>


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
  name: 'videoGalleryPage',

  components: {
    pageTitleAnimated, iconedInput, selector, Icons, paginate, breadCrumbs
  },

  data() {
    return {
      title: {
        uz: 'Video galereya',
        uzcyr: 'Видео галерея',
        ru: 'Видео галерея',
        en: 'Video gallery',
      },
      search: '',
      curPage: 7,
      pages: 498,

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
      console.log("Single");
      // this.$router.push({ path: '/articles/' + this.articlesID})
    }
  }
}
</script>

<style>

</style>