(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{45:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},61:function(e,t,a){e.exports=a(73)},66:function(e,t,a){},68:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(8),r=a.n(c),l=(a(66),a(67),a(45)),i=a.n(l),m=(a(68),a(37)),s=a(51),u=a(34),d=a(97),p=a(104),E=a(101);var f=function(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),c=a[0],r=a[1];return o.a.createElement(d.a,{container:!0,spacing:3,justify:"center"},o.a.createElement(d.a,{item:!0,xs:9},o.a.createElement(p.a,{fullWidth:!0,label:"TODO",value:c,onInput:function(e){r(e.target.value)}})),o.a.createElement(d.a,{item:!0,xs:9},o.a.createElement(E.a,{color:"primary",variant:"contained",onClick:function(t){if(t.preventDefault(),console.log(c),""!==c){var a=c;r(""),e.onNewTodo({id:0,title:a,done:!1,createAt:new Date})}}},"Ajouter")))},v=a(106),g=a(100),h=a(102),b=a(103),T=a(107),w=a(49),N=a.n(w),j=a(50),y=a.n(j);var A=function(e){return o.a.createElement("div",{className:"list"},e.todo.map((function(t,a){return o.a.createElement(h.a,{button:!0,className:"todo",key:a,onClick:function(){return function(t,a){e.onTodoToggle(t,a)}(t,a)}},o.a.createElement(b.a,null,t.done?o.a.createElement(N.a,null):o.a.createElement(y.a,null)),o.a.createElement(T.a,{primary:t.title,secondary:t.createAt.toLocaleDateString()+" "+t.createAt.toLocaleTimeString()}))})))};var O=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1];return o.a.createElement(v.a,{className:"Todo"},o.a.createElement("div",{className:"Todo-header"},o.a.createElement("h2",null,"TodoApp")),o.a.createElement("div",{className:"Todo-body"},o.a.createElement(f,{onNewTodo:function(e){e.id=a.length,c([].concat(Object(s.a)(a),[e])),console.log(a)}}),o.a.createElement(g.a,null,o.a.createElement(A,{todo:a,onTodoToggle:function(e){c(a.map((function(t){return t.id===e.id?Object(m.a)(Object(m.a)({},t),{},{done:!e.done}):t})))}}))))};var k=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{src:i.a,className:"App-logo",alt:"logo"})),o.a.createElement("div",{className:"App-body"},o.a.createElement(O,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[61,1,2]]]);
//# sourceMappingURL=main.a36d8f69.chunk.js.map