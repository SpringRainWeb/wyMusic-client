// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

//引入vue-scroller
import VueScroller from 'vue-scroller'
Vue.use(VueScroller)

//引入懒加载
import VueLazyload from 'vue-lazyload' 
Vue.use(VueLazyload, {
  error: 'static/error.png',//这个是请求失败后显示的图片
  loading: 'static/loading.gif',//这个是加载的loading过渡效果
  try: 2 // 这个是加载图片数量
  })

import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import Filter from './assets/filter.js'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);






Vue.use(VueResource)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
