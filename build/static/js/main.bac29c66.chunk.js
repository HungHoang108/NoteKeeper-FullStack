(this["webpackJsonpkeeper-part-3-completed"]=this["webpackJsonpkeeper-part-3-completed"]||[]).push([[0],{23:function(e,t,n){e.exports=n(48)},48:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(21),o=n.n(l),r=n(3),u=n(4),i=n(10),m=n.n(i),s=n(22),d=n(1);var p=function(e){return c.a.createElement("header",null,c.a.createElement("h1",null,"Keeper"),c.a.createElement("button",{className:"signin"},"Login"),c.a.createElement("input",{onChange:function(t){var n=t.target.value.toLowerCase();e.query(n)},className:"noteSearch",placeholder:"search"}))};var E=function(){return(new Date).getFullYear(),c.a.createElement("footer",null)};var f=function(e){return c.a.createElement("div",{className:"note"},c.a.createElement("h1",null,e.title),c.a.createElement("p",null,e.content),c.a.createElement("button",{onClick:function(){e.onEditing(e.mongoID,e.id)}},"Update"),c.a.createElement("button",{onClick:function(){e.onDelete(e.mongoID)}},"Delete"))},h=n(5),b=n.n(h);var v=function(e){var t=Object(a.useState)({title:"",content:""}),n=Object(d.a)(t,2),l=n[0],o=n[1];function i(e){var t=e.target,n=t.name,a=t.value;o((function(e){return Object(u.a)(Object(u.a)({},e),{},Object(r.a)({},n,a))}))}return c.a.createElement("div",null,c.a.createElement(c.a.StrictMode,null,c.a.createElement("form",null,c.a.createElement("input",{name:"title",onChange:i,value:l.title,placeholder:"Title"}),c.a.createElement("textarea",{name:"content",onChange:i,value:l.content,placeholder:"Take a note...",rows:"3"}),c.a.createElement("button",{onClick:function(){o({title:"",content:""}),b.a.post("http://localhost:9000/",l).then((function(e){return console.log(e.data)}))}},"Add"))))};var g=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),n=t[0],l=t[1],o=Object(a.useState)(!1),i=Object(d.a)(o,2),h=i[0],g=i[1],j=Object(a.useState)(""),O=Object(d.a)(j,2),w=O[0],k=O[1],C=Object(a.useState)({title:"",content:""}),S=Object(d.a)(C,2),D=S[0],y=S[1],x=Object(a.useState)([]),I=Object(d.a)(x,2),L=I[0],M=I[1],N=Object(a.useState)(!0),_=Object(d.a)(N,2),q=_[0],J=_[1];function T(e){b.a.delete("http://localhost:9000/".concat(e)).then((function(){l(n.map((function(t){return t._id!==e?t:null})))})),window.location.reload()}function A(e,t){g(!0),k(e),y({title:n[t].title,content:n[t].content})}function B(e){var t=e.target,n=t.name,a=t.value;y((function(e){return Object(u.a)(Object(u.a)({},e),{},Object(r.a)({},n,a))}))}return Object(a.useEffect)((function(){function e(){return(e=Object(s.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("http://localhost:9000/");case 2:t=e.sent,l(t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),c.a.createElement("div",null,c.a.createElement(p,{query:function(e){var t=n.filter((function(t){return t.content.toLowerCase().includes(e)}));console.log(t),M(t),J(!1)}}),c.a.createElement(v,null),h?c.a.createElement("div",null,c.a.createElement(c.a.StrictMode,null,c.a.createElement("form",null,c.a.createElement("input",{name:"title",onChange:B,value:D.title,placeholder:"Edit title"}),c.a.createElement("textarea",{name:"content",onChange:B,value:D.content,placeholder:"Edit your note...",rows:"3"}),c.a.createElement("button",{onClick:function(){b.a.patch("http://localhost:9000/update/".concat(w),{title:D.title,content:D.content}),g(!1),window.location.reload()}},"Done")))):"",q?n.map((function(e,t){return c.a.createElement(f,{key:t,id:t,title:e.title,content:e.content,mongoID:e._id,onDelete:T,onEditing:A})})):L.map((function(e,t){return c.a.createElement(f,{key:t,id:t,title:e.title,content:e.content,mongoID:e._id,onDelete:T,onEditing:A})})),c.a.createElement(E,null))},j=n(9);o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(j.a,null,c.a.createElement(g,null))),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.bac29c66.chunk.js.map