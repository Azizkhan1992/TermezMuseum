<template>
  <div class="mainPage">

    <pageTitleAnimated
      :titleName="title[$i18n.locale]"
      background="bank-cards"
    />

    <!-- Tab Start -->

    <div class="bankCardTabsParent pos-rel w-100 ovr-hidden gap-24 bor-r-20 backgrnd-white pad-24p box-brb">
      <div
        @click="chosenTab = 1"
        class="bankCardTab h-50p align-c cur-ptr justify-c"
      >
        <p
          class="commonP bold"
          :class="chosenTab !== 1 ? 'colorGreyD' : ''"
        >
          UZCARD
        </p>
      </div>

      <div
        @click="chosenTab = 2"
        class="bankCardTab h-50p align-c cur-ptr justify-c"
      >
        <p
          class="commonP bold"
          :class="chosenTab !== 2 ? 'colorGreyD' : ''"
        >
          HUMO
        </p>
      </div>

      <div
        @click="chosenTab = 3"
        class="bankCardTab h-50p align-c cur-ptr justify-c"
      >
        <p
          class="commonP bold"
          :class="chosenTab !== 3 ? 'colorGreyD' : ''"
        >
          VISA
        </p>
      </div>

      <div
        @click="chosenTab = 4"
        class="bankCardTab h-50p align-c cur-ptr justify-c"
      >
        <p
          class="commonP bold"
          :class="chosenTab !== 4 ? 'colorGreyD' : ''"
        >
          MasterCard
        </p>
      </div>

      <div
        @click="chosenTab = 5"
        class="bankCardTab h-50p align-c cur-ptr justify-c"
      >
        <p
          class="commonP bold"
          :class="chosenTab !== 5 ? 'colorGreyD' : ''"
        >
          UnionPay
        </p>
      </div>

      <div
        class="tabBackBankCard pos-abs h-50p backgrnd-prim bor-r-4 mb-24"
        :class="'moveTo' + chosenTab"
      >
      </div>
    </div>

    <!-- Tab Stop -->

    <div class="w-100 mt-60">
      <p class="commonD colorType">
        Государственный музей археологии Термеза предлагает вам приобретение банковских карт с авторским дизайном, тематикой которого является тематика самого Музея. Приобретайте банковские карты с авторским дизайном и сделайте покупки еще ярче и красивее.
      </p>
    </div>



    <div class="w-100 mt-60 gap-24">

      <!-- Card Start -->

      <div class="w-100 h-320p bor-r-20 gap-24 ovr-hidden backgrnd-white">
        <div class="w-4 pos-rel d-f justify-c align-c pad-24p box-brb ovr-hidden backgrnd-greyD">
          <img class="bankCard-img" src="@/assets/temporary/bank-card-img.png" alt="">
        </div>

        <div class="w-8c d-f fd-c box-brb pad-l-24p pad-r-48 pad-t-48 pad-b-48">
          <h4 class="commonT colorGreyD">Карты VISA с авторским дизайном</h4>
          <h4 class="commonD colorType mt-24">Тематикой банковской карты является Бактрийский период Сурханского оазиса</h4>

          <div class="w-100 justify-sb mt-a">
            
            <div class="w-a d-f fd-r gap-48">

              <div class="w-a d-f fd-r align-c gap-12 cur-ptr">
                <Icons
                  icon="share"
                  size="middle"
                />
                <p class="helpers">{{$t("share")}}</p>
              </div>
            </div>

            <button
              @click="goToSingle"
              class="prim w-3"
            >
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
import pageTitleAnimated from '@/components/pageTitleAnimated.vue';
import Icons from '@/components/icons.vue'
import paginate from '@/components/paginate.vue';
import breadCrumbs from '@/components/breadCrumbs.vue';

export default {
  name: 'bankCardsPage',

  components: {
    pageTitleAnimated, Icons, paginate, breadCrumbs
  },

  data() {
    return {
      title:{
        uz: 'Bank kartalari',
        uzcyr: 'Банк карталари',
        ru: 'Банковские карты',
        en: 'Bank cards',
      },
      chosenTab: 1,
      cardsID: 'Карты VISA с авторским дизайном',

      curPage: 6,
      pages: 144
    }
  },

  methods: {
    goToSingle() {
      this.$router.push({ path: '/bank-cards/' + this.cardsID})
    }
  }
}
</script>

<style>

</style>