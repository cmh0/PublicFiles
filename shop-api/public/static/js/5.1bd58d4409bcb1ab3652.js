webpackJsonp([5],{F57o:function(e,t){},jekl:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r("woOf"),i=r.n(o),n=r("Xxa5"),l=r.n(n),s=r("exGp"),a=r.n(s),f=r("c7v1"),u=void 0,m={data:function(){return{forminfo:{pid:0,title:"",icon:"",type:1,url:"",status:1},menulist:[],rules:{title:[{required:!0,message:"请输入名称",trigger:"blur"}],icon:[{required:!0,message:"请输入图标",trigger:"blur"}],pid:[{required:!0,message:"请选择上级目录",trigger:"blur"}],url:[{required:!0,message:"请输入地址",trigger:"blur"}]}}},created:function(){this.getlist(),this.$route.params.id&&this.getinfo()},methods:{getlist:function(){var e=this;return a()(l.a.mark(function t(){return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(f.d)();case 2:e.menulist=t.sent,console.log(e.menulist);case 4:case"end":return t.stop()}},t,e)}))()},getinfo:function(){var e=this;return a()(l.a.mark(function t(){return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(f.d)(e.$route.params.id);case 2:e.forminfo=t.sent,u=i()({},e.forminfo);case 4:case"end":return t.stop()}},t,e)}))()},submit:function(){var e=this;this.$refs.form.validate(function(t){t?e.$route.params.id?Object(f.c)(e.$route.params.id,e.forminfo):Object(f.a)(e.forminfo):e.$message.warning("验证失败")})},reset:function(){this.$route.params.id?this.forminfo=i()({},u):this.$refs.form.resetFields()}},components:{}},c={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-row",{staticClass:"form-bg"},[r("el-col",{attrs:{span:10,offset:6}},[r("el-form",{ref:"form",attrs:{rules:e.rules,model:e.forminfo,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"菜单类型"}},[r("el-radio",{attrs:{label:1},model:{value:e.forminfo.type,callback:function(t){e.$set(e.forminfo,"type",t)},expression:"forminfo.type"}},[e._v("目录")]),e._v(" "),r("el-radio",{attrs:{label:2},model:{value:e.forminfo.type,callback:function(t){e.$set(e.forminfo,"type",t)},expression:"forminfo.type"}},[e._v("菜单")])],1),e._v(" "),r("el-form-item",{attrs:{label:1==e.forminfo.type?"目录名称":"菜单名称",prop:"title"}},[r("el-input",{model:{value:e.forminfo.title,callback:function(t){e.$set(e.forminfo,"title",t)},expression:"forminfo.title"}})],1),e._v(" "),1==e.forminfo.type?[1==e.forminfo.type?r("el-form-item",{attrs:{label:"目录图标",prop:"icon"}},[r("el-input",{model:{value:e.forminfo.icon,callback:function(t){e.$set(e.forminfo,"icon",t)},expression:"forminfo.icon"}})],1):e._e()]:e._e(),e._v(" "),2==e.forminfo.type?[r("el-form-item",{attrs:{label:"上级目录",prop:"pid"}},[r("el-select",{attrs:{placeholder:"请选择"},model:{value:e.forminfo.pid,callback:function(t){e.$set(e.forminfo,"pid",t)},expression:"forminfo.pid"}},[r("el-option",{attrs:{label:"顶级目录",value:0}}),e._v(" "),e._l(e.menulist,function(e){return r("el-option",{key:e.id,attrs:{label:e.title,value:e.id}})})],2)],1),e._v(" "),2==e.forminfo.type?r("el-form-item",{attrs:{label:"菜单地址",prop:"url"}},[r("el-input",{model:{value:e.forminfo.url,callback:function(t){e.$set(e.forminfo,"url",t)},expression:"forminfo.url"}})],1):e._e()]:e._e(),e._v(" "),r("el-form-item",{attrs:{label:"状态"}},[r("el-switch",{attrs:{"active-value":1,"inactive-value":2},model:{value:e.forminfo.status,callback:function(t){e.$set(e.forminfo,"status",t)},expression:"forminfo.status"}})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("立即"+e._s(e.$route.params.id?"修改":"创建"))]),e._v(" "),r("el-button",{on:{click:e.reset}},[e._v("重置")])],1)],2)],1)],1)},staticRenderFns:[]};var p=r("VU/8")(m,c,!1,function(e){r("F57o")},"data-v-57ec71e7",null);t.default=p.exports}});
//# sourceMappingURL=5.1bd58d4409bcb1ab3652.js.map