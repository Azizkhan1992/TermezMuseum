<template>
  <div class="mainPage">

    <pageTitleAnimated
      :titleName="title[$i18n.locale]"
      background="management"
    />

    <div class="grid-2 grid-1 w-100">
      <div
        v-for="manager, idx in managers"
        :key="idx"
        class="w-100 h-480p ovr-hidden bor-r-20 backgrnd-white gap-24 m__management_card"
      >
        <img v-if="manager?.img?.path" class="w-50 m__management_card_img" :src="manager?.img.path" alt="">
        <img v-else class="w-50 m__management_card_img" src="@/assets/temporary/manager-1.jpg" alt="">

        <div class="w-50 box-brb h-100 ovr-hidden pad-t-24p pad-b-24p pad-r-24p m__management_card_items">

          <h3 class="commonT colorType h-30p line-h-36 mt-12">{{manager?.surname[$i18n.locale]}}</h3>
          <h3 class="commonT colorType h-30p line-h-36 mt-12">{{manager?.name[$i18n.locale]}}</h3>
          <h3 class="commonT colorType h-30p line-h-36 mt-12">{{manager?.secondName[$i18n.locale]}}</h3>

          <h3 class="commonP mt-24 h-60p colorGreyD line-h-30 bold">{{manager?.position.text[$i18n.locale]}}</h3>

          <div class="w-100 mt-12 gap-12 m__management_card_info">
            <Icons
            v-if="manager?.workingTime"
              size="middle"
              icon="clock"
            />
            <div class="w-100 fd-c gap-12">
              <div class="w-100 gap-12">
                <p class="helpers mw-fit" v-if="manager?.workingTime">{{$t("recDays")}}:</p>
                <p class="mainers" v-if="manager?.workingTime">{{workDays[0]?.val}} - {{workDays[1]?.val}}</p>
              </div>

              <div class="w-100 gap-12">
                <p class="helpers mw-fit" v-if="manager?.workingTime">{{$t("recHours")}}:</p>
                <p class="mainers" v-if="manager?.workingTime">{{manager?.workingTime?.startTime}} - {{manager?.workingTime?.finishTime}}</p>
              </div>
            </div>
          </div>

          <div class="w-100 mt-24 gap-12 m__management_card_info">
            <Icons
              size="middle"
              icon="phone"
            />
            <div class="w-100 fd-c gap-12">
              <div class="w-100 gap-12">
                <p class="helpers mw-fit">{{$t("phoneNumber")}}:</p>
                <a :href="manager?.contact?.phoneNumber" class="mainers">{{manager?.contact?.phoneNumber}}</a>
              </div>
            </div>
          </div>

          <div class="w-100 mt-24 gap-12 m__management_card_info">
            <Icons
              size="middle"
              icon="mail"
            />
            <div class="w-100 fd-c gap-12">
              <div class="w-100 gap-12">
                <p class="helpers mw-fit">{{$t("email")}}:</p>
                <a :href="manager?.contact?.email" class="mainers">{{manager?.contact?.email}}</a>
              </div>
            </div>
          </div>

          <button
            @click="goToSingle(manager._id)"
            class="prim h-48p mt-36"
          >
            <span>{{$t("more")}}</span>
          </button>

        </div>
      </div>
    </div>

    <breadCrumbs
      :currentPage="title?.[$i18n.locale]"
    />

  </div>
</template>

<script>
import pageTitleAnimated from '@/components/pageTitleAnimated.vue'
import breadCrumbs from '@/components/breadCrumbs.vue'
import Icons from '@/components/icons.vue'

export default {
  name: 'managementPage',

  components: {
    pageTitleAnimated,
    breadCrumbs,
    Icons,
},

  data() {
    return {
      title: {
        language_uzlatin: 'Rahbariyat',
        language_uzCyrillic: '??????????????????',
        language_ru: '??????????????????????',
        language_en: 'Management',
      },
      managers: [],
      weekDays: [
        {id: 1, name: 'Yakshanba', val: 'Yak'},
        {id: 2, name: 'Dushanba', val: 'Du'},
        {id: 3, name: 'Seshanba', val: 'Se'},
        {id: 4, name: 'Chorshanba', val: 'Chor'},
        {id: 5, name: 'Payshanba', val: 'Pay'},
        {id: 6, name: 'Juma', val: 'Ju'},
        {id: 7, name: 'Shanba', val: 'Shan'}
      ],
      weekEnd: [],
      workDays: []
    }
  },

  mounted(){
    

    this.getManagmentData()
  },

  methods: {
    getManagmentData(){
      this.$api.get('/about/employee/site')
      .then(resp => {
        this.managers = resp.data.employees
        // console.log(this.managers)
        this.managers.forEach(elem => {
          if(elem.workingTime){
            this.getWeekendDay(elem.workingTime)
          this.getWorkDays(elem.workingTime)
          }
        })
      }).catch(err => {console.log(err)})
    },
    getWorkDays(time){
      this.workDays = this.weekDays.filter(val => (val.id == time.startDate+1 || val.id == time.finishDate+1))
      // console.log(this.workDays)
    },
    getWeekendDay(time){
      this.weekEnd = this.weekDays.filter(val => {
        return val.id>time.finishDate
      })
    },
    goToSingle(id) {
      this.$router.push( {path: '/management/' + id})
    }
  }
}
</script>

<style>

</style>
