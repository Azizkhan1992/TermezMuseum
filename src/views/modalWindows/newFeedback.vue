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
            <h3 class="commonT colorType">Центр связи</h3>
            <p class="commonP bold colorGreyD">Отправьте свои вопросы, жалобы и предложения касаемо деятельности музея. Мы ответим Вам как можно скорее</p>
          </div>

          <div class="w-100 mt-24 grid-2">

            <div class="w-100 gap-24">
              <Icons
                icon="location"
                size="middle"
              />
              <p class="commonP bold colorType line-h-20">г.Ташкент, проспект Амира Темура, 16</p>
            </div>

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

            <div class="w-100 gap-24">
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

          

          <div class="w-100 mt-24 grid-2">

            <!-- Submit = False State Start -->

            <div
              v-if="submitted === false"
              class="w-100 fd-c gap-4"
            >
              <label
                class="colorGreyD"
              >
                Имя
              </label>
              <input
                v-model="name"
                type="text"
                placeholder="Введите ваше имя"
              >
            </div>

            <div
              v-if="submitted === false"
              class="w-100 fd-c gap-4"
            >
              <label
                class="colorGreyD"
              >
                Фамилия
              </label>
              <input
                v-model="surName"
                type="text"
                placeholder="Введите вашу фамилию"
              >
            </div>

            <div
              v-if="submitted === false"
              class="w-100 fd-c gap-4"
            >
              <label
                class="colorGreyD"
              >
                Отчество
              </label>
              <input
                v-model="secondName"
                type="text"
                placeholder="Введите вашу отчество"
              >
            </div>

            <div
              v-if="submitted === false"
              class="w-100 fd-c gap-4"
            >
              <label
                class="colorGreyD"
              >
                Электронная почта
              </label>
              <input
                v-model="email"
                type="text"
                placeholder="Введите электронную почту"
              >
            </div>

            <div
              v-if="submitted === false"
              class="w-100 fd-c gap-4"
            >
              <label
                class="colorGreyD"
              >
                Номер телефона
              </label>
              <input
                v-model="phoneNumber"
                type="text"
                placeholder="Введите ваш номер телефона"
              >
            </div>

            <div
              v-if="submitted === false"
              class="w-100 fd-c gap-4"
            >
              <label
                class="colorGreyD"
              >
                Тема обращения
              </label>
              <input
                v-model="feedbackTitle"
                type="text"
                placeholder="Введите направление волонтерства"
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
              Текст обращения
            </label>
            <textarea
              v-model="feedbackText"
              type="text"
              placeholder="Введите текст обращения"
            ></textarea>
          </div>

          <!-- Submit = False State Stop -->

          
        <!-- Submit = True State Start --> 

          <div
            v-if="submitted"
            class="w-100 fd-c gap-24 justify-c mt-80"
          >
            <h3 class="commonT colorPrim txt-align-c line-h-30">Спасибо за ваше обращение. Постараемся ответить вам как можно скорее</h3>
            <div class="w-100 gap-8 justify-c">
              <h3 class="commonT colorGreyD line-h-30">Номер вашего обращения:</h3>
              <h3 class="commonT colorPrim line-h-30">#008619</h3>
            </div>
          </div>

          <!-- Submit = True State Stop -->

          <button
            @click="submitted = !submitted"
            class="prim w-4 h-48"
            :class="submitted ? 'mt-a' : 'mt-48'"
          >
            <span>Click me</span>
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

      submitted: false
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