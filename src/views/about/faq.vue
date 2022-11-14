<template>
  <div class="mainPage">

    <pageTitleAnimated
      :titleName="title[$i18n.locale]"
      background="faq"
    />

    <div class="w-100 backgrnd-white fd-c bor-r-20 box-brb pad-48p">
      <div
        v-for="faq in allFAQS"
        :key="faq.id"
        class="w-100 mt-24 fd-c"
      >
        <div
          @click="switcher(faq.id)"
          class="accordionBtn w-100 cur-ptr gap-24 align-c backgrnd-white"
          :class="openAccrdn == faq.id ? 'open' : ''"
        >
          <p class="commonP us-none colorGreyD bold">{{faq.question}}</p>

          <Icons
            class="ml-a"
            icon="arrDown"
            size="large"
          />
        </div>

        <div
          class="accordionContent w-100 fd-c"
          :class="openAccrdn == faq.id ? '' : 'closed'"
          :style="{height: hghts[faq.id - 1] + 'px'}"
        >
          <div :id="'faqAccr' + faq.id">
            <p v-html="faq.answer" class="commonD mt-24 mb-12">
            </p>
          </div>

        </div>
          
        <hr class="divider mt-12">
      </div>
    </div>


    <breadCrumbs
      :currentPage="title[$i18n.locale]"
    />

  </div>
</template>

<script>
import pageTitleAnimated from '@/components/pageTitleAnimated.vue'
import breadCrumbs from '@/components/breadCrumbs.vue'
import Icons from '@/components/icons.vue'

export default {
  name: 'faqPage',

  components: {
    pageTitleAnimated, breadCrumbs, Icons
  },

  data() {
    return {
      openAccrdn: 1,
      title: {
        language_uzlatin:'Savollar va javoblar',
        language_uzCyrillic:'Саволлар ва жавоблар',
        language_ru:'Часто задаваемые вопросы',
        language_en:'FAQ',
      },
      curPage: 3,
      pages: 384,
      hghts: [],
      allFAQS: this.$store.state.faq
    }
  },

  methods: {
    switcher(id) {
      if(this.openAccrdn !== id) {
        this.openAccrdn = id
      } else this.openAccrdn = 0
    },

    getDivsHeight() {
      const len = this.allFAQS.length
      let arr = []

      for(let i = 1; i <= len; i++) {
        let id = 'faqAccr' + i
        arr.push(document.getElementById(id).clientHeight)
      }

      
      this.hghts = arr
    },

    getHeight(id) {
      return this.hghts.find(height => height.id == id)
    }
  },

  mounted() {
    this.getDivsHeight()
  }
}
</script>

<style>

</style>