import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import vuetify from './plugins/vuetify'
import { store } from './store'
import apolloProvider from './plugins/apollo'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  store,
  apolloProvider,
  render: h => h(App),
}).$mount('#app')
