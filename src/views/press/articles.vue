<template>
  <div class="mainPage">

    <pageTitleAnimated
      :titleName="title"
      background="articles"
    />


    <div class="w-100 gap-48 mt-80">
      <p class="commonP line-h-30 colorGreyD">Количество публикаций:</p>
      <p class="commonP line-h-30 bold colorType">1 694</p>
    </div>

    <div class="w-100 mt-60 gap-24">

      <!-- Card Start -->

      <div class="w-100 h-320p bor-r-20 gap-24 ovr-hidden backgrnd-white">
        <div class="w-4 pos-rel">
          <div class="dark-layer-solid z-idx1"></div>
          <img class="back-img" src="@/assets/temporary/samovar.jpg" alt="">
        </div>

        <div class="w-8c d-f fd-c box-brb pad-l-24p pad-r-48 pad-t-48 pad-b-48">
          <h4 class="commonT colorGreyD">This is title</h4>

          <div class="w-100 justify-sb mt-a">
            
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
                  icon="author"
                  size="middle"
                />
                <p class="helpers">Касымов А</p>
              </div>

              <div class="w-a d-f fd-r align-c gap-12 cur-ptr">
                <Icons
                  icon="share"
                  size="middle"
                />
                <p class="helpers">Поделиться</p>
              </div>
            </div>

            <button
              @click="goToSingle"
              class="prim w-3"
            >
              <span>Click me</span>
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
      :currentPage="title"
    />

  </div>
</template>

<script>
import pageTitleAnimated from '@/components/pageTitleAnimated.vue';
import paginate from '@/components/paginate.vue';
import breadCrumbs from '@/components/breadCrumbs.vue';
import Icons from '@/components/icons.vue'

export default {
  name: 'articlesPage',

  components: {
    pageTitleAnimated, paginate, breadCrumbs, Icons
  },

  data() {
    return {
      title: 'Статьи',
      articlesID: 'Технологии древних скульпторов. Как они прилумывали новые технологии и применяли в широком круге',

      curPage: 4,
      pages: 156
    }
  },

  methods: {
    goToSingle() {
      this.$router.push({ path: '/articles/' + this.articlesID})
    }
  }
}
</script>

<style>

</style>