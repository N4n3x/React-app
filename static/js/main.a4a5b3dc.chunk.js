(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{45:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},60:function(e,t,a){e.exports=a(72)},65:function(e,t,a){},67:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),r=a(8),c=a.n(r),l=(a(65),a(66),a(45)),i=a.n(l),s=(a(67),a(21)),u=a(22),d=a(25),m=a(24),h=a(96),p=a(103),v=a(100),f=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"onClick",value:function(e){e.preventDefault();var t=this.todoTitle.value;this.todoTitle.value="",this.props.onNewTodo({title:t,done:!1,createAt:new Date})}},{key:"render",value:function(){var e=this;return n.a.createElement(h.a,{container:!0,spacing:3,justify:"center"},n.a.createElement(h.a,{item:!0,xs:9},n.a.createElement(p.a,{fullWidth:!0,label:"TODO",inputRef:function(t){return e.todoTitle=t}})),n.a.createElement(h.a,{item:!0,xs:9},n.a.createElement(v.a,{color:"primary",variant:"contained",onClick:this.onClick.bind(this)},"Ajouter")))}}]),a}(o.Component),g=a(101),E=a(102),T=a(106),b=a(49),y=a.n(b),k=a(50),w=a.n(k),j=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"list"},this.showTodos(this.props.todos))}},{key:"toggleTodo",value:function(e,t){this.props.onTodoToggle(e,t)}},{key:"showTodos",value:function(e){var t=this;return e.map((function(e,a){return n.a.createElement(g.a,{button:!0,className:"todo",key:a,onClick:function(){return t.toggleTodo(e,a)}},n.a.createElement(E.a,null,e.done?n.a.createElement(y.a,null):n.a.createElement(w.a,null)),n.a.createElement(T.a,{primary:e.title,secondary:e.createAt.toLocaleDateString()+" "+e.createAt.toLocaleTimeString()}))}))}}]),a}(o.Component),O=a(105),N=a(99),A=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var o;return Object(s.a)(this,a),(o=t.call(this,e)).state={todos:[]},o}return Object(u.a)(a,[{key:"onNewTodo",value:function(e){var t=this.state.todos;t.push(e),this.setState({todos:t})}},{key:"onToggleTodo",value:function(e,t){console.log(t," : ",e);var a=e;a.done=!e.done;var o=this.state.todos;o[t]=a,this.setState({todos:o})}},{key:"render",value:function(){return n.a.createElement(O.a,{className:"Todo"},n.a.createElement("div",{className:"Todo-header"},n.a.createElement("h2",null,"TodoApp")),n.a.createElement("div",{className:"Todo-body"},n.a.createElement(f,{onNewTodo:this.onNewTodo.bind(this)}),n.a.createElement(N.a,null,n.a.createElement(j,{todos:this.state.todos,onTodoToggle:this.onToggleTodo.bind(this)}))))}}]),a}(o.Component);var C=function(){return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},n.a.createElement("img",{src:i.a,className:"App-logo",alt:"logo"})),n.a.createElement("div",{className:"App-body"},n.a.createElement(A,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[60,1,2]]]);
//# sourceMappingURL=main.a4a5b3dc.chunk.js.map