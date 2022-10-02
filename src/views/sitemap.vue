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
        <a class="sourcePage" :href="page.link">{{page.name}}</a>
      </div>
    </div>

    <div class="w-100 grid-3 r-gap-60 mt-60">
      <div
        class="w-100 fd-c gap-24"
        v-show="menu.page == true"
        v-for="menu in menuLinks"
        :key="menu.id"
      >
        <h3 class="sectionName">{{menu.name}}</h3>
        <div class="w-100 gap-12 fd-c">
          <a
            v-for="page in menu.pages"
            :key="page.id"
            class="sectionPage"
            :href="page.link"
          >
            {{page.page}}
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
        {id: 1, name: 'Главная страница', bg: 'about-museum', link: '/', page: false},
        {id: 2, name: 'О музее', link: '', bg: 'about-museum', page: true, pages: [
          {id: 1, page: 'История музея', link: '/museum-history'},
          {id: 2, page: 'Руководство', link: '/management'},
          {id: 3, page: 'Посетители о нас', link: '/visitors-about-us'},
          {id: 4, page: 'Партнеры', link: '/partners'},
          {id: 5, page: 'Документы', link: '/documents'},
          {id: 6, page: 'Вакансии', link: '/vacancies'},
          {id: 7, page: 'Часто задаваемые вопросы', link: '/faq'},
        ]},
        {id: 3, name: 'В музее', link: '', bg: 'in-museum', page: true, pages: [
          {id: 1, page: 'Залы', link: '/halls'},
          {id: 2, page: 'Разделы', link: '/sections'},
          {id: 3, page: 'Дополнительно', link: '/additional'},
        ]},
        {id: 4, name: 'Коллекция музея', link: '', bg: 'museums-collection', page: true, pages: [
          {id: 1, page: 'Экспонаты', link: '/exhibits'},
          {id: 2, page: 'Картины', link: '/paintings'},
          {id: 3, page: 'Статуи', link: '/statues'},
          {id: 4, page: 'Библиотека', link: '/library'},
        ]},
        {id: 5, name: 'Пресс-служба', link: '', bg: 'press', page: true, pages: [
          {id: 1, page: 'Мероприятия', link: '/events'},
          {id: 2, page: 'Выставки', link: '/exhibitions'},
          {id: 3, page: 'Новости', link: '/news'},
          {id: 4, page: 'СМИ о нас', link: '/medias-about-us'},
          {id: 5, page: 'Открытые данные', link: '/open-data'},
          {id: 6, page: 'Статьи', link: '/articles'},
          {id: 7, page: 'Материалы для СМИ', link: '/materials-for-medias'},
        ]},
        {id: 6, name: 'Медиатека', link: '', bg: 'media', page: true, pages: [
          {id: 1, page: 'Фотогалерея', link: '/photo-gallery'},
          {id: 2, page: '3D файлы', link: '/3d-files'},
          {id: 3, page: '3D Тур по музею', link: '/vr-tour'},
          {id: 4, page: 'Видео галерея', link: '/video-gallery'},
        ]},
        {id: 7, name: 'Услуги', link: '', bg: 'services', page: true, pages: [
          {id: 1, page: 'Магазин', link: '/shop'},
          {id: 2, page: 'Посещение музея', link: '/visiting-museum'},
          {id: 3, page: 'Волонтерам', link: '/volunteers-program'},
          {id: 4, page: 'Банковские карты', link: '/bank-cards'},
        ]},
        {id: 8, name: 'Контакты', link: '/contacts', bg: 'about-museum', page: false}
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