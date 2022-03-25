(function(){"use strict";var t={7528:function(t,e,n){var r=n(8935),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Banner"),n("div",{staticClass:"row"},[n("div",{staticClass:"col-xs-2 col-xs-offset-2"},[n("div",{staticClass:"list-group"},[n("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:{name:"guanyu"}}},[t._v("About")]),n("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:"/home"}},[t._v("Home")])],1)]),n("div",{staticClass:"col-xs-6"},[n("div",{staticClass:"panel"},[n("div",{staticClass:"panel-body"},[n("router-view")],1)])])])],1)},o=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-xs-offset-2 col-xs-8"},[t._m(0),n("button",{on:{click:t.back}},[t._v("后退（back）")]),n("button",{on:{click:t.forward}},[t._v("前进(forward)")]),n("button",{on:{click:t.go}},[t._v("go几步")])])])},l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-header"},[n("h2",[t._v("Vue Router Demo")])])}],s={name:"Banner",methods:{back(){this.$router.back()},forward(){this.$router.forward()},go(){this.$router.go(3)}}},u=s,c=n(1001),v=(0,c.Z)(u,a,l,!1,null,null,null),f=v.exports,m={name:"App",components:{Banner:f},mounted(){}},h=m,p=(0,c.Z)(h,i,o,!1,null,null,null),d=p.exports,_=n(2809),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",[t._v("我是About的内容")])},b=[],w={name:"About",beforeRouteEnter(t,e,n){t.meta.isAuth?"18"===localStorage.getItem("userage")?n():alert("未满18岁"):n()},beforeRouteLeave(t,e,n){console.log("About---beforeRouteLeave被调用了",t,e),n()}},x=w,y=(0,c.Z)(x,g,b,!1,null,null,null),k=y.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("Home组件内容")]),n("div",[n("ul",{staticClass:"nav nav-tabs"},[n("li",[n("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:"/home/news"}},[t._v("News")])],1),n("li",[n("router-link",{staticClass:"list-group-item ",attrs:{"active-class":"active",to:"/home/message"}},[t._v("Message")])],1)]),n("div",[n("keep-alive",{attrs:{include:"News"}},[n("router-view")],1)],1)])])},C=[],E={name:"Home"},Z=E,A=(0,c.Z)(Z,$,C,!1,null,null,null),O=A.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",{style:{opacity:t.opacity}},[t._v("这是一行渐变色的文字")]),t._m(0),t._m(1),t._m(2)])},j=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[t._v("news001 "),n("input",{attrs:{type:"text"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[t._v("news002 "),n("input",{attrs:{type:"text"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[t._v("news003 "),n("input",{attrs:{type:"text"}})])}],I={name:"News",data(){return{opacity:0}},activated(){console.log("News被激活了"),this.timer=setInterval((()=>{this.opacity-=.01,console.log("@"),this.opacity<=0&&(this.opacity=1)}),16)},deactivated(){console.log("News失活了"),clearInterval(this.timer)}},N=I,L=(0,c.Z)(N,S,j,!1,null,null,null),R=L.exports,q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",t._l(t.messageList,(function(e){return n("li",{key:e.id},[n("router-link",{attrs:{to:"/home/message/detail/"+e.id+"/"+e.title}},[t._v(t._s(e.title))]),n("button",{on:{click:function(n){return t.pushShow(e)}}},[t._v("push查看")]),n("button",{on:{click:function(n){return t.replaceShow(e)}}},[t._v("replace查看")])],1)})),0),n("hr"),n("router-view")],1)},B=[],D={name:"Message",data(){return{messageList:[{id:"001",title:"消息001"},{id:"002",title:"消息002"},{id:"003",title:"消息003"}]}},methods:{pushShow(t){this.$router.push({name:"xiangqing",params:{id:t.id,title:t.title}})},replaceShow(t){this.$router.replace({name:"xiangqing",params:{id:t.id,title:t.title}})}},beforeDestroy(){console.log("messages马上就要被销毁了")}},H=D,M=(0,c.Z)(H,q,B,!1,null,null,null),T=M.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[t._v("消息编号："+t._s(t.id))]),n("li",[t._v("消息标题："+t._s(t.title))])])},z=[],F={name:"Detail",props:["id","title"],mounted(){console.log(this.$route)}},V=F,G=(0,c.Z)(V,P,z,!1,null,null,null),J=G.exports;const K=new _.Z({mode:"hash",routes:[{name:"guanyu",path:"/about",component:k,meta:{isAuth:!0,title:"关于"}},{name:"zhuye",path:"/home",component:O,meta:{title:"主页"},children:[{name:"xinwen",path:"news",component:R,meta:{isAuth:!0,title:"新闻"},beforeEnter:(t,e,n)=>{t.meta.isAuth?"415"===localStorage.getItem("userid")?n():alert("用户密码不正确"):n()}},{name:"xiaoxi",path:"message",component:T,meta:{isAuth:!0,title:"消息"},children:[{name:"xiangqing",path:"detail/:id/:title",component:J,meta:{title:"详情"},props:!0}]}]}]});K.beforeEach(((t,e,n)=>{console.log("全局前置路由守卫",t,e),t.meta.isAuth?"xiaoyang"===localStorage.getItem("username")?n():alert("用户名不正确"):n()})),K.afterEach(((t,e)=>{console.log("后置路由守卫",t,e),document.title=t.meta.title||"学生系统"}));var Q=K;r.Z.use(_.Z),r.Z.config.productionTip=!1,new r.Z({el:"#app",render:t=>t(d),router:Q})}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,r,i,o){if(!r){var a=1/0;for(c=0;c<t.length;c++){r=t[c][0],i=t[c][1],o=t[c][2];for(var l=!0,s=0;s<r.length;s++)(!1&o||a>=o)&&Object.keys(n.O).every((function(t){return n.O[t](r[s])}))?r.splice(s--,1):(l=!1,o<a&&(a=o));if(l){t.splice(c--,1);var u=i();void 0!==u&&(e=u)}}return e}o=o||0;for(var c=t.length;c>0&&t[c-1][2]>o;c--)t[c]=t[c-1];t[c]=[r,i,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={826:0};n.O.j=function(e){return 0===t[e]};var e=function(e,r){var i,o,a=r[0],l=r[1],s=r[2],u=0;if(a.some((function(e){return 0!==t[e]}))){for(i in l)n.o(l,i)&&(n.m[i]=l[i]);if(s)var c=s(n)}for(e&&e(r);u<a.length;u++)o=a[u],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(c)},r=self["webpackChunkvue_advance"]=self["webpackChunkvue_advance"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(7528)}));r=n.O(r)})();
//# sourceMappingURL=index.ef3f3fc4.js.map