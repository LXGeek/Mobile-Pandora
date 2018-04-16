import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible'
import $ from 'jquery'
import axios from 'axios'
import Vuex from 'vuex';
import vuexI18n from 'vuex-i18n';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        i18n: vuexI18n.store
    }
});

Vue.use(vuexI18n.plugin, store);

const translationsEn = {
    "content": "This is some {type} content"
};

Vue.i18n.add('en', translationsEn);

Vue.i18n.set('en');


Vue.prototype.axios = axios
Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
