<template>
  <div name="museumsFundBlock" class="block">

    <animatedTitle
      :animateAt="this.offTop"
      :titleName="this.title[$i18n.locale]"
    />

    <div class="w-100 bor-r-20 ovr-hidden pos-rel h-680p">

      <div class="w-50 pad-48p box-brb ml-a z-idx2">

        <h3 class="commonT">Акция "Подари скамейку"</h3>

        <p class="commonP mt-60">«Даст неповторимую возможность всем любителям истории и культуры не только помочь дому музею в благородном деле воссоздания исторического облика музея Ойбека, но и позволит всем желающим навсегда вписать своё имя в историю музея, ведь на каждой скамейке будет именная табличка!</p>

        <button class="white-ghost mt-a ml-a w-3 h-48p m__btn_100">
          <span>{{$t("donate")}}</span>
        </button>

      </div>

      <div class="dark-layer-hrz"></div>
      <img class="back-img" src="@/assets/static/main.jpg" alt="">

    </div>

  </div>
</template>

<script>
import animatedTitle from '../animatedTitle.vue'

export default {
  name: 'blockMuseumsFund',

  components: {
    animatedTitle
  },

  data() {
    return {
      offTop: 1,
      title:{
      language_uzlatin:'Muzey fondi',
        language_uzCyrillic:'Музей фонди',
        language_en:'Museum Foundation',
        language_ru:'Фонд музея',
      },


    }
  },

  methods: {
    getOffsetTop() {
      this.offTop = document.getElementsByName('museumsFundBlock')[0].offsetTop - 400
    },
  },

  mounted() {
    this.getOffsetTop()
  }
}
</script>

<style>

</style>
