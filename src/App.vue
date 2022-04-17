<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from "./components/Header"
import Footer from "./components/Footer"

export default {
  name: 'app',
  components: {
    Header,
    Footer
  },
  mounted(){
        //派发acition
    this.$store.dispatch("categoryList");
  }
}
</script>

<style>
/* 自定义进度条颜色 */
 #nprogress .bar {
     background: #12c56c !important; 
  }
#nprogress .spinner-icon{
  border-top-color: #12c56c!important;
  border-left-color: #12c56c!important;
}
</style>
