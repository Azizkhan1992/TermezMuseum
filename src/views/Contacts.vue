<template>
  <div class="mainPage">

    <pageTitleAnimated
      :titleName="$t('contacts')"
      background="contacts"
    />

    <div class="map">
      <l-map
        :zoom="zoom"
        :center="center"
        class="mapCanvas"
      >
        <l-tile-layer
          :url="url"
          :attribution="attribution"
        />
        <l-marker
          :lat-lng="[37.2443537371863, 67.28256936727877]">

          <l-icon
            :icon-size="dynamicSize"
            :icon-url="require('@/assets/marker-icon.png')"
          />
        </l-marker>
        <l-control class="example-custom-control">
          <a target="_blanc" :href="linkToMaps">Google Maps</a>
        </l-control>
        <l-control
          :position="'bottomleft'"
          class="custom-control-watermark"
        >
        </l-control>
      </l-map>
    </div>

    <div class="w-100 grid-3 r-gap-60 mt-60 mobile-grid">
      
      <div class="w-100 fd-c gap-24">
        <h4 class="commonT colorGreyD">{{$t("address")}}</h4>
        <div class="w-100 gap-24">
          <Icons
            icon="location"
            size="middle"
          />
          <p class="commonP bold colorType line-h-20">{{contacts?.address?.text?.[$i18n.locale]}}</p>
        </div>
      </div>

      <div class="w-100 fd-c gap-24">
        <h4 class="commonT bold colorGreyD">{{$t("schedule")}}</h4>
        <div class="w-100 gap-24">
          <Icons
            icon="clock"
            size="middle"
          />
          <div class="w-100 fd-c gap-12">
            <div class="w-a d-f fd-r gap-12">
              <p class="commonP colorGreyD line-h-20">{{$t("workdays")}}:</p>
              <p class="commonP colorType bold line-h-20">{{contacts?.schedule?.workingDays?.start?.[$i18n.locale]}} - {{contacts?.schedule?.workingDays?.end?.[$i18n.locale]}}</p>
            </div>
            <div class="w-a d-f fd-r gap-12">
              <p class="commonP colorGreyD line-h-20">{{$t("workhours")}}:</p>
              <p class="commonP colorType bold line-h-20">{{contacts?.schedule?.workingHours?.start}} - {{contacts?.schedule?.workingHours?.end}}</p>
            </div>
            <div class="w-a d-f fd-r gap-12">
              <p class="commonP colorGreyD line-h-20">{{$t("dayoff")}}:</p>
              <p class="commonP colorType bold line-h-20">{{weekout[$i18n.locale]}}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="w-100 fd-c gap-24">
        <h4 class="commonT colorGreyD">{{$t("contacts")}}</h4>
        <div class="w-100 gap-24">
          <Icons
            icon="phone"
            size="middle"
          />
          
          <div class="w-100 fd-c gap-12">
            <div class="w-a d-f fd-r gap-12">
              <p class="commonP colorGreyD line-h-20">{{$t("telephone")}}:</p>
              <a :href="item" class="contactPhone commonP colorType line-h-20" v-for="item, idx in contacts?.contact?.phoneNumber" :key="idx">{{item}}</a>
            </div>
            <div class="w-a d-f fd-r gap-12">
              <p class="commonP colorGreyD line-h-20">{{$t("fax")}}:</p>
              <p class="commonP colorType bold line-h-20" v-for="item, idy in contacts?.contact?.fax" :key="idy">{{item}}</p>
            </div>
          </div>
        </div>

        <div class="w-100 gap-24" style="margin-top: -12px">
          <Icons
            icon="mail"
            size="middle"
          />
          
          <div class="w-100 fd-c gap-12">
            <div class="w-a d-f fd-r gap-12">
              <p class="commonP colorGreyD line-h-20">{{$t("email")}}:</p>
              <a :href="contacts?.contact?.email" class="contactPhone commonP bold colorType line-h-20">{{contacts?.contact?.email  }}</a>
            </div>
          </div>
        </div>
      </div>

      <div class="w-100 fd-c gap-24">
        <h4 class="commonT colorGreyD">{{$t("refPoint")}}</h4>
        <div class="w-100 gap-24">
          <Icons
            icon="oriental"
            size="middle"
          />
          <p class="commonP bold colorType line-h-20">{{contacts?.landmark?.text[$i18n.locale]}}</p>
        </div>
      </div>

      <div class="w-100 fd-c gap-24">
        <h4 class="commonT colorGreyD">{{$t("bus")}}</h4>
        <div class="w-100 gap-24">
          <Icons
            icon="bus"
            size="middle"
          />
          <p class="commonP bold colorType line-h-20">{{contacts?.bus?.numbers}}</p>
        </div>
      </div>

      <div class="w-100 fd-c gap-24">
        <h4 class="commonT colorGreyD">{{$t("metro")}}</h4>
        <div class="w-100 gap-24">
          <Icons
            icon="subway"
            size="middle"
          />
          <p class="commonP bold colorType line-h-20">{{contacts?.subway?.text[$i18n.locale]}}</p>
        </div>
      </div>

      <div class="w-100 fd-c gap-24">
        <h4 class="commonT bold colorGreyD">{{$t("social")}}</h4>
        <div class="w-100 gap-24">
          <Icons
          v-for="item, idz in contacts?.socialNetworks?.links"
          :key="idz"
            @click.native="goToSocial(socialNetworks[idz])"
            class="contactSocials cur-ptr"
            icon="facebook"
            size="large"
          />
          <!-- <Icons
            @click.native="goToSocial(socialNetworks[1])"
            class="contactSocials cur-ptr"
            icon="youtube"
            size="large"
          />
          <Icons
            @click.native="goToSocial(socialNetworks[2])"
            class="contactSocials cur-ptr"
            icon="instagram"
            size="large"
          />
          <Icons
            @click.native="goToSocial(socialNetworks[3])"
            class="contactSocials cur-ptr"
            icon="telegram"
            size="large"
          /> -->
        </div>
      </div>
    </div>

    <div class="w-100 fd-c mt-60 gap-24">
      <h4 class="commonT colorGreyD">{{$t("feedback")}}</h4>
      <h4 class="commonD colorGreyD">{{txt[$i18n.locale]}}</h4>
    </div>

    <div class="w-100 fd-c bor-r-20 ovr-hidden box-brb mt-24 backgrnd-white pad-24p">
      <div class="w-100 grid-3 mobile-grid">
        <div class="w-100 fd-c gap-4">
          <label class="commonP colorGreyD">{{$t("surname")}}</label>
          <input
            v-model="surName"
            type="text"
            :placeholder="$t('enterSurname')"
          />
          <span v-if="$v.surName.$dirty && !$v.surName.required" class="validation-error">{{$t("validateSurname")}}</span>
        </div>

        <div class="w-100 fd-c gap-4">
          <label class="commonP colorGreyD">{{$t("name")}}</label>
          <input
            v-model="name"
            type="text"
            :placeholder="$t('enterName')"
          />
          <span v-if="$v.name.$dirty && !$v.name.required" class="validation-error">{{$t("validateName")}}</span>
        </div>

        <div class="w-100 fd-c gap-4">
          <label class="commonP colorGreyD">{{$t("middle")}}</label>
          <input
            v-model="secondName"
            type="text"
            :placeholder="$t('enterMiddle')"
          />
        </div>

        <div class="w-100 fd-c gap-4">
          <label class="commonP colorGreyD">{{$t("email")}}</label>
          <input
            v-model="email"
            type="text"
            :placeholder="$t('enterEmail')"
          />
          <span v-if="$v.email.$dirty && !$v.email.required" class="validation-error">{{$t("validateEmail")}}</span>
          <span v-if="$v.email.$dirty && !$v.email.email" class="validation-error">{{$t("errorEmail")}}</span>
        </div>

        <div class="w-100 fd-c gap-4">
          <label class="commonP colorGreyD">{{$t("phoneNumber")}}</label>
          <input
            v-model="phoneNumber"
            type="text"
            :placeholder="$t('enterPhone')"
          />
        </div>

        <div class="w-100 fd-c gap-4">
          <label class="commonP colorGreyD">{{$t("topic")}}</label>
          <input
            v-model="appealTitle"
            type="text"
            :placeholder="$t('enterTopic')"
          />
          <span v-if="$v.appealTitle.$dirty && !$v.appealTitle.required" class="validation-error">{{$t("validateTopic")}}</span>
        </div>
      </div>

      <div class="w-100 fd-c gap-4 mt-24">
        <label class="commonP colorGreyD">{{$t("textAppeal")}}</label>
        <textarea
          :placeholder="$t('enterTextAppeal')"
          class="w-100"
          v-model="text">
        </textarea>
        <span v-if="$v.text.$dirty && !$v.text.required" class="validation-error">{{$t("validateAppeal")}}</span>
      </div>

      <div class="w-100 mt-48 justify-c">
        <button
          class="prim w-4"
          @click="sendAppeal"
        >
          <span>{{$t("send")}}</span>
        </button>
      </div>
        
    </div>


    <breadCrumbs
      :currentPage="$t('contacts')"
    />
      
  </div>
