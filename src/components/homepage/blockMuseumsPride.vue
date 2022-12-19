<template>
  <div name="museumsPride" class="block" v-show="events.length>0">

    <animatedTitle
      :animateAt="this.offTop"
      :titleName="this.title?.[$i18n.locale]"
    />

    <div class="wr-100 gap-24 prd-wr">
      <div class="museumPride" v-for="event, idy in events" :key="idy">
        <div class="event-title">
          <div class="title-items">
            <p>{{event?.title?.[$i18n.locale]}}</p>

            <div class="event-y">
              <span>{{$t('year')+ ':'}}</span>
              <p class="authData">{{(checkDate(event?.additional?.createdDate)+ ' ' + $t('year2'))}}</p>
            </div>
          </div>

          <button class="prdBtn" @click="goToPage(event)">
            {{$t('seeMore')}}
          </button>
        </div>
        
        <img :src="event?.mainImage?.path" alt="">
      </div>

      
    </div>

  </div>
</template>

<script>
import animatedTitle from '../animatedTitle.vue'

export default {
  name: 'blockMuseumsPride',

  components: {
    animatedTitle
  },

  data() {
    return {
      offTop: 1,
      events: [],
      title:{
        language_uzlatin: 'Muzeyning faxri',
        language_ru: 'Гордость музея',
        language_uzCyrillic: 'Музейнинг фахри',
        language_en: 'The pride of the museum',
      }
    }
  },
  mounted() {
    this.getOffsetTop()
    this.getMuseumPride()
  },

  methods: {
    getOffsetTop() {
      this.offTop = document.getElementsByName('museumsPride')[0]?.offsetTop - 400
    },
    async getMuseumPride(){
      await this.$api.get('/home/exhibits')
      .then(resp => {
        let temp = resp.data.result
        if(temp.length>3){
          this.events = temp.slice(0, 3)
        }else{
          this.events = temp
        }
        // console.log(this.events)
      }), err =>{console.log(err)}
    },
    checkDate(date){
      let temp = date.split('T')
      let year = new Date(temp[0]).getFullYear()
      // console.log(year)
      return year
    },
    goToPage(val){
      // console.log(val)
      this.$router.push({path: `/${val.typeOfPride}s/` + val.title[this.$i18n.locale], query: {exId: val._id}})
    }
  },

  
}
</script>

<style>

</style>
