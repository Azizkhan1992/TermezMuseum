<template>
  <div class="footer mt-120 pos-rel">
    <div class="w-12 mt-24 z-idx2">
      <div class="footer-top">
        <div class="d-f w-4 gap-24 mb-16 footer-logo-img">
        <footerLogo />
  
        <div class="logo">
          <h4> {{logotxt1?.[$i18n.locale]}} <br> <span> {{logotxt2[$i18n.locale]}}</span> <br> {{logotxt3[$i18n.locale]}} </h4>
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
            v-show="section.category == 'section'"
          >
            <h3 class="mb-28" >{{ section?.name?.[$i18n.locale] }}</h3>

            <div class="pageLinks gap-12" v-if="section.category == 'section'">
              <router-link
                v-for="page, idx in section?.subMenu"
                :key="idx"
                tag="a"
                :to="page.link"
              >
                {{ page?.name?.[$i18n.locale] }}
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
              <p class="accented">{{contacts?.address?.text?.[$i18n.locale]}}</p>
            </div>

            <!-- Address Stop -->

            <!-- Schedule Start -->

            <h3 class="mt-64">{{$t("schedule")}}</h3>
            <div class="infoPart mt-28">
              <Icons icon="clock" size="middle" color="white" />
              <div class="d-f fd-c gap-12">
                <div class="d-f fd-r gap-12">
                  <p class="secondaryText">{{$t("workdays")}}:</p>
                  <p class="accented">{{contacts?.schedule?.workingDays.start?.[$i18n.locale]}} - {{contacts?.schedule?.workingDays.end?.[$i18n.locale]}}</p>
                </div>

                <div class="d-f fd-r gap-12">
                  <p class="secondaryText">{{$t("workhours")}}:</p>
                  <p class="accented">{{contacts?.schedule?.workingHours.start}} - {{contacts?.schedule?.workingHours.end}}</p>
                </div>

                <div class="d-f fd-r gap-12">
                  <p class="secondaryText">{{$t("dayoff")}}:</p>
                  <p class="accented">{{weekout?.[$i18n.locale]}}</p>
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
                  <a :href="item" v-for="item, idx in contacts?.contact?.phoneNumber" :key="idx" class="accented"
                    >{{item}}</a
                  >
                </div>

                <div class="d-f fd-r gap-12">
                  <p class="secondaryText">Fax:</p>
                  <a :href="item" v-for="item, idy in contacts?.contact?.fax" :key="idy" class="accented"
                    >{{item}}</a
                  >
                </div>
              </div>
            </div>

            <div class="infoPart mt-12">
              <Icons icon="mail" size="middle" color="white" />
              <div class="d-f fd-c gap-12">
                <div class="d-f fd-r gap-12">
                  <p class="secondaryText">Email:</p>
                  <a :href="contacts?.contact?.email" class="accented"
                    >{{contacts?.contact?.email}}</a
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
                    v-for="social, idz in contacts?.socialNetworks?.links"
                    :key="idz"
                    :href="social.link"
                    target="_blank"
                    v-show="contacts?.socialNetworks?.links.length > 0"
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
                <p class="accented">{{contacts?.address?.text?.[$i18n.locale]}}</p>
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
                    <p class="accented">{{contacts?.schedule?.workingDays?.start?.[$i18n.locale]}} - {{contacts?.schedule?.workingDays?.end?.[$i18n.locale]}}</p>
                  </div>

                  <div class="d-f fd-r gap-12">
                    <p class="secondaryText">{{$t("workhours")}}:</p>
                    <p class="accented">{{contacts?.schedule?.workingHours?.start}} - {{contacts?.schedule?.workingHours?.end}}</p>
                  </div>

                  <div class="d-f fd-r gap-12">
                    <p class="secondaryText">{{$t("dayoff")}}:</p>
                    <p class="accented">{{weekout?.[$i18n.locale]}}</p>
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
                    <a :href="item" v-for="item, idx in contacts?.contact?.phoneNumber" :key="idx" class="accented"
                      >{{item}}</a
                    >
                  </div>

                  <div class="d-f fd-r gap-12">
                    <p class="secondaryText">Fax:</p>
                    <a :href="item" v-for="item, idy in contacts?.contact?.fax" :key="idy" class="accented"
                      >{{item}}</a
                    >
                  </div>
                </div>
              </div>
              <div class="infoPart mt-12">
                <Icons icon="mail" size="middle" color="white" />
                <div class="d-f fd-c gap-12">
                  <div class="d-f fd-r gap-12">
                    <p class="secondaryText">Email:</p>
                    <a :href="contacts?.contact?.email" class="accented"
                      >{{contacts?.contact?.email}}</a
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
                      v-for="social, idz in contacts?.socialNetworks?.links"
                      :key="idz"
                      :href="social.link"
                      target="_blank"
                      v-show="contacts?.socialNetworks?.links.length>0"
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
          <p v-html="textCE?.[$i18n.locale]">
            
          </p>
        </div>

        <div class="w-100 site-footer-text">
          <h4 v-html="textCEC?.[$i18n.locale]">
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
      contacts: {},
      weekDays: [
        {id: 1, name: 'Yakshanba', val: 'Yak'},
        {id: 2, name: 'Dushanba', val: 'Du'},
        {id: 3, name: 'Seshanba', val: 'Se'},
        {id: 4, name: 'Chorshanba', val: 'Chor'},
        {id: 5, name: 'Payshanba', val: 'Pay'},
        {id: 6, name: 'Juma', val: 'Ju'},
        {id: 7, name: 'Shanba', val: 'Shan'}
      ],
      weekout: {
        language_uzCyrillic: "Якшанба",
        language_uzlatin: "Yakshanba",
        language_ru: "Воскресенье",
        language_en: "Sunday"
      },
      
      textCE:{
        language_uzlatin: "© 2022 Barcha huquqlar himoyalangan. <br /> Veb-sayt materiallaridan foydalanganda manbaga havola kerak.",
        language_ru: "© 2022 Все права защищены. <br /> При использовании материалов веб-сайта, ссылка на источник обязательна.",
        language_uzCyrillic: "© 2022 Барча ҳуқуқлар ҳимояланган. <br /> Веб-сайт материалларидан фойдаланганда манбага ҳавола керак.",
        language_en: "© 2022 All rights reserved. <br /> When using materials from the website, a link to the source is required.",
      },
      textCEC:{
        language_ru: "Нашли в тексте ошибку? Выделите её и нажмите <span>Ctrl+Enter</span>, а затем отправьте нам для уведомления администрации.",
        language_uzlatin: "Matnda xatolik topdingizmi? Uni tanlang va <span>Ctrl+Enter</span> tugmalarini bosing va keyin ma'muriyatni xabardor qilish uchun uni bizga yuboring.",
        language_uzCyrillic: "Матнда хатолик топдингизми? Уни танланг ва <span>Ctrl+Enter</span> тугмаларини босинг ва кейин маъмуриятни хабардор қилиш учун уни бизга юборинг.",
        language_en: "Did you find an error in the text? Select it and press <span>Ctrl+Enter</span>, and then send it to us to notify the administration.",
      },
      
      logotxt1:{
        language_uzlatin: "Termiz",
        language_ru: "Термезский",
        language_uzCyrillic: "Термиз",
        language_en: "Termez",
      },
      logotxt2:{
        language_uzlatin: "Arxeologik",
        language_ru: "Археологический",
        language_uzCyrillic: "Археологик",
        language_en: "Archaeological",
      },
      logotxt3:{
        language_uzlatin: "Muzey",
        language_ru: "Музей",
        language_uzCyrillic: "Музей",
        language_en: "Museum",
      },
      sections: [],
      menuLinks: [],
    };
  },

  methods: {
    getMenuLinks(){
      this.$api.get('/footer')
      .then(resp => {
        this.menuLinks = resp.data.menuDocuments
        for(let i=1; i<= this.menuLinks.length; i++){
          this.menuLinks[i-1].id = i
        }
        this.sectionSelector()
      }).catch(err => {console.log(err)})
    },
    getContactData(){
      this.$api.get('/contact')
      .then(resp => {
        this.contacts = resp.data.result
        // console.log(this.contacts)
      }).catch(err => {console.log(err)})
    },
    sectionSelector() {
      const len = this.menuLinks.length;

      for (let i = 0; i < len; i++) {
        if (this.menuLinks[i].category == 'section') {
          this.sections.push(this.menuLinks[i]);
        }
      }
    },
  },

  mounted() {
    this.getMenuLinks()
    this.getContactData()
  },
};
</script>

<style>
</style>