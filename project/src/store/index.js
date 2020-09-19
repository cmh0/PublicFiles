import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
// 导入模块
import menue from "@/store/modules/menue"
import role from "@/store/modules/role"
import user from "@/store/modules/user"
import category from "@/store/modules/category"
import specs from "@/store/modules/specs"
import goods from "@/store/modules/goods"

let store = new Vuex.Store({
    state:{
        iscollapse:false  // 是否折叠，默认不折叠！
    },
    mutations:{
        TOGGLE(state){
            state.iscollapse = !state.iscollapse
        }
    },
    modules: {
        menue,role,user,category,specs,goods
    }
})

export default store;