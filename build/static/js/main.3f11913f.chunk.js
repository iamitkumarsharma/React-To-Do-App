(this.webpackJsonptodoreact=this.webpackJsonptodoreact||[]).push([[0],{36:function(e,t,a){},50:function(e,t,a){e.exports=a(72)},55:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),c=a(14),r=a.n(c),l=(a(55),a(44)),i=a(34),d=(a(36),a(97)),s=a(92),u=a(95),m=a(94),p=a(93),f=a(90),b=a(91),E=a(96),v=a(31),y=a.n(v),g=v.initializeApp({apiKey:"AIzaSyCW3eaeGQ4PCgVm8-vuzXmLaBP-SImssIA",authDomain:"todoreact-ace64.firebaseapp.com",databaseURL:"https://todoreact-ace64.firebaseio.com",projectId:"todoreact-ace64",storageBucket:"todoreact-ace64.appspot.com",messagingSenderId:"152722392654",appId:"1:152722392654:web:b3cfca1ee87b36028f251f",measurementId:"G-B2H5KWW9JY"}).firestore(),h=a(43),I=a.n(h),j=(new Date).toLocaleDateString();var S=function(e){return n.a.createElement(f.a,null,n.a.createElement(b.a,null,n.a.createElement(E.a,{primary:e.todo.todo,secondary:j}),n.a.createElement(I.a,{color:"secondary",onClick:function(t){return g.collection("todos").doc(e.todo.id).delete()}})))};var D=function(){var e=Object(o.useState)([]),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(o.useState)([]),f=Object(i.a)(r,2),b=f[0],E=f[1];return Object(o.useEffect)((function(){g.collection("todos").orderBy("timestamp","desc").onSnapshot((function(e){c(e.docs.map((function(e){return{id:e.id,todo:e.data().todo}})))}))}),[]),n.a.createElement(d.a,{className:"app"},n.a.createElement("h1",null,"Todo List"),n.a.createElement("div",{className:"app_fields"},n.a.createElement(s.a,null,n.a.createElement(u.a,null,"\u2714\ufe0f Add Todo"),n.a.createElement(m.a,{value:b,onChange:function(e){return E(e.target.value)}})),n.a.createElement(p.a,{disabled:!b,variant:"contained",color:"primary",type:"submit",onClick:function(e){c([].concat(Object(l.a)(a),[b])),E(""),e.preventDefault(),g.collection("todos").add({todo:b,timestamp:y.a.firestore.FieldValue.serverTimestamp()})}},"ADD")),n.a.createElement("ul",null,a.map((function(e){return n.a.createElement(S,{todo:e})}))))};r.a.render(n.a.createElement(D,null),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.3f11913f.chunk.js.map