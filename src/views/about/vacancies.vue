<template>
  <div class="mainPage">

    <pageTitleAnimated
      :titleName="title"
      background="vacancies"
    />

    <div class="w-100 grid-2">

      <!-- Card Start -->

      <div
        class="w-100 h-152p backgrnd-white pad-24p ovr-hidden bor-r-20 box-brb align-c justify-c gap-24"
        v-for="vac in allVacancies"
        :key="vac.id"
      >
        <img class="obj-fit-cov h-64p" :src="require('@/assets/static/fileIcons/' + vac.fileType + '.png')" alt="">
        <div class="w-100 d-f fd-c h-104p">
          
          <p class="commonD bold h-60p">{{vac.title}}</p>
          
          <div class="w-100 mt-a gap-48">
            <div class="w-a d-f fd-r align-c gap-12">
              <Icons
                icon="calendar"
                size="middle"
              />
              <p class="helpers">{{vac.publishedDate}}</p>
            </div>

            <div class="w-a d-f fd-r align-c gap-12 ml-a cur-ptr">
              <Icons
                icon="download"
                size="middle"
              />
              <p class="helpers colorPrim">Скачать документ</p>
            </div>
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
import pageTitleAnimated from '@/components/pageTitleAnimated.vue'
import breadCrumbs from '@/components/breadCrumbs.vue'
import paginate from '@/components/paginate.vue'
import Icons from '@/components/icons.vue'

export default {
  name: 'vacanciesPage',

  components: {
    pageTitleAnimated, breadCrumbs, paginate, Icons
  },

  data() {
    return {
      title: 'Вакансии',
      curPage: 3,
      pages: 384,
      allVacancies: this.$store.state.vacancies
    }
  }
}
</script>

<style>

</style>