<template>
  <div class="detial" style="background:#f3f3f3;">
      <div class="song" style="background:#222222;width:100%;padding-bottom:40px;">
          <div class="top" style="padding-top:10px;height:60px;line-height:60px;display:flex;flex-flow:row nowrap;align-items:center;justify-content:center;">
              <img src="../../assets/icon/song.png" alt="" height="20px" width="20px"><span style="font-size:20px;color:#fefefe;margin-left:10px;">歌曲</span>
              <img src="../../assets/icon/back.png" @click="back" height="20px" width="20px" style="position:absolute;left:20px;">
          </div>
          <img :src="picUrl" alt="" style="width:300px;display:block;margin: 0 auto;padding:10px;background:#b6b6b6;border-radius:10px;">
          
      </div>
      <audio controls :src="url | mp3" style="width:90%;margin:10px auto;display:block;"></audio>
      <div class="con" style="padding-left:30px;border-bottom:1px solid #b6b6b6;padding-bottom:20px;">
          <h2>{{song.name}}</h2>
          <ul>
              <li>发行时间：{{song.publishTime | date}}</li>
              <li>歌曲原唱：{{singer.name}}</li>
              <li>作者介绍：{{singer.introduce}}</li>
          </ul>
      </div>
      <div class="talk">
           <h2 style="text-align:center;color:#fefefe;line-height:50px;height:50px;background:#b6b6b6;border-bottom:1px solid #b6b6b6;">评论区</h2>
          <div class="textarea" style="text-align:center;margin-top:20px;">
              <textarea v-model="comment.content" style="width:90%;height:150px;resize:none;outline:none;border:none;border-radius:10px;padding:10px;box-sizing:border-box;"></textarea>
              <button @click="addComment">发表评论</button>
          </div>
          <ul style="height:300px;overflow:auto;">
              <li v-for="(val,index) in talk" :key="index" style="padding: 20px 20px;border-bottom:1px solid #b6b6b6;">
                  <img :src="val.user.avatarUrl" alt="" style="width:30px;height:30px;float:left;border-radius:50%;margin-right:10px;">
                  <h4>用户昵称：<span style="font-size:12px;font-weight:normal;line-height:30px;">{{val.user.nickname}}</span></h4>
                  <p style="color:#929292;margin-top:20px;text-indent:2em;">{{val.content}}</p>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
import user from "../../assets/icon/user.jpg"

export default {
  name: 'HelloWorld',
  data () {
    return {
      song:{},
      url:'',
      picUrl:'',
      singer:{name:'',id:'',introduce:''},
      talk:[],
      comment:{user:{nickname:'新用户',avatarUrl:user},content:''}
    }
  },
  methods:{
      addComment(){
          this.talk.unshift(this.comment);
          this.comment = {user:{nickname:'新用户',avatarUrl:user},content:''}
      },
      back(){
          window.history.go(-1);
      }
  },
  beforeCreate(){
      this.$http.get("https://musicapi.leanapp.cn/song/detail",{params:{ids:this.$route.query.id}}).then(function(res){
          this.song = res.body.songs[0];
          this.url = this.$route.query.id;
          this.picUrl = res.body.songs[0].al.picUrl;
          this.singer.name = res.body.songs[0].ar[0].name;
          this.singer.id = res.body.songs[0].ar[0].id;
      },function(err){
          console.log(err);
      })

        // /comment/music
      this.$http.get("https://musicapi.leanapp.cn/comment/music",{params:{id:this.$route.query.id}}).then(function(res){
          console.log(res);
          this.talk = res.body.comments;
      },function(err){
          console.log(err);
      })
    
  },
  beforeUpdate(){
      this.$http.get('https://musicapi.leanapp.cn/artist/desc',{params:{id:this.singer.id}}).then(function(res){
          this.singer.introduce = res.body.briefDesc;
      },function(err){
          console.log(err);
      })
    let name = localStorage.getItem('user');
    this.comment.user.nickname = name;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    button{
        color:#fefefe;
        background: #f5c02e;
        outline: none;
        border:none;
        width:90%;
        height: 40px;
        border-radius:10px;
        margin-top:10px;
        font-size:16px;
    }
</style>
