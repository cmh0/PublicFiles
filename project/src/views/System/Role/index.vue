<template>
 <div>
       <el-button type="primary" class="btn el-icon-circle-plus-outline" @click="add">&nbsp;&nbsp;添加角色</el-button>
       <!-- 将组件添加于此 -->
       <!-- 列表组件 -->
       <r-list @edit="edit"></r-list>
       <!-- 信息组件 -->
       <r-info :info="info" ref="dialog"></r-info>
 </div>
</template>

<script>
// 引入组件
import RList from "@/views/System/Role/rlist"
import RInfo from "@/views/System/Role/rinfo"
export default {
 data(){
 return{
    //  组件info变量
     info:{
         isAdd:false,
         isShow:false   
     },
    //  将返回的数据存放于list数组中
    list:[]
 }
 },
 created(){},
 methods:{
    //  当点击添加时触发添加事件
    add(){
        // console.log("qqqqqq")
        this.info.isAdd = this.info.isShow = true;
    },
    // 修改
    edit(val){
        this.info.isAdd=false;
        this.info.isShow=true;
        // 调用组件中的setinfo
        this.$refs.dialog.setinfo(val);
        console.log(val)

    }
 },
 components:{
     RList,RInfo
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