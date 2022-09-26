<template>
  <div class="mainPage">

    <pageTitleAnimated
      :titleName="title"
      background="partners"
    />

    <div class="w-100 mb-60">
      <p class="commonD">
        Термезский археологический музей является единственным археологическим музеем в нашей стране и относится к числу специализированных музеев. Этот музей является одним из самых замечательных мест нашего города, в котором возрождается история древнего Сурханского оазиса на протяжении тысячелетий.
        <br/>
        <br/>
        Термезский археологический музей состоит из вестибюля, 9 основных выставочных залов, нумизматического выставочного зала, выставочного зала, посвященного японскому археологу Като Кюдзо, небольшого выставочного зала и галереи под крыльцом. В музее также есть библиотека с редкими рукописями и литературой.
      </p>
    </div>


    <div class="w-100 d-f fd-c gap-24">
    
      <!-- Card Start -->
    
      <div 
        class="w-100 h-240p bor-r-20 ovr-hidden backgrnd-white"
        v-for="partner in allPartners"
        :key="partner.id"
      >
        <div class="w-4 d-f pad-24p box-brb align-c justify-c backgrnd-greyD h-a">
          <img class="h-100 w-100 obj-fit-con" :src="require('@/assets/temporary/' + partner.img +'.png')" alt="">
        </div>

        <div class="w-8 box-brb h-100 d-f fd-c pad-24p">
          <h3 class="commonT colorType">{{partner.name}}</h3>
          <p class="commonD mt-12 colorType">{{partner.description}}</p>

          <div class="w-a d-f fd-r align-c gap-12 mt-a">
            <Icons
              icon="globus"
              size="middle"
            />
            <p class="helpers">Website:</p>
            <a target="_blanc" :href="partner.website" class="mainers">{{cuttingUrl(partner.website)}}</a>
          </div>

          <div class="w-100 mt-24 gap-48">
            <div class="w-a d-f fd-r align-c gap-12">
            <Icons
              icon="phone"
              size="middle"
            />
            <p class="helpers">Phone number:</p>
            <a :href="'tel:' + partner.phoneNumber" class="mainers">{{partner.phoneNumber}}</a>
          </div>
          <div class="w-a d-f fd-r align-c gap-12">
            <Icons
              icon="mail"
              size="middle"
            />
            <p class="helpers">Email:</p>
            <a :href="'mailto:' + partner.email" class="mainers">{{partner.email}}</a>
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
  name: 'partnersPage',

  components: {
    pageTitleAnimated, breadCrumbs, Icons, paginate
  },

  data() {
    return {
      curPage: 3,
      pages: 384,
      title: 'Партнеры музея',
      comments: this.$store.state.comments,
      allPartners: this.$store.state.partners
    }
  },

  methods: {
    cuttingUrl(url) {
      const cutUrl = 'www.' + url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").slice(0, -1)
      return cutUrl
    }
  }
}
</script>

<style>

</style>