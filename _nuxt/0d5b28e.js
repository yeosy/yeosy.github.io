(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{260:function(e,t,n){var content=n(265);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(74).default)("7fe1cd2e",content,!0,{sourceMap:!1})},264:function(e,t,n){"use strict";n(260)},265:function(e,t,n){var r=n(73)(!1);r.push([e.i,".main[data-v-7179d64c]{display:flex;justify-content:center;flex-direction:column;align-items:center;width:100%;height:100vh;background-color:#20b2aa}.main .text[data-v-7179d64c]{padding-right:5px;color:#fff;font-size:10vw;font-weight:900}.main .typing[data-v-7179d64c]{margin-top:20px;height:1.5em;color:#fff;font-size:5vw;font-weight:700;animation:cursor-7179d64c .5s infinite}@keyframes cursor-7179d64c{0%{border-right:1px solid #fff}50%{border-right:1px solid transparent}to{border-right:1px solid #fff}}",""]),e.exports=r},277:function(e,t,n){"use strict";n.r(t);var r=n(12),o=(n(130),n(19),n(75),n(59),{name:"Main",data:function(){return{}},computed:{},mounted:function(){this.typing()},destroyed:function(){},methods:{typing:function(){var e=document.querySelector(".typing"),t=["안녕하세요.","반갑습니다.","여소영입니다 :)"],i=0,n=function(){var n=Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r=t[i].split("");case 1:if(!r.length){n.next=7;break}return n.next=4,c(100);case 4:e.innerHTML+=r.shift(),n.next=1;break;case 7:return n.next=9,c(800);case 9:o();case 10:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var o=Object(r.a)(regeneratorRuntime.mark((function r(){var o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:o=t[i].split("");case 1:if(!o.length){r.next=8;break}return r.next=4,c(100);case 4:o.pop(),e.innerHTML=o.join(""),r.next=1;break;case 8:i=t[i+1]?i+1:0,n();case 10:case"end":return r.stop()}}),r)})));return function(){return o.apply(this,arguments)}}();function c(e){return new Promise((function(t){return setTimeout(t,e)}))}setTimeout(n,1500)}}}),c=o,f=(n(264),n(43)),component=Object(f.a)(c,(function(){var e=this,t=e._self._c;return t("section",{directives:[{name:"intersect",rawName:"v-intersect",value:e.setRouteSec,expression:"setRouteSec"}],staticClass:"main",class:{intersect:e.isIntersectSec},attrs:{id:"main"}},[t("p",{staticClass:"text"},[e._v("Hello World!")]),e._v(" "),t("p",{staticClass:"typing"})])}),[],!1,null,"7179d64c",null);t.default=component.exports}}]);