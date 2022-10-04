<template>
  <div class="mainPage sitemap">

    <div class="w-100 mt-120 justify-c">
      <h1 class="grandTitle colorType">{{title}}</h1>
    </div>

    <div class="w-100 grid-3 mt-120">
      <div
        v-for="page in sourcePages"
        :key="page.id"
      >
        <a class="sourcePage" :href="page.link">{{page.name[$i18n.locale]}}</a>
      </div>
    </div>

    <div class="w-100 grid-3 r-gap-60 mt-60">
      <div
        class="w-100 fd-c gap-24"
        v-show="menu.page == true"
        v-for="menu in menuLinks"
        :key="menu.id"
      >
        <h3 class="sectionName">{{menu.name[$i18n.locale]}}</h3>
        <div class="w-100 gap-12 fd-c">
          <a
            v-for="page in menu.pages"
            :key="page.id"
            class="sectionPage"
            :href="page.link"
          >
            {{page.page[$i18n.locale]}}
          </a>
        </div>
      </div>
    </div>

    <breadCrumbs
      :currentPage="title"
    />

  </div>
</template>

<script>
import breadCrumbs from '@/components/breadCrumbs.vue'

export default {
  name: 'sitemapPage',

  components: {
    breadCrumbs
  },

  data() {
    return {
      title: 'Карта сайта',
      sourcePages: [],
      menuLinks: [
        {id: 1, name: {ru:'Главная страница',uz:'Bosh sahifa',uzcyr:'Бош саҳифа',en:'Main page'}, bg: 'about-museum', link: '/', page: false},
        {id: 2, name: {ru:'О музее',uzcyr:'Музей ҳақида',uz:'Muzey haqida',en:'About museum'}, link: '', bg: 'about-museum', page: true, pages: [
          {id: 1, page: {ru:'История музея',uzcyr:'Музей тарихи',uz:'Muzey tarixi',en:'History of museum'}, link: '/museum-history'},
          {id: 2, page: {ru:'Руководство',uzcyr:'Раҳбарият',uz:'Rahbariyat',en:'Management'}, link: '/management'},
          {id: 3, page: {ru:'Посетители о нас' ,uzcyr:'Tashrif buyuruvchilar fikri',uz:'Tashrif buyuruvchilar fikri',en:'Visitors about Us'}, link: '/visitors-about-us'},
          {id: 4, page: {ru:'Партнеры',uzcyr:'Ҳамкорлар',uz:'Hamkorlar',en:'Partners'}, link: '/partners'},
          {id: 5, page: {ru:'Документы',uzcyr:'Ҳужжатлар',uz:'Hujjatlar',en:'Documents'}, link: '/documents'},
          {id: 6, page: {ru:'Вакансии',uzcyr:'Бўш иш ўринлари',uz:'Bo\'sh ish o\'rinlari',en:'Vacancies'}, link: '/vacancies'},
          {id: 7, page: {ru:'Часто задаваемые вопросы',uzcyr:'Саволлар ва жавоблар',uz:'Savollar va javoblar',en:'FAQ'}, link: '/faq'},
        ]},
        {id: 3, name: {ru:'В музее',uzcyr:'Музейда',uz:'Muzeyda',en:'In museum'}, link: '', bg: 'in-museum', page: true, pages: [
          {id: 1, page: {ru:'Залы',uzcyr:'Заллар',uz:'Zallar',en:'Halls'}, link: '/halls'},
          {id: 2, page: {ru:'Разделы',uzcyr:'Бўлимлар',uz:'Bo\'limlar',en:'Sections'}, link: '/sections'},
          {id: 3, page: {ru:'Дополнительно',uzcyr:'Қўшимча',uz:'Qo\'shimcha',en:'Additional'}, link: '/additional'},
        ]},
        {id: 4, name: {ru:'Коллекция музея',uzcyr:'Музей коллексияси',uz:'Muzey kolleksiyasi',en:'Museum\'s collection'}, link: '', bg: 'museums-collection', page: true, pages: [
          {id: 1, page: {ru:'Экспонаты',uzcyr:'Экспонатлар',uz:'Eksponatlar',en:'Exhibits'}, link: '/exhibits'},
          {id: 2, page: {ru:'Картины',uzcyr:'Расмлар',uz:'Rasmlar',en:'Paintings'}, link: '/paintings'},
          {id: 3, page: {ru:'Статуи',uzcyr:'Ҳайкаллар',uz:'Haykallar',en:'Statues'}, link: '/statues'},
          {id: 4, page: {ru:'Библиотека',uzcyr:'Кутубхона',uz:'Kutubxona',en:'Library'}, link: '/library'},
        ]},
        {id: 5, name: {ru:'Пресс-служба',uzcyr:'Матбуот хизмати',uz:'Matbuot xizmati',en:'Press'}, link: '', bg: 'press', page: true, pages: [
          {id: 1, page: {ru:'Мероприятия',uzcyr:'Тадбирлар',uz:'Tadbirlar',en:'Events'}, link: '/events'},
          {id: 2, page: {ru:'Выставки',uzcyr:'Кўргазмалар',uz:'Ko\'rgazmalar',en:'Exhibitions'}, link: '/exhibitions'},
          {id: 3, page: {ru:'Новости',uzcyr:'Янгиликлар',uz:'Yangiliklar',en:'News'}, link: '/news'},
          {id: 4, page: {ru:'СМИ о нас',uzcyr:'ОАВ биз ҳақимизда',uz:'OAV biz haqimizda',en:'Mass Medias about Us'}, link: '/medias-about-us'},
          {id: 5, page: {ru:'Открытые данные',uzcyr:'Очиқ маълумотлар',uz:'Ochiq ma\'lumotlar',en:'Open data'}, link: '/open-data'},
          {id: 6, page: {ru:'Статьи',uzcyr:'Мақолалар',uz:'Maqolalar',en:'Articles'}, link: '/articles'},
          {id: 7, page: {ru:'Материалы для СМИ',uzcyr:'ОАВ учун материаллар',uz:'OAV uchun materiallar',en:'Materials for Mass Media'}, link: '/materials-for-medias'},
        ]},
{id: 7, name: {ru:'Медиатека',uzcyr:'Медиатека',uz:'Mediateka',en:'Media library'}, link: '', bg: 'media', page: true, pages: [
          {id: 1, page: {ru:'Фотогалерея',uzcyr:'Расм галереяси',uz:'Rasm galereyasi',en:'Photo gallery'}, link: '/photo-gallery'},
          {id: 2, page: {ru:'3D файлы',uzcyr:'3D файллар',uz:'3D fayllar',en:'3D files'}, link: '/3d-files'},
          {id: 3, page: {ru:'3D Тур по музею',uzcyr:'Музей бўйлаб 3D саёҳат',uz:'Muzey bo\'ylab 3D sayohat',en:'3D Tour in museum'}, link: '/vr-tour'},
          {id: 4, page: {ru:'Видео галерея',uzcyr:'Видео галерея',uz:'Video galereya',en:'Video gallery'}, link: '/video-gallery'},
        ]},
        {id: 8, name: {ru:'Услуги',uzcyr:'Хизматлар',uz:'Xizmatlar',en:'Services'}, link: '', bg: 'services', page: true, pages: [
          {id: 1, page: {ru:'Магазин',uzcyr:'Дўкон',uz:'Do\'kon',en:'Shop'}, link: '/shop'},
          {id: 2, page: {ru:'Посещение музея',uzcyr:'Музейга ташриф',uz:'Muzeyga tashrif',en:'Visiting museum'}, link: '/visiting-museum'},
          {id: 3, page: {ru:'Волонтерам',uzcyr:'Кўнгиллилар',uz:'Ko\'ngillilar',en:'Volunteers'}, link: '/volunteers-program'},
          {id: 4, page: {ru:'Банковские карты',uzcyr:'Банк карталари',uz:'Bank kartalari',en:'Bank cards'}, link: '/bank-cards'},
        ]},
        {id: 9, name: {ru:'Контакты',uzcyr:'Банк карталари',uz:'Kontaktlar',en:'Contacts'}, link: '/contacts', bg: 'about-museum', page: false}
      ]
    }
  },

  methods: {
    getSourcePages() {
      const len = this.menuLinks.length

      for (let i = 0; i < len; i ++) {

        if(this.menuLinks[i].page !== true) {
          this.sourcePages.push(this.menuLinks[i])
        }

      }

    }
  },

  mounted() {
    this.getSourcePages()
  }
}
</script>

<style>

</style>