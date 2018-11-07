<template>
  <div class="content">
    <search style="position:fixed;z-index:102;background:#fefefe;"/>
    <ul class="c-nav" style="position:fixed;top:60px;z-index:101;background:#fefefe;">
      <li v-for="(val,index) in navArr" :class="{active:val.bol}" :key="index" @click="active(index)" ><router-link :to="val.path" style="display:inline-block;width:100%;">{{val.name}}</router-link></li>
    </ul>
    <router-view style="position:relative;top:110px"/>
  </div>
</template>

<script>
import Search from '../../components/Search.vue'


export default {
  name: 'Content',
  data () {
    return {
      navArr:[{name:'推荐音乐',path:'/content/music',bol:true},{name:'推荐歌单',path:'/content/songlist',bol:false},{name:'推荐MV',path:'/content/mv',bol:false}]
    }
  },
  methods:{
    active(index){

      for (const key in this.navArr) {
        this.navArr[key].bol = false;
      }

      this.navArr[index].bol = true;
      
    }
  },
  components:{
    Search
  },
  beforeCreate(){
    if(!localStorage.getItem('user')){
      console.log("11111")
      this.$router.push({path:'/login'});
      
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .c-nav{
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
  }
  .c-nav li{
    text-align: center;
    width: 33.3%;
    font-size: 16px;
    height: 50px;
    line-height: 50px;
    box-sizing: border-box;
  }


  .active{
    border-bottom: 3px solid #b6b6b6;
  }

  

</style>
