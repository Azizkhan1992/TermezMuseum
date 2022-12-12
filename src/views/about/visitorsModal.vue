<template>
    <div class="w-100 visitM">
        <div class="visitI">
            <div class="visLogo">
                <img src="@/assets/termezMuseumLogo.svg" alt="">
                <h4>
            {{ logotxt1?.[$i18n.locale] }} <br />
            <span> {{ logotxt2?.[$i18n.locale] }}</span> <br />
            {{ logotxt3?.[$i18n.locale] }}
          </h4>
            </div>
            <div class="visReg">
                <p>{{$t('singlGoogleAuth')}}</p>
                <div class="googleButton" id="googleAuth">
                    
                </div>
            </div>
            <div class="visBtns">
                <button @click="back" class="visBtnBack">{{$t('goBack')}}</button>
                <button @click="goHome" class="visBtnHome">{{$t('mainP')}}</button>
            </div>
        </div>
        <img class="visMImg" src="@/assets/temporary/img007.png" alt="">

        </div>
</template>
<script>
// import Icons from '@/components/icons.vue'
import VueJwtDecode from "vue-jwt-decode";
export default {
    name: 'visit-modal',
    components: {},
    data(){
        return{
            logotxt1: {
        language_uzlatin: "O'zbekiston",
        language_ru: "Государственный",
        language_uzCyrillic: "Давлат",
        language_en: "State",
      },
      logotxt2: {
        language_uzlatin: "Davlat san'at",
        language_ru: "Музей Искусств",
        language_uzCyrillic: "Санъат музейи",
        language_en: "Museum of Art",
      },
      logotxt3: {
        language_uzlatin: "muzeyi",
        language_ru: "Узбекистана",
        language_uzCyrillic: "Ўзбекистон",
        language_en: "Uzbekistan",
      },
        }
    },

    mounted(){
            this.secondaryAuth()
    },
    methods:{
        sendM(){
            this.$emit('sendM')
        },
        goHome(){
            this.$router.push({path: '/'})
        },

        handleCredentialResponse(response) {
      // console.log(VueJwtDecode.decode(response.credential))
      this.$store.state.userInfo = VueJwtDecode.decode(response.credential);
      window.sessionStorage.userInfo = JSON.stringify(
        VueJwtDecode.decode(response.credential)
      );
      this.$router.go(-1)
      // console.log(this.$store.state.userInfo);
    },
        secondaryAuth(){
      let _t = this;

      // eslint-disable-next-line
      google.accounts.id.initialize({
        client_id:
          "436134388058-7vkpprt94tdibc1vajqhc31lqeb50f9g.apps.googleusercontent.com",
        callback: _t.handleCredentialResponse,
        redirect_uri: "http://localhost:8080",
        scope: ["profile", "email"],
        ux_mode: "popup",
        context: "signin",
      });

      // eslint-disable-next-line
      google.accounts.id.renderButton(
        document.getElementById("googleAuth"),
        { theme: "outline", type: 'icon', size: "large" } // customization attributes
      );
    },

    back(){
        this.$router.go(-1)
    }
    }
}
</script>