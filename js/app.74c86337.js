(function(e){function t(t){for(var r,s,u=t[0],i=t[1],c=t[2],d=0,p=[];d<u.length;d++)s=u[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&p.push(a[s][0]),a[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(t);while(p.length)p.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,u=1;u<n.length;u++){var i=n[u];0!==a[i]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/lighting-desk/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var l=i;o.push([1,"chunk-vendors"]),n()})({0:function(e,t){},"034f":function(e,t,n){"use strict";n("85ec")},1:function(e,t,n){e.exports=n("56d7")},10:function(e,t){},2:function(e,t){},3:function(e,t){},4:function(e,t){},5:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page-container"},[n("md-app",{attrs:{"md-mode":"fixed"}},[n("md-app-toolbar",{staticClass:"md-primary"},[n("div",{staticClass:"md-toolbar-row"},[n("span",{staticClass:"md-title"},[e._v("Miniature Lighting Desk")])]),n("div",{staticClass:"md-toolbar-row"},[e.$root.wampIsOpen?n("span",{staticClass:"md-subtitle"},[e._v("Connected to Server")]):e.$root.wampIsRetrying?n("span",{staticClass:"md-subttile"},[e._v("Retrying...")]):n("span",{staticClass:"md-subtitle"},[e._v("Disconnected")])])]),n("md-app-content",[n("Channels")],1)],1)],1)},o=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.$root.wampIsOpen?n("div",e._l(e.vals,(function(t,r){return n("Channel",{key:r,ref:"Channel"+r,refInFor:!0,attrs:{number:r,val:t,max:e.max}})})),1):n("div",[n("md-dialog-prompt",{attrs:{"md-active":!e.$root.wampIsOpen,"md-title":"Enter Password","md-input-placeholder":"Password","md-confirm-text":"Login"},on:{"update:mdActive":function(t){return e.$set(!e.$root,"wampIsOpen",t)},"update:md-active":function(t){return e.$set(!e.$root,"wampIsOpen",t)},"md-confirm":e.reconnect},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1)},u=[],i=n("1da1"),c=(n("96cf"),n("d3b7"),n("159b"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("md-card",[n("md-card-header",[n("span",{staticClass:"md-subhead"},[e._v(" "+e._s(e.val)+" ")])]),n("vue-material-slider",{attrs:{min:0,max:e.max,vertical:!0,disabled:e.disabled,thumbLabel:!0},model:{value:e.val,callback:function(t){e.val=t},expression:"val"}}),n("md-card-header",[n("div",{staticClass:"md-title"},[e._v(e._s(e.number))])])],1)}),l=[],d=(n("a9e3"),{name:"Channel",props:{number:Number,initialVal:Number,max:Number},data:function(){return{disabled:!0,val:0}},watch:{val:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.$wamp.call("set_brightness",[],{channel:this.number,val:t});case 3:e.next=8;break;case 5:e.prev=5,e.t0=e["catch"](0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,this,[[0,5]])})));function t(t){return e.apply(this,arguments)}return t}()},mounted:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$wamp.call("get_brightness",[],{channel:e.number});case 3:e.val=t.sent,e.disabled=!1,t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()}}),p=d,f=(n("6550"),n("2877")),m=Object(f["a"])(p,c,l,!1,null,null,null),h=m.exports,v={name:"Channels",components:{Channel:h},data:function(){return{controllerName:null,vals:[],password:"",max:0}},wamp:{subscribe:{"controller.statechange":function(e){var t=this;e[0].forEach((function(e,n){console.log(t.$refs);var r=t.$refs["Channel".concat(n)][0];r.val=e}))}}},mounted:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e,e.$wamp._connection._options.onchallenge=function(){return n.password};case 2:case"end":return t.stop()}}),t)})))()},methods:{reconnect:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.$wamp._connection.open(),e.next=3,this.$wamp.call("details");case 3:t=e.sent,this.vals=t.vals,this.max=t.max_brightness;case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},b=v,w=Object(f["a"])(b,s,u,!1,null,null,null),g=w.exports,x={name:"App",components:{Channels:g}},_=x,y=(n("034f"),Object(f["a"])(_,a,o,!1,null,null,null)),O=y.exports,C=n("9712"),$=(n("c018"),n("f5d3")),j=n.n($),k=n("9c30");n("51de"),n("e094");r["default"].use(C["a"],{url:"wss://wamp.2e0byo.co.uk:3227/ws",realm:"miniature-lighting-controller",authmethods:["ticket"],authid:"public",onchallenge:function(){return""},namespace:"wamp",auto_reestablish:!0,auto_close_timeout:-1}),r["default"].use(j.a),r["default"].use(k["MdContent"]),r["default"].use(k["MdApp"]),r["default"].use(k["MdToolbar"]),r["default"].use(k["MdSwitch"]),r["default"].use(k["MdButton"]),r["default"].use(k["MdDialog"]),r["default"].use(k["MdDialogAlert"]),r["default"].use(k["MdDialogPrompt"]),r["default"].use(k["MdCard"]),r["default"].use(k["MdField"]),r["default"].config.productionTip=!1,new r["default"]({render:function(e){return e(O)}}).$mount("#app")},6:function(e,t){},6550:function(e,t,n){"use strict";n("d408")},7:function(e,t){},8:function(e,t){},"85ec":function(e,t,n){},9:function(e,t){},d408:function(e,t,n){}});
//# sourceMappingURL=app.74c86337.js.map