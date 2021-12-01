import axios from "axios";
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import {routes} from './router';
import {store} from './store/store';
import vuetify from './plugins/vuetify'



axios.defaults.baseURL='https://proyecto-brp.herokuapp.com/api'

Vue.config.productionTip = true 
Vue.use(VueRouter)

const router = new VueRouter({
  mode: "history",
  routes
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App) 
}).$mount('#app')
