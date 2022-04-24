import Vue from 'vue'
import App from './App.vue'
import {Button} from 'element-ui'
//三级联动组件--全局组件
import TypeNav from '@/components/TypeNav'
//分页器
import Pagination from '@/components/Pagination'
//轮播图
import Carsousel from "@/components/Carousel";
Vue.component(TypeNav.name,TypeNav)
Vue.component(Pagination.name,Pagination)
Vue.component(Carsousel.name, Carsousel);
Vue.component(Button.name,Button)
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
//引入自定义插件
import myPlugins from '@/plugins/myPlugins';
Vue.use(myPlugins,{
  name:'upper'
});
//引入表单校验插件
import "@/plugins/validate"
import * as API from "@/api/data"
// console.log(API)
new Vue({
  render: h => h(App),
  //全局事件总线
  beforeCreate(){
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API;
  },
  router,
  store,
}).$mount('#app')
