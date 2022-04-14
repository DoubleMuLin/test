import Vue from 'vue'
import App from './App.vue'
//
import TypeNav from '@/pages/Home/TypeNav'
import router from './router'

Vue.component(TypeNav.name,TypeNav)

import {reqCategoryList} from '@/api/data';
reqCategoryList();

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
