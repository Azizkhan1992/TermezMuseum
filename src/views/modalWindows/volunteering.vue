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

      <div class="modalContent volunteering d-f fd-c align-c">
        
        <div
          class="w-100 h-100 d-f fd-c align-c"
        >


          <div class="w-100 fd-c align-c gap-24">
            <h3 class="commonT colorType">Волонтерство</h3>
            <p class="commonP bold colorType">Если хотите помочь музею волонтерством, заполните пожалуйста, краткую анкету и отправьте нам. Наша администрация ответит Вам как можно скорее</p>
            <h3 class="commonT w-100 mt-48 colorGreyD">Мероприятие</h3>
            <p class="commonP bold colorType">Встреча с заместителем директора по научной работе Института востоковедения Российской Академии Наук</p>
          </div>

          <div class="w-100 mt-24 grid-2">
            <div
              class="w-100 align-c gap-24"
            >
              <Icons
                icon="calendar"
                size="middle"
              />
              <div class="w-a d-f fd-r gap-8 align-c">
                <p class="helpers">22 июнь 2022г</p>
                <Icons
                  icon="tailArrRight"
                  size="sm"
                />
                <p class="helpers">30 июнь 2022г</p>
              </div>
            </div>

            <div
              class="w-100 align-c gap-24"
            >
              <Icons
                icon="location"
                size="middle"
              />
              <p class="helpers">г. Ташкент</p>
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
                Направление
              </label>
              <input
                v-model="volunteeringDirection"
                type="text"
                placeholder="Введите направление волонтерства"
              >
            </div>

            <!-- Submit = False State Stop -->

          </div>

          
        <!-- Submit = True State Start --> 

          <div
            v-if="submitted"
            class="w-100 fd-c gap-24 justify-c mt-80"
          >
            <h3 class="commonT colorPrim txt-align-c line-h-30">Спасибо за вашу заявку в волонтерство. Постараемся ответить вам как можно скорее</h3>
            <div class="w-100 gap-8 justify-c">
              <h3 class="commonT colorGreyD line-h-30">Номер вашей заявки:</h3>
              <h3 class="commonT colorPrim line-h-30">#008619</h3>
            </div>
          </div>

          <!-- Submit = True State Stop -->

          <button
            @click="submitted = !submitted"
            class="prim w-4 mt-a"
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
  name: 'volunteeringModal',

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
      volunteeringDirection: '',

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