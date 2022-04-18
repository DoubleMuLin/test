import Vue from 'vue'
import App from './App.vue'
//三级联动组件--全局组件
import TypeNav from '@/components/TypeNav'
//分页器
import Pagination from '@/components/Pagination'
//轮播图
import Carsousel from "@/components/Carousel";
Vue.component(TypeNav.name,TypeNav)
Vue.component(Pagination.name,Pagination)
Vue.component(Carsousel.name, Carsousel);

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
  //全局事件总线
  beforeCreate(){
    Vue.prototype.$bus = this;
  },

  router,
  store,
}).$mount('#app')
