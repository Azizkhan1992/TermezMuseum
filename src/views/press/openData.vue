<template>
  <div class="mainPage">

    <pageTitleAnimated
      :titleName="title"
      background="open-data"
    />

    <div class="w-100 h-a backgrnd-white ovr-hidden bor-r-20 pad-24p box-brb">
      <table class="openDataTable">
        <tr
          @click="goToSingle(data.id)"
          class="openDataRow"
          v-for="data in allOpenData"
          :key="data.id"
        >
          <p class="openDataTitle">{{data.title}}</p>
          <Icons
            @click="goToSingle(data.id)"
            icon="tailArrRight"
            size="32"
            color="type"
          />
        </tr>
      </table>
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
import Icons from '@/components/icons.vue'
import paginate from '@/components/paginate.vue'
import breadCrumbs from '@/components/breadCrumbs.vue';

export default {
  name: 'openDataPage',

  components: {
    pageTitleAnimated, Icons, paginate, breadCrumbs
  },

  data() {
    return {
      title: 'Открытые данные',
      allOpenData: this.$store.state.openData,

      curPage: 4,
      pages: 156
    }
  },

  methods: {
    goToSingle(id) {
      this.$router.push({ path: '/open-data/' + id})
    }
  }
}
</script>

<style>

</style>