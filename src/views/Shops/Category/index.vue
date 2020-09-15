<template>
  <div>
     <el-button class="btn" type="primary" @click="add">添加分类</el-button>
     <!-- 列表组件 -->
     <v-list @edit="edit"></v-list>
     <!-- 添加/修改组件 -->
     <v-info :info="info" ref="dialog"></v-info>
  </div>
</template>
<script>
import VList from "./vlist"
import VInfo from "./vinfo"
export default {
    data(){
        return{
          info:{ // 这是组件的info变量！
            isAdd:false,
            isShow:false
          }
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