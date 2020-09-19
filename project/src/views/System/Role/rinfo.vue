<template>
  <el-dialog
    :title="info.isAdd ? '添加角色':'修改角色'"
    :visible.sync="info.isShow"
    @close="cancel"
    width="30%"
    center
  >
    <!-- 此时需要添加表单 -->
    <el-form :model="forminfo" :rules="rules" ref="form" label-width="100px" class="demo-ruleForm">
      <el-form-item label="角色名称" prop="rolename">
        <el-input v-model="forminfo.rolename" placeholder="请输入角色名称"></el-input>
      </el-form-item>
      <el-form-item label="角色权限">
        <!-- 表格中需要添加的数据 -->

        <div class="block">
          <!-- 利用树形控件 -->
          <el-tree
            :data="menulist"
            show-checkbox
            node-key="id"
            ref="tree"
            default-expand-all
            :expand-on-click-node="false"
            :props="{children:'children',label:'title'}"
            :check-strictly="checkStrictly"
          > </el-tree>
        </div>
      </el-form-item>
      <el-form-item label="角色状态">
           <el-switch v-model="forminfo.status" :active-value="1" :inactive-value="2"></el-switch>
      </el-form-item>

      <el-form-item label="">
        <el-button type="primary" @click="submit">立即添加</el-button>
        <el-button @click="reset" type="warning">重置</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
// 导入
import { addRole, editRole } from "@/request/role";
// 将vuex中的循环方法
import { mapGetters, mapActions } from "vuex";

// 将数据存放于一个对象中  以便于后续的使用  重置
let defaultItem = {
  rolename: "",
  menus: "",
  status: 1, //状态 1正常 2 禁用
};
// 重置数据利用拷贝
let resetItem = { ...defaultItem };
export default {
  // 利用父子通信传递数据
  props: {
    info: {
      type: Object,
      default() {
        return {
          isAdd: true,
          isShow: false,
        };
      },
    },
  },
  data() {
    return {
      forminfo: { ...defaultItem },
      // 验证规则
      rules: {
        // 添加角色名称是必填项
        rolename: [{ required: true, message: "必填项", trigger: "blur" }],
      },
      // 是否关联父子
      checkStrictly: false,
    };
  },
  computed: {
    //  利用mapGetters获取数据
    ...mapGetters({
      menulist: "menue/menulist",
    }),
  },
  mounted() {
    if (!this.menulist.length) {
      this.get_menu_list();
    }
  },
  created() {},
  methods: {
    ...mapActions({
      get_menu_list: "menue/get_menu_list",
      get_role_list: "role/get_role_list",
    }),
    setinfo(val) {
      console.log(11111)
      //  将数据赋值给默认的defaultItem
      // 此时需要将权限节点，回显至树中
      let idarr = val.menus.split(",");
      
      if (idarr[0]) {
        // 父传子不互相关联
        this.checkStrictly = true;
        // 此时数据并不会立刻渲染于页面之上，所以需要调用渲染完成后在进行下一步的操作的指令
        this.$nextTick(() => {
          this.$refs.tree.setCheckedKeys(idarr);
          // 此时在进行父子关联
          this.checkStrictly = false;
        });
      }
      defaultItem = { ...val };
      this.forminfo={...val};
      this.checkStrictly = false;
    },
    //  提交
    async submit() {
       
       let idarr = this.$refs.tree.getCheckedKeys().concat(this.$refs.tree.getHalfCheckedKeys());

      if (idarr.length) {
        this.forminfo.menus = idarr;
      } else {
        this.$message.warning("请选择权限");
        // 必须要有返回值
        return;
      }
      // 表单验证
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          // 如果验证通过！
          let res;
          if (this.info.isAdd) {
            // 添加还是修改！
            res = await addRole(this.forminfo);
          } else {
            res = await editRole(this.forminfo);
          }
          if (res.code == 200) {
            this.$message.success(res.msg);
            this.info.isShow = false;
            this.get_role_list(); // 重新获取角色列表！
            this.cancel();
          } else {
            this.$message.error(res.msg);
          }
        }
      });
  
    },
    // 重置
    reset() {
      if (this.info.isAdd) {
        this.forminfo = { ...resetItem };
        this.$refs.tree.setCheckedKeys([]);
      } else {
        // 否则重置
        this.setinfo({...defaultItem});
      }
    },
    // 关闭
    cancel() {
      this.$refs.tree.setCheckedKeys([]);
      this.forminfo = { ...resetItem };
    }
  },
  components: {},
};
</script>
<style scoped>
</style>