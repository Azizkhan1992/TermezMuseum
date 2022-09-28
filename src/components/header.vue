<template>
  <div
    class="menu"
    :class="headerHidden ? 'hidden' : ''"
  >
    <div
      class="header"
      :class="headerHidden ? 'hidden' : ''"
    >

      <div class="mediaBar">
        <div class="logo">
          <img src="../assets/termezMuseumLogo.svg" alt="">
          <h4> Термезский <br> Археологический <br> Музей </h4>
        </div>

        <div class="buttons">
          <div
            @click="openSearch"
            class="searchInput"
          >
            <Icons
              icon="search"
              size="24"
            />

            <p class="placeholder">Искать...</p>
          </div>

          <button
            class="icon-btn"
          >
            <Icons
              icon="glasses"
              size="24"
            />
          </button>

          <button
            class="icon-btn"
            @click="goToSitemap"
          >
            <Icons
              icon="sitemap"
              size="24"
            />
          </button>

          <button
            class="icon-btn"
          >
            <Icons
              icon="vr"
              size="24"
            />
          </button>

          <button
            class="accent-btn"
          >
            <span>Онлайн билет</span>
          </button>

          <a href="tel: +998900073118"
            class="icon-txt-btn"
          >
            <Icons
              icon="phone"
              size="middle"
            />
            <span>76 224-30-17</span>
          </a>

          <button
            class="icon-btn"
          >
            <Icons
              icon="profile"
              size="24"
            />
          </button>
          <button
            @click="openSideMenu"
            class="burgerMenuBtn icon-btn"
          >
            <Icons
              icon="burgerMenu"
              size="24"
            />
          </button>
        </div>

      </div>

      <div class="navBar">
        <a
          @click="dropdown(menu)"
          v-for="menu in menuLinks"
          :key="menu.id"
          :class="path == menu.link || dropdownMenu &&  idChecker == menu.id ? 'up' : 'down'"
        >
          {{menu.name}}
          <Icons
            v-if="menu.page"
            size="sm"
            icon="arrDown"
          />
        </a>

        <div class="language">
          <div
            @click="languageSwitcher = !languageSwitcher"
            class="language-switcher"
            :class="languageSwitcher ? 'open' : ''"
          >
            <Icons
              icon="globus"
            />
            <p>Ру</p>
            <Icons
              class="sm"
              icon="arrDown"
              size="sm"
            />
          </div>

          <div
            class="langSwitcherDropDown"
            :class="languageSwitcher ? 'open' : 'closed'"
          >
            <p
              @click="changeLang(lang)"
              v-for="lang in locales"
              :key="lang.id"
            >
              {{lang.name}}
            </p>
          </div>

          <div
            @click="languageSwitcher = false"
            v-if="languageSwitcher"
            class="closing-modal"
          >
          </div>
        </div>
      </div>

    </div>

    <div
      @click="dropdown(openMenuPages)"
      v-if="dropdownMenu"
      class="closing-modal"
    >
    </div>

    <div
      class="dropdown-menu"
      :class="dropdownMenu ? 'open' : 'closed'"
    >
      <div class="left-section">
        <div class="section-name"><h1>{{openMenuPages.name}}</h1></div>
        <div class="divider"></div>
        <div class="menu-pages">
          <router-link
            @click.native="dropdownMenu = false"
            tag="a"
            v-for="link in openMenuPages.pages"
            :key="link.id"
            :to="link.link"
          >
            {{link.page}}
          </router-link>
        </div>
      </div>

      <div class="right-section" :style="{backgroundImage: `url( ${(this.bgImageChooser)} )`}">
        <div class="gradientCover"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Icons from './icons.vue'

export default {
  name: 'headerMenu',

  components: {
    Icons
},

  data() {
    return {
      headerHidden: false,
      languageSwitcher: false,
      dropdownMenu: false,
      idChecker: '',
      openMenuPages: '',
      locales: [
        {id: 1, lang: 'uz', name: `O'zbekcha`},
        {id: 2, lang: 'uzcyr', name: 'Ўзбекча'},
        {id: 3, lang: 'ru', name: 'Русский'},
        {id: 4, lang: 'en', name: 'English'},
      ],
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
        {id: 7, name: 'Медиатека', link: '', bg: 'media', page: true, pages: [
          {id: 1, page: 'Фотогалерея', link: '/photo-gallery'},
          {id: 2, page: '3D файлы', link: '/3d-files'},
          {id: 3, page: '3D Тур по музею', link: '/vr-tour'},
          {id: 4, page: 'Видео галерея', link: '/video-gallery'},
        ]},
        {id: 8, name: 'Услуги', link: '', bg: 'services', page: true, pages: [
          {id: 1, page: 'Магазин', link: '/shop'},
          {id: 2, page: 'Посещение музея', link: '/visiting-museum'},
          {id: 3, page: 'Волонтерам', link: '/volunteers-program'},
          {id: 4, page: 'Банковские карты', link: '/bank-cards'},
        ]},
        {id: 9, name: 'Контакты', link: '/contacts', bg: 'about-museum', page: false}
      ]
    }
  },

  computed: {
    path() {
      return this.$route.path
    },

    bgImageChooser() {
      if(this.openMenuPages !== '') {
        return require('../assets/static/' + this.openMenuPages.bg + '.png')
      } else return ''
    },
  },

  methods: {
    changeLang(val){
      this.languageSwitcher = false
      this.$i18n.locale = val.lang
      localStorage.lang = this.$i18n.locale
        this.$router.push({
          query: {
        ...this.$route.query,
        lang: this.$i18n.locale,
      },
      });
      this.$router.go()
    },
    dropdown(menu) {
      const selectedMenuId = menu.id
      
      if(menu.page !== false) {
  
        if(this.idChecker === selectedMenuId) {
          this.idChecker = ''
          this.dropdownMenu = false
        } else {
          this.idChecker = selectedMenuId
          this.openMenuPages = menu
          this.dropdownMenu = true
        }
      } else {
        if(this.$route.path !== menu.link) {
          this.$router.push( {path: menu.link})
        }
      }
    },

    hideHeader() {
      this.headerHidden = true
      this.dropdownMenu = false
    },

    hidingHeader() {
      let _t = this
      let lastScrollTop = 176

      window.addEventListener("scroll", function(){ 
        let st = window.pageYOffset || document.documentElement.scrollTop
        if (st > lastScrollTop){
          _t.headerHidden = true
          _t.dropdownMenu = false
        } else {
          _t.headerHidden = false
          _t.dropdownMenu = false
        }
        lastScrollTop = st <= 0 ? 0 : st // For Mobile or negative scrolling
      }, false)
    },

    goToSitemap() {
      this.$router.push('/sitemap')
    },

    openSearch() {
      this.$emit('openSearch')
    },
    openSideMenu() {
      this.$emit('openSideMenu')
    }
  },

  watch: {
    '$route'() {
      if(window.location.pathname === '/' && window.location.pathname !== '/contacts') {
        setTimeout(() => {
          this.hideHeader()
        }, 3000);
      } else this.headerHidden = false
    }
  },

  mounted() {
    this.hidingHeader()
    if(window.location.pathname === '/' && window.location.pathname !== '/contacts') {
      setTimeout(() => {
        this.hideHeader()
      }, 3000);
    }
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.hidingHeader())
  }
}
</script>

<style>

</style>