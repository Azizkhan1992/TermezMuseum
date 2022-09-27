<template>
  <div name="volunteersProgramBlock" class="block">

    <animatedTitle
      :animateAt="this.offTop"
      :titleName="this.title"
    />

    <div class="w-100 gap-24   h-620p">

      <div class="w-50">
        <p class="commonP rem-13 clr-type">
          Не искусствоведы (для студентов-искусствоведов в музее есть система практик и стажировок), а люди самых разных профессий, которые хотят чаще бывать в музее, совмещая приятное с полезным (выполняя в основном технические функции и общаясь с посетителями).

        </p>

        <button class="prim mt-a w-4 h-48p">
          <span>Стать волонтером</span>
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
      title: 'Волонтерам',
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