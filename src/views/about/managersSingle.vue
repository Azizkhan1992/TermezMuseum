<template>
  <div class="mainPage">

    <div class="w-100 mt-120 gap-24 manage_single">
      <div class="w-4 pos-rel h-652p bor-r-20 ovr-hidden respons">
        <img v-if="managerInfo?.img" class="back-img" :src="managerInfo?.img?.path" alt="">
        <img v-else class="back-img" src="@/assets/temporary/manager-1.jpg" alt="">
      </div>

      <div class="w-8 respons-title">
        <h2 class="grandTitle colorType ta-l line-h-68 inline-h">{{managerInfo?.surname?.[$i18n.locale]}}</h2>
        <i class="word-break">  </i>
        <h2 class="grandTitle colorType ta-l line-h-68 inline-h">{{managerInfo?.name?.[$i18n.locale]}}</h2>
        <i class="word-break">  </i>
        <h2 class="grandTitle colorType ta-l line-h-68 inline-h">{{managerInfo?.secondName?.[$i18n.locale]}}</h2>
        <h4 class="commonT colorGreyD mt-60">{{managerInfo?.position?.text?.[$i18n.locale]}}</h4>

        <!-- 1 Start -->

        <div class="w-100 mt-60 gap-12">
          <Icons
            size="middle"
            icon="clock"
          />
          <div class="w-100 fd-c gap-12">
            <div class="w-100 gap-12">
              <p class="helpers font-s-16p mw-fit">{{$t("recDays")}}:</p>
              <p v-if="managerDays?.startDay && managerDays?.endDay" class="mainers font-s-16p">{{managerDays?.startDay[0]?.name?.[$i18n.locale]}} - {{managerDays?.endDay[0]?.name?.[$i18n.locale]}}</p>
            </div>

            <div class="w-100 gap-12">
              <p class="helpers font-s-16p mw-fit">{{$t("recHours")}}:</p>
              <p class="mainers font-s-16p">{{managerInfo?.workingTime?.startTime}} - {{managerInfo?.workingTime?.finishTime}}</p>
            </div>
          </div>
        </div>

        <!-- 1 Stop -->

        <!-- 2 Start -->

        <div class="w-100 mt-24 gap-12">
          <Icons
            size="middle"
            icon="phone"
          />
          <div class="w-100 fd-c gap-12 justify-c">
            <div class="w-100 gap-12">
              <p class="helpers font-s-16p mw-fit">{{$t("phoneNumber")}}:</p>
              <a v-if="managerInfo?.contact?.extraPhoneNumber" :href="managerInfo?.contact?.extraPhoneNumber" class="mainers font-s-16p">{{managerInfo?.contact?.extraPhoneNumber}}</a>
              <a v-else :href="managerInfo?.contact?.phoneNumber">{{managerInfo?.contact?.phoneNumber}}</a>
            </div>
          </div>
        </div>

        <!-- 2 Stop -->

        <!-- 3 Start -->

        <div class="w-100 mt-24 gap-12">
          <Icons
            size="middle"
            icon="mail"
          />
          <div class="w-100 fd-c gap-12 justify-c">
            <div class="w-100 gap-12">
              <p class="helpers font-s-16p mw-fit">{{$t("email")}}:</p>
              <a :href="managerInfo?.contact?.email" class="mainers font-s-16p">{{managerInfo?.contact?.email}}</a>
            </div>
          </div>
        </div>

        <!-- 3 Stop -->

      </div>
    </div>

    <div class="w-100">
      <div class="table-simple pad-48p ovr-hidden box-brb bor-r-20 mt-60 gap-48">
        <div
          class="w-100 d-f fd-c gap-24"
        >
          <h4 class="commonT colorGreyD">{{$t('respons')}}</h4>
          <p class="commonD">{{managerInfo?.responsibility?.text?.[$i18n.locale]}}</p>
          <h4 class="commonT colorGreyD">{{$t('workPl')}}</h4>
          <p class="commonD">{{managerInfo?.workedPlaces?.text?.[$i18n.locale]}}</p>
          <h4 class="commonT colorGreyD">{{$t('birthY')}}</h4>
          <p class="commonD">{{ managerInfo?.birthPlaceAndDate?.birthDate | filBirth }}
            {{ $t("year") }}</p>
            <h4 class="commonT colorGreyD">{{$t('eduStage')}}</h4>
            <p class="commonD">{{managerInfo?.education?.text?.[$i18n.locale]}}</p>
            <h4 class="commonT colorGreyD">{{$t('speciality')}}</h4>
            <p class="commonD">{{managerInfo?.speciality?.text?.[$i18n.locale]}}</p>
            <h4 class="commonT colorGreyD">{{$t('awards')}}</h4>
            <p class="commonD">{{managerInfo?.awards?.text?.[$i18n.locale]}}</p>
            <h4 class="commonT colorGreyD">{{$t('inPos')}}</h4>
            <p class="commonD"><i v-if="checkLang()" class="since">{{ $t("since1") }}</i
            >{{ filPost(managerInfo?.inThisPositionSince?.date) + " " + $t("year1")
            }}<i
              v-if="
                this.$i18n.locale == 'language_uzlatin' ||
                this.$i18n.locale == 'language_uzCyrillic'
              "
              >{{ $t("since1") }}</i
            ></p>
        </div>
      </div>
    </div>

    <breadCrumbs
    v-if="managerInfo?.name"
      :currentPage="managerInfo?.name?.[$i18n.locale]"
      :prevPageName="name?.[$i18n.locale]"
      :prevPageLink="'/management'"
    />  
  </div>
