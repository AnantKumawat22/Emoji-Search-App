(this.webpackJsonpemojisearch_app=this.webpackJsonpemojisearch_app||[]).push([[0],{20:function(e,c,t){},41:function(e,c,t){"use strict";t.r(c);var a=t(2),n=t(13),i=t.n(n),s=t(15),r=(t(20),t(14)),o=t.n(r),l=t(0);var m=function(){var e=Object(a.useState)(null),c=Object(s.a)(e,2),t=c[0],n=c[1];function i(){for(var e=document.getElementsByClassName("card_item"),c=0;c<e.length;c++){e[c].addEventListener("click",function(e){var c=document.getElementsByClassName("card_item")[e].children[0].innerText;navigator.clipboard.writeText(c)}.bind(this,c),!1)}}return Object(a.useEffect)((function(){o.a.get("https://emoji-api.com/emojis?access_key=757bf32b3bdd68f69f12a326ab72eaef61063597").then((function(e){n(e.data)}))}),[]),Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h1",{className:"title",children:"Emoji Search App"}),Object(l.jsx)("p",{className:"app_desc",children:"A simple emoji search app made in ReactJs."}),Object(l.jsx)("input",{type:"search",id:"inp_search",placeholder:"Search for a Emoji...It may take 4-5sec to search..!!",onChange:function(){var e=document.getElementById("inp_search").value.trim().toLowerCase(),c=document.getElementById("card_container_id").children,t=c.length-1;do{document.getElementsByClassName("emoji_name")[t].innerText.trim().toLowerCase().includes(e)?c[t].style.display="":c[t].style.display="none"}while(t--)}}),Object(l.jsxs)("p",{className:"copy_icon",children:[Object(l.jsx)("i",{className:"far fa-clone"})," Click on Emoji To Copy."]}),Object(l.jsx)("div",{className:"card_container",id:"card_container_id",children:t&&t.map((function(e){return Object(l.jsxs)("div",{className:"card_item",onClick:i,title:"Click to Copy",children:[Object(l.jsx)("p",{className:"emoji_icon",children:e.character}),Object(l.jsx)("p",{className:"emoji_name",children:e.unicodeName})]})}))}),Object(l.jsx)("p",{className:"copyright",children:"\xa9 2021 Anant Kumawat."})]})})};i.a.render(Object(l.jsx)(m,{}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.d88e0426.chunk.js.map