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

      <div class="modalContent newComment d-f fd-c align-c">
        
        <div
          class="w-100 h-100 d-f fd-c align-c"
        >


          <div class="w-100 fd-c align-c gap-24">
            <h3 class="commonT colorType">Отзыв о музее</h3>
            <p class="commonP bold colorType">Оставьте отзыв о своих впечатлениях при посещении музея и мы опубликуем ваш отзыв для всех, кто хочет тоже посетить наш музей</p>
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

            <!-- Submit = False State Stop -->

            <!-- Submit = True State Start -->

            <div
              v-if="submitted"
              class="w-100 gap-24"
            >
              <Icons
                icon="location"
                size="middle"
              />
              <p class="commonP bold colorType line-h-20">г.Ташкент, проспект Амира Темура, 16</p>
            </div>

            <div
              v-if="submitted"
              class="w-100 gap-24"
            >
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

            <div
              v-if="submitted"
              class="w-100 gap-24"
            >
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

            <div
              v-if="submitted"
              class="w-100 gap-24"
            >
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

            <!-- Submit = True State Stop -->

            <!-- Submit = False State Start -->

          </div>

          <div
            v-if="submitted === false"
            class="w-100 fd-c gap-4 mt-24"
          >
            <label
              class="colorGreyD"
            >
              Отзыв
            </label>
            <textarea
              v-model="comment"
              class="w-100"
              placeholder="Введите ваш отзыв"
            ></textarea>
          </div>

          <!-- Submit = False State Stop -->

          <div
            v-if="submitted"
            class="w-100 justify-c mt-120"
          >
            <h3 class="commonT colorPrim txt-align-c line-h-30">Спасибо за ваш отзыв. Постараемся опубликовать ваш отзыв как можно скорее</h3>
          </div>

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
  name: 'newCommentModal',

  components: {
    Icons
  },

  data() {
    return {
      name: '',
      surName: '',
      comment: '',

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