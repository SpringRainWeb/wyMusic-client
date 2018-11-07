<template>
  <div class="navbottom">
    <ul>
        <!-- <li v-for="(val,index) in navarr" :key="index" @click="select(index)">
            <router-link :to="val.address" style="display:inline-block;width:100%;">
                <img :src="val.icon" alt="没有图片" width="20px" height="20px">
                <p :class="{ selected: val.selected}">{{val.name}}</p>
            </router-link>
        </li> -->

        <li>
            <router-link to="/content" :class="{on:$route.path == '/content' | $route.path == '/content/music' | $route.path == '/content/songlist' | $route.path == '/content/mv'}">
            <span class="guide-item" >
                <i class="iconfont icon-ziyuanldpi"></i>
            </span>
            <span>推荐</span>
            </router-link>
        </li>
        <li>
             <router-link to="/rank" :class="{on:$route.path == '/rank/index' | this.$route.path == '/rank/list'}">
            <span class="guide-item" >
                <i class="iconfont icon-ziyuanldpi1"></i>
            </span>
            <span>音乐</span>
            </router-link>
        </li>
        <li>
             <router-link to="/my" :class="{on:$route.path == '/my'}">
            <span class="guide-item">
                <i class="iconfont icon-my"></i>
            </span>
            <span>我的</span>
            </router-link>
        </li>

    </ul>
  </div>
</template>

<script>

export default {
  name: 'NavBottom',
  data () {
    return {
        
    }
  },
  methods:{
      
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .navbottom{
        width: 100%;
    }

    ul{
        width: 100%;
        padding-top: 10px;
        padding-bottom: 3px;
        border-top: 1px solid #b6b6b6;
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        background: #fefefe;
    }
    li{
        width: 30%;
        text-align: center;
       
    }
    a{
         color: gainsboro;
    }
    .guide-item{
        display: flex;
        flex-direction: column;
    }
    .iconfont{
        font-size: 22px;
    }
    .on{
        color: #424242;
        font-weight: bolder;
    }
</style>
