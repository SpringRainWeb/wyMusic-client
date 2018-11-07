<template>
  <div id="app">
    <router-view/>
    <NavBottom class="navbottom" v-show="$route.path != '/login' && $route.path != '/register' "/>
  </div>
</template>

<script>
import NavBottom from './components/NavBottom.vue'


export default {
  name: 'App',
  components:{
    NavBottom
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    font-family: '微软雅黑'；

  }
  body{
    font-size: 12px;
  }
  a{
    color: #424242;
    text-decoration: none;
  }
  ul{
    list-style: none;
  }
  .clearfix::after{
    content: '';
    display: block;
    clear: both;
  }

  .navbottom{
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 200;
  }


</style>
