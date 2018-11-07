<template>
  <div class="my">
    <div class="head">我的</div>
    <ul class="clearfix">
      <li v-for="(val,index) in song" :key="index">
          <span id="cancel" @click="cancel(index)" v-show="bol">X</span>
          <img :src="val.body.songs[0].al.picUrl" alt="">
          <p>歌名:{{val.body.songs[0].name}}</p>
          <p>歌手:{{val.body.songs[0].ar[0].name}}</p>
          <div>
            <span>价格：{{val.body.price}}元</span>
            <div class="num-body clearfix">
              <button @click="jian(index)" class="sum">-</button>
              <input class="num" type="text" v-model="song[index].body.num">
              <button @click="jia(index)" class="sum">+</button>
            </div>
          </div>
      </li>
    </ul>
    <div class="pricebox clearfix">
        <p class="zongji">商品总价:<span class="price">￥{{zongji}}</span></p>
        <span id="clear"><input type="checkbox" name="" id="" v-model="bol" @click="clear" value="clear">编辑购物车</span>
    </div>
    <button id="continue" @click="continueshopping">继续购物</button><button @click="confirm" id="confirm">确认结算</button>
  </div>
</template>

<script>
export default {
  name: 'My',
  data () {
    return {
      idlist:[],
      song:[],
      zongji:0,
      bol:false
    }
  },
  methods:{
    jian(index){
      if (this.song[index].body.num > 0) {
        this.song[index].body.num --;
      }
      
    },
    jia(index){
      this.song[index].body.num ++;
    },
    confirm(){
      localStorage.removeItem('songlist');
      this.$message.success({
                message: '购买成功',
                center: true
            })
      setTimeout(function(){
        window.location.href = '/'
      },2000)
    },
    clear(){
      if (this.bol == false) {
        this.bol = true
      }
    },
    cancel(index){
      this.song.splice(index,1);
      if (this.song.length == 0) {
          this.$message.error({
                message: '请重新购买歌曲',
                center: true
            })
        setTimeout(function(){
           window.location.href = '/';
        },1000)
      }
    },
    continueshopping(){
      window.location.href = '/';
    }
  },
  beforeCreate(){
    if (localStorage.getItem("songlist")) {
      let songlist = localStorage.getItem("songlist");
      this.idlist = songlist.split(" ");
      console.log(this.idlist);
      for (const key in this.idlist) {
        if (this.idlist.hasOwnProperty(key)) {
          const id = this.idlist[key];
          this.$http.get('http://musicapi.leanapp.cn/song/detail',{params:{ids:id}}).then(function(res){
            console.log(res);
            res.body.price = Math.floor(Math.random()*15+5);
            res.body.num = 1;
            this.song.push(res)
          }).catch(function(err){
            console.log(err);
          })
        }
      }
    }else{
      alert('请购买歌曲');
      this.$router.push({path:'/'});
    }
  },
  mounted(){
     let sum = 0;
    for (let i = 0; i < this.song.length; i++) {
      const song = this.song[i];
      sum += song.body.price*song.body.num;
    }
    this.zongji = sum;
  },
  updated(){
    let sum = 0;
    for (let i = 0; i < this.song.length; i++) {
      const song = this.song[i];
      sum += song.body.price*song.body.num;
    }
    this.zongji = sum;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .head{
    text-align: center;
    color: #fefefe;
    height: 50px;
    background: #01d65a;
    font-size: 18px;
    line-height: 50px;
  }
  ul{
    border-bottom: 1px solid #b9b9b9;
  }
  li{
    height: 80px;
    padding: 10px;
    position: relative;
  }
  li:nth-of-type(even){
    background: #d6d6d6;
  }
  li img{
    float: left;
    margin-right: 20px;
    width: 80px;
    height: 80px;
  }
  .sum{
    height: 22px;
    width: 30px;
    background: #969696;
    color: #fefefe;
    outline: none;
    border: 1px solid #424242;
    float: left;
  }
  .num{
    text-align: center;
    height: 20px;
    width: 30px;
    outline: none;
    border: 1px solid #424242;
    float: left;
    border-left: none;
    border-right: none;
  }
  .zongji{
    margin-top: 30px;
    float: right;
    margin-right: 20px;
    margin-bottom: 20px;
  }
  .price{
    color: #e47916;
    font-weight: bolder;
    font-size: 22px;
  }
  #continue{
    margin-left: 47%;
    height: 35px;
    padding: 0 10px;
    background: #e6e6e6;
    color: #424242;
    outline: none;
    border: none;
  }
  #confirm{
    margin-left: 10px;
    height: 40px;
    padding: 0 40px;
    background: #01d65a;
    color: #fefefe;
    outline: none;
    border: none;
  }

  .pricebox{
    position: relative;
  }
  #clear{
    position: absolute;
    left: 20px;
    bottom: 20px;
    vertical-align: text-bottom;
  }
  #cancel{
    position: absolute;
    right: 5px;
    top: 5px;
    width: 15px;
    height: 15px;
    line-height: 15px;
    text-align: center;
    color: #fefefe;
    background: #ff0000;
    font-weight: bolder;
  }
</style>
