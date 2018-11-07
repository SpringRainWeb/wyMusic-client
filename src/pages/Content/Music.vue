<template>
  <div class="music">
    <ul class="c-con">
        <li class="con-d" v-for="(val,index) in showObj" :key="index">
          <img v-lazy="val.song.album.picUrl" alt="" style="float:left;width:100px;height:120px;margin-right:15px;">
          <h2><router-link :to="{path:'/detial',query:{id:val.id}}">{{val.name}}</router-link></h2>
          <ul class="details" style="margin-top:30px">
            <li>歌手：{{val.song.artists[0].name}}</li>
            <li>专辑名：{{val.song.album.name}}</li>
            <li>出版公司：{{val.song.album.company}}</li>
          </ul>
          <div class="left" style="position:absolute;top:30px;right:15px;text-align:center;">
            <p style="text-align:center;margin-bottom:5px;color:#f78787;">{{val.song.hMusic.playTime | listenNum}}万人听过</p>
            <button @click="buy(val.id)">购买</button>
          </div>
        </li>
      </ul>
  </div>
</template>

<script>


export default {
  name: 'Music',
  data () {
    return {
      showObj:{}
    }
  },
  beforeCreate(){
    this.$http.get('https://musicapi.leanapp.cn/personalized/newsong').then(function(res){
      console.log(res);
      this.showObj = res.body.result;
    },function(err){
      console.log(err);
    })
  },
  methods:{
    buy(id){
      let songlist = localStorage.getItem("songlist");
      if (songlist != null) {
        if (!songlist.match(id)) {
          songlist = songlist += " " + id;
          localStorage.setItem("songlist",songlist);
        }else{
          this.$message.error({
                message: '该歌曲已经购买过了',
                center: true
            })
            return false;
        }
        
      }else{
        songlist = id;
        localStorage.setItem("songlist",songlist);
      }
      
      
    }
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
    overflow: hidden;
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
  button:active{
    color: #fefefe;
    background: #f78787;
  }
</style>
