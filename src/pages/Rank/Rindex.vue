<template>
  <div class="Rank">
    <carousel/>
    <ul class="mvlist clearfix">
      <li class="mvbox" v-for="(val,index) in listArr" :key="index">
        <router-link :to="{path:'/rank/list',query:{idx:val.id}}">
          <img :src="val.img" alt="" style="width:100px;height:100px;border-radius:5px;">
          <p>{{val.name}}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import Carousel from '../../components/Carousel.vue'
export default {
  name: 'Rindex',
  data () {
    return {
      listArr:[
        {name:'',img:'',id:6},
        {name:'',img:'',id:2},
        {name:'',img:'',id:5},
        {name:'',img:'',id:7}
      ]
    }
  },
  components:{
    Carousel
  },
  beforeCreate () {
    this.$http.get('https://musicapi.leanapp.cn/top/list',{params:{idx:6}}).then(function(res){
      console.log(res);
      this.listArr[0].name = res.body.playlist.name;
      this.listArr[0].img = res.body.playlist.coverImgUrl;
    },function(err){
      console.log(err);
    })
    this.$http.get('https://musicapi.leanapp.cn/top/list',{params:{idx:2}}).then(function(res){
      console.log(res);
      this.listArr[1].name = res.body.playlist.name;
      this.listArr[1].img = res.body.playlist.coverImgUrl;
    },function(err){
      console.log(err);
    })
    this.$http.get('https://musicapi.leanapp.cn/top/list',{params:{idx:5}}).then(function(res){
      console.log(res);
      this.listArr[2].name = res.body.playlist.name;
      this.listArr[2].img = res.body.playlist.coverImgUrl;
    },function(err){
      console.log(err);
    })
    this.$http.get('https://musicapi.leanapp.cn/top/list',{params:{idx:7}}).then(function(res){
      console.log(res);
      this.listArr[3].name = res.body.playlist.name;
      this.listArr[3].img = res.body.playlist.coverImgUrl;
    },function(err){
      console.log(err);
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mvlist{
    margin: 50px auto 0;
    width: 80%;
    display: flex;
    flex-flow: row wrap;
    text-align: center;
    justify-content: center;
  }
  .mvbox{
    padding: 5px 10px;
  }
</style>
