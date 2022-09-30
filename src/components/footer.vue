<template>
  <div class="footer mt-120 pos-rel">
    <div class="w-12 mt-24 z-idx2">
      <div class="footer-top">
        <div class="w-4 gap-24 mb-16 footer-logo-img">
        <footerLogo />
  
        <div class="logo">
          <h4> {{logotxt1[$i18n.locale]}} <br> <span> {{logotxt2[$i18n.locale]}}</span> <br> {{logotxt3[$i18n.locale]}} </h4>
        </div>
        <!-- <div class="w-100 fd-c justify-sb">
          <p class="logoTitle">Государственный</p>

          <p class="logoTitle">Музей Искусств</p>

          <p class="logoTitle">Узбекистана</p>
        </div> -->
      </div>
      <div class="w-8">
        <div class="w-4 d-f fd-r justify-sb site-footer-top-text">
          <img
            class="h-32p"
            src="@/assets/temporary/metrika-badge.png"
            alt=""
          />

          <a
            class="developerCompany d-f fd-r gap-12"
            :href="developers"
            target="_blanc"
          >
            <h2 class="developers">{{$t('devBy')}}</h2>
            <img class="h-32p" src="@/assets/temporary/daac.png" alt="" />
          </a>
        </div>
      </div>
      </div>
      <div class="footer-menu-block gap-24">
        <div class="w-9 fd-r gap-24 d-f">
          <div
            class="sections mt-48"
            v-for="section in sections"
            :key="section.id"
          >
            <h3 class="mb-28">{{ section.name[$i18n.locale] }}</h3>

            <div class="pageLinks gap-12">
              <router-link
                v-for="page in section.pages"
                :key="page.id"
                tag="a"
                :to="page.link"
              >
                {{ page.page[$i18n.locale] }}
              </router-link>
            </div>
          </div>
        </div>

        <div class="contactsBlock w-3 mt-48">
          <div class="infoSection">
            <!-- Address Start -->

            <h3>{{$t("address")}}</h3>
            <div class="infoPart mt-28">
              <Icons icon="location" size="middle" color="white" />
              <p class="accented">{{location[$i18n.locale]}}</p>
            </div>

            <!-- Address Stop -->

            <!-- Schedule Start -->

            <h3 class="mt-64">{{$t("schedule")}}</h3>
            <div class="infoPart mt-28">
              <Icons icon="clock" size="middle" color="white" />
              <div class="d-f fd-c gap-12">
                <div class="d-f fd-r gap-12">
                  <p class="secondaryText">{{$t("workdays")}}:</p>
                  <p class="accented">{{weekwork[$i18n.locale]}}</p>
                </div>

                <div class="d-f fd-r gap-12">
                  <p class="secondaryText">{{$t("workhours")}}:</p>
                  <p class="accented">09:00 - 18:00</p>
                </div>

                <div class="d-f fd-r gap-12">
                  <p class="secondaryText">{{$t("dayoff")}}:</p>
                  <p class="accented">{{weekout[$i18n.locale]}}</p>
                </div>
              </div>
            </div>

            <!-- Schedule Stop -->

            <!-- Contacts Start -->

            <h3 class="mt-64">{{$t("contacts")}}</h3>
            <div class="infoPart mt-28">
              <Icons icon="phone" size="middle" color="white" />
              <div class="d-f fd-c gap-12">
                <div class="d-f fd-r gap-12">
                  <p class="secondaryText">{{$t("telephone")}}:</p>
                  <a :href="'tel:' + { telephone }" class="accented"
                    >+998 71 236 74 36</a
                  >
                </div>

                <div class="d-f fd-r gap-12">
                  <p class="secondaryText">Fax:</p>
                  <a :href="'tel:' + { fax }" class="accented"
                    >+998 71 233 62 81</a
                  >
                </div>
              </div>
            </div>

            <div class="infoPart mt-12">
              <Icons icon="mail" size="middle" color="white" />
              <div class="d-f fd-c gap-12">
                <div class="d-f fd-r gap-12">
                  <p class="secondaryText">Email:</p>
                  <a :href="'mailto:' + { mail }" class="accented"
                    >info@tam.uz</a
                  >
                </div>
              </div>
            </div>

            <!-- Contacts Stop -->

            <!-- Social Networks Start -->

            <h3 class="mt-64">{{$t("socialNet")}}</h3>
            <div class="infoPart mt-28">
              <div class="d-f fd-c gap-12">
                <div class="d-f fd-r gap-24">
                  <a
                    v-for="social in socialNetworks"
                    :key="social.id"
                    :href="social.link"
                    target="_blank"
                  >
                    <img
                      :src="
                        require('@/assets/icons/' + social.network + '.svg')
                      "
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>

            <!-- Social Networks Stop -->
          </div>
          <div class="infoSection tablet">
            <!-- Address Start -->

            <div class="footer-contact">
              <h3>{{$t("address")}}</h3>
              <div class="infoPart mt-28">
                <Icons icon="location" size="middle" color="white" />
                <p class="accented">{{location[$i18n.locale]}}</p>
              </div>
            </div>

            <!-- Address Stop -->

            <!-- Schedule Start -->
            <div class="footer-contact">
              <h3>{{$t("schedule")}}</h3>
              <div class="infoPart mt-28">
                <Icons icon="clock" size="middle" color="white" />
                <div class="d-f fd-c gap-12">
                  <div class="d-f fd-r gap-12">
                    <p class="secondaryText">{{$t("workdays")}}:</p>
                    <p class="accented">{{weekwork[$i18n.locale]}}</p>
                  </div>

                  <div class="d-f fd-r gap-12">
                    <p class="secondaryText">{{$t("workhours")}}:</p>
                    <p class="accented">09:00 - 18:00</p>
                  </div>

                  <div class="d-f fd-r gap-12">
                    <p class="secondaryText">{{$t("dayoff")}}:</p>
                    <p class="accented">{{weekout[$i18n.locale]}}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="footer-contact">
              <h3 class="mt-64">{{$t("contacts")}}</h3>
              <div class="infoPart mt-28">
                <Icons icon="phone" size="middle" color="white" />
                <div class="d-f fd-c gap-12">
                  <div class="d-f fd-r gap-12">
                    <p class="secondaryText">{{$t("telephone")}}:</p>
                    <a :href="'tel:' + { telephone }" class="accented"
                      >+998 71 236 74 36</a
                    >
                  </div>

                  <div class="d-f fd-r gap-12">
                    <p class="secondaryText">Fax:</p>
                    <a :href="'tel:' + { fax }" class="accented"
                      >+998 71 233 62 81</a
                    >
                  </div>
                </div>
              </div>
              <div class="infoPart mt-12">
                <Icons icon="mail" size="middle" color="white" />
                <div class="d-f fd-c gap-12">
                  <div class="d-f fd-r gap-12">
                    <p class="secondaryText">Email:</p>
                    <a :href="'mailto:' + { mail }" class="accented"
                      >info@tam.uz</a
                    >
                  </div>
                </div>
              </div>
            </div>
            <!-- Schedule Stop -->

            <!-- Contacts Start -->


            <!-- Contacts Stop -->

            <!-- Social Networks Start -->
            <div class="footer-contact">
              <h3 class="mt-64">{{$t("socialNet")}}</h3>
              <div class="infoPart mt-28">
                <div class="d-f fd-c gap-12">
                  <div class="d-f fd-r gap-24">
                    <a
                      v-for="social in socialNetworks"
                      :key="social.id"
                      :href="social.link"
                      target="_blank"
                    >
                      <img
                        :src="
                          require('@/assets/icons/' + social.network + '_blue.svg')
                        "
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Social Networks Stop -->
          </div>
        </div>
      </div>

      <div class="w-12 d-f fd-r gap-24 mt-24">
        <div class="w-100">
          <p v-html="textCE[$i18n.locale]">
            
          </p>
        </div>

        <div class="w-100 site-footer-text">
          <h4 v-html="textCEC[$i18n.locale]">
          </h4>
        </div>
      </div>

      <hr class="mt-32" />

      <div class="w-12 d-f fd-r mt-24 gap-24">
        <div class="w-8 d-f fd-r gap-48 mb-60">
          <a class="linkA commonP bold line-h-20" href="/cookies"
            >{{$t("cookie")}}</a
          >
          <a class="linkA commonP bold line-h-20" href="/sitemap">{{$t("siteMap")}}</a>
          <a class="linkA commonP bold line-h-20" href="/privacy-policy"
            >{{$t("privacyPolicy")}}</a
          >
          <a class="linkA commonP bold line-h-20" href="/news"
            >{{$t("mainToday")}}</a
          >
        </div>

        <div class="w-4 d-f fd-r justify-sb site-footer-text">
          <img
            class="h-32p"
            src="@/assets/temporary/metrika-badge.png"
            alt=""
          />

          <a
            class="developerCompany d-f fd-r gap-12"
            :href="developers"
            target="_blanc"
          >
            <h2 class="developers">{{$t('devBy')}}</h2>
            <img class="h-32p" src="@/assets/temporary/daac.png" alt="" />
          </a>
        </div>
      </div>
    </div>

    <div class="dark-layer-footer z-idx1"></div>
    <img class="back-img" src="@/assets/static/footer-back.png" alt="" />
  </div>
