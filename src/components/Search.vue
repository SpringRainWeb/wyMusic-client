<template>
  <div class="search-con" style="width:100%;">
    <div class="search">
      <input type="search" :placeholder="con" v-model="searchcon" @input="search">
    </div>
    <ul v-show="bol" style="height:160px;overflow:auto;">
        <li v-for="(val,index) in result" :key="index" style="font-size:16px;padding-left:25px;height:39px;line-height:39px;border-bottom:1px solid #b6b6b6;overflow:hidden;"><router-link :to="{path:'/detial',query:{id:val.id}}">{{val.name}}</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      con:'音乐/专辑/歌手/歌单',
      searchcon:'',
      result:[],
      bol:false
    }
  },
  methods:{
    search(){
      if (this.searchcon != '' && this.result != []) {
        this.$http.get('https://musicapi.leanapp.cn/search',{params:{keywords:this.searchcon}}).then(function(res){
          console.log(res.body.result.songs);
          this.result = res.body.result.songs;
          this.bol = true;
          if (this.result == undefined) {
            this.bol = false;
          }
        },function(err){
          console.log(err);
        })
      }else{
        this.bol = false;
        this.result = [];
      }
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    .search{
        width: 100%;
        height: 60px;
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
        background: #fefefe;
    }

    input::-webkit-input-placeholder{
        color: #b6b6b6;
    }

    input{
        width: 90%;
        height: 30px;
        border: none;
        border-radius: 5px;
        outline: none;
        color: #b6b6b6;
        background: #f3f3f3 url(../assets/icon/search.png) 10px center no-repeat;
        background-size: 15px 15px; 
        letter-spacing: 0.1rem;
        text-indent: 35px;
    }
</style>
