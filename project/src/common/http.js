
import axios from "axios";

import router from "@/router";
// import { nextTick } from "vue/types/umd";
// axios
// 创建axios实例
let $axios = axios.create({
    baseURL: '/api',
    timeout:3000
})
// axios 请求
$axios.interceptors.request.use(function (config) {
    // 登录请求
    if (config.url == "/userlogin") {
        return config;
    } else {
        let userinfo = JSON.parse(localStorage.getItem("userinfo"))
        console.log(config)
        //此时请求头中需要携带上token 此时的字段名需要和后端的人沟通
        config.headers.authorization = userinfo.token;
        return config;
    }
}, function (error) {
    return Promise.reject(error);
});
// 添加响应拦截器
$axios.interceptors.response.use(function (response) {

    if (response.data.code == 403) {
        router.push('./login')
        return response.data;
    } else {
        return response.data
  }
}, function (error) {
    return Promise.reject(error);
});
// 暴露axios
export default $axios;