</template>

<script>
import footerLogo from "./logoSVG.vue";
import Icons from "./icons.vue";

export default {
  name: "footerComponent",

  components: {
    footerLogo,
    Icons,
  },

  data() {
    return {
      developers: "https://daac.uz/",
      location: {
        uz: "Toshkent sh., Amir Temur shoh ko‘chasi, 16-uy",
        ru: "г.Ташкент, проспект Амира Темура, 16",
        uzcyr: "Тошкент ш., Амир Темур шоҳ кўчаси, 16-уй",
        en: "Tashkent, Amir Temur Avenue, 16"
      },
      weekwork: {
        uz: "Dush-shan",
        uzcyr: "Душ-шан",
        ru: "Пн-сб",
        en: "Mon-Sat"
      },
      weekout: {
        uzcyr: "Якшанба",
        uz: "Yakshanba",
        ru: "Воскресенье",
        en: "Sunday"
      },
      
      textCE:{
        uz: "© 2022 Barcha huquqlar himoyalangan. <br /> Veb-sayt materiallaridan foydalanganda manbaga havola kerak.",
        ru: "© 2022 Все права защищены. <br /> При использовании материалов веб-сайта, ссылка на источник обязательна.",
        uzcyr: "© 2022 Барча ҳуқуқлар ҳимояланган. <br /> Веб-сайт материалларидан фойдаланганда манбага ҳавола керак.",
        en: "© 2022 All rights reserved. <br /> When using materials from the website, a link to the source is required.",
      },
      textCEC:{
        ru: "Нашли в тексте ошибку? Выделите её и нажмите <span>Ctrl+Enter</span>, а затем отправьте нам для уведомления администрации.",
        uz: "Matnda xatolik topdingizmi? Uni tanlang va <span>Ctrl+Enter</span> tugmalarini bosing va keyin ma'muriyatni xabardor qilish uchun uni bizga yuboring.",
        uzcyr: "Матнда хатолик топдингизми? Уни танланг ва <span>Ctrl+Enter</span> тугмаларини босинг ва кейин маъмуриятни хабардор қилиш учун уни бизга юборинг.",
        en: "Did you find an error in the text? Select it and press <span>Ctrl+Enter</span>, and then send it to us to notify the administration.",
      },
      
      logotxt1:{
        uz: "Termiz",
        ru: "Термезский",
        uzcyr: "Термиз",
        en: "Termez",
      },
      logotxt2:{
        uz: "Arxeologik",
        ru: "Археологический",
        uzcyr: "Археологик",
        en: "Archaeological",
      },
      logotxt3:{
        uz: "Muzey",
        ru: "Музей",
        uzcyr: "Музей",
        en: "Museum",
      },
      telephone: "+998712367436",
      fax: "+998712336281",
      mail: "tmi@mail.ru",
      socialNetworks: [
        {
          id: 1,
          network: "facebook",
          link: "https://www.facebook.com/termizarxeologiyamuzeyi",
        },
        {
          id: 2,
          network: "youtube",
          link: "https://www.youtube.com/channel/UCz7I4TVUUhgOpsldM28WtPA",
        },
        {
          id: 3,
          network: "instagram",
          link: "https://www.instagram.com/termez_archaeologycal_museum/?hl=ru",
        },
        { id: 4, network: "telegram", link: "https://t.me/Arxeologiya_muzeyi" },
      ],
      sections: [],
      menuLinks: [
        {
          id: 1,
          name: {ru:'Главная страница',uz:'Bosh sahifa',uzcyr:'Бош саҳифа',en:'Main page'},
          bg: "about-museum",
          link: "/",
          page: false,
        },
        {
          id: 2,
          name: {ru:'О музее',uzcyr:'Музей ҳақида',uz:'Muzey haqida',en:'About museum'},
          link: "",
          bg: "about-museum",
          page: true,
          pages: [
            {id: 1, page: {ru:'История музея',uzcyr:'Музей тарихи',uz:'Muzey tarixi',en:'History of museum'}, link: '/museum-history'},
          {id: 2, page: {ru:'Руководство',uzcyr:'Раҳбарият',uz:'Rahbariyat',en:'Management'}, link: '/management'},
          {id: 3, page: {ru:'Посетители о нас' ,uzcyr:'Tashrif buyuruvchilar fikri',uz:'Tashrif buyuruvchilar fikri',en:'Visitors about Us'}, link: '/visitors-about-us'},
          {id: 4, page: {ru:'Партнеры',uzcyr:'Ҳамкорлар',uz:'Hamkorlar',en:'Partners'}, link: '/partners'},
          {id: 5, page: {ru:'Документы',uzcyr:'Ҳужжатлар',uz:'Hujjatlar',en:'Documents'}, link: '/documents'},
          {id: 6, page: {ru:'Вакансии',uzcyr:'Бўш иш ўринлари',uz:'Bo\'sh ish o\'rinlari',en:'Vacancies'}, link: '/vacancies'},
          {id: 7, page: {ru:'Часто задаваемые вопросы',uzcyr:'Саволлар ва жавоблар',uz:'Savollar va javoblar',en:'FAQ'}, link: '/faq'},
          ],
        },
        {
          id: 3,
          name: {ru:'В музее',uzcyr:'Музейда',uz:'Muzeyda',en:'In museum'},
          link: "",
          bg: "in-museum",
          page: true,
          pages: [
           {id: 1, page: {ur:'Залы',uzcyr:'Заллар',uz:'Zallar',en:'Halls'}, link: '/halls'},
          {id: 2, page: {ru:'Разделы',uzcyr:'Бўлимлар',uz:'Bo\'limlar',en:'Sections'}, link: '/sections'},
          {id: 3, page: {ru:'Дополнительно',uzcyr:'Қўшимча',uz:'Qo\'shimcha',en:'Additional'}, link: '/additional'},
          ],
        },
        {
          id: 4,
          name: {ru:'Коллекция музея',uzcyr:'Музей коллексияси',uz:'Muzey kolleksiyasi',en:'Museum\'s collection'},
          link: "",
          bg: "museums-collection",
          page: true,
          pages: [
            {id: 1, page: {ru:'Экспонаты',uzcyr:'Экспонатлар',uz:'Eksponatlar',en:'Exhibits'}, link: '/exhibits'},
          {id: 2, page: {ru:'Картины',uzcyr:'Расмлар',uz:'Rasmlar',en:'Paintings'}, link: '/paintings'},
          {id: 3, page: {ru:'Статуи',uzcyr:'Ҳайкаллар',uz:'Haykallar',en:'Statues'}, link: '/statues'},
          {id: 4, page: {ru:'Библиотека',uzcyr:'Кутубхона',uz:'Kutubxona',en:'Library'}, link: '/library'},
          ],
        },
        {
          id: 5,
          name: {ru:'Пресс-служба',uzcyr:'Матбуот хизмати',uz:'Matbuot xizmati',en:'Press'},
          link: "",
          bg: "press",
          page: true,
          pages: [
            {id: 1, page: {ru:'Мероприятия',uzcyr:'Тадбирлар',uz:'Tadbirlar',en:'Events'}, link: '/events'},
            {id: 2, page: {ru:'Выставки',uzcyr:'Кўргазмалар',uz:'Ko\'rgazmalar',en:'Exhibitions'}, link: '/exhibitions'},
            {id: 3, page: {ru:'Новости',uzcyr:'Янгиликлар',uz:'Yangiliklar',en:'News'}, link: '/news'},
            {id: 4, page: {ru:'СМИ о нас',uzcyr:'ОАВ биз ҳақимизда',uz:'OAV biz haqimizda',en:'Mass Medias about Us'}, link: '/medias-about-us'},
            {id: 5, page: {ru:'Открытые данные',uzcyr:'Очиқ маълумотлар',uz:'Ochiq ma\'lumotlar',en:'Open data'}, link: '/open-data'},
            {id: 6, page: {ru:'Статьи',uzcyr:'Мақолалар',uz:'Maqolalar',en:'Articles'}, link: '/articles'},
            {id: 7, page: {ru:'Материалы для СМИ',uzcyr:'ОАВ учун материаллар',uz:'OAV uchun materiallar',en:'Materials for Mass Media'}}
          ],
        },
        {
          id: 7,
          name:  {ru:'Медиатека',uzcyr:'Медиатека',uz:'Mediateka',en:'Media library'},
          link: "",
          bg: "media",
          page: true,
          pages: [
           {id: 1, page: {ru:'Фотогалерея',uzcyr:'Расм галереяси',uz:'Rasm galereyasi',en:'Photo gallery'}, link: '/photo-gallery'},
            {id: 2, page: {ru:'3D файлы',uzcyr:'3D файллар',uz:'3D fayllar',en:'3D files'}, link: '/3d-files'},
            {id: 3, page: {ru:'3D Тур по музею',uzcyr:'Музей бўйлаб 3D саёҳат',uz:'Muzey bo\'ylab 3D sayohat',en:'3D Tour in museum'}, link: '/vr-tour'},
            {id: 4, page: {ru:'Видео галерея',uzcyr:'Видео галерея',uz:'Video galereya',en:'Video gallery'}, link: '/video-gallery'},
          ],
        },
        {
          id: 8,
          name: {ru:'Услуги',uzcyr:'Хизматлар',uz:'Xizmatlar',en:'Services'},
          link: "",
          bg: "services",
          page: true,
          pages: [
            {id: 1, page: {ru:'Магазин',uzcyr:'Дўкон',uz:'Do\'kon',en:'Shop'}, link: '/shop'},
          {id: 2, page: {ru:'Посещение музея',uzcyr:'Музейга ташриф',uz:'Muzeyga tashrif',en:'Visiting museum'}, link: '/visiting-museum'},
          {id: 3, page: {ru:'Волонтерам',uzcyr:'Кўнгиллилар',uz:'Ko\'ngillilar',en:'Volunteers'}, link: '/volunteers-program'},
          {id: 4, page: {ru:'Банковские карты',uzcyr:'Банк карталари',uz:'Bank kartalari',en:'Bank cards'}, link: '/bank-cards'},
          ],
        },
        {
          id: 9,
          name: {ru:'Контакты',uzcyr:'Банк карталари',uz:'Kontaktlar',en:'Contacts'},
          link: "/contacts",
          bg: "about-museum",
          page: false,
        },
      ],
    };
  },

  methods: {
    sectionSelector() {
      const len = this.menuLinks.length;

      for (let i = 0; i < len; i++) {
        if (this.menuLinks[i].page !== false) {
          this.sections.push(this.menuLinks[i]);
        }
      }
    },
  },

  mounted() {
    this.sectionSelector();
  },
};
</script>

<style>
</style>