<template>
  <div
    @click.self="closeMenu"
    class="sideMenu"
  >
    <div class="menuBar" >
      <div class="w-100 justify-r">
        <div
          @click="closeMenu"
          class="closeBtn"
        >
          <Icons
            icon="closeCircle"
            size="middle"
          />
        </div>
      </div>

        <div class="langSwitcher w-100 mb-32">
          
              <p
                @click="changeLang(lang)"
                v-for="lang in locales"
                :key="lang.id"
                :class="{active:lang.lang==$i18n.locale}"
              >
                {{lang.name}}
              </p>
        </div>
              <div class="tablet-icon-btn">
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
                    class="icon-btn"
                  >
                    <Icons
                      icon="profile"
                      size="24"
                    />
                  </button>
              </div>
              <div class="mobile-icon-btn">
                <div class="mobile-icon">
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
                    class="icon-btn"
                  >
                    <Icons
                      icon="profile"
                      size="24"
                    />
                  </button>
                </div>
                  <div class="search__phone">
                    <div
                      @click="openSearch"
                      class="searchInput"
                    >
                      <Icons
                        icon="search"
                        size="24"
                      />

                      <p class="placeholder">{{$t('search')}}...</p>
                    </div>
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
                      class="accent-btn"
                    >
                      <span>{{$t("onTicket")}}</span>
                    </button>
                  </div>
              </div>
            <div
              v-for="menu in menuLinks"
              :key="menu.id"
              class="w-100 mt-24 fd-c"
            >
              <div
                @click="switcher(menu.id)"
                class="accordionBtn w-100 cur-ptr gap-24 align-c backgrnd-white"
                :class="openAccrdn == menu.id ? 'open' : ''"
              >
                <p v-if="menu.page" class="commonP us-none colorGreyD bold">{{menu.name}}</p>
                <router-link @click.native="closeMenu" v-else tag="p" :to="menu.link" class="commonP us-none colorGreyD bold">{{menu.name}}</router-link>

                <Icons
                  class="ml-a"
                  icon="arrDown"
                  size="large"
                  v-if="menu.page"
                />
              </div>

              <div
                class="accordionContent w-100 fd-c"
                :class="openAccrdn == menu.id ? '' : 'closed'"
                :style="{height: hghts[menu.id - 1] + 'px'}"
              >
                <div :id="'faqAccr' + menu.id">
                  <router-link @click.native="closeMenu" tag="p" :to="item.link" v-for="item,index in menu.pages" :key="index" v-html="item.page" class="commonD mt-24 mb-12 ml-24 ">
                  </router-link>
                </div>

              </div>
          
        <hr class="divider mt-12">
      </div>
    </div>

  </div>
</template>

<script>
import Icons from './icons.vue'

export default {
  name: 'sideMenuComponent',

  components: {
    Icons
  },

  data() {
    return {
      openAccrdn: 1,
      hghts: [],
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
      ],
      locales: [
        {id: 1, lang: 'uz', name: `O‘zb`},
        {id: 2, lang: 'uzcyr', name: 'Ўзб'},
        {id: 3, lang: 'ru', name: 'Рус'},
        {id: 4, lang: 'en', name: 'Eng'},
      ],

    }
  },

  methods: {
    closeMenu() {
      this.$emit('closeMenu')
    },
    switcher(id) {
      if(this.openAccrdn !== id) {
        this.openAccrdn = id
      } else this.openAccrdn = 0
    },
    getDivsHeight() {
      const len = this.menuLinks.length
      let arr = []

      for(let i = 1; i <= len; i++) {
        let id = 'faqAccr' + i
        arr.push(document.getElementById(id)?.clientHeight)
      }

      
      this.hghts = arr
      console.log(this.hghts);
    },
    changeLang(val){
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
    openSearch() {
      this.$emit('openSearch')
    },
    
    goToSitemap() {
      this.$router.push('/sitemap')
    },
  },
  mounted(){
    this.getDivsHeight()

  }
}
</script>

<style>

</style>