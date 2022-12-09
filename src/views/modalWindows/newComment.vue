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
            <h3 class="commonT colorType">{{$t('sendUs')}}</h3>
            <p class="commonP bold colorType">{{$t('feed')}}</p>
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
              {{$t('name')}}
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
              {{$t('surname')}}
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
            {{$t('review')}}
            </label>
            <textarea
              v-model="comment"
              class="w-100"
              placeholder="Введите ваш отзыв"
            ></textarea>

            <p class="reviewT" v-if="checkComment == false">Iltimos, fikringiz matnini kiriting</p>
            <p class="reviewT" v-if="checkComment1 == true">Izoh kamida 100 belgidan iborat bo‘lishi kerak</p>
          </div>

          <!-- Submit = False State Stop -->

          <div
            v-if="submitted"
            class="w-100 justify-c mt-120"
          >
            <h3 class="commonT colorPrim txt-align-c line-h-30">Спасибо за ваш отзыв. Постараемся опубликовать ваш отзыв как можно скорее</h3>
          </div>

          <button
            @click="sendUs(1)"
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
      checker: 1,

      checkComment: true,
      checkComment1: false,

      submitted: false
    }
  },

  methods: {
    sendUs(){
      // console.log(this.checker)
      if(this.checker == 1){
        if(this.comment){
        this.checkComment = true
        if(this.comment.length>=100){
          this.submitted = !this.submitted
          this.$api.post('/about/comments/new', {
            firstName: this.name,
            lastName: this.surName,
            text: this.comment
          })
        }
        this.checker = ''

        
        
      }
      
      else{
        this.checkComment = false

        // if(this.submitted == true){
        //   console.log('Ups')
        //   this.submitted = false,
        //   this.name = '',
        //   this.surName = '',
        //   this.comment = ''
        // }
      }
    }else{
      // console.log(2, this.checker)
      this.checker = 1
      this.submitted = false
      this.name = '',
      this.surName = '',
      this.comment = ''

      if(this.comment){
        this.checkComment = true
        if(this.comment.length>=100){
          this.submitted = !this.submitted
          this.$api.post('/about/comments/new', {
            firstName: this.name,
            lastName: this.surName,
            text: this.comment
          })
        }

        

        
        
      }
      
      else{
        this.checkComment = false

        // if(this.submitted == true){
        //   console.log('Ups')
        //   this.submitted = false,
        //   this.name = '',
        //   this.surName = '',
        //   this.comment = ''
        // }
      }
    }
      },
    closeModal() {
      this.$emit('closeModal')
    }
  },
  watch: {
    'comment': function(val){
      if(val){
        // console.log(val.length)
        this.checkComment = true

        if(val.length>=100){
          this.checkComment1 = false
        }else{
          this.checkComment1 = true
          this.checkComment = true
        }
      }else{
        this.checkComment = false
        this.checkComment1 = false
      }
    }
  }
}
</script>

<style>
.colorRed{
  color: #eb194c;
  transition: all 0.25s ease-in-out;
}

@keyframes Validate {
  0%{
    transform: translateX(2px);
  }
  20%{
    transform: translateX(6px);
  }
  40%{
    transform: translateX(0);
  }
  60%{
    transform: translateX(-6px);
  }
  80%{
    transform: translateX(-2px);
  }
  100%{
    transform: translateX(0);
  }
}

.reviewT{
  margin-top: 5px;
  font-size: 1rem;
  line-height: 16px;
  letter-spacing: 0.08em;
  color: #eb194c;
  font-weight: 500;
  font-family: 'Caviar';
  animation: Validate 0.25s ease-in-out;
}
</style>