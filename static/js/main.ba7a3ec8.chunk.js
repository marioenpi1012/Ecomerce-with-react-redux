(this.webpackJsonpecomerce=this.webpackJsonpecomerce||[]).push([[0],{106:function(e,t,a){"use strict";a.r(t);var i=a(1),c=a.n(i),n=a(32),r=a.n(n),s=(a(62),a(38)),o=a.n(s),l=a(53),d=a(7),j=(a(64),a(5)),u=a(37),m=a.n(u),b=a(8),_="products",h="selectedProduct",O="addedToCart",p="removedFromCart",v="addedQty",x="subQty",f="changeQty",y="filter",g=a(28),N=a(4),C=function(e){var t=0;return e.map((function(e){t+=Number(e.qty)})),t},w=a(2),S=a(12),k=a.n(S),P=a(0),I=function(){var e=Object(w.useCycle)(!1,!0),t=Object(d.a)(e,2),a=t[0],c=t[1],n=Object(j.c)((function(e){return e.cart.cart})),r=document.querySelector("body"),s=Object(i.useState)(!0),o=Object(d.a)(s,2),l=o[0],u=o[1],m=Object(i.useRef)(),b=Object(i.useState)(0),_=Object(d.a)(b,2),h=_[0],O=_[1];Object(i.useEffect)((function(){var e=function(){var e=window.scrollY,t=e<h;m.current.clientHeight>e?u(!0):u(t),O(e)};return window.addEventListener("scroll",e,!1),function(){window.removeEventListener("scroll",e,!1)}}),[h]),a&window.innerWidth<=769?r.style.overflowY="hidden":r.style.overflowY="auto";var p={open:{y:0,opacity:1,transition:{y:{stiffness:1e3,velocity:-100}}},closed:{y:50,opacity:0,transition:{y:{stiffness:1e3}}}},v={open:{transition:{staggerChildren:.07,delayChildren:.9}},closed:{transition:{staggerChildren:.05,staggerDirection:-1},opacity:l?1:0}};return Object(P.jsxs)(w.motion.nav,{className:k.a.Nav,ref:m,initial:[!1,{opacity:1}],animate:{opacity:l?1:0},transition:{opacity:{duration:.2}},children:[Object(P.jsx)("div",{className:k.a.logo,children:Object(P.jsx)(N.c,{to:"",children:"Narvick's Luxury Store"})}),Object(P.jsxs)(w.motion.ul,{className:a?"".concat(k.a.links," ").concat(k.a.open):"".concat(k.a.links),variants:v,animate:a?"open":"closed",children:[Object(P.jsx)(w.motion.li,{variants:p,whileHover:{scale:1.1},whileTap:{scale:.95},children:Object(P.jsx)(N.c,{to:"/shop",onClick:function(){return c()},activeClassName:k.a.current,children:"shop"})}),Object(P.jsx)(w.motion.li,{variants:p,whileHover:{scale:1.1},whileTap:{scale:.95},children:Object(P.jsx)(N.c,{to:"/about",onClick:function(){return c()},activeClassName:k.a.current,children:"about"})}),Object(P.jsx)(w.motion.li,{variants:p,whileHover:{scale:1.1},whileTap:{scale:.95},children:Object(P.jsx)(N.c,{to:"/contact",onClick:function(){return c()},activeClassName:k.a.current,children:"contact"})})]}),Object(P.jsxs)("div",{className:a?"".concat(k.a.menu," ").concat(k.a.open):"".concat(k.a.menu),children:[Object(P.jsx)(w.motion.div,{className:k.a.cart,whileHover:{scale:1.1},whileTap:{scale:.9},"data-items":C(n),children:Object(P.jsx)(N.c,{to:"/cart",children:Object(P.jsx)(g.b,{})})}),Object(P.jsx)("div",{className:k.a.mobileMenu,onClick:function(){return c()},children:Object(P.jsx)("div",{className:k.a.burgerMenu})})]})]})},q=a(56),T=a(31),F=a.n(T),H=function(e){var t=e.product,a=(e.loading,Object(j.b)()),i=Object(b.f)();return Object(P.jsxs)(w.motion.div,{variants:{hidden:{opacity:0},start:{opacity:1},end:{opacity:0,scale:1}},initial:"hidden",animate:"start",exit:"end",className:F.a.item,id:t.id,children:[Object(P.jsx)("div",{className:F.a.image,children:Object(P.jsx)("img",{src:t.image,alt:"image",width:"200",height:"200"})}),Object(P.jsx)("div",{className:F.a.title,children:t.title}),Object(P.jsxs)("div",{className:F.a.price,children:["$",t.price]}),Object(P.jsx)(N.c,{to:{pathname:"/viewing",state:{prevPath:i.pathname}},children:Object(P.jsx)("input",{id:"quickView",type:"button",value:"quick view","data-button-id":t.id,onClick:function(){return a((e=t.id,{type:h,payload:{id:e}}));var e}})})]},t.id)},E=a.p+"static/media/landingPage.4c7c9b4f.png",A=a(3),B=a(27),L=a.n(B),R=a(18),V=a(41);a(102),a(103),a(104),a(105);R.c.use([R.a,R.b]);var M=function(e){var t=e.data,a=(Object(i.useRef)(null),Object(i.useState)(0)),c=Object(d.a)(a,2);c[0],c[1];console.log(t.length);var n=Object(i.useRef)(null),r=Object(i.useRef)(null),s=Object(i.useRef)(null),o={observer:!0,observerParents:!0,navigation:{prevEl:n.current,nextEl:r.current},pagination:{el:s.current},loop:!0,breakpoints:{1378:{slidesPerView:5,slidesPerGroup:5},998:{slidesPerView:4,slidesPerGroup:4},768:{slidesPerView:3,slidesPerGroup:3},600:{sliderPerView:1,slidesPerGroup:1}},spaceBetween:30};return Object(P.jsx)("div",{className:L.a.Slider,children:Object(P.jsxs)("div",{className:L.a.container,children:[Object(P.jsx)("div",{className:"swiper-button-prev",ref:n}),Object(P.jsx)("div",{className:"swiper-button-next",ref:r}),Object(P.jsx)("div",{className:"swiper-pagination ".concat(L.a.pagination),ref:s}),Object(P.jsx)(V.a,Object(A.a)(Object(A.a)({},o),{},{className:L.a.items,onBeforeInit:function(e){e.params.navigation.prevEl=n.current,e.params.navigation.nextEl=r.current,e.params.pagination.el=s.current},children:t.map((function(e){return Object(P.jsx)(V.b,{children:Object(P.jsx)(H,{className:L.a.item,product:e},e.id)},e.id)}))}))]})})},G=a(20),W=a.n(G),D=function(){var e=Object(j.c)((function(e){return e.cart.products})).filter((function(e){return Number(e.rating.rate)>3.5}));return Object(P.jsxs)(w.motion.div,{className:W.a.Home,variants:{hidden:{opacity:0,x:"100vw"},start:{opacity:1,x:0,transition:{when:"beforeChildren",staggerChildren:.4,duration:1}},exit:{x:"-100vw",transition:{ease:"easeInOut",duration:1}}},initial:"hidden",animate:"start",exit:"exit",children:[Object(P.jsxs)("div",{className:W.a.landing,children:[Object(P.jsx)("div",{className:W.a.bgImage,style:{backgroundImage:'url("'.concat(E,'")')}}),Object(P.jsxs)("div",{className:W.a.container,children:[Object(P.jsx)("div",{className:W.a.text,children:Object(P.jsx)("p",{children:"Shop our awesome inventory of clothing, jewelry, and electronics "})}),Object(P.jsx)("div",{className:W.a.btn,children:Object(P.jsx)(N.c,{to:"/shop",children:Object(P.jsx)(w.motion.input,{type:"button",id:"collectionBtn",value:"Check Our Collection",whileHover:{scale:1.1},whileTap:{scale:.9}})})})]}),Object(P.jsx)("div",{className:W.a.arrow,children:Object(P.jsx)(q.a,{to:"/#topRated",children:Object(P.jsx)(w.motion.div,{whileHover:{scale:1.1},whileTap:{scale:.9},children:Object(P.jsx)(g.a,{})})})})]}),Object(P.jsx)("div",{id:"topRated"}),Object(P.jsxs)("div",{className:W.a.sliderWrapper,children:[Object(P.jsx)(w.motion.div,{className:W.a.topRated,initial:"offscreen",whileInView:"onscreen",viewport:{once:!1,amount:.8,margin:"0% 0px -30% 0px"},transition:{delay:1},children:Object(P.jsx)(w.motion.div,{variants:{offscreen:{x:"100%",opacity:0},onscreen:{x:0,opacity:1,transition:{duration:1}}},children:"Top Rated"})}),Object(P.jsx)(M,{data:e})]})]})},X=function(e){var t=0;return e.map((function(e){var a,i;t+=(a=e.qty,i=e.price,a*i)})),"$"+new Intl.NumberFormat("en-US").format(t)},Q=a(17),J=a.n(Q),U=function(e){var t=e.item,a=e.added,i=e.setAdded,c=(Object(j.c)((function(e){return e.cart.itemsInCart})),Object(j.c)((function(e){return e.cart.cart})));return Object(P.jsxs)("div",{className:J.a.cartPreview,style:a?{display:"block"}:{display:"none"},children:[Object(P.jsx)("div",{className:J.a.titles,children:Object(P.jsxs)("div",{className:J.a.controlBtn,children:[Object(P.jsx)(N.c,{to:"/shop",children:"Continue Shopping"}),Object(P.jsx)(N.c,{to:"/viewing",className:J.a.close,onClick:function(){i(!a)},children:"X"})]})}),Object(P.jsx)("div",{className:J.a.container,children:Object(P.jsxs)("div",{className:J.a.addedItem,children:[Object(P.jsx)("div",{className:J.a.itemImg,children:Object(P.jsx)("img",{src:t.image,alt:""})}),Object(P.jsxs)("div",{className:J.a.addedItemInfo,children:[Object(P.jsxs)("div",{className:J.a.addedItemQty,children:["QTY: ",t.qty]}),Object(P.jsxs)("div",{className:J.a.addedItemPrice,children:["$",t.price]})]})]})}),Object(P.jsxs)("div",{className:J.a.cartContainer,children:[Object(P.jsxs)("div",{className:J.a.cartInfo,children:["Cart Subtotal (",C(c)," ",C(c)<2?"item":"items","): ",X(c)]}),Object(P.jsx)(N.c,{to:"/cart",children:Object(P.jsx)(w.motion.input,{type:"button",value:"Go to Cart",whileHover:{scale:1.1},whileTap:{scale:.9}})})]})]})},Y=a(19),K=a.n(Y),$=function(){var e,t=Object(j.c)((function(e){return e.cart.viewing})),a=Object(j.c)((function(e){return e.cart.cart})).find((function(e){return e.id===t.id})),c=Object(i.useState)("1"),n=Object(d.a)(c,2),r=n[0],s=n[1],o=Object(b.f)(),l=null===o||void 0===o||null===(e=o.state)||void 0===e?void 0:e.prevPath,u=Object(j.b)(),m=Object(i.useState)(!1),_=Object(d.a)(m,2),h=_[0],p=_[1],v=function(e){u(function(e){return{type:O,payload:{id:e}}}(e)),p(!h),setTimeout((function(){p(h)}),3e3)},x={hidden:{x:"100vw",opacity:0},start:{x:0,opacity:1,transition:{duration:1}},end:{x:"100vw",opacity:0}};return Object(P.jsxs)(w.motion.div,{className:K.a.SelectedProduct,variants:{hidden:{backgroundColor:"#ffffff"},start:{transition:{type:"spring",stiffness:300,mass:.4,damping:8,when:"beforeChildren"}},exit:{backgroundColor:"#ffffff",transition:{ease:"easeIn"}}},exit:"exit",children:[Object(P.jsx)("div",{className:K.a.close,children:Object(P.jsx)(N.c,{to:l,children:"X"})}),Object(P.jsxs)(w.motion.div,{className:K.a.container,id:"container",style:h?{filter:"blur(1px)"}:{},variants:{hidden:{opacity:0},start:{opacity:1,transition:{delayChildren:.2,staggerChildren:.07}},end:{transition:{staggerChildren:.05,stagerDirection:-1}}},exit:"end",children:[Object(P.jsx)(w.motion.div,{className:K.a.image,variants:x,initial:"hidden",animate:"start",exit:"end",children:Object(P.jsx)("img",{src:t.image,alt:"image"})}),Object(P.jsxs)(w.motion.div,{className:K.a.itemInfo,variants:x,initial:"hidden",animate:"start",exit:"end",children:[Object(P.jsx)("div",{className:K.a.title,children:t.title}),Object(P.jsxs)("div",{className:K.a.price,children:["$",t.price]}),Object(P.jsx)("div",{className:K.a.description,children:t.description}),Object(P.jsx)("div",{className:K.a.qty,children:Object(P.jsx)("input",{type:"number",name:"add-qty",value:a?a.qty:r,onChange:function(e){return function(e){s(e.target.value)}(e)},id:"add-qty",min:"1"})}),Object(P.jsx)(w.motion.input,{type:"submit",value:"Add To Cart",className:K.a.addToCart,onClick:function(){return v(t.id)},whileHover:{scale:1.1},whileTap:{scale:.9}})]})]}),Object(P.jsx)(U,{added:h,setAdded:p,item:t}),";"]})},z=a(23),Z=a.n(z),ee=function(e){var t=e.loading,a=Object(j.b)(),c=Object(j.c)((function(e){return e.cart.filterBy})),n=Object(i.useState)(""),r=Object(d.a)(n,2),s=r[0],o=r[1],l=function(e){var t=e.target.value;a({type:y,payload:{type:t}})},u=function(){switch(s){case"asc":return c.slice().sort((function(e,t){return e.price-t.price}));case"desc":return c.slice().sort((function(e,t){return t.price-e.price}));default:return c}}();return Object(P.jsx)(w.AnimatePresence,{exitBeforeEnter:"exitBeforeEnter",children:Object(P.jsxs)(w.motion.div,{className:Z.a.Shop,variants:{hidden:{opacity:0,x:"100vw"},start:{opacity:1,x:0,transition:{when:"beforeChildren",staggerChildren:.4}},exit:{x:"-100vw",opacity:0,delay:1,transition:{ease:"easeInOut",delayChildren:.8}}},initial:"hidden",animate:"start",exit:"exit",transition:{delay:1,duration:2},children:[Object(P.jsx)("div",{className:Z.a.filter,children:Object(P.jsxs)("select",{name:"filter-category",id:"filter-category",onChange:function(e){return l(e)},children:[Object(P.jsx)("option",{value:"default",children:"Filter By Category (Default):"}),Object(P.jsx)("option",{value:"women's clothing",children:"Women's Clothing"}),Object(P.jsx)("option",{value:"men's clothing",children:"Men's Clothing"}),Object(P.jsx)("option",{value:"jewelery",children:"Jewelery"}),Object(P.jsx)("option",{value:"electronics",children:"Electronics"})]})}),Object(P.jsx)("div",{className:"".concat(Z.a.filter," ").concat(Z.a.filterPrice),children:Object(P.jsxs)("select",{name:"filter-price",id:"filter-price",onChange:function(e){return o(e.target.value)},children:[Object(P.jsx)("option",{value:"normal",children:"Filter By Price (Default)"}),Object(P.jsx)("option",{value:"desc",children:"Highest Price"}),Object(P.jsx)("option",{value:"asc",children:"Lowest Price"})]})}),Object(P.jsx)("div",{className:Z.a.Product,children:Object(P.jsx)("div",{className:Z.a.container,children:Object(P.jsx)(w.LayoutGroup,{children:Object(P.jsx)(w.motion.div,{className:Z.a.items,children:Object(P.jsx)(w.AnimatePresence,{children:u.map((function(e){return Object(P.jsx)(H,{loading:t,product:e},e.id)}))})})})})})]})})},te=a(9),ae=a.n(te),ie=function(){var e=Object(j.c)((function(e){return e.cart.cart})),t=(Object(j.c)((function(e){return e.cart.total})),Object(j.c)((function(e){return e.cart})),Object(j.b)()),a=Object(b.f)(),c=Object(i.useState)(!1),n=Object(d.a)(c,2),r=(n[0],n[1]),s=Object(w.usePresence)(),o=Object(d.a)(s,2),l=o[0],u=o[1];Object(i.useEffect)((function(){!l&&setTimeout(u,1e3),"complete"===document.readyState&&(console.log(a.pathname),r(!0))}),[l]);var m={hidden:{y:-50,opacity:0,transition:{y:{stiffness:1e3}}},start:{y:0,opacity:1,transition:{y:{stiffness:1e3,velocity:-100}}},end:{y:-50,opacity:0,transition:{y:{stiffness:1e3,velocity:-100}}}};return Object(P.jsx)(w.motion.div,{className:ae.a.Cart,variants:{hidden:{opacity:0,x:"100vw"},start:{opacity:1,x:0,transition:{when:"beforeChildren",staggerChildren:.4,duration:1}},end:{x:"-100vw",transition:{ease:"easeInOut",when:"afterChildren",delay:1,delayChildren:.5}}},initial:"hidden",animate:"start",exit:"end",children:e.length>0?Object(P.jsxs)("div",{className:ae.a.container,children:[Object(P.jsxs)("div",{className:ae.a.labels,children:[Object(P.jsx)("div",{className:ae.a.title,children:"Title"}),Object(P.jsx)("div",{className:ae.a.quantity,children:"Quantity"}),Object(P.jsx)("div",{className:ae.a.price,children:"Price"})]}),Object(P.jsxs)(w.motion.div,{id:"itemsAnimation",className:ae.a.items,variants:{start:{transition:{staggerChildren:.07,delayChildren:.9}},end:{transition:{staggerChildren:.05,staggerDirection:-1}}},transition:{opacity:{duration:.2}},initial:"hidden",animate:"start",exit:"end",children:[e.map((function(e){return Object(P.jsxs)(w.motion.div,{className:ae.a.item,variants:m,children:[Object(P.jsx)("div",{className:ae.a.remove,children:Object(P.jsx)("input",{type:"button",value:"X",onClick:function(){return t((a=e.id,{type:p,payload:{id:a}}));var a}})}),Object(P.jsxs)("div",{className:ae.a.info,children:[Object(P.jsx)("div",{className:ae.a.image,children:Object(P.jsx)("img",{src:e.image,alt:""})}),Object(P.jsx)("div",{className:ae.a.title,children:e.title})]}),Object(P.jsx)("div",{className:ae.a.qty,children:Object(P.jsx)("input",{type:"number",name:"qty",min:"1",max:"100",id:"qty",defaultValue:e.qty,"data-id":e.id,onChange:function(){return t((a=e.id,{type:f,payload:{id:a}}));var a}})}),Object(P.jsxs)("div",{className:ae.a.price,children:["$",e.price.toFixed(2)]})]},e.id)})),Object(P.jsxs)("div",{className:ae.a.subtotal,children:["Subtotal: ",X(e)]}),Object(P.jsx)("div",{className:ae.a.checkout,children:Object(P.jsx)(w.motion.input,{className:ae.a.checkoutBtn,type:"button",value:"checkout",whileHover:{scale:1.1},whileTap:{scale:.9}})})]},"itemsAnimation")]}):Object(P.jsxs)("div",{className:ae.a.msg,children:["The cart is empty, continue",Object(P.jsx)(N.c,{to:"/shop",children:"Shopping"}),"."]})},"Cart")},ce=a.p+"static/media/logo.6e887384.jpg",ne=a.p+"static/media/designers.0ed6b744.jpg",re=function(){var e={offscreen:{},onscreen:{position:"sticky",top:0}};return Object(P.jsxs)("div",{className:"About",children:[Object(P.jsx)("div",{className:"header",children:"Our Story"}),Object(P.jsxs)("div",{className:"container",children:[Object(P.jsxs)(w.motion.div,{className:"brand",variants:e,initial:"offscreen",whileInView:"onscreen",children:[Object(P.jsx)("div",{className:"title",children:"The brand"}),Object(P.jsx)("div",{className:"line"}),Object(P.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias consectetur atque quasi pariatur modi consequatur minus placeat doloremque, sed possimus repellat reiciendis deserunt beatae mollitia."}),Object(P.jsx)("p",{children:"Hic cumque quas autem dolore quaerat in eligendi rem? Ab vitae odio voluptatum iste soluta esse ratione ipsa. Deserunt quae error non, iure laboriosam amet."})]}),Object(P.jsx)(w.motion.div,{variants:e,initial:"offscreen",whileInView:"onscreen",className:"image",style:{backgroundImage:'url("'.concat(ce,'")')}}),Object(P.jsxs)(w.motion.div,{className:"designers",variants:e,initial:"offscreen",whileInView:"onscreen",children:[Object(P.jsx)("div",{className:"title",children:"The Designers"}),Object(P.jsx)("div",{className:"line"}),Object(P.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque minima unde laudantium esse recusandae optio porro, sunt deserunt blanditiis voluptates vero asperiores quam cumque officia."}),Object(P.jsx)("p",{children:"Reiciendis quas consequuntur eligendi aliquam ab nulla officiis esse molestias ullam cupiditate praesentium doloremque atque dolorem, illum, fuga nihil? Tempora error earum nemo debitis labore!"})]}),Object(P.jsx)(w.motion.div,{className:"image",id:"designer-image",variants:e,initial:"offscreen",whileInView:"onscreen",style:{backgroundImage:'url("'.concat(ne,'")')}})]})]})},se=a(6),oe=a.n(se),le=function(){return Object(P.jsxs)("div",{className:oe.a.Contact,children:[Object(P.jsx)("div",{className:oe.a.header,children:"Get in touch"}),Object(P.jsxs)("div",{className:oe.a.container,children:[Object(P.jsx)("div",{className:oe.a.miniHeader,children:"Customer Service"}),Object(P.jsx)("div",{className:oe.a.line}),Object(P.jsxs)("div",{className:oe.a.info,children:[Object(P.jsxs)("div",{className:oe.a.store,children:[Object(P.jsx)("div",{className:oe.a.title,children:"Flagship Store"}),Object(P.jsx)("div",{className:oe.a.text,children:"Downtown Houston, Houston, TX"})]}),Object(P.jsxs)("div",{className:oe.a.hours,children:[Object(P.jsx)("div",{className:oe.a.title,children:"Opening Hours"}),Object(P.jsxs)("div",{className:oe.a.text,children:[Object(P.jsx)("div",{children:"Monday-Friday"}),Object(P.jsx)("div",{children:"9:00am - 7:00pm EST"})]})]}),Object(P.jsxs)("div",{className:oe.a.contact,children:[Object(P.jsx)("div",{className:oe.a.title,children:"Contact us"}),Object(P.jsxs)("div",{className:oe.a.text,children:[Object(P.jsx)("div",{className:oe.a.number,children:"1-9000-00-000"}),Object(P.jsx)("div",{className:oe.a.email,children:"info@store.com"})]})]})]}),Object(P.jsxs)("div",{className:oe.a.inquiries,children:[Object(P.jsx)("div",{className:oe.a.miniHeader,children:"Inquiries"}),Object(P.jsx)("p",{children:"For questions regarding our products and services you can also contact us by filling out the form below."})]}),Object(P.jsx)("div",{className:oe.a.form,children:Object(P.jsxs)("form",{action:"",children:[Object(P.jsxs)("div",{className:oe.a.fullName,children:[Object(P.jsx)("label",{htmlFor:"name",children:"First Name"}),Object(P.jsx)("input",{type:"text",id:"input-first-name",className:oe.a.name}),Object(P.jsx)("label",{htmlFor:"last-name",id:"last-name",children:"Last Name"}),Object(P.jsx)("input",{type:"text"})]}),Object(P.jsx)("label",{htmlFor:"email",children:"Email"}),Object(P.jsx)("input",{type:"email",name:"email"}),Object(P.jsx)("label",{htmlFor:"subject",children:"Subject"}),Object(P.jsx)("input",{type:"text",name:"subject"}),Object(P.jsx)("label",{htmlFor:"message",children:"Message"}),Object(P.jsx)("textarea",{name:"message",id:"message",cols:"30",rows:"10"}),Object(P.jsx)("input",{type:"submit",value:"Submit"})]})})]})]})},de=a(21),je=a.n(de),ue=function(){return Object(P.jsx)("div",{className:je.a.Footer,children:Object(P.jsxs)("div",{className:je.a.container,children:[Object(P.jsx)("div",{className:je.a.logo,children:Object(P.jsx)(N.c,{to:"/",children:"Narvick's Luxury Store"})}),Object(P.jsxs)("div",{className:je.a.links,children:[Object(P.jsxs)("div",{className:je.a.navLinks,children:[Object(P.jsx)(N.c,{to:"/",children:"Home"}),Object(P.jsx)(N.c,{to:"/shop",children:"Shop "}),Object(P.jsx)(N.c,{to:"/about",children:"About "}),Object(P.jsx)(N.c,{to:"/contact",children:"Contact "})]}),Object(P.jsx)("div",{className:je.a.infoLinks,children:Object(P.jsxs)("ul",{children:[Object(P.jsx)("li",{children:"FAQ"}),Object(P.jsx)("li",{children:"Shipping & Returns"}),Object(P.jsx)("li",{children:"Store Policy"})]})}),Object(P.jsx)("div",{className:je.a.socialLinks,children:Object(P.jsxs)("ul",{children:[Object(P.jsx)("li",{children:"Instagram"}),Object(P.jsx)("li",{children:"Facebook"})]})})]}),Object(P.jsxs)("div",{className:je.a.join,children:[Object(P.jsx)("div",{className:je.a.header,children:"Join Us!"}),Object(P.jsxs)("form",{action:"",children:[Object(P.jsx)("label",{htmlFor:"email",children:"Email"}),Object(P.jsx)("input",{type:"email",name:"email",id:"email"}),Object(P.jsx)(w.motion.input,{type:"submit",value:"Submit",whileHover:{scale:1.1},whileTap:{scale:.9}})]})]})]})})},me=a(24),be=a.n(me),_e=function(){for(var e=[],t=0;t<20;t++)e.push(Object(P.jsx)("div",{className:be.a.skeletonItem},t));return Object(P.jsxs)("div",{className:be.a.skeletonShop,children:[Object(P.jsx)("div",{className:be.a.skeletonFilter}),Object(P.jsx)("div",{className:be.a.skeletonFilter}),Object(P.jsx)("div",{className:be.a.skeletonProduct,children:Object(P.jsx)("div",{className:be.a.skeletonContainer,children:Object(P.jsx)("div",{className:be.a.skeletonItems,children:e})})})]})};var he=function(){var e=Object(j.b)(),t=Object(i.useState)(""),a=Object(d.a)(t,2),c=a[0],n=a[1],r=Object(b.f)(),s=function(){var t=Object(l.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(!0),t.next=3,m.a.get("https://fakestoreapi.com/products").then((function(t){var a;e((a=t.data,{type:_,payload:{products:a}}))})).catch((function(e){console.log("err",e)}));case 3:t.sent,n(!1);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(i.useEffect)((function(){s()}),[]),Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(I,{}),Object(P.jsx)(w.AnimatePresence,{exitBeforeEnter:!0,children:Object(P.jsxs)(b.c,{location:r,children:[Object(P.jsx)(b.a,{path:"/",exact:!0,children:Object(P.jsx)(D,{})}),Object(P.jsx)(b.a,{path:"/shop",children:c?Object(P.jsx)(_e,{data:s}):Object(P.jsx)(ee,{})}),Object(P.jsx)(b.a,{path:"/viewing",component:$}),Object(P.jsx)(b.a,{path:"/cart",component:ie}),Object(P.jsx)(b.a,{path:"/about",component:re}),Object(P.jsx)(b.a,{path:"/contact",component:le})]},r.pathname)}),Object(P.jsx)(ue,{})]})},Oe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,108)).then((function(t){var a=t.getCLS,i=t.getFID,c=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),i(e),c(e),n(e),r(e)}))},pe=a(26),ve=a(11),xe={products:[],cart:[],filterBy:[],viewing:"",itemsInCart:0,total:0},fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return Object(A.a)(Object(A.a)(Object(A.a)({},e),t.payload),{},{filterBy:t.payload.products});case O:var a=t.payload.id,i=e.products.find((function(e){return e.id===a})),c=Number(document.getElementById("add-qty").value);console.log(c);var n=e.cart.find((function(e){return e.id===a}));if(n)return Object(A.a)(Object(A.a)({},e),{},{total:e.total+i.price*c,cart:e.cart.map((function(e){return e.id===a?Object(A.a)(Object(A.a)({},e),{},{qty:e.qty+c}):e})),itemsInCart:e.itemsInCart+c});i.qty=c;var r=e.total+i.price*i.qty,s=e.itemsInCart+c;return Object(A.a)(Object(A.a)({},e),{},{cart:[].concat(Object(ve.a)(e.cart),[i]),itemsInCart:s,total:r});case p:var o=e.cart.find((function(e){return t.payload.id===e.id})),l=e.total-o.price*o.qty;return Object(A.a)(Object(A.a)({},e),{},{cart:e.cart.filter((function(e){return e.id!==t.payload.id})),total:l,itemsInCart:e.itemsInCart-o.qty});case v:var d=e.products.find((function(e){return e.id===t.payload.id}));d.qty+=1;var j=e.total+d.price;return Object(A.a)(Object(A.a)({},e),{},{total:j});case x:var u=e.products.find((function(e){return e.id===t.payload.id}));if(1===u.qty){var m=e.cart.filter((function(e){return e.id!==t.payload.id})),b=e.total-u.price;return Object(A.a)(Object(A.a)({},e),{},{cart:m,total:b})}u.qty-=1;var g=e.total-u.price;return Object(A.a)(Object(A.a)({},e),{},{total:g});case h:var N=t.payload.id,C=e.products.find((function(e){return e.id===N}));return Object(A.a)(Object(A.a)({},e),{},{viewing:C});case f:var w=e.cart.find((function(e){return e.id===t.payload.id})),S=w.qty,k=document.querySelector('[data-id="'.concat(w.id,'"]')).value,P=k-S,I=e.total+w.price*P;if(w.qty=k,0==w.qty){var q=e.total-w.price;return Object(A.a)(Object(A.a)({},e),{},{cart:e.cart.filter((function(e){return e.id!==t.payload.id})),total:q,itemsInCart:e.itemsInCart-1})}return Object(A.a)(Object(A.a)({},e),{},{cart:Object(ve.a)(e.cart),total:I,itemsInCart:e.itemsInCart+P});case y:switch(t.payload.type){case"default":return Object(A.a)(Object(A.a)({},e),{},{filterBy:e.products});case"women's clothing":case"men's clothing":case"jewelery":case"electronics":return Object(A.a)(Object(A.a)({},e),{},{filterBy:e.products.filter((function(e){return e.category===t.payload.type}))});default:return e}default:return e}},ye=Object(pe.b)({cart:fe}),ge=a(57),Ne=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||pe.c,Ce=Object(pe.d)(ye,Ne(Object(pe.a)(ge.a)));r.a.render(Object(P.jsx)(j.a,{store:Ce,children:Object(P.jsx)(c.a.StrictMode,{children:Object(P.jsx)(N.a,{children:Object(P.jsx)(he,{})})})}),document.getElementById("root")),Oe()},12:function(e,t,a){e.exports={Nav:"Nav_Nav__19J8N",logo:"Nav_logo__26JPi",links:"Nav_links__1WqW1",menu:"Nav_menu__lWRc5",cart:"Nav_cart__1unBO",current:"Nav_current__Elw0a",open:"Nav_open__1oNz1",burgerMenu:"Nav_burgerMenu__2VH3V",mobileMenu:"Nav_mobileMenu__3Is_-"}},17:function(e,t,a){e.exports={cartPreview:"AddedToCart_cartPreview__1i4-X",titles:"AddedToCart_titles__ENwHI",controlBtn:"AddedToCart_controlBtn__2lXOW",container:"AddedToCart_container__2l3Rb",addedItem:"AddedToCart_addedItem__3r0b9",itemImg:"AddedToCart_itemImg__3ymw7",addedItemInfo:"AddedToCart_addedItemInfo__1Vfg9",cartContainer:"AddedToCart_cartContainer__1itej",cartInfo:"AddedToCart_cartInfo__n1q1N"}},19:function(e,t,a){e.exports={SelectedProduct:"SelectedProduct_SelectedProduct__1Xc0R",close:"SelectedProduct_close__3u7mW",container:"SelectedProduct_container__27n07",image:"SelectedProduct_image__1tFjp",itemInfo:"SelectedProduct_itemInfo__3dpRw",title:"SelectedProduct_title__3wc6a",description:"SelectedProduct_description__23LlP",price:"SelectedProduct_price__1bOuo",addToCart:"SelectedProduct_addToCart__1S9zd",qty:"SelectedProduct_qty__1Zmq2",Selected:"SelectedProduct_Selected__3wvfx",cartPreview:"SelectedProduct_cartPreview__Ws0bX"}},20:function(e,t,a){e.exports={Home:"Home_Home__21njY",landing:"Home_landing__2ycEg",bgImage:"Home_bgImage__TaIXa",container:"Home_container__1itaz",text:"Home_text__IMH08",btn:"Home_btn__2mv0-",arrow:"Home_arrow__2ShDE",sliderWrapper:"Home_sliderWrapper__1De2O",topRated:"Home_topRated__nKTsm"}},21:function(e,t,a){e.exports={Footer:"Footer_Footer__pGEej",container:"Footer_container__30peG",logo:"Footer_logo__29ZEW",links:"Footer_links__1J_Na",infoLinks:"Footer_infoLinks__38tNK",navLinks:"Footer_navLinks__1ynlM",socialLinks:"Footer_socialLinks__2qf6s",join:"Footer_join__3aC5y",header:"Footer_header__11cdl"}},23:function(e,t,a){e.exports={Shop:"Products_Shop___YBmf",filter:"Products_filter__1JC73",Product:"Products_Product__21S4A",container:"Products_container__27kcq",items:"Products_items__3wnS5",item:"Products_item__1Y4eB",image:"Products_image__4x6rF",title:"Products_title__2rDqF",price:"Products_price__KyPs8",quicView:"Products_quicView__16gs0"}},24:function(e,t,a){e.exports={skeletonShop:"Skeleton_skeletonShop__2yZsU",skeletonFilter:"Skeleton_skeletonFilter__1AGSm",skeleton:"Skeleton_skeleton__mQhG2",skeletonProduct:"Skeleton_skeletonProduct__1uSJG",skeletonContainer:"Skeleton_skeletonContainer__3HlmG",skeletonItems:"Skeleton_skeletonItems__2cvUf",skeletonItem:"Skeleton_skeletonItem__hSWP0",image:"Skeleton_image__2H9bs",title:"Skeleton_title__2fvqv",price:"Skeleton_price__3DbTb"}},27:function(e,t,a){e.exports={Slider:"Slider_Slider__vGAKB",container:"Slider_container__3pXpr",pagination:"Slider_pagination__XvMPc",items:"Slider_items__3I3th",item:"Slider_item__3qe-h",image:"Slider_image__fM3R0",title:"Slider_title__2Al99",price:"Slider_price__82Jw7"}},31:function(e,t,a){e.exports={item:"Product_item__30QE-",image:"Product_image__ns04E",title:"Product_title__11ErA",price:"Product_price__Ha3M6"}},6:function(e,t,a){e.exports={Contact:"Contact_Contact__2fj2W",header:"Contact_header__1nWf6",container:"Contact_container__q_RWh",miniHeader:"Contact_miniHeader__3Omkg",line:"Contact_line__37P-O",info:"Contact_info__39V2V",title:"Contact_title__3mQUC",text:"Contact_text__kNRMA",inquiries:"Contact_inquiries__1NQb1",form:"Contact_form__2Uc1Y",fullName:"Contact_fullName__3iGwI","last-name":"Contact_last-name__2bRIk",contact:"Contact_contact__QXbK0",hours:"Contact_hours__2s2EA",store:"Contact_store__1ayzj"}},62:function(e,t,a){},64:function(e,t,a){},9:function(e,t,a){e.exports={Cart:"Cart_Cart__3hUr_",msg:"Cart_msg__1t4G8",container:"Cart_container__k_W63",labels:"Cart_labels__2dRGa",title:"Cart_title__1F0bc",item:"Cart_item__2b8Lr",items:"Cart_items__inb-q",remove:"Cart_remove__OjQc_",info:"Cart_info__2TQwD",image:"Cart_image__31e4M",qty:"Cart_qty__1JXue",price:"Cart_price__3g9VS",checkout:"Cart_checkout__sXwuv",subtotal:"Cart_subtotal__1ZBJH",checkoutBtn:"Cart_checkoutBtn__1UyBs"}}},[[106,1,2]]]);
//# sourceMappingURL=main.ba7a3ec8.chunk.js.map