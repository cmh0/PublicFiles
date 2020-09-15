// 导入 axios
import $axios from "@/common/http"
// 获取菜单列表
export async function getMenue(){
    let res = await $axios.get("/menulist?istree=1")
    if (res.code == 200 && res.list) {
        console.log(res)
        return res.list
        
      
    } else {
        console.log(res)
        // 否则返回空数组
        return [];
    }
}
// 添加菜单
export function addMenue(data){
    return $axios.post("/menuadd",data)
}
// 修改菜单
export function editMenue(data){
    return $axios.post("/menuedit",data)
}
// 删除菜单
export function delMenue(id){
    return $axios.post("/menudelete",{id})
}