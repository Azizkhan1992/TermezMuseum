<template>
  <div class="modal">
    <div
      class="modalBack"
      @click.self="closeModal"
    >
      
      <div
        class="closeIconDiv"
        @click="closeModal"
      >
        <Icons
          icon="closeFilled"
          size="48"
        />
      </div>

      <div class="modalContent feedback d-f fd-c align-c">
        
        <div
          class="w-100 h-100 d-f fd-c align-c"
          :class="submitted ? '' : 'h-max-cnt'"
        >


          <div class="w-100 fd-c align-c gap-24">
            <h3 class="commonT colorType">{{title[$i18n.locale]}}</h3>
            <p class="commonP bold colorGreyD">{{$t("sendyourQuest")}}</p>
          </div>

          <div class="w-100 mt-24 grid-2">

            <div class="w-100 gap-24">
              <Icons
                icon="location"
                size="middle"
              />
              <p class="commonP bold colorType line-h-20">{{location[$i18n.locale]}}</p>
            </div>

            <div class="w-100 gap-24">
              <Icons
                icon="phone"
                size="middle"
              />
              
              <div class="w-100 fd-c gap-12">
                <div class="w-a d-f fd-r gap-12">
                  <p class="commonP colorGreyD line-h-20">{{$t("telephone")}}:</p>
                  <a href="tel: +998 71 236 74 36" class="contactPhone commonP colorType line-h-20">+998 71 236 74 36</a>
                </div>
                <div class="w-a d-f fd-r gap-12">
                  <p class="commonP colorGreyD line-h-20">{{$t("fax")}}:</p>
                  <p class="commonP colorType bold line-h-20">+998 71 233 62 81</p>
                </div>
              </div>
            </div>

            <div class="w-100 gap-24">
              <Icons
                icon="mail"
                size="middle"
              />
              
              <div class="w-100 fd-c gap-12">
                <div class="w-a d-f fd-r gap-12">
                  <p class="commonP colorGreyD line-h-20">{{$t("email")}}:</p>
                  <a href="mailto: tmi2007@mail.ru" class="contactPhone commonP bold colorType line-h-20">tmi2007@mail.ru</a>
                </div>
              </div>
            </div>

            <div class="w-100 gap-24">
              <Icons
                icon="clock"
                size="middle"
              />
              <div class="w-100 fd-c gap-12">
                <div class="w-a d-f fd-r gap-12">
                  <p class="commonP colorGreyD line-h-20">{{$t("workdays")}}:</p>
                  <p class="commonP colorType bold line-h-20">Пн-Сб</p>
                </div>
                <div class="w-a d-f fd-r gap-12">
                  <p class="commonP colorGreyD line-h-20">{{$t("workhours")}}:</p>
                  <p class="commonP colorType bold line-h-20">09:00 - 18:00</p>
                </div>
                <div class="w-a d-f fd-r gap-12">
                  <p class="commonP colorGreyD line-h-20">{{$t("dayoff")}}:</p>
                  <p class="commonP colorType bold line-h-20">Воскресенье</p>
                </div>
              </div>
            </div>

          </div>

          

          <div class="w-100 mt-24 grid-2">

            <!-- Submit = False State Start -->

            <div
              v-if="submitted === false"
              class="w-100 fd-c gap-4"
            >
              <label
                class="colorGreyD"
              >
                {{$t("name")}}
              </label>
              <input
                v-model="name"
                type="text"
                :placeholder="$t('enterName')"
              >
            </div>

            <div
              v-if="submitted === false"
              class="w-100 fd-c gap-4"
            >
              <label
                class="colorGreyD"
              >
                {{$t("surname")}}
              </label>
              <input
                v-model="surName"
                type="text"
                :placeholder="$t('enterSurname')"
              >
            </div>

            <div
              v-if="submitted === false"
              class="w-100 fd-c gap-4"
            >
              <label
                class="colorGreyD"
              >
                {{$t("middle")}}
              </label>
              <input
                v-model="secondName"
                type="text"
                :placeholder="$t('enterMiddle')"
              >
            </div>

            <div
              v-if="submitted === false"
              class="w-100 fd-c gap-4"
            >
              <label
                class="colorGreyD"
              >
                {{$t("email")}}
              </label>
              <input
                v-model="email"
                type="text"
                :placeholder="$t('enterEmail')"
              >
            </div>

            <div
              v-if="submitted === false"
              class="w-100 fd-c gap-4"
            >
              <label
                class="colorGreyD"
              >
                {{$t("phoneNumber")}}
              </label>
              <input
                v-model="phoneNumber"
                type="text"
                :placeholder="$t('enterPhone')"
              >
            </div>

            <div
              v-if="submitted === false"
              class="w-100 fd-c gap-4"
            >
              <label
                class="colorGreyD"
              >
                {{$t("topic")}}
              </label>
              <input
                v-model="feedbackTitle"
                type="text"
                :placeholder="$t('directionVlounteering')"
              >
            </div>
          </div>
          
          <div
            v-if="submitted === false"
            class="w-100 mt-24 fd-c gap-4"
          >
            <label
              class="colorGreyD"
            >
              {{$t("textAppeal")}}
            </label>
            <textarea
              v-model="feedbackText"
              type="text"
              :placeholder="$t('enterTextAppeal')"
            ></textarea>
          </div>

          <!-- Submit = False State Stop -->

          
        <!-- Submit = True State Start --> 

          <div
            v-if="submitted"
            class="w-100 fd-c gap-24 justify-c mt-80"
          >
            <h3 class="commonT colorPrim txt-align-c line-h-30">{{$t("thankFeedback")}}</h3>
            <div class="w-100 gap-8 justify-c">
              <h3 class="commonT colorGreyD line-h-30">{{$t("reqNumber")}}:</h3>
              <h3 class="commonT colorPrim line-h-30">#008619</h3>
            </div>
          </div>

          <!-- Submit = True State Stop -->

          <button
            @click="submitted = !submitted"
            class="prim w-4 h-48"
            :class="submitted ? 'mt-a' : 'mt-48'"
          >
            <span>{{$t('send')}}</span>
          </button>

        </div>


          

      </div>
    </div>
  </div>
</template>

<script>
import Icons from '@/components/icons.vue'

export default {
  name: 'newFeedbackModal',

  components: {
    Icons
  },

  data() {
    return {
      name: '',
      surName: '',
      secondName: '',
      phoneNumber: '',
      email: '',
      feedbackTitle: '',
      feedbackText: '',
      location: {
        language_uzlatin: "Toshkent sh., Amir Temur shoh ko‘chasi, 16-uy",
        language_ru: "г.Ташкент, проспект Амира Темура, 16",
        language_uzCyrillic: "Тошкент ш., Амир Темур шоҳ кўчаси, 16-уй",
        language_en: "Tashkent, Amir Temur Avenue, 16"
      },

      submitted: false,
      title: {
        language_uzlatin: 'Aloqa markazi',
        language_uzCyrillic: 'Алоқа маркази',
        language_en: 'Communication center',
        language_ru: 'Центр связи',
      }
    }
  },

  methods: {
    closeModal() {
      this.$emit('closeModal')
    }
  }
}
</script>

<style>

</style>