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
  }
}
</script>

<style>
/* 自定义进度条颜色 */
 #nprogress .bar {
     background: #12c56c !important; 
  }

</style>
