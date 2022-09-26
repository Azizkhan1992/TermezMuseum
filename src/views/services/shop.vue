<template>
  <div class="mainPage">

    <pageTitleAnimated
      :titleName="title"
      background="shop"
    />


    <!-- Input Bar Start -->

    <div class="w-100 z-idx100 fd-r gap-24 backgrnd-white bor-r-20 pad-24p box-brb">
      <div class="w-100 d-f fd-c">

        <label class="colorGreyD mb-4">Section</label>

        <iconedInput
          v-model="search"
          icon="search"
          placeholder="Введите текст поиска"
        />

      </div>
    </div>

    <!-- Input Bar Stop -->


    <div class="w-100 gap-48 mt-80">
      <p class="commonP line-h-30 colorGreyD">Количество товаров:</p>
      <p class="commonP line-h-30 bold colorType">1 694</p>
    </div>


    <div class="w-100 grid-4 mt-60">
    
      <div
        @click="goToSingle"
        v-for="xhbt in allExhibits"
        :key="xhbt.id"
        class="w-100 bor-r-20 cur-ptr box-brb ovr-hidden pos-rel h-480p"
      >
        <div class="w-100 fd-c pad-24p">
          <p class="commonP bold line-h-24 mt-a">{{xhbt.title}}</p>
          
          <div class="w-100 gap-12 mt-24">
            <p class="helpers">Категория:</p>
            <p class="mainers colorWhite">{{xhbt.year}}</p>
          </div>
        </div>

        <div class="dark-layer-card z-idx1"></div>
        <img class="back-img" :src="require('@/assets/temporary/' + xhbt.img + '.jpg')" alt="">
      </div>

    </div>


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
import pageTitleAnimated from '@/components/pageTitleAnimated.vue';
import iconedInput from '@/components/iconedInput.vue';
import paginate from '@/components/paginate.vue';
import breadCrumbs from '@/components/breadCrumbs.vue';

export default {
  name: 'shopPage',

  components: {
    pageTitleAnimated, iconedInput, paginate, breadCrumbs
  },

  data() {
    return {
      allExhibits: this.$store.state.exhibits,
      itemsID: 'Статуя будды',

      title: 'Магазин',
      search: '',
      curPage: 11,
      pages: 84
    }
  },

  methods: {
    goToSingle() {
      this.$router.push({ path: '/shop/' + this.itemsID})
    }
  }
}
</script>

<style>

</style>