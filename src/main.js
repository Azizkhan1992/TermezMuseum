import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from '@/plugins/axios'
import VueJwtDecode from 'vue-jwt-decode'




import './styles/mainStyles.scss'
import './styles/media.scss'
import './styles/media1.scss'
import Vuelidate from 'vuelidate'

import {i18n} from "@/plugins/i18n"

Vue.use( Vuelidate )
Vue.use(VueJwtDecode)




Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  axios,
  store,
  render: h => h(App)
}).$mount('#app')
