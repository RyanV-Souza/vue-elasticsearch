import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)

new Vue({
  router,
  render: function (h) { return h(App) },
}).$mount('#app')
