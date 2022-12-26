<template>
  <div class="subscribe mt-36">
    <div class="subscriberContainer">

      <div
      v-if="customAlertOn === true"
      class="alert"
      :class="alertClass"
    >
      <p class="colorWhite">{{respMessage?.[$i18n.locale]}}</p>
    </div>
      <div class="wr-100 mb-24">
        <div class="w-50">
          <label class="white mb-12" for="">{{$t("subscribeMuseum")}}</label>

          <div class="wr-100">
            
            <input
              v-model="usersEmail"
              class="w-4"
              type="email"
              :placeholder="$t('subscribePlaceholder')"
            >
            <button class="white-ghost w-2 ml-24" @click="sendMess"><span>{{$t("subscribe")}}</span></button>
          </div>
        </div>

        <div class="w-50 align-r">
          <label class="white mb-12" for="">{{$t("subsSocialNet")}}</label>

          <div class="wr-100 justify-r gap-48">
            
            <a
              class="social"
              v-for="social, i in socialNetworks"
              :key="i"
              :href="social?.link"
              target="_blanc"
            >
              <img class="socNet" :src="require(`@/assets/icons/${social?.name.toLowerCase()+'.svg'}`)" alt="">
            </a>
          
          </div>
        </div>
      </div>
      <p v-if="checkerTitle" class="error-title">Iltimos elektron manzilni to'g'ri kiriting</p>

      <p class="subs-text">{{$t("subsInfo")}}</p>
    
    </div>
  </div>
</template>

<script>
export default {
  name: 'subscriberComponent',

  data() {
    return {
      usersEmail: '',
      checkerTitle: false,
      customAlertOn: false,
      alertClass: '',
      respMessage: '',
      // socialNetworks: [
      //   {id: 1, network: 'facebook', link: 'https://www.facebook.com/termizarxeologiyamuzeyi'},
      //   {id: 2, network: 'youtube', link: 'https://www.youtube.com/channel/UCz7I4TVUUhgOpsldM28WtPA'},
      //   {id: 3, network: 'instagram', link: 'https://www.instagram.com/termez_archaeologycal_museum/?hl=ru'},
      //   {id: 4, network: 'telegram', link: 'https://t.me/Arxeologiya_muzeyi'},
      // ],
      socialNetworks: []
    }
  },
  mounted(){
    this.getSocial()
  },
  methods: {
    async sendMess(){
      
      if(this.usersEmail !== '' && this.checker(this.usersEmail) == false){
        const userInfo = {
          email: this.usersEmail,
          accept_lang: this.languageChecker()
        }
        await this.$api.post('/press/news/subscribe', userInfo)
        .then(resp => {
          let message = resp.data.message
          // console.log(2222, resp)
          if(message == 'succesful added'){
            // const subsc = message?.[this.$i18n.locale]
            // console.log(message)
            this.respMessage = {
              language_uzlatin: 'Siz ro\'yxatdan muvaffaqiyatli o\'tdingiz',
              language_ru: 'Вы успешно зарегистрировались',
              language_uzCyrillic: 'Сиз рўйхатдан муваффақиятли ўтдингиз',
              language_en: 'You have successfully registered'
            }
            this.customAlertOn = true
            this.alertClass = 'success'
            this.usersEmail = ''
            this.switchOffAlert()
          }
          // console.log(resp.data.message)
        }).catch(err => {
          if(err.response.data.message == 'this email was already subscribed'){
            this.respMessage = {
              language_uzlatin: 'Siz avval ro\'yxatdan o\'tgansiz',
              language_uzCyrillic: 'Сиз аввал рўйхатдан ўтгансиз',
              language_en: 'You have already registered',
              language_ru: 'Вы уже зарегистрированы'
            }
            this.customAlertOn = true
            this.alertClass = 'warning'
            this.usersEmail = ''
            this.switchOffAlert()
          }
        })
      }
    },
    async getSocial(){
      await this.$api.get('/contact/site')
      .then(resp => {
        this.socialNetworks = resp.data.result.socialNetworks.links
        // console.log(this.socialNetworks)
      }).catch(err => {console.log(err)})
    },
    checker: function(val){
      let temp = String(val).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
      // console.log(temp)
      if(temp == null){
        this.checkerTitle = true
        return true
      }else {
        this.checkerTitle = false
        return false
      }
    },
    languageChecker() {
      if(this.$i18n.locale == 'uz') {
        return 'language_uzlatin'
      }
      else if(this.$i18n.locale == 'uc') {
        return 'language_uzCyrillic'
      }
      else if(this.$i18n.locale == 'ru') {
        return 'language_ru'
      }
      else if(this.$i18n.locale == 'en') {
        return 'language_en'
      }
    },
    switchOffAlert() {
      setTimeout(() => {
        this.customAlertOn = false
      }, 8000);
    },
  }
}
</script>

<style lang="scss">
@keyframes Validate {
  0%{
    margin-left: 6px;
  }
  20%{
    margin-left: -4px;
  }
  40%{
    margin-left: 4px;
  }
  60%{
    margin-left: -2px;
  }
  80%{
    margin-left: 2px;
  }
  100%{
    margin-left: 0;
  }
}

p.error-title{
  color: #fff;
  margin: -10px 0 10px 0;
  font-size: 1.14rem;
  line-height: 20px;
  letter-spacing: 0.04em;
  animation: Validate 0.25s ease-in;
}



.alert {
  z-index: 300;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  left: calc(50vw - 240px);
  width: 480px;
  height: auto;
  padding: 24px;
  box-sizing: border-box;
  border-radius: 10px;
  opacity: 0.98;
  box-shadow: 0px 6px 16px 2px rgba(0, 0, 0, 0.36);
  animation: enterToActive 10000ms ease-in-out;

  p {
    letter-spacing: 0.12rem;
  }

  &.success {
    background-color: #0FAA3A;
  }

  &.warning {
    background-color: #F1E92A;
  }

  &.danger {
    background-color: #EB194C;
  }
}

@keyframes enterToActive {
  0% {
    top: -96px;
  }
  5% {
    top: 24px;
  }
  95% {
    top: 24px;
  }
  100% {
    top: -96px;
  }
}
</style>