<template>
  <div name="volunteersProgramBlock" class="block" v-if="volunteer != null">

    <animatedTitle
      :animateAt="offTop"
      :titleName="title[$i18n.locale]"
    />

    <div class="w-100 gap-24   h-620p">

      <div class="w-50">
        <p class="commonP rem-13 clr-type">
            {{txt2[$i18n.locale]}}

        </p>

        <button class="prim mt-a w-4 h-48p" @click="$router.push('/volunteers-program')">
          <span>{{txt[$i18n.locale]}}</span>
        </button>
      </div>

      <div class="w-50 pos-rel bor-r-20 ovr-hidden">
        <img class="back-img" :src="volunteer.imageVolunteer?.extraImage?.path" alt="">
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
      volunteer: [],
      title:{
        language_uzCyrillic: 'Кўнгиллилар',
        language_ru: 'Волонтерам',
        language_uzlatin: 'Ko\'ngillilar',
        language_en: 'Volunteers',
      },
      txt:{
        language_uzCyrillic: 'Кўнгилли бўлиш',
        language_ru: 'Стать волонтером',
        language_uzlatin: 'Ko\'ngilli bo\'lish',
        language_en: 'Become a volunteer',
      },
      txt2:{
        language_uzlatin:`San'atshunoslar emas (muzeyda san'at yo'nalishi bo'yicha talabalar uchun amaliyot va amaliyot o'tash tizimi mavjud), balki muzeyga tez-tez tashrif buyurishni xohlaydigan, biznesni zavq bilan birlashtirgan turli kasb egalari (asosan, texnik funktsiyalarni bajaradilar va tashrif buyuruvchilar bilan muloqot qilishadi).`,
        language_uzCyrillic:'Санъатшунослар эмас (музейда санъат йўналиши бўйича талабалар учун амалиёт ва амалиёт ўташ тизими мавжуд), балки музейга тез-тез ташриф буюришни хоҳлайдиган, бизнесни завқ билан бирлаштирган турли касб эгалари (асосан, техник функцияларни бажарадилар ва ташриф буюрувчилар билан мулоқот қилишади).',
        language_ru:'Не искусствоведы (для студентов-искусствоведов в музее есть система практик и стажировок), а люди самых разных профессий, которые хотят чаще бывать в музее, совмещая приятное с полезным (выполняя в основном технические функции и общаясь с посетителями).',
        language_en:'Not art historians (the museum has a system of internships and internships for art students), but people of various professions who want to visit the museum more often, combining business with pleasure (mainly performing technical functions and communicating with visitors).',
      }
    }
  },

  methods: {
    getOffsetTop() {
      this.offTop = document.getElementsByName('volunteersProgramBlock')[0]?.offsetTop - 400
    },
    async getVolunteers() {
      const data = await this.$api('/home/mobileApp');
      this.volunteer = data.data.mobileAppDocument
    },
  },

  mounted() {
    this.getOffsetTop()
    this.getVolunteers()
  }
}
</script>

<style>

</style>
