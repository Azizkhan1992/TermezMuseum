<template>
  <div class="mainPage">

    <pageTitleAnimated
      :titleName="title?.[$i18n.locale]"
      background="bank-cards"
    />

    <!-- Tab Start -->

    <div class="bankCardTabsParent pos-rel w-100 ovr-hidden gap-24 bor-r-20 backgrnd-white pad-24p box-brb desctop-sel">
      <div
        @click="changeTab(1)"
        class="bankCardTab h-50p align-c cur-ptr justify-c select-item"
      >
        <p
          class="commonP bold"
          :class="chosenTab !== 1 ? 'colorGreyD' : ''"
        >
          UZCARD
        </p>
      </div>

      <div
        @click="changeTab(2)"
        class="bankCardTab h-50p align-c cur-ptr justify-c select-item"
      >
        <p
          class="commonP bold"
          :class="chosenTab !== 2 ? 'colorGreyD' : ''"
        >
          HUMO
        </p>
      </div>

      <div
        @click="changeTab(3)"
        class="bankCardTab h-50p align-c cur-ptr justify-c select-item"
      >
        <p
          class="commonP bold"
          :class="chosenTab !== 3 ? 'colorGreyD' : ''"
        >
          VISA
        </p>
      </div>

      <div
        @click="changeTab(4)"
        class="bankCardTab h-50p align-c cur-ptr justify-c select-item"
      >
        <p
          class="commonP bold"
          :class="chosenTab !== 4 ? 'colorGreyD' : ''"
        >
          MasterCard
        </p>
      </div>

      <div
        @click="changeTab(5)"
        class="bankCardTab h-50p align-c cur-ptr justify-c select-item"
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

    <!-- Mobile Select Start -->

    <div class="mobile-selector-container" @click="isAllCards = !isAllCards">
      <div class="sel-visible">
        <p>{{ chosenCard.name }}</p>
        <Icons
        icon="arrDown"
        size="middle"
        :class="{'active' : isAllCards}"
        />
      </div>

      <div class="select-hidden" :class="isAllCards ? 'active' : 'deactive'">
        <div class="hidden-items"
        :class="item.val == chosenCard.val ? 'selected' : ''"
        v-for="item, idx in AllCards" :key="idx" @click.stop="changeCard(item)">
          {{ item.name }}
        </div>
      </div>
    </div>

    <!-- Tab Stop -->

    <div class="w-100 mt-60">
      <p class="commonD colorType">
        {{ bankContent?.text?.[$i18n.locale] }}
      </p>
    </div>



    <div class="w-100 mt-60 gap-24 bank-container">

      <!-- Card Start -->

      <div class="w-100 h-320p bor-r-20 gap-24 ovr-hidden backgrnd-white bank-items" v-for="item, idx in bankCards" :key="idx">
        <div class="w-4 pos-rel d-f justify-c align-c pad-24p box-brb ovr-hidden backgrnd-greyD bank-img">
          <img class="bankCard-img" :src="item?.img?.path" alt="">
        </div>

        <div class="w-8c d-f fd-c box-brb pad-l-24p pad-r-48 pad-t-48 pad-b-48 bank-title">
          <h4 class="commonT colorGreyD">{{ item?.name?.[$i18n.locale] }}</h4>
          <h4 class="commonD colorType mt-24">{{ item?.description?.[$i18n.locale] }}</h4>

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
              @click="goToSingle(item)"
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
    v-if="len>7"
      :currentPageNumber="pagination.curPage"
      :pages="pages"
      @prev="prev"
      @next="next"
      @goingToPage="goingToPage()"
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
        language_uzlatin: 'Bank kartalari',
        language_uzCyrillic: 'Банк карталари',
        language_ru: 'Банковские карты',
        language_en: 'Bank cards',
      },
      chosenTab: 1,
      cardsID: 'Карты VISA с авторским дизайном',
      pagination: {
        curPage: 1,
        limit: 7
      },
      chosenCard: {val: 1, name: 'UzCard'},
      AllCards: [
        {val: 1, name: 'UZCARD'},
        {val: 2, name: 'HUMO'},
        {val: 3, name: 'VISA'},
        {val: 4, name: 'MasterCard'},
        {val: 5, name: 'UnionPay'}
      ],
      isAllCards: false,
      len: '',
      bankCards: [],
      bankContent: {}
    }
  },
  mounted(){
    if(this.$route.query.page == undefined || this.$route.query.page == ''){
      this.$router.push({
        query: {
          ...this.$route.query,
          page: this.pagination.curPage
        }
      })
    }else this.pagination.curPage = this.$route.query.page

    if(this.$route.query.category == undefined || this.$route.query.category == ''){
      this.$router.push({
        query: {
          ...this.$route.query,
          category: this.chosenTab
        }
      })
    }else this.chosenTab = this.$route.query.category
    this.getBankcards()
  },

  methods: {
    getBankcards(){
      const params = {
        category: this.$route.query.category,
        page: this.$route.query.page,
        limit: this.pagination.limit
      }
      this.$store.dispatch('getBankCards', params)
      .then(() => {
        this.bankCards = this.$store.state.bankCards
        this.len = this.$store.state.bankCardsLen
        this.bankContent = this.$store.state.bankContent
        // console.log(this.bankCards)
      })
      // console.log(this.chosenTab)
    },
    changeTab(val){
      this.chosenTab = val
      this.$router.push({
        query: {
          ...this.$route.query,
          category: val,
          page: 1
        }
      })
      this.getBankcards()
    },
    changeCard(val){
      this.chosenCard = val
      this.$router.push({
        query: {
          ...this.$route.query,
          category: val.val,
          page: 1
        }
      })
      this.getBankcards()
      console.log(val)
    },
    prev(){
      this.getBankcards()
    },
    next(){
      this.getBankcards()
    },
    goingToPage(){
      this.getBankcards()
    },
    goToSingle(val) {
      // console.log(val)
      this.$router.push({ path: '/bank-cards/' + val._id})
    }
  },
  computed: {
    pages(){
      return Math.ceil(this.len/this.pagination.limit)
    }
  },
}
</script>

