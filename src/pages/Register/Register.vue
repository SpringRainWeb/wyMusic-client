<template>
  <div class="login">
    <h1>欢迎进入网易云音乐</h1>
    <div class="input-con">
        <div>
            <input id="user" v-model="user" type="text" placeholder="手机号/邮箱">
        </div>
        <div class="pwd-con">
            <input id="pwd" v-model="password" :type="pwd.type" maxlength="25" placeholder="请输入密码">
            <img id="eye" :src="pwd.img" alt="" width="30px" height="30px" @click="eye">
        </div>
         <div>
            <input id="name" type="text" placeholder="昵称">
        </div>
        <button @click="register">注册</button>
        <div class="detial">
           <p>点击下一步代表你已阅读并同意<span id="use">用户使用协议</span></p>
        </div>
    </div>
    <div class="head">
      <p>注册<router-link to="/login">取消</router-link></p>
    </div>
  </div>
</template>

<script>
import eyeN from "../../assets/icon/eye-n.png";
import eye from "../../assets/icon/eye.png";

export default {
  name: "Login",
  data() {
    return {
      pwd: {
        img: eyeN,
        type: "password",
        img1: eyeN,
        img2: eye,
        type1: "password",
        tpye2: "text"
      },
      user:'',
      password:'',
      nickname:''
    };
  },
  methods: {
    eye() {
      if (this.pwd.img == this.pwd.img1) {
        this.pwd.img = this.pwd.img2;
        this.pwd.type = this.pwd.type2;
      } else {
        this.pwd.img = this.pwd.img1;
        this.pwd.type = this.pwd.type1;
      }
    },
    register() {
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



      
        localStorage.setItem("user", this.user);
        localStorage.setItem("password", this.password);
        this.$message.success({
                message: '注册成功，请重新登录',
                center: true
            })
        setTimeout(()=>{
          this.$router.push({path:'/login'});
        },1000)


      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  color: #b6b6b6;
  font-size: 16px;
}

h1 {
  margin-top: 130px;
  text-align: center;
  font-size: 35px;
  color: #52d468;
}
::-webkit-input-placeholder {
  color: #b6b6b6;
}

.input-con {
  margin-top: 40px;
  text-align: center;
}
input {
  font-size: 16px;
  color: #424242;
  box-sizing: border-box;
  width: 90%;
  height: 50px;
  outline: none;
  border: 1px solid #b6b6b6;
  padding: 0 10px;
}

#user {
  border-bottom: none;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.pwd-con {
  position: relative;
}
#pwd {
  border-bottom: none;
}
#name {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

#eye {
  position: absolute;
  top: 10px;
  right: 10%;
}

button {
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

.head {
  box-sizing: border-box;
  font-size: 20px;
  color: #424242;
  text-align: center;
  width: 100%;
  height: 60px;
  background: #f0f0f0;
  line-height: 60px;
  position: absolute;
  top: 0px;
}
.head a {
  position: absolute;
  font-size: 16px;
  left: 10px;
  color: #424242;
}
</style>
