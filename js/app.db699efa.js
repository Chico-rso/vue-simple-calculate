(function(){"use strict";var t={7349:function(t,e,c){var a=c(9242),l=c(3396);function n(t,e,c,a,n,o){const u=(0,l.up)("Calculate");return(0,l.wg)(),(0,l.j4)(u)}var o=c(7139);const u={class:"calculate"},s={class:"calculate__display"},r={class:"calculate__display-text"},_={class:"calculate__keys"},i={class:"calculate__keys-row"},p={class:"calculate__keys-row"},y={class:"calculate__keys-row"},k={class:"calculate__keys-row"},b={class:"calculate__keys-row"};function d(t,e,c,a,n,d){return(0,l.wg)(),(0,l.iD)("div",u,[(0,l._)("div",s,[(0,l._)("div",r,(0,o.zw)(n.current),1)]),(0,l._)("div",_,[(0,l._)("div",i,[(0,l._)("button",{class:"calculate__keys-button calculate__keys-button_type_clear",onClick:e[0]||(e[0]=(...t)=>d.clear&&d.clear(...t))},"C"),(0,l._)("button",{class:"calculate__keys-button calculate__keys-button_type_backspace",onClick:e[1]||(e[1]=(...t)=>d.backspace&&d.backspace(...t))},"Backspace"),(0,l._)("button",{class:"calculate__keys-button calculate__keys-button_type_divide",onClick:e[2]||(e[2]=t=>d.handleOperator("/"))},"/")]),(0,l._)("div",p,[(0,l._)("button",{class:"calculate__keys-button calculate__keys-button_type_7",onClick:e[3]||(e[3]=t=>d.appendToDisplay(7))},"7"),(0,l._)("button",{class:"calculate__keys-button calculate__keys-button_type_8",onClick:e[4]||(e[4]=t=>d.appendToDisplay(8))},"8"),(0,l._)("button",{class:"calculate__keys-button calculate__keys-button_type_9",onClick:e[5]||(e[5]=t=>d.appendToDisplay(9))},"9"),(0,l._)("button",{class:"calculate__keys-button calculate__keys-button_type_multiply",onClick:e[6]||(e[6]=t=>d.handleOperator("*"))},"*")]),(0,l._)("div",y,[(0,l._)("button",{class:"calculate__keys-button calculate__keys-button_type_4",onClick:e[7]||(e[7]=t=>d.appendToDisplay(4))},"4"),(0,l._)("button",{class:"calculate__keys-button calculate__keys-button_type_5",onClick:e[8]||(e[8]=t=>d.appendToDisplay(5))},"5"),(0,l._)("button",{class:"calculate__keys-button calculate__keys-button_type_6",onClick:e[9]||(e[9]=t=>d.appendToDisplay(6))},"6"),(0,l._)("button",{class:"calculate__keys-button calculate__keys-button_type_minus",onClick:e[10]||(e[10]=t=>d.handleOperator("-"))},"-")]),(0,l._)("div",k,[(0,l._)("button",{class:"calculate__keys-button calculate__keys-button_type_1",onClick:e[11]||(e[11]=t=>d.appendToDisplay(1))},"1"),(0,l._)("button",{class:"calculate__keys-button calculate__keys-button_type_2",onClick:e[12]||(e[12]=t=>d.appendToDisplay(2))},"2"),(0,l._)("button",{class:"calculate__keys-button calculate__keys-button_type_3",onClick:e[13]||(e[13]=t=>d.appendToDisplay(3))},"3"),(0,l._)("button",{class:"calculate__keys-button calculate__keys-button_type_plus",onClick:e[14]||(e[14]=t=>d.handleOperator("+"))},"+")]),(0,l._)("div",b,[(0,l._)("button",{class:"calculate__keys-button calculate__keys-button_type_0",onClick:e[15]||(e[15]=t=>d.appendToDisplay(0))},"0"),(0,l._)("button",{class:"calculate__keys-button calculate__keys-button_type_point",onClick:e[16]||(e[16]=t=>d.convertDecimal())},"."),(0,l._)("button",{class:"calculate__keys-button calculate__keys-button_type_result",onClick:e[17]||(e[17]=t=>d.handleOperator("="))},"=")])])])}var h={data(){return{current:"",previous:null,operator:null,clickedOperator:!1}},methods:{clear(){this.current="",this.previous=null,this.operator=null,this.clickedOperator=!1},backspace(){this.current=this.current.slice(0,-1)},appendToDisplay(t){this.clickedOperator?(this.clickedOperator=!1,this.current=t):this.current+=t},convertDecimal(){this.clickedOperator?(this.clickedOperator=!1,this.current="0."):-1===this.current.indexOf(".")&&(this.current+=".")},handleOperator(t){const e=parseFloat(this.current);if(this.operator&&this.clickedOperator&&(this.operator=t),null===this.previous)this.previous=e;else if(this.operator){const t=this.calculate(this.previous,e,this.operator);this.current=String(t),this.previous=t}this.clickedOperator=!0,this.operator=t},calculate(t,e,c){switch(c){case"+":return t+e;case"-":return t-e;case"*":return t*e;case"/":return t/e;default:return 0}}}},f=c(89);const v=(0,f.Z)(h,[["render",d]]);var O=v,C={name:"App",components:{Calculate:O}};const w=(0,f.Z)(C,[["render",n]]);var D=w;(0,a.ri)(D).mount("#app")}},e={};function c(a){var l=e[a];if(void 0!==l)return l.exports;var n=e[a]={exports:{}};return t[a](n,n.exports,c),n.exports}c.m=t,function(){var t=[];c.O=function(e,a,l,n){if(!a){var o=1/0;for(_=0;_<t.length;_++){a=t[_][0],l=t[_][1],n=t[_][2];for(var u=!0,s=0;s<a.length;s++)(!1&n||o>=n)&&Object.keys(c.O).every((function(t){return c.O[t](a[s])}))?a.splice(s--,1):(u=!1,n<o&&(o=n));if(u){t.splice(_--,1);var r=l();void 0!==r&&(e=r)}}return e}n=n||0;for(var _=t.length;_>0&&t[_-1][2]>n;_--)t[_]=t[_-1];t[_]=[a,l,n]}}(),function(){c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,{a:e}),e}}(),function(){c.d=function(t,e){for(var a in e)c.o(e,a)&&!c.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){c.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};c.O.j=function(e){return 0===t[e]};var e=function(e,a){var l,n,o=a[0],u=a[1],s=a[2],r=0;if(o.some((function(e){return 0!==t[e]}))){for(l in u)c.o(u,l)&&(c.m[l]=u[l]);if(s)var _=s(c)}for(e&&e(a);r<o.length;r++)n=o[r],c.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return c.O(_)},a=self["webpackChunkcalculate"]=self["webpackChunkcalculate"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=c.O(void 0,[998],(function(){return c(7349)}));a=c.O(a)})();
//# sourceMappingURL=app.db699efa.js.map