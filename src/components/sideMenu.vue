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
                      <span>{{$t('onTicket')}}</span>
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
                <p v-if="menu.page" class="commonP us-none colorGreyD bold">{{menu.name[$i18n.locale]}}</p>
                <router-link @click.native="closeMenu" v-else tag="p" :to="menu.link" class="commonP us-none colorGreyD bold">{{menu.name[$i18n.locale]}}</router-link>

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
                  <router-link @click.native="closeMenu" tag="p" :to="item.link" v-for="item,index in menu.pages" :key="index" v-html="item.page[$i18n.locale]" class="commonD mt-24 mb-12 ml-24 ">
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