<template>
  <el-row class="login-bg">
    <el-col :span="8" class="login-box">
      <!-- 标题 -->
      <h3>小U商城管理系统</h3>
      <!-- 输入框 -->
      <el-form ref="form" :model="forminfo" :rules="rules">
        <el-form-item prop="username">
          <el-input placeholder="请输入账号" v-model="forminfo.username">
            <template slot="prepend">
              <i class="el-icon-user-solid"></i>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-input placeholder="请输入密码" v-model="forminfo.password">
            <template slot="prepend">
              <i class="el-icon-lock"></i>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="login-btn" type="primary" round @click="submit">立即登录</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
// 调用login方法
import {mapActions} from "vuex"
export default {
  data() {
    return {
      forminfo: {
        username: "yi艺",
        password: "admin888",
      },
      rules:{
        username:[{required:true,message:"必填项",trigger:'blur'}],
        password:[{required:true,message:"必填项",trigger:'blur'}]
      },
    };
  },
  created() {},
  methods: {
    //  登录方法
   ...mapActions({
     login:"user/login"
   }),
   submit(){
     this.$refs.form.validate(valid=>{
       if(valid){
         this.login(this.forminfo)
       }
     })
   }
  },
  components: {},
};
</script>
<style scoped>
.login-bg {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("../assets/img/bg.jpg") no-repeat;
  background-size: 100% 100%;
 
}
.login-box {
  background-color:rgba(255,255,255,.65);
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.3);
  padding: 30px 40px;
  border-radius: 15px;
  border: 1px solid #b1bcbe;
  
}
.login-box h3 {
  line-height: 40px;
  text-align: center;
  margin-bottom: 20px;
}
.login-btn {
  display: block;
  width: 100%;
}
</style>