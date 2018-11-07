<template>
  <div class="music">
     <ul class="c-con">
      <li  class="con-d" v-for="(val,index) in showObj" :key="index">
        <img :src="val.picUrl" alt="" style="float:left;width:100px;height:120px;margin-right:15px;">
        <h2 style="margin-top:5px;">{{val.name}}</h2>
        <ul class="details" style="margin-top:20px">
          <li>推荐理由：{{val.copywriter}}</li>
          <li>播放次数：{{val.playCount | int | listenNum2}}万次</li>
        </ul>
        
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
    this.$http.get('https://musicapi.leanapp.cn/personalized').then(function(res){
      console.log(res);
      this.showObj = res.body.result;
    },function(err){
      console.log(err);
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
  h2{
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
  }
  li{
      overflow: hidden;
  }
</style>
