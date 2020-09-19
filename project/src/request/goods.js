// 导入封装好的axios
import $axios from "@/common/http"
// 获取商品列表

export async function getGoods(page=1,size=10) {
    // 利用axios请求商品列表

    let res = await $axios.get("/goodslist", {
        params: {
            size,
            page
        }
    })
    //  判断
    if (res.code == 200 && res.list) {
       return res.list
  
    } else {
        return [];
    }
}
// 添加
export function addGoods(data) {
    return $axios.post("/goodsadd", data)
}
// 删除
export function delGoods(id) {
    return $axios.post("/goodsdelete", { id })
}
// 修改
export function editGoods(data) {
    return $axios.post("/goodsedit", data)
}
// 获取管理个数
export async function getTotal() {
    let res = await $axios.get("/goodscount")
    return res.list[0].total
}

