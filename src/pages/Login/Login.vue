<template>
  <div class="login">
    <h1>欢迎进入网易云音乐</h1>
    <div class="input-con">
        <div>
            <input id="user" type="text" placeholder="手机号/邮箱" v-model="user">
        </div>
        <div class="pwd-con">
            <input id="pwd" :type="pwd.type" maxlength="25" placeholder="请输入密码" v-model="password">
            <img id="eye" :src="pwd.img" alt="" width="30px" height="30px" @click="eye">
        </div>
        <button @click="login">登录</button>
        <div class="register">
            <router-link to="/register" id="register">注册网易</router-link><span> | </span>
            <router-link to="">忘记密码</router-link>
        </div>
        <div class="foot">
            <span id="weibo">微博登录</span> | <span id="wechat">微信登录</span>
        </div>
    </div>
  </div>
</template>

<script>
import eyeN from "../../assets/icon/eye-n.png"
import eye from "../../assets/icon/eye.png"

export default {
  name: 'Login',
  data () {
    return {
      pwd:{
          img:eyeN,
          type:'password',
          img1:eyeN,
          img2:eye,
          type1:'password',
          tpye2:'text'
      },
      user:'',
      password:''
    }
  },
  methods:{
      eye(){
          if (this.pwd.img == this.pwd.img1) {
              this.pwd.img = this.pwd.img2;
              this.pwd.type = this.pwd.type2;
          }else{
              this.pwd.img = this.pwd.img1;
              this.pwd.type = this.pwd.type1;
          }
      },
      login() {
        if (this.user == '') {
            this.$message.error({
                message: '账号不能为空',
                center: true
            })
            return false;
        }
        let reg = /^\d+$/g;
        if(reg.test(this.user)){
            if (this.user.length != 11) {
                this.$message.error({
                message: '请输入正确手机号',
                center: true
            })
            return false;
            }
            
        }else if(!this.user.match('@')) {
            
            this.$message.error({
                message: '请输入正确邮箱号',
                center: true
            })
            return false;
        }
        
        
        if (this.password == '') {
            this.$message.error({
                    message: '密码不能为空',
                    center: true
            })
            return false;
        }

        if (this.password.length < 6 || this.password.length > 12) {
            this.$message.error({
                message: '密码长度6~12位',
                center: true
            })
            return false;
        }



        let username = localStorage.getItem("user");
        let pwd = localStorage.getItem("password");
        if (this.user != username) {
            this.$message.error({
                message: '没有该用户,请点击注册按钮',
                center: true
            })
            return false;
        }

        if (this.password != pwd) {
            this.$message.error({
                message: '密码输入有误',
                center: true
            })
            return false;
        }
        if (this.user == username && this.password == pwd) {
            window.location.href = '/';
        }
        // localStorage.setItem("user", this.user);
        // localStorage.setItem("password", this.password);



      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    .login{
        color: #b6b6b6;
        font-size: 16px;
    }

    h1{
       margin-top: 130px;
       text-align:center;
       font-size:35px;
       color: #52d468;
    }
    ::-webkit-input-placeholder{
        color: #b6b6b6;
    }

   .input-con{
       margin-top: 40px;
       text-align: center;
   }
    input{
        font-size: 16px;
        color: #424242;
        box-sizing: border-box;
        width: 90%;
        height: 50px;
        outline: none;
        border: 1px solid #b6b6b6;
        padding: 0 10px;
    }

    #user{
        border-bottom: none;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }
    .pwd-con{
        position: relative;
    }
    #pwd{
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
    }

    #eye{
        position: absolute;
        top: 10px;
        right: 10%;
    }

   button{
       width: 90%;
       height: 50px;
       background: #52d468;
       border: none;
       color: #fefefe;
       letter-spacing: 0.2rem;
       font-size: 18px;
       outline: none;
       border-radius: 5px;
       margin: 10px 0;
   }

   .register a{
       font-size: 16px;
       color: #b6b6b6;
   }
   #register{
       color:#52d468;
   }

    .foot{
        width: 100%;
        text-align: center;
        position: absolute;
        bottom: 10px;
    }
    #weibo{
        padding-left: 25px;
        display: inline-block;
        background: url(../../assets/icon/weibo.png) no-repeat left center;
        background-size: 20px;
    }
    #wechat{
        padding-right: 25px;
        display: inline-block;
        background: url(../../assets/icon/wechat.png) no-repeat right center;
        background-size: 20px;
    }
</style>
