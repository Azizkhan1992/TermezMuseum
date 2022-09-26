<template>
  <div class="footer mt-120 pos-rel">

    <div class="w-12 mt-24 z-idx2">
      
      <div class="w-100 gap-24 mb-16">
        <footerLogo/>

        <div class="w-100 fd-c justify-sb">
          <p class="logoTitle">
            Термезский
          </p>

          <p class="logoTitle">
            Археологический
          </p>

          <p class="logoTitle">
            Музей
          </p>
        </div>
      </div>

      <div class="footer-menu-block gap-24">

        <div class="w-9 fd-r gap-24 d-f">
          
          <div
            class="sections mt-48"
            v-for="section in sections"
            :key="section.id"
          >
            <h3 class="mb-28">{{section.name}}</h3>

            <div class="pageLinks gap-12">
              <router-link
                v-for="page in section.pages"
                :key="page.id"
                tag="a"
                :to="page.link"
              >
                {{page.page}}
              </router-link>
            </div>

          </div>

        </div>
        
        <div class="contactsBlock w-3 mt-48">
          
          <div class="infoSection">
            
            <!-- Address Start -->

            <h3>Address</h3>
            <div class="infoPart mt-28">
              <Icons
                icon="location"
                size="middle"
                color="white"
              />
              <p class="accented">г.Ташкент, проспект Амира Темура, 16</p>
            </div>

            <!-- Address Stop -->

            <!-- Schedule Start -->

            <h3 class="mt-64">Schedule</h3>
            <div class="infoPart mt-28">

              <Icons
                icon="clock"
                size="middle"
                color="white"
              />
              <div class="d-f fd-c gap-12">
                <div class="d-f fd-r gap-12">
                  <p class="secondaryText">Working days:</p>
                  <p class="accented">Mon-Sat</p>
                </div>

                <div class="d-f fd-r gap-12">
                  <p class="secondaryText">Working hours:</p>
                  <p class="accented">09:00 - 18:00</p>
                </div>

                <div class="d-f fd-r gap-12">
                  <p class="secondaryText">Day off:</p>
                  <p class="accented">Sunday</p>
                </div>
              </div>
            </div>

            <!-- Schedule Stop -->

            <!-- Contacts Start -->

            <h3 class="mt-64">Contacts</h3>
            <div class="infoPart mt-28">
              
              <Icons
                icon="phone"
                size="middle"
                color="white"
              />
              <div class="d-f fd-c gap-12">
                <div class="d-f fd-r gap-12">
                  <p class="secondaryText">Telehone:</p>
                  <a :href="'tel:' + {telephone}" class="accented">+998 71 236 74 36</a>
                </div>

                <div class="d-f fd-r gap-12">
                  <p class="secondaryText">Fax:</p>
                  <a :href="'tel:' + {fax}" class="accented">+998 71 233 62 81</a>
                </div>
              </div>
            </div>

            <div class="infoPart mt-12">
              
              <Icons
                icon="mail"
                size="middle"
                color="white"
              />
              <div class="d-f fd-c gap-12">
                <div class="d-f fd-r gap-12">
                  <p class="secondaryText">Email:</p>
                  <a :href="'mailto:' + {mail}" class="accented">info@tam.uz</a>
                </div>
              </div>
            </div>

            <!-- Contacts Stop -->

            <!-- Social Networks Start -->

            <h3 class="mt-64">Follow Us on</h3>
            <div class="infoPart mt-28">
              <div class="d-f fd-c gap-12">
                <div class="d-f fd-r gap-24">

                  <a
                    v-for="social in socialNetworks"
                    :key="social.id"
                    :href="social.link"
                    target="_blank"
                  >
                    <img :src="require('@/assets/icons/' + social.network + '.svg')" alt="">
                  </a>

                </div>
              </div>
            </div>

            <!-- Social Networks Stop -->
          </div>

        </div>

      </div>

      <div class="w-12 d-f fd-r gap-24 mt-24">
        <div class="w-100">
          <p>
            © 2022 Все права защищены.
            <br>
            При использовании материалов веб-сайта, ссылка на источник обязательна.
          </p>
        </div>

        <div class="w-100">
          <h4>
            Нашли в тексте ошибку? Выделите её и нажмите <span>Ctrl+Enter</span>, а затем отправьте нам для уведомления администрации.
          </h4>
        </div>
      </div>

      <hr class="mt-32">

      <div class="w-12 d-f fd-r mt-24 gap-24">
        <div class="w-8 d-f fd-r gap-48 mb-60">
          <a class="linkA commonP bold line-h-20" href="/cookies">Cookie files</a>
          <a class="linkA commonP bold line-h-20" href="/sitemap">Site Map</a>
          <a class="linkA commonP bold line-h-20" href="/privacy-policy">Privacy Policy</a>
          <a class="linkA commonP bold line-h-20" href="/news">Main for Today</a>
        </div>

        <div class="w-4 d-f fd-r justify-sb">
          <img class="h-32p" src="@/assets/temporary/metrika-badge.png" alt="">

          <a
            class="developerCompany d-f fd-r gap-12"
            :href="developers"
            target="_blanc"
          >
            <h2 class="developers">Developed by</h2>
            <img class="h-32p" src="@/assets/temporary/daac.png" alt=""/>
          </a>
        </div>
      </div>

    </div>


    <div class="dark-layer-footer z-idx1"></div>
    <img class="back-img" src="@/assets/static/footer-back.png" alt=""/>

  </div>
</template>

<script>
import footerLogo from './logoSVG.vue'
import Icons from './icons.vue'

export default {
  name: 'footerComponent',

  components: {
    footerLogo, Icons
  },

  data() {
    return {
      developers: 'https://daac.uz/',
      telephone: '+998712367436',
      fax: '+998712336281',
      mail: 'tmi@mail.ru',
      socialNetworks: [
        {id: 1, network: 'facebook', link: 'https://www.facebook.com/termizarxeologiyamuzeyi'},
        {id: 2, network: 'youtube', link: 'https://www.youtube.com/channel/UCz7I4TVUUhgOpsldM28WtPA'},
        {id: 3, network: 'instagram', link: 'https://www.instagram.com/termez_archaeologycal_museum/?hl=ru'},
        {id: 4, network: 'telegram', link: 'https://t.me/Arxeologiya_muzeyi'},
      ],
      sections: [],
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

  methods: {
    sectionSelector() {
      const len = this.menuLinks.length

      for(let i = 0; i < len; i++) {
        if(this.menuLinks[i].page !== false) {
          this.sections.push(this.menuLinks[i])
        }
      }
    }
  },

  mounted() {
    this.sectionSelector()
  }
}
</script>

<style>

</style>