<template>
  <div class="mainPage">

    <pageTitleAnimated
      :titleName="title"
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
        <h4 class="commonT colorGreyD">Адрес</h4>
        <div class="w-100 gap-24">
          <Icons
            icon="location"
            size="middle"
          />
          <p class="commonP bold colorType line-h-20">г.Ташкент, проспект Амира Темура, 16</p>
        </div>
      </div>

      <div class="w-100 fd-c gap-24">
        <h4 class="commonT bold colorGreyD">График работы</h4>
        <div class="w-100 gap-24">
          <Icons
            icon="clock"
            size="middle"
          />
          <div class="w-100 fd-c gap-12">
            <div class="w-a d-f fd-r gap-12">
              <p class="commonP colorGreyD line-h-20">Рабочие дни:</p>
              <p class="commonP colorType bold line-h-20">Пн-Сб</p>
            </div>
            <div class="w-a d-f fd-r gap-12">
              <p class="commonP colorGreyD line-h-20">Часы работы:</p>
              <p class="commonP colorType bold line-h-20">09:00 - 18:00</p>
            </div>
            <div class="w-a d-f fd-r gap-12">
              <p class="commonP colorGreyD line-h-20">Выходной день:</p>
              <p class="commonP colorType bold line-h-20">Воскресенье</p>
            </div>
          </div>
        </div>
      </div>

      <div class="w-100 fd-c gap-24">
        <h4 class="commonT colorGreyD">Контакты</h4>
        <div class="w-100 gap-24">
          <Icons
            icon="phone"
            size="middle"
          />
          
          <div class="w-100 fd-c gap-12">
            <div class="w-a d-f fd-r gap-12">
              <p class="commonP colorGreyD line-h-20">Тел:</p>
              <a href="tel: +998 71 236 74 36" class="contactPhone commonP colorType line-h-20">+998 71 236 74 36</a>
            </div>
            <div class="w-a d-f fd-r gap-12">
              <p class="commonP colorGreyD line-h-20">Факс:</p>
              <p class="commonP colorType bold line-h-20">+998 71 233 62 81</p>
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
              <p class="commonP colorGreyD line-h-20">Э-почта:</p>
              <a href="mailto: tmi2007@mail.ru" class="contactPhone commonP bold colorType line-h-20">tmi2007@mail.ru</a>
            </div>
          </div>
        </div>
      </div>

      <div class="w-100 fd-c gap-24">
        <h4 class="commonT colorGreyD">Ориентир</h4>
        <div class="w-100 gap-24">
          <Icons
            icon="oriental"
            size="middle"
          />
          <p class="commonP bold colorType line-h-20">Ташкентский Государственный университет Востоковедении</p>
        </div>
      </div>

      <div class="w-100 fd-c gap-24">
        <h4 class="commonT colorGreyD">Автобусы</h4>
        <div class="w-100 gap-24">
          <Icons
            icon="bus"
            size="middle"
          />
          <p class="commonP bold colorType line-h-20">51, 67, 93, 113, 144</p>
        </div>
      </div>

      <div class="w-100 fd-c gap-24">
        <h4 class="commonT colorGreyD">Метро</h4>
        <div class="w-100 gap-24">
          <Icons
            icon="subway"
            size="middle"
          />
          <p class="commonP bold colorType line-h-20">Станция метро “Ойбек”</p>
        </div>
      </div>

      <div class="w-100 fd-c gap-24">
        <h4 class="commonT bold colorGreyD">Мы в социальных сетях</h4>
        <div class="w-100 gap-24">
          <Icons
            @click.native="goToSocial(socialNetworks[0])"
            class="contactSocials cur-ptr"
            icon="facebook"
            size="large"
          />
          <Icons
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
          />
        </div>
      </div>
    </div>

    <div class="w-100 fd-c mt-60 gap-24">
      <h4 class="commonT colorGreyD">Обратная связь</h4>
      <h4 class="commonD colorGreyD">Режим работы электронных обращений с 09:00 до 18:00 с понедельника по пятницу. Время обработки обращения - три рабочих дня.</h4>
    </div>

    <div class="w-100 fd-c bor-r-20 ovr-hidden box-brb mt-24 backgrnd-white pad-24p">
      <div class="w-100 grid-3 mobile-grid">
        <div class="w-100 fd-c gap-4">
          <label class="commonP colorGreyD">Фамилия</label>
          <input
            v-model="surName"
            type="text"
            placeholder="Введите фамилию"
          />
          <span v-if="$v.surName.$dirty && !$v.surName.required" class="validation-error">Пожалуйста, укажите фамилию</span>
        </div>

        <div class="w-100 fd-c gap-4">
          <label class="commonP colorGreyD">Имя</label>
          <input
            v-model="name"
            type="text"
            placeholder="Введите имя"
          />
          <span v-if="$v.name.$dirty && !$v.name.required" class="validation-error">Пожалуйста, укажите имя</span>
        </div>

        <div class="w-100 fd-c gap-4">
          <label class="commonP colorGreyD">Отчество</label>
          <input
            v-model="secondName"
            type="text"
            placeholder="Введите отчество"
          />
        </div>

        <div class="w-100 fd-c gap-4">
          <label class="commonP colorGreyD">Электронная почта</label>
          <input
            v-model="email"
            type="text"
            placeholder="Введите электронную почту"
          />
          <span v-if="$v.email.$dirty && !$v.email.required" class="validation-error">Пожалуйста, укажите электронную почту</span>
          <span v-if="$v.email.$dirty && !$v.email.email" class="validation-error">Неверная почта</span>
        </div>

        <div class="w-100 fd-c gap-4">
          <label class="commonP colorGreyD">Номер телефона</label>
          <input
            v-model="phoneNumber"
            type="text"
            placeholder="Введите номер телефона"
          />
        </div>

        <div class="w-100 fd-c gap-4">
          <label class="commonP colorGreyD">Тема обращения</label>
          <input
            v-model="appealTitle"
            type="text"
            placeholder="Введите краткую тему обращения"
          />
          <span v-if="$v.appealTitle.$dirty && !$v.appealTitle.required" class="validation-error">Пожалуйста, укажите тему обращения</span>
        </div>
      </div>

      <div class="w-100 fd-c gap-4 mt-24">
        <label class="commonP colorGreyD">Текст обращения</label>
        <textarea
          placeholder="Введите текст обращения"
          class="w-100"
          v-model="text">
        </textarea>
        <span v-if="$v.text.$dirty && !$v.text.required" class="validation-error">Пожалуйста, укажите текст обращения</span>
      </div>

      <div class="w-100 mt-48 justify-c">
        <button
          class="prim w-4"
          @click="sendAppeal"
        >
          <span>Click me</span>
        </button>
      </div>
        
    </div>


    <breadCrumbs
      :currentPage="title"
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

      title: 'Контакты',
      linkToMaps: 'https://www.google.com/maps/place/%D0%90%D1%80%D1%85%D0%B5%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9+%D0%BC%D1%83%D0%B7%D0%B5%D0%B9/@37.2441787,67.2804665,17z/data=!3m1!4b1!4m5!3m4!1s0x3f3531f8464048f3:0xeb4d97a66c0a3152!8m2!3d37.2441665!4d67.2826439',

      zoom: 17,
      center: latLng(37.2443537371863, 67.28256936727877),
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      iconSize: [52, 74],

      socialNetworks: [
        {id: 1, network: 'facebook', link: 'https://www.facebook.com/termizarxeologiyamuzeyi'},
        {id: 2, network: 'youtube', link: 'https://www.youtube.com/channel/UCz7I4TVUUhgOpsldM28WtPA'},
        {id: 3, network: 'instagram', link: 'https://www.instagram.com/termez_archaeologycal_museum/?hl=ru'},
        {id: 4, network: 'telegram', link: 'https://t.me/Arxeologiya_muzeyi'},
      ],
    }
  },

  computed: {
    dynamicSize() {
      return [this.iconSize[0], this.iconSize[1]];
    },
  },

  methods: {
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