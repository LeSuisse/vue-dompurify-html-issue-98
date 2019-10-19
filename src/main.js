import Vue from 'vue'
import VueDOMPurifyHTML from 'vue-dompurify-html'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

Vue.use(VueDOMPurifyHTML);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
