// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 导入 store
import store from './store'
// 导入 element-ui
import 'element-ui/lib/theme-chalk/index.css';
// import '../static/style/theme/index.css'

// 引入
import ElementUI from 'element-ui'

Vue.use(ElementUI)

Vue.config.productionTip = false
// 注册全局过滤器
import filterObj from "./filters"
// 利用for...in循环
for(let k in filterObj){
  Vue.filter(k,filterObj[k])
}


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
// render: h => h(App),  代替了template
  components: { App },
  template: '<App/>'
})
