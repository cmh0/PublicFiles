<template>
 <div>
       <el-button class="btn" type="primary" @click="add">添加管理员</el-button>
     <!-- 列表组件 -->
     <u-list @edit="edit"></u-list>
     <!-- 添加/修改组件 -->
     <u-info :info="info" ref="dialog"></u-info>

 </div>
</template>

<script>
//引入组件
import UInfo from "./uinfo"
import UList from "./ulist"
export default {
 data(){
 return{
     info:{
         isAdd:false,
         isShow:false
         
     },
    //存储数据
    list:[]
 }
 },
 created(){},
 methods:{
 add(){
        this.info.isAdd =  this.info.isShow = true
      },
      edit(val){
        this.info.isAdd = false;
        this.info.isShow = true;
        // 调用弹框组件的setinfo方法！
        this.$refs.dialog.setinfo(val);
      }
    },
 components:{
     UInfo,UList
 }
}

</script>
<style scoped>
.btn{
    width:160px;
    height: 40px;
    background: #f75539;
    border: 1px solid  #f75539;
    color:#ffffff;
    border-radius: 4px;
    margin-bottom: 20px;
}
</style>