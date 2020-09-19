<template>
 <div>
     <el-dialog
  title="个人信息"
  :visible.sync="info.isShow"
  width="50%">
  <!-- <el-table
    :data="forminfo"
    stripe
    style="width: 100%">
    <el-table-column
      prop="username"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="role"
      label="角色"
      width="180">
    </el-table-column>
    <el-table-column
      prop="status"
      label="状态">
    </el-table-column>
  </el-table> -->
  <span slot="footer" class="dialog-footer">
    
    <el-button type="primary" @click="show">确 定</el-button>
  </span>
</el-dialog>
 </div>
</template>

<script>
// 导入
import { mapGetters, mapActions } from "vuex";
let defaultItem={
    username:"",
    role:"",
    status:1,
}
export default {
    props:{
        info:{
            type:Object,
            default(){
                return{
                    isShow:false
                }
            }
        }
    },
 data(){
 return{
     forminfo:{...defaultItem}
 }
 },
 created(){},
 computed: {
    ...mapGetters({
      menulist: "menue/menulist",
      userlist: "user/userlist",
    }),
  },
 methods:{
    //  关闭
    show(){
        this.$emit('con')
    }
   
 },
 components:{}
}

</script>
<style scoped>
</style>