<style lang="scss">
.bank-container{
  flex-direction: column;
  .bank-items{
    .bank-title{

      h4.commonD{
        display: -webkit-box;
        height: 85px;
        -webkit-line-clamp: 3;
        overflow: hidden;
        -webkit-box-orient: vertical;
      }
    }
  }
}
.mainPage{
  .mobile-selector-container{
    display: none;
  }
}

@media screen and (max-width: 899px) {
  .mainPage{
    .desctop-sel{
      display: none;
    }
    .mobile-selector-container{
      display: block;
      width: 100%;
      height: 48px;
      padding: 15px;
      box-sizing: border-box;
      background: #fff;
      border: 1px solid #dde0e7;
      border-radius: 4px;
      cursor: pointer;
      position: relative;

      .select-hidden{
        width: 100%;
        height: fit-content;
        position: absolute;
        display: flex;
        flex-direction: column;
        top: 64px;
        left: 0;
        row-gap: 8px;
        padding: 15px;
        box-sizing: border-box;
        background: #fff;
        border-radius: 4px;
        border: 1px solid #dde0e7;
        z-index: 99;
        transform-origin: top;
        transition: 0.33s ease-in-out;

        .hidden-items{
          width: 100%;
          height: fit-content;
          color: #2f3232;
          font-size: 1rem;
          line-height: 24px;
          font-weight: 400;

          &:hover{
            color: #a4abbd;
          }

          &.selected{
            color: #4582d3;
            font-weight: 700;
          }
        }

        &.deactive{
          transform: scaleY(0);
        }

        &.active{
          transform: scaleY(1);
        }
      }

      .sel-visible{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        p{
          font-size: 1.25rem;
          line-height: 28px;
          color: #4582d3;
          font-weight: 700;
        }
      }
    }

    .bank-container{

      .bank-items{
        height: 544px;
        flex-direction: column;

        .bank-img{
          width: 100%;
          height: calc(50% - 12px);
        }
        .bank-title{
          width: 100%;
          height: calc(50% - 12px);
          padding: 0 24px 24px 24px;

          h4.commonT{
            font-size: 1rem;
            line-height: 24px;
          }

          h4.commonD{
            height: 65px;
            line-height: 20px;
          }

          .w-100{
            row-gap: 12px;
            flex-direction: column;
          }
        }
      }
    }
  }
}
</style>