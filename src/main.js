import Vue from 'vue'
import App from './App.vue'
//三级联动组件--全局组件
import TypeNav from '@/components/TypeNav'
Vue.component(TypeNav.name,TypeNav)
//引入路由
import router from '@/router'
//引入仓库
import store from '@/store'
//引入MockServer.js
import '@/mock/mockServe';
import 'swiper/css/swiper.css'
import 'swiper/js/swiper'


import {reqCategoryList} from '@/api/data';
reqCategoryList();

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
