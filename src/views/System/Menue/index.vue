<template>
 <div>
     <!-- 添加按钮 -->
     <el-button type="primary" @click="add" class="btn el-icon-circle-plus-outline">&nbsp;&nbsp;添加菜单</el-button>
     <!-- 列表组件 -->
     <v-list @edit="edit" ></v-list>
     <!-- 修改组件 -->
     <v-info :info="info" ref="dialog"></v-info>
 </div>
</template>

<script>
// 导入组件
import VList from "@/views/System/Menue/vlist"
import VInfo from "@/views/System/Menue/vinfo"
export default {
 data(){
 return{
    //  当前组件infor变量
     info:{
         isAdd:false,
         isShow:false

     }
 }
 },
 created(){},
 methods:{
    //  添加方法
     add(){
         this.info.isAdd=this.info.isShow=true;
     },
    //  修改方法
    edit(val){
        this.info.isAdd = false;
        this.info.isShow = true;
        // 调用弹框中setinfor方法
        this.$refs.dialog.setinfo(val);


    },
 },
 components:{
     VList,VInfo
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