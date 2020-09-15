<template>
<el-container class="page">
  <el-aside :width="iscollapse ? '64px':'220px'" style="background-color: #1c1f26;" class="page-nave">
      <!-- 侧边栏 使用组件 -->
      <Left/>
      </el-aside>
  <el-container class="page-content">
      <!-- 头部  使用组件-->
    <el-header class="page-header">
        <Top/>
        </el-header>
    <el-main height="" class="page-main">
        <!-- 内容区域 -->
        <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
// 导入
import Left from "@/views/Layout/compontents/Left"
import Top from "@/views/Layout/compontents/Top"
import {mapState} from "vuex"
export default {
 data(){
 return{}
 },
 created(){},
//  计算属性
computed:{
    ...mapState(['iscollapse'])
},
 methods:{},
 components:{
     Left,Top
 }
}

</script>
<style scoped>
.page{
    width: 100vw;
    height: 100vh;
}
.page-nav{
    height: 100%;
    background-color: #1c1f26;
    
}
.el-aside .page-nave{
    background-color:black;
}
.page-content{
    height: 100%;
    background-color: #f7f7f7;
}
.page-header{
    background-color: #fff;
    box-shadow:  0 0 4px 0 rgba(0,0,0,.3);
}

</style>