<template>
  <div name="volunteersProgramBlock" class="block">

    <animatedTitle
      :animateAt="this.offTop"
      :titleName="this.title[$i18n.locale]"
    />

    <div class="w-100 gap-24   h-620p">

      <div class="w-50">
        <p class="commonP rem-13 clr-type">
            {{txt2[$i18n.locale]}}

        </p>

        <button class="prim mt-a w-4 h-48p">
          <span>{{txt[$i18n.locale]}}</span>
        </button>
      </div>

      <div class="w-50 pos-rel bor-r-20 ovr-hidden">
        <img class="back-img" src="@/assets/temporary/volunteer.png" alt="">
      </div>

    </div>

  </div>
</template>

<script>
import animatedTitle from '../animatedTitle.vue'

export default {
  name: 'blockVolunteersProgram',

  components: {
    animatedTitle
  },

  data() {
    return {
      offTop: 1,
      title:{
        uz: 'Ko\'ngillilar',
        ru: 'Волонтерам',
        uzcyr: 'Кўнгиллилар',
        en: 'Volunteers',
      },
      txt:{
        uzcyr: 'Кўнгилли бўлиш',
        ru: 'Стать волонтером',
        uz: 'Ko\'ngilli bo\'lish',
        en: 'Become a volunteer',
      },
      txt2:{
        uz:`San'atshunoslar emas (muzeyda san'at yo'nalishi bo'yicha talabalar uchun amaliyot va amaliyot o'tash tizimi mavjud), balki muzeyga tez-tez tashrif buyurishni xohlaydigan, biznesni zavq bilan birlashtirgan turli kasb egalari (asosan, texnik funktsiyalarni bajaradilar va tashrif buyuruvchilar bilan muloqot qilishadi).`,
        uzcyr:'Санъатшунослар эмас (музейда санъат йўналиши бўйича талабалар учун амалиёт ва амалиёт ўташ тизими мавжуд), балки музейга тез-тез ташриф буюришни хоҳлайдиган, бизнесни завқ билан бирлаштирган турли касб эгалари (асосан, техник функцияларни бажарадилар ва ташриф буюрувчилар билан мулоқот қилишади).',
        ru:'Не искусствоведы (для студентов-искусствоведов в музее есть система практик и стажировок), а люди самых разных профессий, которые хотят чаще бывать в музее, совмещая приятное с полезным (выполняя в основном технические функции и общаясь с посетителями).',
        en:'Not art historians (the museum has a system of internships and internships for art students), but people of various professions who want to visit the museum more often, combining business with pleasure (mainly performing technical functions and communicating with visitors).',
      }
    }
  },

  methods: {
    getOffsetTop() {
      this.offTop = document.getElementsByName('volunteersProgramBlock')[0].offsetTop - 400
    },
  },

  mounted() {
    this.getOffsetTop()
  }
}
</script>

<style>

</style>