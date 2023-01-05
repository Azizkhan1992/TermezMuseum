<template>
  <div class="mainPage">

    <div class="w-100 mt-120">
      <h2 class="grandTitle txt-align-l">{{articlesnfo?.name?.[$i18n.locale]}}</h2>
    </div>

    <div class="w-100 mt-80 gap-48 title-wr">
      <h4 class="commonT colorGreyD">{{ $t('price') }}:</h4>
      <div class="w-a d-f fd-r gap-8">
        <h4 class="commonT colorType">{{articlesnfo?.priceItem}}</h4>
        <h4 class="commonT reg colorGreyD">{{item.currency}}</h4>
      </div>
    </div>


    <div class="w-100 h-24p mt-80 share-wr">
      <div class="w-a d-f fd-r gap-64">

        <div class="w-a d-f fd-r align-c gap-24">
          <Icons
            icon="eye"
            size=""
          />
          <p class="commonP colorGreyD line-h-20">{{ $t('viewed') }}: {{ articlesnfo?.NumberOfViews }}</p>
        </div>

        <div class="w-a d-f fd-r align-c gap-24 cur-ptr">
          <Icons
            icon="share"
            size=""
          />
          <p class="commonP colorGreyD line-h-20">{{ $t('share') }}</p>
        </div>

      </div>
    </div>



    <div v-if="singleImgs.length>1" class="w-100 ovr-hidden bor-r-20 mt-60 h-920p carousel-container">
      <div class="carousel-wr" :style="{'width': `${singleImgs.length * 100}%`}">
        <div class="carousel-items" v-for="img in singleImgs" :key="img.id"
        :class="img.id == hiddenLeftChecker ? 'hidden-left' : ''"
        >
          <img :src="img?.path" alt="">
        </div>
      </div>
    </div>

    <div v-else class="single-img mt-60">
      <img :src="singleImgs[0]?.path" alt="">
    </div>

    <paginatorDots v-if="isPaginator"/>

    <div class="w-100 mt-60 desc-wr">
      <h4 class="commonT colorGreyD">{{ $t('goodsTitle') }}:</h4>
    </div>

    <div class="w-100 mt-24">
      <h4 v-html="articlesnfo?.text?.[$i18n.locale]" class="commonD"></h4>
    </div>


    <div class="w-100 gap-24 mt-60 price-wr">
      <div class="w-50 gap-24">
        <div class="w-a d-f fd-r gap-48">
          <h4 class="commonT colorGreyD">{{ $t('price') }}:</h4>
          <div class="w-a d-f fd-r gap-8">
            <h4 class="commonT colorType">{{articlesnfo?.priceItem}}</h4>
            <h4 class="commonT reg colorGreyD">{{item.currency}}</h4>
          </div>
        </div>

        <div class="w-a d-f fd-r gap-48">
          <h4 class="commonT colorGreyD">{{ $t('inStock') }}:</h4>
          <div class="w-a d-f fd-r gap-8">
            <h4 class="commonT colorType">{{ articlesnfo?.inCash == true ? isDelivery?.isTrue?.[$i18n.locale] : isDelivery?.isFalse?.[$i18n.locale] }}</h4>
          </div>
        </div>
      </div>


      <div class="w-50 gap-24">
        <div class="w-a d-f fd-r gap-48">
          <h4 class="commonT colorGreyD">{{ $t('delivery') }}:</h4>
          <div class="w-a d-f fd-r gap-8">
            <h4 class="commonT colorType">{{articlesnfo?.deliveryPrice }}</h4>
            <h4 class="commonT reg colorGreyD">{{item.currency}}</h4>
          </div>
        </div>

        <div class="w-a d-f fd-r gap-48">
          <h4 class="commonT colorGreyD">{{ $t('buyWhere') }}:</h4>
          <div class="w-a d-f fd-r gap-8">
            <h4 class="commonT colorType">{{ articlesnfo?.existDeliveryCities
?.[$i18n.locale] }}</h4>
          </div>
        </div>
      </div>
    </div>

    <button class="w-4 prim mt-60">
      <span>Click me</span>
    </button>


    <breadCrumbs
    v-if="articlesnfo?.name"
      :prevPageLink="prevPage.link"
      :prevPageName="prevPage.name"
      :currentPage="articlesnfo?.name?.[$i18n.locale]"
    />

  </div>
</template>

<script>
import Icons from '@/components/icons.vue'
import paginatorDots from '@/components/paginatorDots.vue'
import breadCrumbs from '@/components/breadCrumbs.vue'

export default {
  name: 'shopSinglePage',

  components: {
    Icons, paginatorDots, breadCrumbs
  },

  data() {
    return {
      title: this.$route.params.id,
      isDelivery: {
        isTrue: {
          language_uzlatin: 'bor',
          language_uzcyrillic: 'бор',
          language_en: 'yes',
          language_ru: 'есть'
        },
        isFalse: {
          language_uzlatin: 'yo\'q',
          language_uzcyrillic: 'йўқ',
          language_en: 'no',
          language_ru: 'нет'
      }
    },
      articlesnfo: {},
      prevPage: {
        name: 'Магазин',
        link: '/shop'
      },
      item: {
        price: '21 731 357.20',
        currency: 'UZS'
      },
      hiddenLeftChecker: 1,
      singleImgs: [],
      isPaginator: false
    }
  },
  mounted(){
    this.getSingleShop()
  },
  methods: {
    getSingleShop(){
      this.$api.get(`/services/shop/${this.title}`)
      .then(resp =>{
        this.articlesnfo = resp.data.itemDocument
        this.singleImgs = resp.data.itemDocument.img
        // console.log(this.singleImgs)
        for(let i=1; i<=this.singleImgs.length; i++){
          this.singleImgs[i-1].id = i
        }
        if(this.singleImgs.length>1){
        this.play()
        }
        // console.log(this.singleImgs)
      }).catch(err => {console.log(err)})
    },
    play(){
      setInterval(() =>{
        this.animate()
      }, 5000)
    },
    animate(){
      let temp = this.singleImgs.shift()

      this.singleImgs.push(temp)
      let len = this.singleImgs.length

      if(this.hiddenLeftChecker <= len-1){
        this.hiddenLeftChecker++
      }else this.hiddenLeftChecker = 1
      // console.log(this.singleImgs)
    }
  }
}
</script>

<style lang="scss">
.mainPage{
  .single-img{
    width: 100%;
    height: fit-content;

    img{
      width: 100%;
      object-fit: cover;
    }
  }
}
.carousel-container{
  overflow: hidden;
  position: relative;

  .carousel-wr{
    display: flex;
    column-gap: 24px;
    align-items: center;
    justify-content: center;
    position: absolute;

    .carousel-items{
      width: 100%;
      height: fit-content;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.5s ease-in-out;

      &.hidden-left{
        margin-left: -150%;
      }


      img{
        width: fit-content;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}

@media screen and (max-width: 899px) {
  .mainPage{
    .w-100{
      h2.grandTitle{
        line-height: 42px;
      }
    }

    .share-wr{
      height: fit-content;
      .gap-64{
        flex-direction: column;
        gap: 24px;
      }
    }

    .carousel-container{
      height: 480px;
      .carousel-wr{

        .carousel-items{
         height: 420px;
        }
      }
    }

    .price-wr{
      flex-direction: column;

      .w-50{
        width: 100%;
        height: calc(50% - 12px);

        .gap-48{
          flex-direction: column;
          gap: 24px;
        }
      }
    }
  }
}
</style>