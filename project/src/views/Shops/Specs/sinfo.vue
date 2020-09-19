<template>
<!-- 添加按钮 -->
<el-dialog :title="info.isAdd ? '添加规格':'修改规格'"  @close="cancel"  :visible.sync="info.isShow"   width="40%">
    <!-- 加入表单 -->
 <el-form :model="forminfo" ref="form" :rules="rules" label-width="140px">
        <el-form-item label="属性名" prop="specsname">
             <el-input v-model="forminfo.specsname" placeholder="请输入属性名"></el-input>
        </el-form-item>
        <el-form-item label="属性值" prop="username">
            <label v-for="(item,index) in list" :key="index">
                <el-input style="display:inline-block;width:200px;margin-bottom:10px;" v-model="item.value" placeholder="请输入属性值"></el-input>
                <el-button v-if="index==0" type="primary" @click="addAttrs">添加属性</el-button> 
                <el-button v-else type="danger" @click="delAttrs(index)">删除属性</el-button> 
            </label>       
        </el-form-item>
        <el-form-item label="状态">
            <el-switch v-model="forminfo.status" :active-value="1" :inactive-value="2"></el-switch>
        </el-form-item>
        <el-form-item label="">
            <el-button type="primary" @click="submit">提交</el-button>
            <el-button type="warning" @click="reset">重置</el-button>
        </el-form-item>
    </el-form>
</el-dialog>
</template>

<script>
// 导入 请求的方法
import {addSpecs,editSpecs} from "@/request/specs"
import {mapGetters,mapActions} from "vuex"
// 定义一个默认存储的数据格式
let defaultItem = {
    specsname:"",
    attrs:"",
    // 状态 1正常 2禁用
    status:1
}
// 当重置的时候 将空的存储格式赋值给重置
let restItem = {...defaultItem}
export default {
    // 父传子通信
    props:{
        info:{
            type:Object,
            default(){
                return {
                    isAdd:true,
                    isShow:false
                }
            }
        }

    },
 data(){
 return{
     forminfo:{...defaultItem},
    //  验证规则
    rules:{
         specsname:[{required:true,message:"必填！",trigger:'blur'}],
    },
    list:[{value:''}]
 }
 },
 created(){},
 methods:{
     ...mapActions({
         get_specs_list:"specs/get_specs_list"
     }),
     addAttrs(){
         this.list.push({value:''})
     },
     delAttrs(idx){
         this.list.splice(idx,1)
     },
     setinfo(val){
        //  重置时 将数据赋值给默认值
        this.list = val.attrs.map(v=>({
            value:v
        }))
        defaultItem={...val};
        this.forminfo={...val};
     },
     async submit(){
        //  利用every方法来判断条件
         if(!this.list.every(val=>val.value)){
             this.$message.warning("请输入规格值")
             return;
         }
         this.forminfo.attrs = this.list.map(val=>val.value);
         this.forminfo.attrs=this.forminfo.attrs.join(',')
        //  console.log(this.$refs)
        //  表单验证
        this.$refs.form.validate( async valid=>{
            // console.log(11111)
            if(valid){
                let res;
                // 判断 添加 修改
                if(this.info.isAdd){
                    res = await addSpecs(this.forminfo);
                }else{
                    res=await editSpecs(this.forminfo)
                }
                if(res.code==200){
                    this.$message.success(res.msg)
                    this.info.isShow=false;
                    // 重新获取规格列表
                    this.get_specs_list();
                    this.cancel();
                }else{
                    this.$message.error(res.msg)
                }
            }
        }
      
        )
     },
    //  重置
    reset(){
        if(this.info.isAdd){
            this.forminfo={...restItem}
        }else{
            this.setinfo({...defaultItem})
        }
    },
    cancel(){
        this.forminfo={...restItem}
        this.list=[{value:''}]
    }
 },
 components:{}
}

</script>
<style scoped>
</style>