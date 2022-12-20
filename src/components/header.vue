<template>
  <div class="menu" :class="headerHidden ? 'hidden' : ''">
    <div class="header" :class="headerHidden ? 'hidden' : ''">
      <div class="mediaBar">
        <router-link tag="div" to="/" class="logo">
          <img src="@/assets/termezMuseumLogo.svg" alt="" />
          <h4>
            {{ logotxt1[$i18n.locale] }} <br />
            <span> {{ logotxt2[$i18n.locale] }}</span> <br />
            {{ logotxt3[$i18n.locale] }}
          </h4>
        </router-link>

        <div class="buttons">
          <div @click="openSearch" class="searchInput">
            <Icons icon="search" size="24" />

            <p class="placeholder">{{ $t("search") }}...</p>
          </div>

          <button v-if="staticHeader !== undefined" class="icon-btn glass">
            <Icons icon="glasses" size="24" />
          </button>

          <button class="icon-btn" @click="goToSitemap">
            <Icons icon="sitemap" size="24" />
          </button>

          <button v-if="staticHeader !== undefined" class="icon-btn">
            <Icons icon="vr" size="24" />
          </button>

          <button v-if="staticHeader !== undefined" class="accent-btn">
            <span>{{ $t("onTicket") }}</span>
          </button>

          <a v-if="staticHeader !== undefined" href="tel: +998900073118" class="icon-txt-btn">
            <Icons icon="phone" size="middle" />
            <span>76 224-30-17</span>
          </a>

          <button id="authId" class="icon-btn" @click="googleSwitch">
            <Icons id="authId" v-if="userInfo == ''" icon="profile" size="24" />

            <div v-else class="w-100 h-100 pic" id="authId">
              <img v-if="userInfo?.picture" :src="userInfo.picture" alt="" id="authId"/>
            </div>
          </button>
          <div
            id="authId"
            class="authorizationDrop"
            :class="googleSwitcher ? 'open' : 'close'"
          >
            <div class="authOut">
              <p v-if="userInfo == ''">{{ $t('authIn') }}</p>
              <p v-else>{{ userInfo.name }}</p>
            </div>

            <div v-if="userInfo == ''" class="logIn">
              <p>{{ $t("googleAuth") }}</p>
              <div id="googleAuth" class="googleButton"></div>
            </div>

            <div v-else class="logOut" @click="logOut">
              <p>{{$t('authOut')}}</p>
              <Icons icon="logOut" size="32"/>
            </div>
          </div>
          <button @click="openSideMenu" class="burgerMenuBtn icon-btn">
            <Icons icon="burgerMenu" size="24" />
          </button>
        </div>
      </div>

      <div class="navBar">
        <div v-for="menu in menuLinks" :key="menu.id">
          <div
            class="d-f gap-12 cur-ptr"
            @click="dropdown(menu)"
            v-if="menu?.subMenu.length > 0"
            id="menu"
            :class="{
              up: dropdownMenu === true && idChecker === menu.id,
              down: idChecker !== menu.id,
            }"
          >
            <a id="menu">{{ menu?.name?.[$i18n.locale] }}</a>
            <Icons
              v-if="menu?.subMenu.length > 0"
              size="sm"
              icon="arrDown"
              id="menu"
              :class="{
                active: dropdownMenu === true && idChecker === menu.id,
              }"
            />
          </div>
          <a v-else :href="menu?.url + '?lang=' + $i18n.locale">{{
            menu?.name?.[$i18n.locale]
          }}</a>
        </div>

        <div class="language">
          <div
            @click="languageSwitcher = !languageSwitcher"
            class="language-switcher"
            :class="languageSwitcher ? 'open' : ''"
          >
            <Icons icon="globus" />
            <p>
              {{
                $i18n.locale == "language_uzCyrillic"
                  ? "Ўзб"
                  : $i18n.locale == "language_uzlatin"
                  ? "O'zb"
                  : $i18n.locale == "language_ru"
                  ? "Ру"
                  : "En"
              }}
            </p>
            <Icons class="sm" icon="arrDown" size="sm" />
          </div>

          <div
            class="langSwitcherDropDown"
            :class="languageSwitcher ? 'open' : 'closed'"
          >
            <p
              @click="changeLang(lang)"
              v-for="lang in locales"
              :key="lang.id"
              :class="{ active: lang.lang == $i18n.locale }"
            >
              {{ lang.name }}
            </p>
          </div>

          <div
            @click="languageSwitcher = false"
            v-if="languageSwitcher"
            class="closing-modal"
          ></div>
        </div>
      </div>
    </div>

      <div
        class="dropdown-menu"
        v-for="drop in menuLinks"
        :key="drop.id"
        id="drp"
        :class="{
          open: dropdownMenu === true && drop._id === openMenuPages._id,
          closed: dropdownMenu === false || drop._id !== openMenuPages._id,
        }"
      >
        <div class="left-section">
          <div class="section-name">
            <h1>{{ openMenuPages?.name?.[$i18n.locale] }}</h1>
          </div>
          <div class="divider"></div>
          <div class="menu-pages">
            <router-link
              @click.native="dropdownMenu = false"
              tag="a"
              v-for="(link, idx) in openMenuPages?.subMenu"
              :key="idx"
              :to="link.link"
            >
              {{ link?.name?.[$i18n.locale] }}
            </router-link>
          </div>
        </div>
        <div
          v-if="openMenuPages?.bgImg"
          class="right-section"
          :style="`background: url(${require('@/assets/static/bckgrnd/HeaderDropdown/' +
            openMenuPages?.bgImg)}) no-repeat right`"
        >
          <div class="gradientCover"></div>
        </div>
      </div>
  </div>
</template>

<script>
import Icons from "./icons.vue";
import VueJwtDecode from "vue-jwt-decode";

export default {
  name: "headerMenu",

  components: {
    Icons,
  },

  data() {
    return {
      headerHidden: false,
      staticHeader: undefined,
      userInfo: '',
      googleSwitcher: false,
      logotxt1: {
        language_uzlatin: "Termiz",
        language_ru: "Термезский",
        language_uzCyrillic: "Термиз",
        language_en: "Termez",
      },
      logotxt2: {
        language_uzlatin: "Arxeologik",
        language_ru: "Археологический",
        language_uzCyrillic: "Археологик",
        language_en: "Archaeological",
      },
      logotxt3: {
        language_uzlatin: "Muzey",
        language_ru: "Музей",
        language_uzCyrillic: "Музей",
        language_en: "Museum",
      },
      languageSwitcher: false,
      dropdownMenu: false,
      idChecker: "",
      openMenuPages: null,
      locales: [
        { id: 1, lang: "language_uzlatin", name: `O'zbekcha` },
        { id: 2, lang: "language_uzCyrillic", name: "Ўзбекча" },
        { id: 3, lang: "language_ru", name: "Русский" },
        { id: 4, lang: "language_en", name: "English" },
      ],
      menuLinks: [
        //         {id: 1, name: {ru:'Главная страница',uz:'Bosh sahifa',uzcyr:'Бош саҳифа',en:'Main page'}, bg: 'about-museum', link: '/', page: false},
        //         {id: 2, name: {ru:'О музее',uzcyr:'Музей ҳақида',uz:'Muzey haqida',en:'About museum'}, link: '', bg: 'about-museum', page: true, pages: [
        //           {id: 1, page: {ru:'История музея',uzcyr:'Музей тарихи',uz:'Muzey tarixi',en:'History of museum'}, link: '/museum-history'},
        //           {id: 2, page: {ru:'Руководство',uzcyr:'Раҳбарият',uz:'Rahbariyat',en:'Management'}, link: '/management'},
        //           {id: 3, page: {ru:'Посетители о нас' ,uzcyr:'Tashrif buyuruvchilar fikri',uz:'Tashrif buyuruvchilar fikri',en:'Visitors about Us'}, link: '/visitors-about-us'},
        //           {id: 4, page: {ru:'Партнеры',uzcyr:'Ҳамкорлар',uz:'Hamkorlar',en:'Partners'}, link: '/partners'},
        //           {id: 5, page: {ru:'Документы',uzcyr:'Ҳужжатлар',uz:'Hujjatlar',en:'Documents'}, link: '/documents'},
        //           {id: 6, page: {ru:'Вакансии',uzcyr:'Бўш иш ўринлари',uz:'Bo\'sh ish o\'rinlari',en:'Vacancies'}, link: '/vacancies'},
        //           {id: 7, page: {ru:'Часто задаваемые вопросы',uzcyr:'Саволлар ва жавоблар',uz:'Savollar va javoblar',en:'FAQ'}, link: '/faq'},
        //         ]},
        //         {id: 3, name: {ru:'В музее',uzcyr:'Музейда',uz:'Muzeyda',en:'In museum'}, link: '', bg: 'in-museum', page: true, pages: [
        //           {id: 1, page: {ru:'Залы',uzcyr:'Заллар',uz:'Zallar',en:'Halls'}, link: '/halls'},
        //           {id: 2, page: {ru:'Разделы',uzcyr:'Бўлимлар',uz:'Bo\'limlar',en:'Sections'}, link: '/sections'},
        //           {id: 3, page: {ru:'Дополнительно',uzcyr:'Қўшимча',uz:'Qo\'shimcha',en:'Additional'}, link: '/additional'},
        //         ]},
        //         {id: 4, name: {ru:'Коллекция музея',uzcyr:'Музей коллексияси',uz:'Muzey kolleksiyasi',en:'Museum\'s collection'}, link: '', bg: 'museums-collection', page: true, pages: [
        //           {id: 1, page: {ru:'Экспонаты',uzcyr:'Экспонатлар',uz:'Eksponatlar',en:'Exhibits'}, link: '/exhibits'},
        //           {id: 2, page: {ru:'Картины',uzcyr:'Расмлар',uz:'Rasmlar',en:'Paintings'}, link: '/paintings'},
        //           {id: 3, page: {ru:'Статуи',uzcyr:'Ҳайкаллар',uz:'Haykallar',en:'Statues'}, link: '/statues'},
        //           {id: 4, page: {ru:'Библиотека',uzcyr:'Кутубхона',uz:'Kutubxona',en:'Library'}, link: '/library'},
        //         ]},
        //         {id: 5, name: {ru:'Пресс-служба',uzcyr:'Матбуот хизмати',uz:'Matbuot xizmati',en:'Press'}, link: '', bg: 'press', page: true, pages: [
        //           {id: 1, page: {ru:'Мероприятия',uzcyr:'Тадбирлар',uz:'Tadbirlar',en:'Events'}, link: '/events'},
        //           {id: 2, page: {ru:'Выставки',uzcyr:'Кўргазмалар',uz:'Ko\'rgazmalar',en:'Exhibitions'}, link: '/exhibitions'},
        //           {id: 3, page: {ru:'Новости',uzcyr:'Янгиликлар',uz:'Yangiliklar',en:'News'}, link: '/news'},
        //           {id: 4, page: {ru:'СМИ о нас',uzcyr:'ОАВ биз ҳақимизда',uz:'OAV biz haqimizda',en:'Mass Medias about Us'}, link: '/medias-about-us'},
        //           {id: 5, page: {ru:'Открытые данные',uzcyr:'Очиқ маълумотлар',uz:'Ochiq ma\'lumotlar',en:'Open data'}, link: '/open-data'},
        //           {id: 6, page: {ru:'Статьи',uzcyr:'Мақолалар',uz:'Maqolalar',en:'Articles'}, link: '/articles'},
        //           {id: 7, page: {ru:'Материалы для СМИ',uzcyr:'ОАВ учун материаллар',uz:'OAV uchun materiallar',en:'Materials for Mass Media'}, link: '/materials-for-medias'},
        //         ]},
        // {id: 7, name: {ru:'Медиатека',uzcyr:'Медиатека',uz:'Mediateka',en:'Media library'}, link: '', bg: 'media', page: true, pages: [
        //           {id: 1, page: {ru:'Фотогалерея',uzcyr:'Расм галереяси',uz:'Rasm galereyasi',en:'Photo gallery'}, link: '/photo-gallery'},
        //           {id: 2, page: {ru:'3D файлы',uzcyr:'3D файллар',uz:'3D fayllar',en:'3D files'}, link: '/3d-files'},
        //           {id: 3, page: {ru:'3D Тур по музею',uzcyr:'Музей бўйлаб 3D саёҳат',uz:'Muzey bo\'ylab 3D sayohat',en:'3D Tour in museum'}, link: '/vr-tour'},
        //           {id: 4, page: {ru:'Видео галерея',uzcyr:'Видео галерея',uz:'Video galereya',en:'Video gallery'}, link: '/video-gallery'},
        //         ]},
        //         {id: 8, name: {ru:'Услуги',uzcyr:'Хизматлар',uz:'Xizmatlar',en:'Services'}, link: '', bg: 'services', page: true, pages: [
        //           {id: 1, page: {ru:'Магазин',uzcyr:'Дўкон',uz:'Do\'kon',en:'Shop'}, link: '/shop'},
        //           {id: 2, page: {ru:'Посещение музея',uzcyr:'Музейга ташриф',uz:'Muzeyga tashrif',en:'Visiting museum'}, link: '/visiting-museum'},
        //           {id: 3, page: {ru:'Волонтерам',uzcyr:'Кўнгиллилар',uz:'Ko\'ngillilar',en:'Volunteers'}, link: '/volunteers-program'},
        //           {id: 4, page: {ru:'Банковские карты',uzcyr:'Банк карталари',uz:'Bank kartalari',en:'Bank cards'}, link: '/bank-cards'},
        //         ]},
        //         {id: 9, name: {ru:'Контакты',uzcyr:'Банк карталари',uz:'Kontaktlar',en:'Contacts'}, link: '/contacts', bg: 'about-museum', page: false}
      ],
      dropImages: [
        "img1.png",
        "img2.png",
        "img3.png",
        "img4.png",
        "img5.png",
        "img6.png",
      ],
    };
  },

  computed: {
    path() {
      return this.$route.path;
    },
  },

  methods: {
    getMenuData() {
      this.$api
        .get("/menu/site")
        .then((resp) => {
          this.menuLinks = resp.data.menuDocument;
          for (let i = 1; i <= this.menuLinks.length; i++) {
            this.menuLinks[i - 1].id = i;
          }
          this.getDropImg();
        })
        .catch((err) => {
          console.log(err);
        });
    },

    async getStaticHeader(){
      await this.$api.get('/staticHeader')
      .then(resp => {
        this.staticHeader = resp.data
        // console.log(resp.data)
      }), err => {console.log(err)}
    },
    getDropImg() {
      let i = 0;
      this.menuLinks.forEach((el) => {
        if (el.category == "section") {
          el.bgImg = this.dropImages[i];
          i++;
        }
      });
    },

    switcher(){
      if(this.googleSwitcher == true){
        this.googleSwitcher = false
      } else return
    },

    googleSwitch(){
      // this.googleSwitcher = !this.googleSwitcher
      const _t = this
      const idChecker = 'authId'
      if(this.googleSwitcher == true){
        this.googleSwitcher = false
        document.removeEventListener('mouseup', this.switcher)
      }else{
        this.googleSwitcher = true
        document.addEventListener('mouseup', function(e){
          if(e.target && e.target.id !== idChecker && e.target.id !== 'sideBarMenuBlock' && e.target.tagName !== 'svg'){
            _t.switcher()
          }
          
        })
      }
    },

    logOut(){
      window.sessionStorage.userInfo = "''"
      this.$router.go()
    },

    handleCredentialResponse(response) {
      this.$store.state.userInfo = VueJwtDecode.decode(response.credential);
      window.sessionStorage.userInfo = JSON.stringify(
        VueJwtDecode.decode(response.credential)
      );
      this.$router.go()
      // console.log(this.$store.state.userInfo);
    },

    auth(){
      let _t = this;

      // eslint-disable-next-line
      google.accounts.id.initialize({
        client_id:
          "436134388058-4umgvtjbba54o7jp40pdb5b9tk7v0h5m.apps.googleusercontent.com",
        callback: _t.handleCredentialResponse,
        redirect_uri: "http://localhost:8080",
        scope: ["profile", "email"],
        ux_mode: "popup",
        context: "signin",
      });

      // eslint-disable-next-line
      google.accounts.id.renderButton(
        document.getElementById("googleAuth"), 
        { theme: "outline", type: 'icon', size: "large"} // customization attributes
      );

      // eslint-disable-next-line
      google.accounts.id.prompt(); // also display the One Tap dialog
    },

    secondaryAuth(){
      let _t = this;

      // eslint-disable-next-line
      google.accounts.id.initialize({
        client_id:
          "436134388058-4umgvtjbba54o7jp40pdb5b9tk7v0h5m.apps.googleusercontent.com",
        callback: _t.handleCredentialResponse,
        redirect_uri: "http://localhost:8080",
        scope: ["profile", "email"],
        ux_mode: "popup",
        context: "signin",
      });

      // eslint-disable-next-line
      google.accounts.id.renderButton(
        document.getElementById("googleAuth"),
        { theme: "outline", type: 'icon', size: "large" } // customization attributes
      );
    },

    changeLang(val) {
      this.languageSwitcher = false;
      this.$i18n.locale = val.lang;
      localStorage.lang = this.$i18n.locale;
      this.$router.push({
        query: {
          ...this.$route.query,
          lang: this.$i18n.locale,
        },
      });
      this.$router.go();
    },
    dropdown(menu) {
      // console.log(menu);
      const selectedMenuId = menu.id;
      let _t = this

      document.addEventListener("click", function (e) {
        if(e.target && e.target.id !== 'menu' && e.target.id !== 'drp'){
          _t.dropdownMenu = false
          _t.idChecker = ''
        }
      });

      if (menu.category == "section") {
        if (this.idChecker === selectedMenuId) {
          this.idChecker = "";
          this.dropdownMenu = false;
        } else {
          document.removeEventListener('click', function(){})
          this.idChecker = selectedMenuId;
          this.openMenuPages = menu;
          this.dropdownMenu = true;
        }
      } else {
        if (this.$route.path !== menu?.url) {
          this.$router.push({ path: menu?.url });
        }
      }
    },

    hideHeader() {
      this.headerHidden = true;
      this.dropdownMenu = false;
    },

    hidingHeader() {
      let _t = this;
      let lastScrollTop = 176;

      window.addEventListener(
        "scroll",
        function () {
          let st = window.pageYOffset || document.documentElement.scrollTop;
          if (st > lastScrollTop) {
            _t.headerHidden = true;
            _t.dropdownMenu = false;
          } else {
            _t.headerHidden = false;
            _t.dropdownMenu = false;
          }
          lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
        },
        false
      );
    },

    goToSitemap() {
      this.$router.push("/sitemap");
    },

    openSearch() {
      this.$emit("openSearch");
    },
    openSideMenu() {
      this.$emit("openSideMenu");
    },
  },

  watch: {
    $route() {
      if (
        window.location.pathname === "/" &&
        window.location.pathname !== "/contacts"
      ) {
        setTimeout(() => {
          this.hideHeader();
        }, 6000);
      } else this.headerHidden = false;
    },
  },

  mounted() {
    this.getMenuData();
    this.hidingHeader();
    // this.getStaticHeader()
    if (
      window.location.pathname === "/" &&
      window.location.pathname !== "/contacts"
    ) {
      // setTimeout(() => {
      //   this.hideHeader();
      // }, 5000);
    }
    this.$i18n.locale = this.$route.query.lang || "language_uzlatin";
    
    if (window.sessionStorage.userInfo == undefined) {
      this.userInfo = '';
      this.auth();
    } else if (window.sessionStorage.userInfo == "''") {
      window.sessionStorage.userInfo = "''";
      this.userInfo = ''
      this.secondaryAuth();
    } else {
      this.userInfo = JSON.parse(window.sessionStorage.userInfo)
      return
    }
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.hidingHeader());
  },
};
</script>

<style lang="scss">
.glass{

}
</style>
