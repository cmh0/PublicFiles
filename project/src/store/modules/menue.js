// 获取菜单列表
import { getMenue } from "@/request/menue"
export default {
    // 添加命名空间
    namespaced:true,
    state: {
        // 菜单列表
        menulist:[]
    },
    getters: {
    //    菜单列表数据的赋值
       
        menulist: state => state.menulist
        
        
    },
   
    mutations: {
        // 修改菜单数据的方法
        SET_LIST(state, data) {
            state.menulist = data;
        }
    },
    actions: {
        // 请求菜单列表的数据、
        // 利用promise的语法糖
        async get_menu_list({commit}) {
            let res = await getMenue();
            commit('SET_LIST',res)
        }
    }
};