</template>

<script>
import pageTitleAnimated from '@/components/pageTitleAnimated.vue';
import breadCrumbs from '@/components/breadCrumbs.vue';
import { required, email } from 'vuelidate/lib/validators'
import Icons from '@/components/icons.vue'
import { LMap, LTileLayer, LMarker, LControl, LIcon } from "vue2-leaflet";
import { latLng } from "leaflet";
import 'leaflet/dist/leaflet.css';

export default {
  name: 'contactsPage',
  
  components: {
    pageTitleAnimated,
    breadCrumbs,
    LMap,
    LTileLayer,
    LControl,
    LMarker,
    LIcon,
    Icons
  },

  validations () {
    return {
      name: { required },
      surName: { required },
      email: { required, email },
      appealTitle: { required },
      text: { required }
    }
  },
  
  data() {
    return {
      surName: '',
      name: '',
      secondName: '',
      email: '',
      phoneNumber: '',
      appealTitle: '',
      text: '',
      contacts: {},
      weekout: {
        language_uzCyrillic: "Якшанба",
        language_uzlatin: "Yakshanba",
        language_ru: "Воскресенье",
        language_en: "Sunday"
      },
      txt:{
        language_uzlatin: 'Elektron murojaatlarni ko\'rib chiqish tartibi Dushanbadan Jumagacha soat 09:00 dan 18:00 gacha. Murojaatni ko\'rib chiqish muddati - uch ish kuni.',
        language_ru: 'Режим работы электронных обращений с 09:00 до 18:00 с понедельника по пятницу. Время обработки обращения - три рабочих дня.',
        language_uzCyrillic: 'Електрон мурожаатларни кўриб чиқиш тартиби Душанбадан Жумагача соат 09:00 дан 18:00 гача. Мурожаатни кўриб чиқиш муддати - уч иш куни.',
        language_en: 'Operation of applications from 09:00 to 18:00 from Monday to Friday. Application processing time is three working days.'
      },

      title: 'Контакты',
      linkToMaps: 'https://www.google.com/maps/place/%D0%90%D1%80%D1%85%D0%B5%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9+%D0%BC%D1%83%D0%B7%D0%B5%D0%B9/@37.2441787,67.2804665,17z/data=!3m1!4b1!4m5!3m4!1s0x3f3531f8464048f3:0xeb4d97a66c0a3152!8m2!3d37.2441665!4d67.2826439',

      zoom: 17,
      center: latLng(37.2443537371863, 67.28256936727877),
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      iconSize: [52, 74],

    }
  },

  computed: {
    dynamicSize() {
      return [this.iconSize[0], this.iconSize[1]];
    },
  },

  methods: {
    getContactData(){
      this.$api.get('/contact')
      .then(resp => {
        this.contacts = resp.data.result
        console.log(this.contacts)
      }).catch(err => {console.log(err)})
    },
    goToSocial(obj) {
      window.open(obj.link, '_blank');
    },

    sendAppeal() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
    }
  },

  mounted() {
    this.getContactData()
  }
}
</script>

<style>
.example-custom-control {
  background: #fff;
  padding: 0 0.5em;
  border: 1px solid #aaa;
  border-radius: 0.1em;
}
.custom-control-watermark {
  font-size: 200%;
  font-weight: bolder;
  color: #aaa;
  text-shadow: #555;
}
</style>