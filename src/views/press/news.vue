<template>
  <div class="mainPage">

    <pageTitleAnimated
      :titleName="title"
      background="news"
    />

    <!-- Input Bar Start -->

    <div class="w-100 mt-60 z-idx100 fd-r gap-24 backgrnd-white bor-r-20 pad-24p box-brb mobile-flex">
      
      <div class="w-2 d-f fd-c">
        <label class="colorGreyD mb-4">Год</label>
        
        <selector
          @optionChanged="optionChanged"
          :options="this.options"
          id="aaSel"
        />
      </div>

      <div class="w-2 d-f fd-c">
        <label class="colorGreyD mb-4">Месяц</label>
        
        <selector
          @optionChanged="optionChanged"
          :options="this.options"
          id="bbSel"
        />
      </div>

      <div class="w-2 d-f fd-c">
        <label class="colorGreyD mb-4">Категория поиска</label>
        
        <selector
          @optionChanged="optionChanged"
          :options="this.options"
          id="ccSel"
        />
      </div>
      
      <div class="w-6 d-f fd-c">

        <label class="colorGreyD mb-4">Section</label>

        <iconedInput
          v-model="search"
          icon="search"
          placeholder="Введите текст поиска"
        />
      </div>
      
    </div>

    <!-- Input Bar Stop -->


    <div class="w-100 h-48p mt-60 align-c gap-24 flex-wrap h-auto">
      <p class="commonP colorGreyD bold line-h-20">Топ-5 популярных тэгов:</p>

      <button class="top5TagBtn">
        <span>Важно</span>
      </button>
      <button class="top5TagBtn">
        <span>Конкурс</span>
      </button>
      <button class="top5TagBtn">
        <span>История Узбекистана</span>
      </button>
      <button class="top5TagBtn">
        <span>Руководитель</span>
      </button>
      <button class="top5TagBtn">
        <span>Новые экспонаты</span>
      </button>
    </div>

    <div class="w-100 gap-48 mt-80">
      <p class="commonP line-h-30 colorGreyD">Количество публикаций:</p>
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

          <div class="w-100 gap-12 mt-a ovr-hidden">
            <button class="newsCardTag">
              <span>
                Click me
                Click me
                Click me
              </span>
            </button>

            <button class="newsCardTag">
              <span>
                Click me
              </span>
            </button>

            <button class="newsCardTag">
              <span>
                Click me
              </span>
            </button>

            <button class="newsCardTag">
              <span>
                Click me
              </span>
            </button>

            <button class="newsCardTag last">
              <span>
                + 7
              </span>
            </button>
          </div>

          <div class="w-100 justify-sb mt-48">
            
            <div class="w-100 d-f fd-r gap-24">
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
                <p class="helpers">Посмотрели 1 396</p>
              </div>

              <div class="w-a d-f fd-r align-c ml-a gap-12 cur-ptr">
                <Icons
                  icon="share"
                  size="middle"
                />
                <p class="helpers">Поделиться</p>
              </div>
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

            <div class="w-100 gap-12 mt-a ovr-hidden">
              <button class="newsCardTag sm">
                <span>
                  Click me
                  Click me
                  Click me
                </span>
              </button>

              <button class="newsCardTag sm">
                <span>
                  Click me
                </span>
              </button>

              <button class="newsCardTag last">
                <span>
                  + 7
                </span>
              </button>
            </div>

            <div class="w-100 justify-sb mt-24">
            
              <div class="w-100 d-f fd-r gap-24">
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
                  <p class="helpers">Посмотрели 1 396</p>
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
        </div>

        <!-- Card Sm Stop -->

      </div>

      <!-- Card Grid Stop -->
    

    <paginate
      :currentPageNumber="curPage"
      :pages="pages"
    />

    <breadCrumbs
      :currentPage="title"
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
      title: 'Новости',
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
      this.$router.push({ path: '/news/' + this.eventsID})
    }
  },

  mounted() {
  }
}
</script>

<style>

</style>