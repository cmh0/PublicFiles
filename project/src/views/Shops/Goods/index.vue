<template>
 <div>
    <el-button type="primary" @click="add" class="btn">添加商品</el-button>
    <!-- 列表组件 -->
     <g-list @edit="edit"></g-list>
     <!-- 信息组件 -->
     <g-info :info="info" ref="dialog"></g-info>
 </div>
</template>

<script>
// 引入组件
import GList from "./glist"
import GInfo from "./ginfo"
export default {
 data(){
 return{
     info:{
         isAdd:false,
         isShow:false
     }
 }
 },
 created(){},
 methods:{
     add(){
         this.info.isAdd=this.info.isShow = true
     },
     edit(val){
         this.info.isAdd=false;
         this.info.isShow=true;
        //  此时在此需调用弹框中的方法
        this.$refs.dialog.setinfo(val);
     }
 },
 components:{
     GInfo,GList
 }
}

</script>
<style scoped>
.btn{
    margin-bottom:20px;
    text-align:center;
    width:160px;
    height: 40px;
    background: #f75539;
    border: 1px solid  #f75539;
    color:#ffffff;
    border-radius: 4px;
}
</style>