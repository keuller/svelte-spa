(()=>{"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function r(t){return 0===Object.keys(t).length}function l(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}function a(t,n,e){t.$$.on_destroy.push(l(n,e))}function i(t,n,e,o){if(t){const s=u(t,n,e,o);return t[0](s)}}function u(t,n,e,o){return t[1]&&o?function(t,n){for(const e in n)t[e]=n[e];return t}(e.ctx.slice(),t[1](o(n))):e.ctx}function d(t,n,e,o){if(t[2]&&o){const s=t[2](o(e));if(void 0===n.dirty)return s;if("object"==typeof s){const t=[],e=Math.max(n.dirty.length,s.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|s[o];return t}return n.dirty|s}return n.dirty}function f(t,n,e,o,s,c,r){const l=d(n,o,s,c);if(l){const s=u(n,e,o,r);t.p(s,l)}}new Set;function p(t,n){t.appendChild(n)}function $(t,n,e){t.insertBefore(n,e||null)}function h(t){t.parentNode.removeChild(t)}function m(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function g(t){return document.createElement(t)}function b(t){return document.createTextNode(t)}function v(){return b(" ")}function x(){return b("")}function y(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function k(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function w(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function C(t,n){t.value=null==n?"":n}function E(t,n){const e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,n),e}new Set;let _;function S(t){_=t}function j(){if(!_)throw new Error("Function called outside component initialization");return _}function B(){const t=j();return(n,e)=>{const o=t.$$.callbacks[n];if(o){const s=E(n,e);o.slice().forEach((n=>{n.call(t,s)}))}}}function D(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach((t=>t(n)))}const P=[],L=[],O=[],T=[],F=Promise.resolve();let M=!1;function H(){M||(M=!0,F.then(q))}function N(t){O.push(t)}let A=!1;const R=new Set;function q(){if(!A){A=!0;do{for(let t=0;t<P.length;t+=1){const n=P[t];S(n),I(n.$$)}for(S(null),P.length=0;L.length;)L.pop()();for(let t=0;t<O.length;t+=1){const n=O[t];R.has(n)||(R.add(n),n())}O.length=0}while(P.length);for(;T.length;)T.pop()();M=!1,A=!1,R.clear()}}function I(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(N)}}const V=new Set;let W;function z(){W={r:0,c:[],p:W}}function U(){W.r||o(W.c),W=W.p}function G(t,n){t&&t.i&&(V.delete(t),t.i(n))}function K(t,n,e,o){if(t&&t.o){if(V.has(t))return;V.add(t),W.c.push((()=>{V.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function J(t,n){const e=n.token={};function o(t,o,s,c){if(n.token!==e)return;n.resolved=c;let r=n.ctx;void 0!==s&&(r=r.slice(),r[s]=c);const l=t&&(n.current=t)(r);let a=!1;n.block&&(n.blocks?n.blocks.forEach(((t,e)=>{e!==o&&t&&(z(),K(t,1,1,(()=>{n.blocks[e]===t&&(n.blocks[e]=null)})),U())})):n.block.d(1),l.c(),G(l,1),l.m(n.mount(),n.anchor),a=!0),n.block=l,n.blocks&&(n.blocks[o]=l),a&&q()}if((s=t)&&"object"==typeof s&&"function"==typeof s.then){const e=j();if(t.then((t=>{S(e),o(n.then,1,n.value,t),S(null)}),(t=>{if(S(e),o(n.catch,2,n.error,t),S(null),!n.hasCatch)throw t})),n.current!==n.pending)return o(n.pending,0),!0}else{if(n.current!==n.then)return o(n.then,1,n.value,t),!0;n.resolved=t}var s}"undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]);let Q;function X(t){t&&t.c()}function Y(t,e,c,r){const{fragment:l,on_mount:a,on_destroy:i,after_update:u}=t.$$;l&&l.m(e,c),r||N((()=>{const e=a.map(n).filter(s);i?i.push(...e):o(e),t.$$.on_mount=[]})),u.forEach(N)}function Z(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function tt(n,s,c,r,l,a,i=[-1]){const u=_;S(n);const d=n.$$={fragment:null,ctx:null,props:a,update:t,not_equal:l,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:s.context||[]),callbacks:e(),dirty:i,skip_bound:!1};let f=!1;if(d.ctx=c?c(n,s.props||{},((t,e,...o)=>{const s=o.length?o[0]:e;return d.ctx&&l(d.ctx[t],d.ctx[t]=s)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](s),f&&function(t,n){-1===t.$$.dirty[0]&&(P.push(t),H(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}(n,t)),e})):[],d.update(),f=!0,o(d.before_update),d.fragment=!!r&&r(d.ctx),s.target){if(s.hydrate){const t=(p=s.target,Array.from(p.childNodes));d.fragment&&d.fragment.l(t),t.forEach(h)}else d.fragment&&d.fragment.c();s.intro&&G(n.$$.fragment),Y(n,s.target,s.anchor,s.customElement),q()}var p;S(u)}"function"==typeof HTMLElement&&(Q=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:t}=this.$$;this.$$.on_disconnect=t.map(n).filter(s);for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,n,e){this[t]=e}disconnectedCallback(){o(this.$$.on_disconnect)}$destroy(){Z(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){this.$$set&&!r(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});class nt{$destroy(){Z(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){this.$$set&&!r(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function et(n){let e;return{c(){e=g("nav"),e.innerHTML='<div class="navbar-brand topnav-left"><a href="/" class="navbar-item"><span class="icon"><i class="fa fa-home"></i></span>  \n            <span>Svelte</span></a></div> \n\n    <div class="navbar-menu"><div class="navbar-start"><a href="#/sample1" class="navbar-item">BigBangTheory</a> \n                <a href="#/sample2" class="navbar-item">MyFinancial</a> \n                <a href="#/sample3" class="navbar-item">StarWars</a></div> \n            <div class="navbar-end"><span class="navbar-item"></span></div></div>',k(e,"class","navbar")},m(t,n){$(t,e,n)},p:t,i:t,o:t,d(t){t&&h(e)}}}const ot=class extends nt{constructor(t){super(),tt(this,t,null,et,c,{})}};function st(t){let n,e,o,s,c,r;const l=t[1].default,a=i(l,t,t[0],null);return{c(){n=g("section"),e=g("div"),o=g("div"),s=g("article"),c=g("div"),a&&a.c(),k(c,"class","media-content"),k(s,"class","media"),k(o,"class","box"),k(e,"class","container"),k(n,"class","section")},m(t,l){$(t,n,l),p(n,e),p(e,o),p(o,s),p(s,c),a&&a.m(c,null),r=!0},p(t,[n]){a&&a.p&&1&n&&f(a,l,t,t[0],n,null,null)},i(t){r||(G(a,t),r=!0)},o(t){K(a,t),r=!1},d(t){t&&h(n),a&&a.d(t)}}}function ct(t,n,e){let{$$slots:o={},$$scope:s}=n;return t.$$set=t=>{"$$scope"in t&&e(0,s=t.$$scope)},[s,o]}const rt=class extends nt{constructor(t){super(),tt(this,t,ct,st,c,{})}};function lt(t){let n;return{c(){n=g("div"),n.innerHTML='<img alt="" class="" src="img/svelte.png" width="560"/>',k(n,"class","has-text-centered")},m(t,e){$(t,n,e)},d(t){t&&h(n)}}}function at(t){let n,e,o,s;return o=new rt({props:{$$slots:{default:[lt]},$$scope:{ctx:t}}}),{c(){n=g("p"),n.textContent=" ",e=v(),X(o.$$.fragment),k(n,"class","appbrand-spacer")},m(t,c){$(t,n,c),$(t,e,c),Y(o,t,c),s=!0},p(t,[n]){const e={};1&n&&(e.$$scope={dirty:n,ctx:t}),o.$set(e)},i(t){s||(G(o.$$.fragment,t),s=!0)},o(t){K(o.$$.fragment,t),s=!1},d(t){t&&h(n),t&&h(e),Z(o,t)}}}const it=class extends nt{constructor(t){super(),tt(this,t,null,at,c,{})}};function ut(t){let n,e,o,s,c,r,l,a=t[0].name+"";return{c(){n=g("figure"),e=g("img"),s=v(),c=g("div"),r=g("p"),l=b(a),k(e,"alt",""),e.src!==(o=t[0].picture)&&k(e,"src",o),k(e,"class","image"),k(e,"width","320"),k(n,"class","media-left"),k(r,"class","title is-4"),k(c,"class","media-content")},m(t,o){$(t,n,o),p(n,e),$(t,s,o),$(t,c,o),p(c,r),p(r,l)},p(t,n){1&n&&e.src!==(o=t[0].picture)&&k(e,"src",o),1&n&&a!==(a=t[0].name+"")&&w(l,a)},d(t){t&&h(n),t&&h(s),t&&h(c)}}}function dt(n){let e,o=n[0].name&&ut(n);return{c(){e=g("article"),o&&o.c(),k(e,"class","media")},m(t,n){$(t,e,n),o&&o.m(e,null)},p(t,[n]){t[0].name?o?o.p(t,n):(o=ut(t),o.c(),o.m(e,null)):o&&(o.d(1),o=null)},i:t,o:t,d(t){t&&h(e),o&&o.d()}}}function ft(t,n,e){let{data:o={}}=n;return t.$$set=t=>{"data"in t&&e(0,o=t.data)},[o]}const pt=class extends nt{constructor(t){super(),tt(this,t,ft,dt,c,{data:0})}},$t=[];function ht(n,e=t){let o;const s=[];function r(t){if(c(n,t)&&(n=t,o)){const t=!$t.length;for(let t=0;t<s.length;t+=1){const e=s[t];e[1](),$t.push(e,n)}if(t){for(let t=0;t<$t.length;t+=2)$t[t][0]($t[t+1]);$t.length=0}}}return{set:r,update:function(t){r(t(n))},subscribe:function(c,l=t){const a=[c,l];return s.push(a),1===s.length&&(o=e(r)||t),c(n),()=>{const t=s.indexOf(a);-1!==t&&s.splice(t,1),0===s.length&&(o(),o=null)}}}}const mt=[{id:"4536",name:"Sheldon Cooper",picture:"img/sheldon.jpeg"},{id:"7821",name:"Leonard Hofstadter",picture:"img/leonard.jpg"},{id:"9036",name:"Howard Wolowitz ",picture:"img/howard.jpg"},{id:"1430",name:"Rajesh Koothrappali",picture:"img/rajesh.jpg"},{id:"8531",name:"Penny",picture:"img/penny.jpg"}];const gt=function(){const{subscribe:t,update:n,set:e}=ht({});return{subscribe:t,clean:()=>e({}),select:t=>n((n=>mt.filter((n=>n.id==t))[0])),all:()=>[...mt]}}();function bt(t,n,e){const o=t.slice();return o[4]=n[e],o}function vt(t){let n,e,o,s,c=t[4].name+"";function r(){return t[3](t[4])}return{c(){n=g("button"),e=b(c),k(n,"class","button is-primary is-rounded")},m(t,c){$(t,n,c),p(n,e),o||(s=y(n,"click",r),o=!0)},p(n,e){t=n},d(t){t&&h(n),o=!1,s()}}}function xt(t){let n,e,o,s,c,r,l,a,i,u,d=t[1],f=[];for(let n=0;n<d.length;n+=1)f[n]=vt(bt(t,d,n));return l=new pt({props:{data:t[0]}}),{c(){n=g("h4"),n.textContent="Big Bang Theory",e=v(),o=g("p"),s=g("button"),s.textContent="Clean",c=b("\n          \n        ");for(let t=0;t<f.length;t+=1)f[t].c();r=v(),X(l.$$.fragment),k(n,"class","title is-4"),k(s,"class","button is-light is-rounded"),k(o,"class","button-group")},m(d,h){$(d,n,h),$(d,e,h),$(d,o,h),p(o,s),p(o,c);for(let t=0;t<f.length;t+=1)f[t].m(o,null);$(d,r,h),Y(l,d,h),a=!0,i||(u=y(s,"click",t[2]),i=!0)},p(t,n){if(2&n){let e;for(d=t[1],e=0;e<d.length;e+=1){const s=bt(t,d,e);f[e]?f[e].p(s,n):(f[e]=vt(s),f[e].c(),f[e].m(o,null))}for(;e<f.length;e+=1)f[e].d(1);f.length=d.length}const e={};1&n&&(e.data=t[0]),l.$set(e)},i(t){a||(G(l.$$.fragment,t),a=!0)},o(t){K(l.$$.fragment,t),a=!1},d(t){t&&h(n),t&&h(e),t&&h(o),m(f,t),t&&h(r),Z(l,t),i=!1,u()}}}function yt(t){let n,e;return n=new rt({props:{$$slots:{default:[xt]},$$scope:{ctx:t}}}),{c(){X(n.$$.fragment)},m(t,o){Y(n,t,o),e=!0},p(t,[e]){const o={};129&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o)},i(t){e||(G(n.$$.fragment,t),e=!0)},o(t){K(n.$$.fragment,t),e=!1},d(t){Z(n,t)}}}function kt(t,n,e){let o;a(t,gt,(t=>e(0,o=t)));let s=gt.all();return[o,s,()=>gt.clean(),t=>gt.select(t.id)]}const wt=class extends nt{constructor(t){super(),tt(this,t,kt,yt,c,{})}};function Ct(n){let e,o,s,c,r,l,a,i,u,d,f=n[0].toFixed(2)+"";return{c(){e=g("div"),o=g("div"),s=g("button"),s.textContent="New Bill",c=v(),r=g("div"),l=g("span"),a=b("Total Balance $ "),i=b(f),k(s,"class","button is-primary"),k(o,"class","column"),k(l,"class","title is-4"),k(r,"class","column has-text-right"),k(e,"class","columns")},m(t,f){$(t,e,f),p(e,o),p(o,s),p(e,c),p(e,r),p(r,l),p(l,a),p(l,i),u||(d=y(s,"click",n[2]),u=!0)},p(t,[n]){1&n&&f!==(f=t[0].toFixed(2)+"")&&w(i,f)},i:t,o:t,d(t){t&&h(e),u=!1,d()}}}function Et(t,n,e){let{balance:o=0}=n;const s=B();function c(){s("form",{show:!0})}return t.$$set=t=>{"balance"in t&&e(0,o=t.balance)},[o,c,()=>c()]}const _t=class extends nt{constructor(t){super(),tt(this,t,Et,Ct,c,{balance:0})}};function St(n){let e,o,s;return{c(){e=g("button"),k(e,"class","delete")},m(t,c){$(t,e,c),o||(s=y(e,"click",n[6]),o=!0)},p:t,d(t){t&&h(e),o=!1,s()}}}function jt(n){let e,s,c,r,l,a,i,u,d,f,m,x,C,E,_,S,j,B,D,P,L,O,T,F=n[0].dueDate+"",M=n[0].description+"",H=parseFloat(n[0].value).toFixed(2)+"",N=n[0].paid&&St(n);return{c(){e=g("div"),s=g("div"),c=g("input"),r=v(),l=g("div"),a=g("span"),i=b(F),d=v(),f=g("div"),m=g("span"),x=b(M),E=v(),_=g("div"),S=g("span"),j=b("$ "),B=b(H),P=v(),L=g("div"),N&&N.c(),k(c,"type","checkbox"),k(s,"class","column has-text-centered"),k(a,"class",u=n[1](n[0].paid)),k(l,"class","column is-2 has-text-centered"),k(m,"class",C=n[1](n[0].paid)),k(f,"class","column is-6"),k(S,"class",D=n[1](n[0].paid)),k(_,"class","column is-2 has-text-right"),k(L,"class","column has-text-centered"),k(e,"class","columns is-gapless")},m(t,o){$(t,e,o),p(e,s),p(s,c),c.checked=n[0].paid,p(e,r),p(e,l),p(l,a),p(a,i),p(e,d),p(e,f),p(f,m),p(m,x),p(e,E),p(e,_),p(_,S),p(S,j),p(S,B),p(e,P),p(e,L),N&&N.m(L,null),O||(T=[y(c,"change",n[4]),y(c,"change",n[5])],O=!0)},p(t,[n]){1&n&&(c.checked=t[0].paid),1&n&&F!==(F=t[0].dueDate+"")&&w(i,F),1&n&&u!==(u=t[1](t[0].paid))&&k(a,"class",u),1&n&&M!==(M=t[0].description+"")&&w(x,M),1&n&&C!==(C=t[1](t[0].paid))&&k(m,"class",C),1&n&&H!==(H=parseFloat(t[0].value).toFixed(2)+"")&&w(B,H),1&n&&D!==(D=t[1](t[0].paid))&&k(S,"class",D),t[0].paid?N?N.p(t,n):(N=St(t),N.c(),N.m(L,null)):N&&(N.d(1),N=null)},i:t,o:t,d(t){t&&h(e),N&&N.d(),O=!1,o(T)}}}function Bt(t,n,e){let{data:o={}}=n;const s=B();function c(t){s("paid",{id:t})}function r(t){s("remove",{id:t})}return t.$$set=t=>{"data"in t&&e(0,o=t.data)},[o,t=>t?"bill-paid":"",c,r,t=>c(o.id),function(){o.paid=this.checked,e(0,o)},t=>r(o.id)]}const Dt=class extends nt{constructor(t){super(),tt(this,t,Bt,jt,c,{data:0})}};function Pt(t,n,e){const o=t.slice();return o[3]=n[e],o}function Lt(t){let n,e;return n=new Dt({props:{data:t[3]}}),n.$on("paid",t[1]),n.$on("remove",t[2]),{c(){X(n.$$.fragment)},m(t,o){Y(n,t,o),e=!0},p(t,e){const o={};1&e&&(o.data=t[3]),n.$set(o)},i(t){e||(G(n.$$.fragment,t),e=!0)},o(t){K(n.$$.fragment,t),e=!1},d(t){Z(n,t)}}}function Ot(t){let n,e,o,s=t[0],c=[];for(let n=0;n<s.length;n+=1)c[n]=Lt(Pt(t,s,n));const r=t=>K(c[t],1,1,(()=>{c[t]=null}));return{c(){n=g("div"),e=g("div");for(let t=0;t<c.length;t+=1)c[t].c();k(e,"class","container is-fluid is-marginless"),k(n,"class","section is-paddingless")},m(t,s){$(t,n,s),p(n,e);for(let t=0;t<c.length;t+=1)c[t].m(e,null);o=!0},p(t,[n]){if(1&n){let o;for(s=t[0],o=0;o<s.length;o+=1){const r=Pt(t,s,o);c[o]?(c[o].p(r,n),G(c[o],1)):(c[o]=Lt(r),c[o].c(),G(c[o],1),c[o].m(e,null))}for(z(),o=s.length;o<c.length;o+=1)r(o);U()}},i(t){if(!o){for(let t=0;t<s.length;t+=1)G(c[t]);o=!0}},o(t){c=c.filter(Boolean);for(let t=0;t<c.length;t+=1)K(c[t]);o=!1},d(t){t&&h(n),m(c,t)}}}function Tt(t,n,e){let{data:o=[]}=n;return t.$$set=t=>{"data"in t&&e(0,o=t.data)},[o,function(n){D(t,n)},function(n){D(t,n)}]}const Ft=class extends nt{constructor(t){super(),tt(this,t,Tt,Ot,c,{data:0})}};function Mt(t){let n,e,o,s,c,r;const l=t[2].default,a=i(l,t,t[1],null);return{c(){n=g("div"),e=g("label"),o=b(t[0]),s=v(),c=g("p"),a&&a.c(),k(e,"for",""),k(e,"class","label"),k(c,"class","control"),k(n,"class","field")},m(t,l){$(t,n,l),p(n,e),p(e,o),p(n,s),p(n,c),a&&a.m(c,null),r=!0},p(t,[n]){(!r||1&n)&&w(o,t[0]),a&&a.p&&2&n&&f(a,l,t,t[1],n,null,null)},i(t){r||(G(a,t),r=!0)},o(t){K(a,t),r=!1},d(t){t&&h(n),a&&a.d(t)}}}function Ht(t,n,e){let{$$slots:o={},$$scope:s}=n,{label:c=""}=n;return t.$$set=t=>{"label"in t&&e(0,c=t.label),"$$scope"in t&&e(1,s=t.$$scope)},[c,s,o]}const Nt=class extends nt{constructor(t){super(),tt(this,t,Ht,Mt,c,{label:0})}};function At(t){let n,e,o;return{c(){n=g("input"),k(n,"type","text"),k(n,"class","input")},m(s,c){$(s,n,c),C(n,t[0].description),e||(o=y(n,"input",t[6]),e=!0)},p(t,e){1&e&&n.value!==t[0].description&&C(n,t[0].description)},d(t){t&&h(n),e=!1,o()}}}function Rt(t){let n,e,o;return{c(){n=g("input"),k(n,"type","text"),k(n,"class","input")},m(s,c){$(s,n,c),C(n,t[0].dueDate),e||(o=y(n,"input",t[7]),e=!0)},p(t,e){1&e&&n.value!==t[0].dueDate&&C(n,t[0].dueDate)},d(t){t&&h(n),e=!1,o()}}}function qt(t){let n,e,o;return{c(){n=g("input"),k(n,"type","text"),k(n,"class","input")},m(s,c){$(s,n,c),C(n,t[0].value),e||(o=y(n,"input",t[8]),e=!0)},p(t,e){1&e&&n.value!==t[0].value&&C(n,t[0].value)},d(t){t&&h(n),e=!1,o()}}}function It(t){let n,e,s,c,r,l,a,i,u,d,f,m,b,x,w,C,E,_,S,j,B,D,P,L;return m=new Nt({props:{label:"Description",$$slots:{default:[At]},$$scope:{ctx:t}}}),x=new Nt({props:{label:"Due Date",$$slots:{default:[Rt]},$$scope:{ctx:t}}}),C=new Nt({props:{label:"Value $",$$slots:{default:[qt]},$$scope:{ctx:t}}}),{c(){n=g("div"),e=g("div"),s=v(),c=g("div"),r=g("header"),l=g("p"),l.textContent="Register New Bill",a=v(),i=g("button"),u=v(),d=g("section"),f=g("form"),X(m.$$.fragment),b=v(),X(x.$$.fragment),w=v(),X(C.$$.fragment),E=v(),_=g("footer"),S=g("button"),S.textContent="Salve",j=v(),B=g("button"),B.textContent="Cancel",k(e,"class","modal-background"),k(l,"class","modal-card-title"),k(i,"class","delete"),k(r,"class","modal-card-head"),k(d,"class","modal-card-body"),k(S,"class","button is-primary"),k(S,"type","button"),k(B,"class","button"),k(_,"class","modal-card-foot"),k(c,"class","modal-card"),k(n,"class",t[1])},m(o,h){$(o,n,h),p(n,e),p(n,s),p(n,c),p(c,r),p(r,l),p(r,a),p(r,i),p(c,u),p(c,d),p(d,f),Y(m,f,null),p(f,b),Y(x,f,null),p(f,w),Y(C,f,null),p(c,E),p(c,_),p(_,S),p(_,j),p(_,B),D=!0,P||(L=[y(i,"click",t[5]),y(S,"click",t[9]),y(B,"click",t[10])],P=!0)},p(t,[e]){const o={};4097&e&&(o.$$scope={dirty:e,ctx:t}),m.$set(o);const s={};4097&e&&(s.$$scope={dirty:e,ctx:t}),x.$set(s);const c={};4097&e&&(c.$$scope={dirty:e,ctx:t}),C.$set(c),(!D||2&e)&&k(n,"class",t[1])},i(t){D||(G(m.$$.fragment,t),G(x.$$.fragment,t),G(C.$$.fragment,t),D=!0)},o(t){K(m.$$.fragment,t),K(x.$$.fragment,t),K(C.$$.fragment,t),D=!1},d(t){t&&h(n),Z(m),Z(x),Z(C),P=!1,o(L)}}}function Vt(t,n,e){let{opened:o=!1}=n;const s=B();let c={description:"",dueDate:"",value:0},r="modal";function l(){s("save",{form:c}),e(0,c={description:"",dueDate:"",value:0})}function a(){e(0,c={description:"",dueDate:"",value:0}),s("form",{show:!1})}return t.$$set=t=>{"opened"in t&&e(4,o=t.opened)},t.$$.update=()=>{16&t.$$.dirty&&e(1,r=o?"modal is-active":"modal")},[c,r,l,a,o,()=>a(),function(){c.description=this.value,e(0,c)},function(){c.dueDate=this.value,e(0,c)},function(){c.value=this.value,e(0,c)},()=>l(),()=>a()]}const Wt=class extends nt{constructor(t){super(),tt(this,t,Vt,It,c,{opened:4})}},{subscribe:zt,update:Ut}=ht({total:0,bills:[]});const Gt={subscribe:zt,addBill:function(t){t.id=Date.now(),t.paid=!1,Ut((n=>{let{total:e,bills:o}=n;return e+=parseInt(t.value),o=[...o,t],{total:e,bills:o}}))},removeBill:function(t){Ut((n=>{let{total:e,bills:o}=n;if(!(o.filter((n=>n.id==t)).length<1))return o=o.filter((n=>n.id!=t)),{total:e,bills:o}}))},markPaid:function(t){Ut((n=>{let{total:e,bills:o}=n,s=o.filter((n=>n.id==t));if(!(s.length<1))return s[0].paid=!s[0].paid,e=s[0].paid?e-parseInt(s[0].value):e+parseInt(s[0].value),o=o.filter((n=>n.id!=t)),{total:e,bills:[...o,...s]}}))}};function Kt(t){let n,e,o,s,c,r,l,a,i,u,d,f;return c=new _t({props:{balance:t[1].total}}),c.$on("form",t[2]),i=new Ft({props:{data:t[1].bills}}),i.$on("paid",t[4]),i.$on("remove",t[5]),d=new Wt({props:{opened:t[0]}}),d.$on("form",t[2]),d.$on("save",t[3]),{c(){n=g("h4"),n.textContent="My Financial",e=v(),o=g("section"),s=g("div"),X(c.$$.fragment),r=v(),l=g("hr"),a=v(),X(i.$$.fragment),u=v(),X(d.$$.fragment),k(n,"class","title is-4"),k(s,"class","container is-fluid is-marginless"),k(o,"class","section is-paddingless")},m(t,h){$(t,n,h),$(t,e,h),$(t,o,h),p(o,s),Y(c,s,null),p(s,r),p(s,l),p(s,a),Y(i,s,null),$(t,u,h),Y(d,t,h),f=!0},p(t,n){const e={};2&n&&(e.balance=t[1].total),c.$set(e);const o={};2&n&&(o.data=t[1].bills),i.$set(o);const s={};1&n&&(s.opened=t[0]),d.$set(s)},i(t){f||(G(c.$$.fragment,t),G(i.$$.fragment,t),G(d.$$.fragment,t),f=!0)},o(t){K(c.$$.fragment,t),K(i.$$.fragment,t),K(d.$$.fragment,t),f=!1},d(t){t&&h(n),t&&h(e),t&&h(o),Z(c),Z(i),t&&h(u),Z(d,t)}}}function Jt(t){let n,e;return n=new rt({props:{$$slots:{default:[Kt]},$$scope:{ctx:t}}}),{c(){X(n.$$.fragment)},m(t,o){Y(n,t,o),e=!0},p(t,[e]){const o={};67&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o)},i(t){e||(G(n.$$.fragment,t),e=!0)},o(t){K(n.$$.fragment,t),e=!1},d(t){Z(n,t)}}}function Qt(t,n,e){let o;a(t,Gt,(t=>e(1,o=t)));let s=!1;return[s,o,function(t){e(0,s=t.detail.show)},function(t){e(0,s=!1),Gt.addBill(t.detail.form)},function(t){Gt.markPaid(t.detail.id)},function(t){Gt.removeBill(t.detail.id)}]}const Xt=class extends nt{constructor(t){super(),tt(this,t,Qt,Jt,c,{})}},Yt={method:"GET",cache:"default"};function Zt(t,n,e){const o=t.slice();return o[4]=n[e],o}function tn(t){let n,e,o,s=t[7].message+"";return{c(){n=g("p"),e=b("Error: "),o=b(s)},m(t,s){$(t,n,s),p(n,e),p(n,o)},p(t,n){1&n&&s!==(s=t[7].message+"")&&w(o,s)},d(t){t&&h(n)}}}function nn(t){let n,e,o,s,c=t[2](t[3].results)+"",r=t[1],l=[];for(let n=0;n<r.length;n+=1)l[n]=en(Zt(t,r,n));return{c(){n=g("span"),e=b(c),o=v(),s=g("ul");for(let t=0;t<l.length;t+=1)l[t].c();k(n,"class","is-hidden"),k(s,"class","list")},m(t,c){$(t,n,c),p(n,e),$(t,o,c),$(t,s,c);for(let t=0;t<l.length;t+=1)l[t].m(s,null)},p(t,n){if(1&n&&c!==(c=t[2](t[3].results)+"")&&w(e,c),2&n){let e;for(r=t[1],e=0;e<r.length;e+=1){const o=Zt(t,r,e);l[e]?l[e].p(o,n):(l[e]=en(o),l[e].c(),l[e].m(s,null))}for(;e<l.length;e+=1)l[e].d(1);l.length=r.length}},d(t){t&&h(n),t&&h(o),t&&h(s),m(l,t)}}}function en(t){let n,e,o=t[4].name+"";return{c(){n=g("li"),e=b(o),k(n,"class","list-item")},m(t,o){$(t,n,o),p(n,e)},p(t,n){2&n&&o!==(o=t[4].name+"")&&w(e,o)},d(t){t&&h(n)}}}function on(n){let e;return{c(){e=g("h5"),e.textContent="Loading data...",k(e,"class","title is-5")},m(t,n){$(t,e,n)},p:t,d(t){t&&h(e)}}}function sn(t){let n,e,o,s,c={ctx:t,current:null,token:null,hasCatch:!0,pending:on,then:nn,catch:tn,value:3,error:7};return J(s=t[0],c),{c(){n=g("h4"),n.textContent="Star Wars Characters",e=v(),o=x(),c.block.c(),k(n,"class","title is-4")},m(t,s){$(t,n,s),$(t,e,s),$(t,o,s),c.block.m(t,c.anchor=s),c.mount=()=>o.parentNode,c.anchor=o},p(n,e){if(t=n,c.ctx=t,1&e&&s!==(s=t[0])&&J(s,c));else{const n=t.slice();n[3]=n[7]=c.resolved,c.block.p(n,e)}},d(t){t&&h(n),t&&h(e),t&&h(o),c.block.d(t),c.token=null,c=null}}}function cn(t){let n,e;return n=new rt({props:{$$slots:{default:[sn]},$$scope:{ctx:t}}}),{c(){X(n.$$.fragment)},m(t,o){Y(n,t,o),e=!0},p(t,[e]){const o={};259&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o)},i(t){e||(G(n.$$.fragment,t),e=!0)},o(t){K(n.$$.fragment,t),e=!1},d(t){Z(n,t)}}}function rn(t,n,e){let o={},s=[];var c;return c=()=>e(0,o=async function(){return(await fetch("https://swapi.co/api/people",Yt)).json()}()),j().$$.on_mount.push(c),[o,s,function(t){t&&e(1,s=[...t])}]}const ln=class extends nt{constructor(t){super(),tt(this,t,rn,cn,c,{})}};function an(){return(an=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t}).apply(this,arguments)}var un,dn=un||(un={});dn.Pop="POP",dn.Push="PUSH",dn.Replace="REPLACE";var fn=function(t){return t};function pn(t){t.preventDefault(),t.returnValue=""}function $n(){var t=[];return{get length(){return t.length},push:function(n){return t.push(n),function(){t=t.filter((function(t){return t!==n}))}},call:function(n){t.forEach((function(t){return t&&t(n)}))}}}function hn(){return Math.random().toString(36).substr(2,8)}function mn(t){var n=t.pathname,e=t.search;return(void 0===n?"/":n)+(void 0===e?"":e)+(void 0===(t=t.hash)?"":t)}function gn(t){var n={};if(t){var e=t.indexOf("#");0<=e&&(n.hash=t.substr(e),t=t.substr(0,e)),0<=(e=t.indexOf("?"))&&(n.search=t.substr(e),t=t.substr(0,e)),t&&(n.pathname=t)}return n}function bn(t){let n,e,o;var s=t[0];return s&&(n=new s({})),{c(){n&&X(n.$$.fragment),e=x()},m(t,s){n&&Y(n,t,s),$(t,e,s),o=!0},p(t,[o]){if(s!==(s=t[0])){if(n){z();const t=n;K(t.$$.fragment,1,0,(()=>{Z(t,1)})),U()}s?(n=new s({}),X(n.$$.fragment),G(n.$$.fragment,1),Y(n,e.parentNode,e)):n=null}},i(t){o||(n&&G(n.$$.fragment,t),o=!0)},o(t){n&&K(n.$$.fragment,t),o=!1},d(t){t&&h(e),n&&Z(n,t)}}}function vn(t,n,e){let{routes:o=[]}=n,{index:s=null}=n,c=null;const r=function(t){function n(){var t=gn(l.location.hash.substr(1)),n=t.pathname,e=t.search;t=t.hash;var o=a.state||{};return[o.idx,fn({pathname:void 0===n?"/":n,search:void 0===e?"":e,hash:void 0===t?"":t,state:o.usr||null,key:o.key||"default"})]}function e(){if(i)$.call(i),i=null;else{var t=un.Pop,e=n(),o=e[0];if(e=e[1],$.length){if(null!=o){var s=d-o;s&&(i={action:t,location:e,retry:function(){r(-1*s)}},r(s))}}else c(t)}}function o(t){var n=document.querySelector("base"),e="";return n&&n.getAttribute("href")&&(e=-1===(e=(n=l.location.href).indexOf("#"))?n:n.slice(0,e)),e+"#"+("string"==typeof t?t:mn(t))}function s(t,n){return void 0===n&&(n=null),fn(an({},f,{},"string"==typeof t?gn(t):t,{state:n,key:hn()}))}function c(t){u=t,t=n(),d=t[0],f=t[1],p.call({action:u,location:f})}function r(t){a.go(t)}void 0===t&&(t={});var l=void 0===(t=t.window)?document.defaultView:t,a=l.history,i=null;l.addEventListener("popstate",e),l.addEventListener("hashchange",(function(){mn(n()[1])!==mn(f)&&e()}));var u=un.Pop,d=(t=n())[0],f=t[1],p=$n(),$=$n();return null==d&&(d=0,a.replaceState(an({},a.state,{idx:d}),"")),{get action(){return u},get location(){return f},createHref:o,push:function t(n,e){var r=un.Push,i=s(n,e);if(!$.length||($.call({action:r,location:i,retry:function(){t(n,e)}}),0)){var u=[{usr:i.state,key:i.key,idx:d+1},o(i)];i=u[0],u=u[1];try{a.pushState(i,"",u)}catch(t){l.location.assign(u)}c(r)}},replace:function t(n,e){var r=un.Replace,l=s(n,e);$.length&&($.call({action:r,location:l,retry:function(){t(n,e)}}),1)||(l=[{usr:l.state,key:l.key,idx:d},o(l)],a.replaceState(l[0],"",l[1]),c(r))},go:r,back:function(){r(-1)},forward:function(){r(1)},listen:function(t){return p.push(t)},block:function(t){var n=$.push(t);return 1===$.length&&l.addEventListener("beforeunload",pn),function(){n(),$.length||l.removeEventListener("beforeunload",pn)}}}}({forceRefresh:!0,getUserConfirmation:null});function l(t){let n=o.filter((n=>n.path==t));return 0==n.length?s:n[0].component}return r.listen(((t,n)=>{e(0,c=l(t.location.pathname))})),c=l(window.location.hash.substr(1)),t.$$set=t=>{"routes"in t&&e(1,o=t.routes),"index"in t&&e(2,s=t.index)},[c,o,s,function(t){return()=>r.push(t,{})}]}const xn=class extends nt{constructor(t){super(),tt(this,t,vn,bn,c,{routes:1,index:2,navigate:3})}get navigate(){return this.$$.ctx[3]}};function yn(n){let e,o,s,c,r,l;return o=new ot({}),r=new xn({props:{routes:n[0],index:it}}),{c(){e=g("main"),X(o.$$.fragment),s=v(),c=g("div"),X(r.$$.fragment),k(c,"class","hero")},m(t,n){$(t,e,n),Y(o,e,null),p(e,s),p(e,c),Y(r,c,null),l=!0},p:t,i(t){l||(G(o.$$.fragment,t),G(r.$$.fragment,t),l=!0)},o(t){K(o.$$.fragment,t),K(r.$$.fragment,t),l=!1},d(t){t&&h(e),Z(o),Z(r)}}}function kn(t){return[[{path:"/",component:it},{path:"/sample1",component:wt},{path:"/sample2",component:Xt},{path:"/sample3",component:ln}]]}const wn=new class extends nt{constructor(t){super(),tt(this,t,kn,yn,c,{})}}({target:document.getElementById("app"),props:{}});window.app=wn})();