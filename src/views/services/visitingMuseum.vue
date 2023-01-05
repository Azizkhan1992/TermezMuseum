<template>
  <div class="mainPage">

    <pageTitleAnimated
      :titleName="title[$i18n.locale]"
      background="visiting-museum"
    />


    <div class="w-100">
      <h4 v-html="visitInfo?.description?.[$i18n.locale]" class="commonD"></h4>
    </div>

    <div class="w-100 mt-60 gap-24 mobile-visit">
      <div class="w-50">
        <div class="w-100 fd-c gap-12">
          <h4 class="commonT colorGreyD">{{$t('workdays')}}:</h4>
          <h4 class="commonD bold colorType">{{ visitInfo?.startDay?.[0]?.name?.[$i18n.locale] }} - {{ visitInfo?.endDay?.[0]?.name?.[$i18n.locale] }}</h4>
        </div>

        <div class="w-100 fd-c gap-12 mt-60">
          <h4 class="commonT colorGreyD">{{$t('workhours')}}:</h4>
          <h4 class="commonD bold colorType">{{ visitInfo?.workingTime?.startTime }} - {{ visitInfo?.workingTime?.endTime }}</h4>
        </div>
      </div>

      <div class="w-50">
        <div class="w-100 fd-c gap-12">
          <h4 class="commonT colorGreyD">{{$t("ticketPrice")}}:</h4>
          <div class="w-a d-f fd-r gap-8">
            <h4 class="commonD bold colorType">{{ visitInfo?.tickePricetForAdult }}</h4>
            <h4 class="commonD colorGreyD">UZS</h4>
          </div>
        </div>

        <div class="w-100 fd-c gap-12 mt-60">
          <h4 class="commonT colorGreyD">{{$t("childrenTicketPrice")}} ({{ visitInfo?.freeAgeRange?.from }}-{{ visitInfo?.freeAgeRange?.to }} {{ $t('toYears') }}):</h4>
          <div class="w-a d-f fd-r gap-8">
            <h4 class="commonD bold colorType">{{ visitInfo?.ticketPriceForChild }}</h4>
            <h4 class="commonD colorGreyD">UZS</h4>
          </div>
        </div>
      </div>
    </div>

    <button class="w-4 prim mt-60" v-if="visitInfo?.link && visitInfo?.link !== ''" @click="goToBuy">
      <span>{{$t('buy')}}</span>
    </button>


    <breadCrumbs
      :currentPage="title[$i18n.locale]"
    />

  </div>
</template>

<script>
import pageTitleAnimated from '@/components/pageTitleAnimated.vue';
import breadCrumbs from '@/components/breadCrumbs.vue';

export default {
  name: 'visitingMuseumPage',

  components: {
    pageTitleAnimated, breadCrumbs
  },

  data() {
    return {
      title: {
        language_uzlatin: 'Muzeyga tashrif',
        language_uzCyrillic: 'Музейга ташриф',
        language_ru: 'Посещение музея',
        language_en: 'Visiting museum',
      },
      visitInfo: '',
      weekDays: [
        {
          id: 1,
          name: {
            language_uzlatin: "Dushanba",
            language_uzCyrillic: "Душанба",
            language_ru: "Понеделник",
            language_en: "Monday",
          },
          val: {
            language_uzlatin: "Du",
            language_uzCyrillic: "Ду",
            language_ru: "Пн",
            language_en: "Mn",
          },
        },
        {
          id: 2,
          name: {
            language_uzlatin: "Seshanba",
            language_uzCyrillic: "Сешанба",
            language_ru: "Вторник",
            language_en: "Tuesday",
          },
          val: {
            language_uzlatin: "Se",
            language_uzCyrillic: "Се",
            language_ru: "Вт",
            language_en: "Tu",
          },
        },
        {
          id: 3,
          name: {
            language_uzlatin: "Chorshanba",
            language_uzCyrillic: "Чоршанба",
            language_ru: "Среда",
            language_en: "Wednesday",
          },
          val: {
            language_uzlatin: "Chor",
            language_uzCyrillic: "Чор",
            language_ru: "Ср",
            language_en: "Wed",
          },
        },
        {
          id: 4,
          name: {
            language_uzlatin: "Payshanba",
            language_uzCyrillic: "Пайшанба",
            language_ru: "Четверг",
            language_en: "Thursday",
          },
          val: {
            language_uzlatin: "Pay",
            language_uzCyrillic: "Пай",
            language_ru: "Чт",
            language_en: "Th",
          },
        },
        {
          id: 5,
          name: {
            language_uzlatin: "Juma",
            language_uzCyrillic: "Жума",
            language_ru: "Пятница",
            language_en: "Friday",
          },
          val: {
            language_uzlatin: "Ju",
            language_uzCyrillic: "Жу",
            language_ru: "Пт",
            language_en: "Fr",
          },
        },
        {
          id: 6,
          name: {
            language_uzlatin: "Shanba",
            language_uzCyrillic: "Шанба",
            language_ru: "Суббота",
            language_en: "Saturday",
          },
          val: {
            language_uzlatin: "Shan",
            language_uzCyrillic: "Шан",
            language_ru: "Суб",
            language_en: "Sa",
          },
        },
        {
          id: 7,
          name: {
            language_uzlatin: "Yakshanba",
            language_uzCyrillic: "Якшанба",
            language_ru: "Воскресение",
            language_en: "Sunday",
          },
          val: {
            language_uzlatin: "Yak",
            language_uzCyrillic: "Як",
            language_ru: "Вс",
            language_en: "Sn",
          },
        },
      ],
      workDays: []
    }
  },
  mounted(){
    this.getVisiting()
  },
  
  methods: {
    getVisiting(){
      this.$store.dispatch('getVisitingMuseum')
      .then(() => {
        this.visitInfo = this.$store.state.visitInfo
        
        // console.log(this.visitInfo)
          this.getWorkDays()
          
      })
    },
    getWorkDays(){
      this.visitInfo.startDay = this.weekDays.filter(
          (e) => e.id == this.visitInfo.workingTime.startDay
        );
        this.visitInfo.endDay = this.weekDays.filter(
          (e) => e.id == this.visitInfo.workingTime.endDay
        );
      // console.log(this.workDays)
    },
    goToBuy(){
      window.open(this.visitInfo.link, '_blank')
    }
  }
}
</script>

<style lang="scss">
@media screen and (max-width: 899px) {
  .mobile-visit{
  flex-direction: column;

  .w-50{
    width: 100%;

    .mt-60{
      margin-top: 24px;
    }
  }
}
}
</style>