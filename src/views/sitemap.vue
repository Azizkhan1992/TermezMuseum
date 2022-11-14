<template>
  <div class="mainPage sitemap">

    <div class="w-100 mt-120 justify-c">
      <h1 class="grandTitle colorType">{{title[$i18n.locale]}}</h1>
    </div>

    <div class="w-100 grid-3 mt-120">
      <div
        v-for="page, idx in sourcePages"
        :key="idx"
      >
        <a class="sourcePage" :href="page?.url">{{page?.name?.[$i18n.locale]}}</a>
      </div>
    </div>

    <div class="w-100 grid-3 r-gap-60 mt-60">
      <div
        class="w-100 fd-c gap-24"
        v-show="menu?.category == 'section'"
        v-for="menu, idy in menuLinks"
        :key="idy"
      >
        <h3 class="sectionName">{{menu?.name?.[$i18n.locale]}}</h3>
        <div class="w-100 gap-12 fd-c">
          <a
            v-for="page, idz in menu?.subMenu"
            :key="idz"
            class="sectionPage"
            :href="page.link"
          >
            {{page?.name?.[$i18n.locale]}}
          </a>
        </div>
      </div>
    </div>

    <breadCrumbs
      :currentPage="title[$i18n.locale]"
    />

  </div>
</template>

<script>
import breadCrumbs from '@/components/breadCrumbs.vue'

export default {
  name: 'sitemapPage',

  components: {
    breadCrumbs
  },

  data() {
    return {
      title: {
        language_uzlatin: 'Sayt xaritasi',
        language_uzCyrillic: 'Сайт харитаси',
        language_en: 'Web site map',
        language_ru: 'Карта сайта'
      },
      sourcePages: [],
      menuLinks: []
    }
  },

  methods: {
    getMapMenu(){
      this.$api.get('/menu')
      .then(resp => {
        this.menuLinks = resp?.data?.menuDocument
        this.getSourcePages()
        console.log(resp.data.menuDocument)
      }).catch(err => {console.log(err)})
    },
    getSourcePages() {
      const len = this.menuLinks.length

      for (let i = 0; i < len; i ++) {

        if(this.menuLinks[i]?.category !== 'section') {
          this.sourcePages.push(this.menuLinks[i])
        }

      }

    }
  },

  mounted() {
    this.getMapMenu()
    // this.getSourcePages()
  }
}
</script>

<style>

</style>