<template>
  <div class="mainPage">


    <pageTitleAnimated
        :titleName="title[$i18n.locale]"
        background="additional"
    />




    <div class="w-100 fd-c gap-24">

      <!-- Card Start -->

      <div
          v-for="(place, idx) in allAddPlaces"
          :key="idx"
          class="w-100 ovr-hidden pos-rel bor-r-20 h-610p"
      >
        <div class="w-4 z-idx2 d-f fd-c ml-a pad-t-48 pad-b-48 pad-r-24p box-brb">

          <!-- <h3 class="commonT">{{place.title?.[$i18n.locale]}}</h3>
          <p class="commonD mt-24 colorWhite">{{place.text?.[$i18n.locale]}}</p> -->

          <h3 class="commonT">{{place?.title?.[$i18n.locale]}}</h3>
          <p class="commonD mt-24 colorWhite">{{place?.text?.[$i18n.locale]}}</p>





          <div class="w-100 gap-24 fd-c mt-a">


            <div class="w-100 mt-12 gap-12">
              <Icons
                  size="middle"
                  icon="clock"
              />
              <div class="w-100 fd-c gap-12">
                <div class="w-100 gap-12">
                  <p class="helpers mw-fit">{{$t("workdays")}}:</p>

                  <!-- <p class="mainers colorWhite">{{place.text?.[$i18n.locale]}}</p> -->

                  <p class="mainers colorWhite">{{place?.startDay[0]?.name?.[$i18n.locale]}} - {{place?.endDay[0]?.name?.[$i18n.locale]}}</p>

                </div>

                <div class="w-100 gap-12">
                  <p class="helpers mw-fit">{{$t("workhours")}}:</p>

                  <!-- <p class="mainers colorWhite">{{place.WorkingTime.endDay}}</p> -->

                  <p class="mainers colorWhite">{{place?.WorkingTime?.startTime}} - {{place?.WorkingTime?.endTime}}</p>

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

                  <!-- <a :href="'tel:' + place.contact.phoneNumber" class="mainers colorWhite">{{place.contact.phoneNumber}}</a> -->

                  <a :href="place?.contact?.phoneNumber" class="mainers colorWhite">{{place?.contact?.phoneNumber}}</a>

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

                  <!-- <a :href="'mailto:' + place.contact.email" class="mainers colorWhite">{{place.contact.email}}</a> -->

                  <a :href="place?.contact?.email" class="mainers colorWhite">{{place?.contact?.email}}</a>

                </div>
              </div>
            </div>

          </div>
        </div>

        <div class="dark-layer-card-hrz z-idx1"></div>

        <!-- <img class="back-img" :src="place.img.path" alt=""> -->

        <img class="back-img" :src="place?.img?.path" alt="">

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
        language_uzCyrillic: '??????????????',
        language_en: 'Additional',
        language_ru: '??????????????????????????',
      },
      // allAddPlaces: this.$store.state.addPlaces
      allAddPlaces: [],
      workDays: [],
      weekDays: [
        {
          id: 1,
          name: {
            language_uzlatin: "Dushanba",
            language_uzCyrillic: "??????????????",
            language_ru: "????????????????????",
            language_en: "Monday",
          },
          val: {
            language_uzlatin: "Du",
            language_uzCyrillic: "????",
            language_ru: "????",
            language_en: "Mn",
          },
        },
        {
          id: 2,
          name: {
            language_uzlatin: "Seshanba",
            language_uzCyrillic: "??????????????",
            language_ru: "??????????????",
            language_en: "Tuesday",
          },
          val: {
            language_uzlatin: "Se",
            language_uzCyrillic: "????",
            language_ru: "????",
            language_en: "Tu",
          },
        },
        {
          id: 3,
          name: {
            language_uzlatin: "Chorshanba",
            language_uzCyrillic: "????????????????",
            language_ru: "??????????",
            language_en: "Wednesday",
          },
          val: {
            language_uzlatin: "Chor",
            language_uzCyrillic: "??????",
            language_ru: "????",
            language_en: "Wed",
          },
        },
        {
          id: 4,
          name: {
            language_uzlatin: "Payshanba",
            language_uzCyrillic: "????????????????",
            language_ru: "??????????????",
            language_en: "Thursday",
          },
          val: {
            language_uzlatin: "Pay",
            language_uzCyrillic: "??????",
            language_ru: "????",
            language_en: "Th",
          },
        },
        {
          id: 5,
          name: {
            language_uzlatin: "Juma",
            language_uzCyrillic: "????????",
            language_ru: "??????????????",
            language_en: "Friday",
          },
          val: {
            language_uzlatin: "Ju",
            language_uzCyrillic: "????",
            language_ru: "????",
            language_en: "Fr",
          },
        },
        {
          id: 6,
          name: {
            language_uzlatin: "Shanba",
            language_uzCyrillic: "??????????",
            language_ru: "??????????????",
            language_en: "Saturday",
          },
          val: {
            language_uzlatin: "Shan",
            language_uzCyrillic: "??????",
            language_ru: "??????",
            language_en: "Sa",
          },
        },
        {
          id: 7,
          name: {
            language_uzlatin: "Yakshanba",
            language_uzCyrillic: "??????????????",
            language_ru: "??????????????????????",
            language_en: "Sunday",
          },
          val: {
            language_uzlatin: "Yak",
            language_uzCyrillic: "????",
            language_ru: "????",
            language_en: "Sn",
          },
        },
      ],
    }
  },


  methods: {
    getSinglePlace() {
      this.$api.get('/inmuseum/additional/site')
          .then(resp => {
            this.allAddPlaces = resp.data.result
            for (let i = 1; i <= this.allAddPlaces.length; i++) {
              this.allAddPlaces[i - 1].id = i
            }
            this.getWorkDays(resp.data.result);
            // console.log(this.allAddPlaces)
          }).catch(err => {
        console.log(err)
      })
    },

    getWorkDays(val) {
      // console.log(val)

      for(let i=0; i<=val.length-1; i++){
        val[i].startDay = this.weekDays.filter(e => e.id == val[i].WorkingTime.startDay)
        val[i].endDay = this.weekDays.filter(e => e.id == val[i].WorkingTime.endDay)
      }
      // console.log(val)

    },
  },
  mounted() {
    this.getSinglePlace()
  }
}
</script>

<style>

</style>