<template>
  <div class="list">
    <p style="height:30px;text-align:center;border-bottom:1px solid #b6b6b6;position:fixed;top:60px;font-size:18px;width:100%;z-index:100;background:#fefefe;">{{listname}}</p>
    <ul class="c-con" style="position:relative;top:30px;z-index:1">
        <li class="con-d" v-for="(val,index) in showObj" :key="index">
          <img v-lazy="val.al.picUrl" alt="" style="float:left;width:100px;height:120px;margin-right:15px;">
          <h2><router-link :to="{path:'/detial',query:{id:val.id}}">{{val.name}}</router-link></h2>
          <ul class="details" style="margin-top:30px">
            <li>歌手：{{val.ar[0].name}}</li>
            <li>发行时间：{{val.publishTime | date}}</li>
          </ul>
        </li>
      </ul>
  </div>
</template>

<script>


export default {
  name: 'List',
  data () {
    return {
      showObj:{},
      listname:''
    }
  },
  beforeCreate(){
    this.$http.get('http://musicapi.leanapp.cn/top/list',{params:{idx:this.$route.query.idx}}).then(function(res){
      console.log(res);
      this.showObj = res.body.playlist.tracks;
      this.listname = res.body.playlist.name;
    },function(err){
      console.log(err);
    })
  }
 

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .scroller{
    display: block;
    position: static;
  }

  .c-con{
        padding: 10px 0 40px;
  }

  .con-d{
    padding: 10px;
    height: 120px;
    border-bottom: 1px solid #b6b6b6;
    position: relative;
  }

  button{
    width: 70px;
    height: 30px;
    outline: none;
    border: 2px solid #f78787;
    color: #f78787;
    border-radius: 5px;
    background: none;
  }
</style>
