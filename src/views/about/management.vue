<template>
  <div class="mainPage">

    <pageTitleAnimated
      :titleName="title"
      background="management"
    />

    <div class="grid-2 grid-1 w-100">
      <div
        v-for="manager in managers"
        :key="manager.id"
        class="w-100 h-480p ovr-hidden bor-r-20 backgrnd-white gap-24 m__management_card"
      >
        <img class="w-50 m__management_card_img" :src="require('@/assets/temporary/' + manager.img + '.jpg')" alt="">

        <div class="w-50 box-brb h-100 ovr-hidden pad-t-24p pad-b-24p pad-r-24p m__management_card_items">

          <h3 class="commonT colorType h-72p line-h-36 mt-24">{{manager.name}}</h3>

          <h3 class="commonP mt-24 h-60p colorGreyD line-h-30 bold">{{manager.post}}</h3>

          <div class="w-100 mt-12 gap-12 m__management_card_info">
            <Icons
              size="middle"
              icon="clock"
            />
            <div class="w-100 fd-c gap-12">
              <div class="w-100 gap-12">
                <p class="helpers mw-fit">Дни приема:</p>
                <p class="mainers">{{manager.info.receptionDays}}</p>
              </div>

              <div class="w-100 gap-12">
                <p class="helpers mw-fit">Часы приема:</p>
                <p class="mainers">{{manager.info.receptionHours}}</p>
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
                <p class="helpers mw-fit">Номер телефона:</p>
                <a :href="'tel:' + manager.info.phone" class="mainers">{{manager.info.phone}}</a>
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
                <p class="helpers mw-fit">Э-почта:</p>
                <a :href="'mailto:' + manager.info.email" class="mainers">{{manager.info.email}}</a>
              </div>
            </div>
          </div>

          <button
            @click="goToSingle(manager.id)"
            class="prim h-48p mt-36"
          >
            <span>Click me</span>
          </button>

        </div>
      </div>
    </div>

    <breadCrumbs
      :currentPage="title"
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
      title: 'Руководство',
      managers: [
        {id: 1, name: 'Файзиева Васила Солиховна', post: 'Директор музея', img: 'manager-1', info: {
          receptionDays: 'Понедельник - Пятница', receptionHours: '09:00 - 16:00', phone: '+998 71 236 74 36',
          email: 'tmi2007@mail.ru'
        }},
        {id: 2, name: 'Каримов Равшан Иргашевич', post: 'Заместитель директора по общим вопросам', img: 'manager-1', info: {
          receptionDays: 'Понедельник - Пятница', receptionHours: '09:00 - 16:00', phone: '+998 71 236 74 36',
          email: 'tmi2007@mail.ru'
        }},
        {id: 3, name: 'Истамов Дилшод Кадырович', post: 'Главный хранитель', img: 'manager-1', info: {
          receptionDays: 'Понедельник - Пятница', receptionHours: '09:00 - 16:00', phone: '+998 71 236 74 36',
          email: 'tmi2007@mail.ru'
        }},
      ]
    }
  },

  methods: {
    goToSingle(id) {
      this.$router.push( {path: '/management/' + id})
    }
  }
}
</script>

<style>

</style>
