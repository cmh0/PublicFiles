webpackJsonp([16],{GhkT:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("lC5x"),s=n.n(r),a=n("J0Oq"),c=n.n(a),l=n("4gwr"),i={data:function(){return{list:[]}},created:function(){this.getlist()},methods:{getlist:function(){var t=this;return c()(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.d)();case 2:t.list=e.sent;case 3:case"end":return e.stop()}},e,t)}))()},delRow:function(t){var e=this;this.$confirm("确定删除吗, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(c()(s.a.mark(function n(){return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(l.b)(t);case 2:e.getlist();case 3:case"end":return n.stop()}},n,e)})))}},components:{}},o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("router-link",{attrs:{to:"/specs/add"}},[n("el-button",{attrs:{type:"primary"}},[n("i",{staticClass:"el-icon-circle-plus-outline"}),t._v("添加\n  ")])],1),t._v(" "),n("div",{staticClass:"bgf"},[n("el-table",{attrs:{data:t.list,"row-key":"id"}},[n("el-table-column",{attrs:{prop:"id",label:"ID"}}),t._v(" "),n("el-table-column",{attrs:{prop:"specsname",label:"属性名称"}}),t._v(" "),n("el-table-column",{attrs:{prop:"attrs",label:"属性值"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.attrs,function(e,r){return n("el-tag",{key:r,staticStyle:{"margin-right":"3px"},attrs:{type:"success"}},[t._v(t._s(e))])})}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"status",label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.status?n("el-tag",{attrs:{type:"success"}},[t._v("已启用")]):n("el-tag",{attrs:{type:"danger"}},[t._v("已禁用")])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("router-link",{attrs:{to:"/specs/"+e.row.id}},[n("el-button",{attrs:{type:"success",icon:"el-icon-edit",size:"mini",circle:""}})],1),t._v(" "),n("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"mini",circle:""},on:{click:function(n){return t.delRow(e.row.id)}}})]}}])})],1)],1)],1)},staticRenderFns:[]};var u=n("C7Lr")(i,o,!1,function(t){n("szUT")},"data-v-7e8b2bba",null);e.default=u.exports},szUT:function(t,e){}});
//# sourceMappingURL=16.e72ac850c3785bf32a15.js.map