</template>

<script>
import breadCrumbs from '@/components/breadCrumbs.vue'
import Icons from '@/components/icons.vue'

export default {
  name: 'managersSinglePage',

  components: {
    breadCrumbs, Icons
  },

  data() {
    return {
      title: this.$route.params.id,
      name: {
        language_uzlatin: 'Rahbariyat',
        language_uzCyrillic: 'Раҳбарият',
        language_ru: 'Руководство',
        language_en: 'Management',
      },
      months: [
        {
          id: 1,
          monthName: {
            language_uzlatin: "Yanvar",
            language_uzCyrillic: "Январ",
            language_en: "January",
            language_ru: "Январь",
          },
        },
        {
          id: 2,
          monthName: {
            language_uzlatin: "Fevral",
            language_uzCyrillic: "Феврал",
            language_en: "February",
            language_ru: "Февраль",
          },
        },
        {
          id: 3,
          monthName: {
            language_uzlatin: "Mart",
            language_uzCyrillic: "Март",
            language_en: "March",
            language_ru: "Март",
          },
        },
        {
          id: 4,
          monthName: {
            language_uzlatin: "Aprel",
            language_uzCyrillic: "Aпрел",
            language_en: "April",
            language_ru: "Апреля",
          },
        },
        {
          id: 5,
          monthName: {
            language_uzlatin: "May",
            language_uzCyrillic: "Май",
            language_en: "May",
            language_ru: "Май",
          },
        },
        {
          id: 6,
          monthName: {
            language_uzlatin: "Iyun",
            language_uzCyrillic: "Июн",
            language_en: "June",
            language_ru: "Июнь",
          },
        },
        {
          id: 7,
          monthName: {
            language_uzlatin: "Iyul",
            language_uzCyrillic: "Июл",
            language_en: "July",
            language_ru: "Июль",
          },
        },
        {
          id: 8,
          monthName: {
            language_uzlatin: "Avgust",
            language_uzCyrillic: "Август",
            language_en: "August",
            language_ru: "Август",
          },
        },
        {
          id: 9,
          monthName: {
            language_uzlatin: "Sentabr",
            language_uzCyrillic: "Сентабр",
            language_en: "September",
            language_ru: "Сентябрь",
          },
        },
        {
          id: 10,
          monthName: {
            language_uzlatin: "Oktabr",
            language_uzCyrillic: "Октабр",
            language_en: "Oktober",
            language_ru: "Октябрь",
          },
        },
        {
          id: 11,
          monthName: {
            language_uzlatin: "Noyabr",
            language_uzCyrillic: "Ноябр",
            language_en: "November",
            language_ru: "Ноябрь",
          },
        },
        {
          id: 12,
          monthName: {
            language_uzlatin: "Dekabr",
            language_uzCyrillic: "Декабр",
            language_en: "December",
            language_ru: "Декабрь",
          },
        },
      ],
      managerInfo: {},
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
      managerDays: []
    }
  },
  mounted(){
    this.getManagerInfo()
  },

  methods:{
    async getManagerInfo(){
      await this.$api.get(`/about/employee/${this.title}`)
      .then(response => {
        this.managerInfo = response.data.employee

        this.changeDay()
        // console.log(this.managerInfo)
      }), err => {console.log(err)}
    },

    changeDay() {
        this.managerDays.startDay = this.weekDays.filter(
          (e) => e.id == this.managerInfo.workingTime.startDate
        );
        this.managerDays.endDay = this.weekDays.filter(
          (e) => e.id == this.managerInfo.workingTime.finishDate
        );
    },

    filPost(val) {
      if (val) {
        let temp = val.split("T");
        let year = new Date(temp[0]).getFullYear();
        let month = new Date(temp[0]).getMonth();
        let day = new Date(temp[0]).getDay();
        let monId = month + 1;

        let monthT = this.months[monId].monthName?.[this.$i18n.locale];

        return day + " " + monthT + " " + year;
      }
    },

    checkLang() {
      if (
        this.$i18n.locale == "language_en" ||
        this.$i18n.locale == "language_ru"
      ) {
        return true;
      }
    },
  },
  filters: {
    filBirth(val) {
      let data;
      if (val) {
        let temp = val.split("T");
        data = new Date(temp).getFullYear();
      }
      return data;
    },
  }
}
</script>

<style>

</style>