<template>
  <div class="header">
    <!-- 头部左侧 -->
    <div class="lt">
      <!-- 展开收起按钮 -->
      <el-button
        v-if="iscollapse"
        type="primary"
        @click="TOGGLE"
        size="small"
        class="toggle-btn"
        icon="el-icon-s-unfold"
      ></el-button>
      <el-button
        v-else
        type="primary"
        size="small"
        @click="TOGGLE"
        class="toggle-btn"
        icon="el-icon-s-fold"
      ></el-button>

      <!-- 面包屑导航 -->
      <el-breadcrumb separator="/" class="mbx">
        <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>{{$route.meta.title}}</el-breadcrumb-item>
      </el-breadcrumb>
      <!-- 返回图标 -->
      <el-button
        size="small"
        v-if="$route.path!='/index'"
        @click="$router.back()"
        icon="el-icon-back"
        circle
      ></el-button>
    </div>
    <!-- 右侧下拉菜单 -->
    <div>
      <el-dropdown :hide-on-click="false">
        <span class="el-dropdown-link">
          欢迎{{username}}登陆！
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="togglescreenfull">
            <i class="el-icon-full-screen"></i>
            {{isfull ? '退出全屏' : "全屏显示"}}
          </el-dropdown-item>
          <!-- 个人信息 -->
          <el-dropdown-item>
            <el-button type="text" @click="aaa">
              <i class="el-icon-user"></i>个人信息
            </el-button>
          </el-dropdown-item>
          <!-- 退出 -->
          <el-dropdown-item @click.native="QUIT">
            <i class="el-icon-switch-button"></i> 退出登陆
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
        <!-- 个人信息组件 -->
    <p-info :info="info" ref="dialog" @con="show"></p-info>
    </div>
    
  </div>
</template>

<script>
// 导入
// 导入个人信息组件
import PInfo from "@/views/Layout/compontents/pinfo";
import { mapState, mapMutations, mapGetters } from "vuex";
// 引入全屏插件
import screenfull from "screenfull";
export default {
  data() {
    return {
      isfull: false,
      // 当前组件info变量
      info: {
        isShow: false,
      },
    };
  },
  created() {},
  computed: {
    ...mapState(["iscollapse"]),
    ...mapGetters({
      username: "user/username",
      // INFOR:"user/INFOR"
    }),
  },
  methods: {
    show(){
      this.info.isShow=false
    },
    ...mapMutations({
      TOGGLE: "TOGGLE",
      QUIT: "user/QUIT",
    }),
    aaa() {
      this.info.isShow = !this.info.isShow;
    },
    mes(val) {
      this.info.isShow = true;
    },
    // cancel(){
    //   return 0;
    // },
    // 全屏操作提示
    togglescreenfull() {
      if (!screenfull.isEnabled) {
        this.$message.warning("您的浏览器不支持全屏");
        return false;
      }
      this.isfull = !this.isfull;
      screenfull.toggle();
    },
  },
  components: {
    PInfo,
  },
};
</script>
<style scoped>
.header {
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
}
.header .lt {
  display: flex;
  align-items: center;
}
.header .mbx {
  margin: 0 20px;
}
.header .lt .toggle-btn {
  color: #fff;
  background-color: #f75539;
  border-color: #f75539;
}
</style>