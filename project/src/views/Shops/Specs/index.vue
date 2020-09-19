<template>
 <div>
     <el-button type="primary" @click="add" class="btn">添加规格 </el-button>
<!-- 列表组件 -->
 <s-list @edit="edit"></s-list>
 <!-- 添加 修改组件 -->
 <s-info :info="info" ref="dialog"></s-info>
 </div>

</template>
<script>
// 导入组件
import SInfo from "@/views/Shops/Specs/sinfo"
import SList from "@/views/Shops/Specs/slist"
export default {
 data(){
 return{
     info:{
        //  此组件中的info变量
        isAdd:false,
        isShow:false
     },
     list:[]
 }
 },
 created(){},
 methods:{
     add(){
         this.info.isAdd=this.info.isShow=true;
     },
     edit(val){
         this.info.isAdd=false;
         this.info.isShow=true;
        //  调用弹框组件
        this.$refs.dialog.setinfo(val);
     }
 },
 components:{
     SInfo,SList
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
}
</style>