// 导入封装好的axios
import $axios from "@/common/http"
// 获取角色列表

// 将获取的角色列表方法暴露出来
export async function getRole() {
    // 利用axios请求角色列表的接口
    let res = await $axios.get("/rolelist")
    // 如果响应码为200 证明获取成功 则将数据返回
    if (res.code == 200 && res.list) {
        return res.list
    } else {
        // 否则存入空数组中
        return [];
    }
}
// 添加角色
// 将添加角色的方法暴露出来  以便其他插件使用
export function addRole(data) {
    return $axios.post("/roleadd",data)
}
// 删除角色
export function delRole(id) {
    return $axios.post("/roledelete",{id})
}
// 修改角色
export function editRole(data) {
    return $axios.post("/roleedit",data)
}


