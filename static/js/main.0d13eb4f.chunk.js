(this["webpackJsonponline-code-editor"]=this["webpackJsonponline-code-editor"]||[]).push([[0],{20:function(e,t,a){},37:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a.n(s),n=a(26),i=a.n(n),r=(a(37),a(58)),l=a(59),o=a(60),d=a(5),j=a.p+"static/media/shape-1.14eac045.svg",b=a.p+"static/media/shape-2.f2d172ea.svg",x=a.p+"static/media/shape-3.63e593ae.svg",h=a.p+"static/media/shape-6.f5ce9707.svg",p=a.p+"static/media/hero-img.14dc8f7a.png",u=a(14),m=(a(20),a(15),a(0));var O=function(){var e={backgroundColor:"#5c4389",border:0};return Object(m.jsx)("div",{style:{backgroundColor:"#2a283e",minHeight:"100vh",height:"auto"},children:Object(m.jsxs)(r.a,{style:{width:"100%",justifyContent:"center",alignItems:"center",display:"flex",overflow:"hidden",position:"relative"},children:[Object(m.jsx)("img",{src:j,alt:"fig1",style:{left:0,right:0,margin:"auto",top:"90px",position:"absolute"},className:"shape"}),Object(m.jsx)("img",{src:b,alt:"fig2",style:{right:"380px",top:"280px",position:"absolute"},className:"shape"}),Object(m.jsx)("img",{src:x,alt:"fig3",style:{right:"88px",top:"230px",position:"absolute"},className:"shape"}),Object(m.jsx)("img",{src:h,alt:"fig6",style:{right:"272px",bottom:"0px",position:"absolute"},className:"shape"}),Object(m.jsxs)(l.a,{className:"text-center",style:{alignItems:"center",paddingTop:"100px",paddingBottom:"50px"},children:[Object(m.jsx)(o.a,{md:6,children:Object(m.jsx)("img",{src:p,className:"img-fluid",alt:"main img",style:{justifyContent:"center",padding:"30px"}})}),Object(m.jsxs)(o.a,{md:6,children:[Object(m.jsx)("h2",{style:{color:"#f0c19e"},children:"Code Websites From Any Where"}),Object(m.jsx)("h5",{style:{textAlign:"justify",color:"rgb(154 179 205)",paddingTop:"10px"},children:"With this online code editor, you can edit HTML, CSS and JavaScript code, and live preview of site instantly."}),Object(m.jsx)(d.a,{variant:"primary",style:e,as:u.b,to:"/web",children:"Web Editor"}),Object(m.jsx)("h2",{style:{color:"#f0c19e",paddingTop:"70px"},children:"Generate README in Seconds"}),Object(m.jsx)("h5",{style:{textAlign:"justify",color:"rgb(154 179 205)",paddingTop:"10px"},children:"Online markdown editor, with custom toolbar to help you make your readme easily."}),Object(m.jsx)(d.a,{variant:"primary",style:e,as:u.b,to:"/markdown",children:"Markdown Editor"})]})]})]})})},f=a(8),g=(a(43),a(44),a(28));a(45),a(46),a(47),a(48),a(49),a(50),a(51);var v=function(e){var t=e.launguage;return Object(m.jsx)("div",{children:Object(m.jsx)(g.Controlled,{value:e.value,options:{mode:t,theme:"material",lineNumbers:!0,scrollbarStyle:"null",lineWrapping:!0,autoCloseTags:!0,matchTags:!0,autoCloseBrackets:!0,matchBrackets:!0},onBeforeChange:function(t,a,s){e.onChange(s)}})})};var y=function(){var e=(new Date).getFullYear();return Object(m.jsx)("div",{children:Object(m.jsxs)(r.a,{fluid:!0,className:"footer",children:["Copywrite \xa9 ",e," | Made with ",Object(m.jsx)("i",{className:"far fa-heart"})," ","Saikat"]})})},N=function(e,t){var a=Object(s.useState)((function(){try{var a=localStorage.getItem(e);return a?JSON.parse(a):t}catch(s){return t}})),c=Object(f.a)(a,2),n=c[0],i=c[1];return[n,function(t){try{i(t),localStorage.setItem(e,JSON.stringify(t))}catch(a){console.log(a)}}]};var w=function(){var e=function(e,t){var a=new Blob([e],{type:t});return URL.createObjectURL(a)},t=N("html","<h2>Hello User</h2>"),a=Object(f.a)(t,2),c=a[0],n=a[1],i=N("css","body{\n  text-align:center;\n}"),d=Object(f.a)(i,2),j=d[0],b=d[1],x=N("js",""),h=Object(f.a)(x,2),p=h[0],u=h[1],O=Object(s.useState)(c),g=Object(f.a)(O,2),w=g[0],k=g[1],C=Object(s.useState)(j),S=Object(f.a)(C,2),T=S[0],E=S[1],H=Object(s.useState)(p),_=Object(f.a)(H,2),F=_[0],B=_[1],L=e(T,"text/css"),M=e(F,"text/javascript"),q="\n      <!DOCTYPE html>\n      <html>\n      <head>\n      ".concat(T&&'<link rel="stylesheet" type="text/css" href="'.concat(L,'" />'),'\n      <script src="https://code.jquery.com/jquery-3.5.1.min.js"\n      integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"><\/script>\n      </head>\n        <body>').concat(w,"\n        ").concat(F&&'<script src="'.concat(M,'"><\/script>'),"\n        </body>\n      </html>");return Object(s.useEffect)((function(){setTimeout((function(){}),500),n(w),b(T),u(F)}),[w,T,F]),Object(m.jsxs)("div",{children:[Object(m.jsx)(r.a,{fluid:!0,className:"pane pane-top",children:Object(m.jsxs)(l.a,{noGutters:!0,children:[Object(m.jsxs)(o.a,{md:4,className:"editor-lang",children:[Object(m.jsxs)("div",{className:"editor-text",children:[Object(m.jsx)("i",{className:"fab fa-html5",children:" "})," Html"]}),Object(m.jsx)(v,{launguage:"xml",value:w,onChange:function(e){k(e)}})]}),Object(m.jsxs)(o.a,{md:4,className:"editor-lang",children:[Object(m.jsxs)("div",{className:"editor-text",children:[Object(m.jsx)("i",{className:"fab fa-css3-alt"})," Css"]}),Object(m.jsx)(v,{launguage:"css",value:T,onChange:function(e){E(e)}})]}),Object(m.jsxs)(o.a,{md:4,className:"editor-lang",children:[Object(m.jsxs)("div",{className:"editor-text",children:[Object(m.jsx)("i",{className:"fab fa-js-square"})," Js"]}),Object(m.jsx)(v,{launguage:"javascript",value:F,onChange:function(e){B(e)}})]})]})}),Object(m.jsx)(r.a,{fluid:!0,className:"pane pane-bottom",children:Object(m.jsx)(l.a,{noGutters:!0,children:Object(m.jsx)("iframe",{srcDoc:q,className:"output-pane",allowFullScreen:!0})})}),Object(m.jsx)(y,{})]})},k=a(29),C=a(32),S=a(30),T=a.n(S);a(56);var E=function(e){var t={padding:"3px 10px",fontSize:"12px",lineHeight:"20px",margin:"3px"};return Object(m.jsx)("div",{children:Object(m.jsxs)("markdown-toolbar",{for:"textarea_input",children:[Object(m.jsx)("md-header",{level:"1",children:Object(m.jsx)(d.a,{style:t,variant:"info",children:Object(m.jsx)("i",{className:"fas fa-heading"})})}),Object(m.jsx)("md-bold",{children:Object(m.jsx)(d.a,{style:t,variant:"info",children:Object(m.jsx)("i",{className:"fas fa-bold"})})}),Object(m.jsx)("md-italic",{children:Object(m.jsx)(d.a,{style:t,variant:"info",children:Object(m.jsx)("i",{className:"fas fa-italic"})})}),Object(m.jsx)("md-quote",{children:Object(m.jsx)(d.a,{style:t,variant:"info",children:Object(m.jsx)("i",{className:"fas fa-quote-right"})})}),Object(m.jsx)("md-code",{children:Object(m.jsx)(d.a,{style:t,variant:"info",children:Object(m.jsx)("i",{className:"fas fa-code"})})}),Object(m.jsx)("md-link",{children:Object(m.jsx)(d.a,{style:t,variant:"info",children:Object(m.jsx)("i",{className:"fas fa-link"})})}),Object(m.jsx)("md-image",{children:Object(m.jsx)(d.a,{style:t,variant:"info",children:Object(m.jsx)("i",{className:"fas fa-image"})})}),Object(m.jsx)("md-unordered-list",{children:Object(m.jsx)(d.a,{style:t,variant:"info",children:Object(m.jsx)("i",{className:"fas fa-list-ul"})})}),Object(m.jsx)("md-ordered-list",{children:Object(m.jsx)(d.a,{style:t,variant:"info",children:Object(m.jsx)("i",{className:"fas fa-list-ol"})})}),Object(m.jsx)(d.a,{style:t,variant:"info",onClick:e.clickHandler,children:Object(m.jsx)("i",{className:"fas fa-file-download"})})]})})},H=a(31),_=a.n(H);var F=function(){var e=new k.a({html:!0,xhtmlOut:!0,langPrefix:"language-",quotes:"\u201c\u201d\u2018\u2019",typographer:!0});e.use(C.a);var t=N("mdEditor","## Welcome to Editor\n\n  **Features**\n  \n  - _Custom Toolbar_\n  - _Html Support_\n  - _Live Preview_\n  - _Download File_"),a=Object(f.a)(t,2),c=a[0],n=a[1],i=Object(s.useState)(""),d=Object(f.a)(i,2),j=d[0],b=d[1];return Object(s.useEffect)((function(){var t=e.render(c);b(t)}),[c]),Object(m.jsxs)("div",{children:[Object(m.jsx)(r.a,{fluid:!0,style:{background:"rgb(17 36 39 / 94%)",paddingTop:"30px",paddingBottom:"50px",fontFamily:"monospace",color:"wheat"},children:Object(m.jsxs)(l.a,{style:{justifyContent:"center",paddingLeft:"45px",paddingRight:"45px",paddingTop:"25px"},children:[Object(m.jsxs)(o.a,{md:6,className:"text-center",children:[Object(m.jsx)("h3",{className:"text-center",children:"Markdown Editor"}),Object(m.jsx)(E,{clickHandler:function(){_()(c,"README.md")}}),Object(m.jsx)(T.a,{id:"textarea_input",onChange:function(e){n(e.target.value)},value:c,style:{width:"100%",height:"auto",minHeight:"80vh",padding:"15px 15px",borderRadius:"2px",background:"white",boxShadow:"rgb(0 0 0 / 49%) 2px 2px 10px",border:0,outline:"none"}})]}),Object(m.jsxs)(o.a,{md:6,style:{paddingTop:"35px"},children:[Object(m.jsx)("h3",{className:"text-center",children:" Html Preview"}),Object(m.jsx)("div",{dangerouslySetInnerHTML:{__html:j},style:{width:"100%",height:"auto",minHeight:"80vh",padding:"15px 15px",borderRadius:"2px",background:"white",boxShadow:"rgb(0 0 0 / 49%) 2px 2px 10px",backgroundColor:"#f3f3f3",color:"black"}})]})]})}),Object(m.jsx)(y,{})]})};var B=function(){return Object(m.jsx)("div",{children:Object(m.jsx)(F,{})})},L=a(3);var M=function(){return Object(m.jsx)(u.a,{children:Object(m.jsxs)(L.c,{children:[Object(m.jsx)(L.a,{path:"/",exact:!0,component:O}),Object(m.jsx)(L.a,{path:"/web",component:w}),Object(m.jsx)(L.a,{path:"/markdown",component:B})]})})},q=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,61)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),s(e),c(e),n(e),i(e)}))};i.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(M,{})}),document.getElementById("root")),q()}},[[57,1,2]]]);
//# sourceMappingURL=main.0d13eb4f.chunk.js.map