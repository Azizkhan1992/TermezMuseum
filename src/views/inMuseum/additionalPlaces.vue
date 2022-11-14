<template>
  <div class="mainPage">


    <pageTitleAnimated
      :titleName="title[$i18n.locale]"
      background="additional"
    />


    <div class="w-100 fd-c gap-24">

      <!-- Card Start -->

      <div
        v-for="place in allAddPlaces"
        :key="place.id"
        class="w-100 ovr-hidden pos-rel bor-r-20 h-610p"
      >

        <div class="w-4 z-idx2 d-f fd-c ml-a pad-t-48 pad-b-48 pad-r-24p box-brb">
          <h3 class="commonT">{{place.title}}</h3>
          <p class="commonD mt-24 colorWhite">{{place.description}}</p>

          

          
          <div class="w-100 gap-24 fd-c mt-a">
            

            <div class="w-100 mt-12 gap-12">
              <Icons
                size="middle"
                icon="clock"
              />
              <div class="w-100 fd-c gap-12">
                <div class="w-100 gap-12">
                  <p class="helpers mw-fit">{{$t("workdays")}}:</p>
                  <p class="mainers colorWhite">{{place.info.workingDays}}</p>
                </div>

                <div class="w-100 gap-12">
                  <p class="helpers mw-fit">{{$t("workhours")}}:</p>
                  <p class="mainers colorWhite">{{place.info.workingHours}}</p>
                </div>
              </div>
            </div>


            <div class="w-100 mt-12 gap-12">
              <Icons
                size="middle"
                icon="phone"
              />
              <div class="w-100 fd-c gap-12">
                <div class="w-100 gap-12">
                  <p class="helpers mw-fit">{{$t('phoneNumber')}}:</p>
                  <a :href="'tel:' + place.info.phoneNumber" class="mainers colorWhite">{{place.info.phoneNumber}}</a>
                </div>
              </div>
            </div>


            <div class="w-100 mt-12 gap-12">
              <Icons
                size="middle"
                icon="mail"
              />
              <div class="w-100 fd-c gap-12">
                <div class="w-100 gap-12">
                  <p class="helpers mw-fit">{{$t("email")}}:</p>
                  <a :href="'mailto:' + place.info.email" class="mainers colorWhite">{{place.info.email}}</a>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div class="dark-layer-card-hrz z-idx1"></div>
        <img class="back-img" :src="require('@/assets/temporary/' + place.img + '.jpg')" alt="">
      </div>

      <!-- Card Stop -->

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
  name: 'additionalPlacesPage',

  components: {
    pageTitleAnimated, breadCrumbs, Icons
  },

  data() {
    return {
      title: {
        language_uzlatin: 'Qo\'shimcha',
        language_uzCyrillic: 'Қўшимча',
        language_en: 'Additional',
        language_ru: 'Дополнительно',
      },
      allAddPlaces: this.$store.state.addPlaces
    }
  }
}
</script>

<style>

</style>