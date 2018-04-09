import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible'
import $ from 'jquery'
import vuei18n from 'vue-i18n'

Vue.config.productionTip = false

Vue.use(vuei18n)

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
