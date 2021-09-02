import Vue from 'vue'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify'

import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'


Vue.config.productionTip = false;

Vue.component( ElementUI.Select.name, ElementUI.Select );


Vue.use(ElementUI, { locale });

new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
