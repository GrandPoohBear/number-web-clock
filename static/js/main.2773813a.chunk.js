(this["webpackJsonp@grandpoohbear/number-web-clock"]=this["webpackJsonp@grandpoohbear/number-web-clock"]||[]).push([[0],{21:function(t,e,n){},22:function(t,e,n){},55:function(t,e,n){"use strict";n.r(e);var c=n(0),o=n(2),a=n.n(o),r=n(12),i=n.n(r),s=(n(21),n(22),n(7)),b=n(13),u=n(14),j=n(15),d=Object(b.buildTokenMap)(),l=new u.Chance,f=function(){var t=Object(o.useState)(!1),e=Object(s.a)(t,2),n=e[0],a=e[1],r=Object(o.useState)(""),i=Object(s.a)(r,2),b=i[0],u=i[1],f=Object(o.useState)(""),O=Object(s.a)(f,2),h=O[0],m=O[1],p=Object(o.useState)(""),g=Object(s.a)(p,2),v=g[0],x=g[1],k=Object(o.useState)([]),w=Object(s.a)(k,2),C=w[0],S=w[1],F=Object(o.useState)(""),y=Object(s.a)(F,2),I=y[0],A=y[1];Object(o.useEffect)((function(){var t=setInterval((function(){var t=Object(j.a)();n?(m(t.format("H")),u(t.format("mm")),x("")):(m(t.format("h")),u(t.format("mm")),x(t.format("A")))}),100);return function(){clearInterval(t)}}),[n]),Object(o.useEffect)((function(){var t="".concat(h).concat(b),e=d[Number(t)];console.log("Facts for timeString: ".concat(t),e),S(e),0!==e.length?A(l.weighted(e.map((function(t){return t.description})),e.map((function(t){return t.relevance})))):A("")}),[h,b,n]);return Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("span",{children:h}),Object(c.jsx)("span",{children:":"}),Object(c.jsx)("span",{children:b}),"\xa0",Object(c.jsx)("span",{children:v})]}),Object(c.jsx)("div",{children:I}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{onClick:function(){return a(!n)},children:"Switch 12/24"})}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{onClick:function(){return function(){var t="Thanks for trying this experiment out!  Any feedback?  Facts wrong?  Missing something cool?  Let me know!\n\n    \n    \n--------\nContext:\nCurrent time: ".concat(h,":").concat(b," ").concat(v,"\nCurrent fact: ").concat(I,"\nAll facts: ").concat(JSON.stringify(C));window.location.href="mailto:".concat("andy@tutukain.com","?subject=").concat(encodeURIComponent("Number web clock feedback"),"&body=").concat(encodeURIComponent(t))}()},children:"Feedback?"})})]})};var O=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(f,{})})},h=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,56)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,a=e.getLCP,r=e.getTTFB;n(t),c(t),o(t),a(t),r(t)}))};i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(O,{})}),document.getElementById("root")),h()}},[[55,1,2]]]);
//# sourceMappingURL=main.2773813a.chunk.js.map