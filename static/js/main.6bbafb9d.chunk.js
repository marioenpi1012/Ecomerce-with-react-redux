(this.webpackJsonpecomerce=this.webpackJsonpecomerce||[]).push([[0],{42:function(e,t,c){},44:function(e,t,c){},74:function(e,t,c){"use strict";c.r(t);var i=c(1),a=c.n(i),s=c(16),n=c.n(s),r=(c(42),c(22)),l=c.n(r),d=c(34),o=(c(44),c(4)),j=c(21),u=c.n(j),b=c(3),m=c(5),O="products",h="selectedProduct",x="addedToCart",p="removedFromCart",v="addedQty",f="subQty",y="changeQty",N="filter",g=c(11),q=c(13),C=function(e){var t=0;return e.map((function(e){t+=Number(e.qty)})),t},S=c(0),w=function(){var e=Object(i.useState)(!1),t=Object(g.a)(e,2),c=t[0],a=t[1],s=Object(o.c)((function(e){return e.cart.cart}));return console.log(s),Object(S.jsxs)("div",{className:"Nav",children:[Object(S.jsx)("div",{className:"logo",children:Object(S.jsx)(b.b,{to:"",children:"Narvick's Luxury Store"})}),Object(S.jsxs)("div",{className:"links",style:c?{display:"flex"}:{},children:[Object(S.jsx)(b.b,{to:"/shop",activeClassName:"current",children:"Shop"}),Object(S.jsx)(b.b,{to:"/about",activeClassName:"current",children:"About"}),Object(S.jsx)(b.b,{to:"/contact",activeClassName:"current",children:"Contact"})]}),Object(S.jsxs)("div",{className:"menu",children:[Object(S.jsxs)("div",{className:"cart",children:[Object(S.jsxs)(b.b,{to:"/cart",children:[Object(S.jsx)(q.d,{})," "]}),Object(S.jsx)("span",{children:C(s)})]}),Object(S.jsx)("div",{className:"burgerMenu",onClick:function(){return a(!c)},children:c?Object(S.jsx)("div",{className:"mobileMenu",children:"X"}):Object(S.jsx)(q.a,{className:"mobileMenu"})})]})]})},k=function(e){var t=e.data,c=Object(o.b)(),i=t.map((function(e){return Object(S.jsxs)("div",{className:"item",id:e.id,onMouseOver:function(){return t=e.id,void(document.querySelector('[data-button-id="'.concat(t,'"]')).style.display="flex");var t},onMouseOut:function(){return t=e.id,void(document.querySelector('[data-button-id="'.concat(t,'"]')).style.display="");var t},children:[Object(S.jsx)("div",{className:"image",children:Object(S.jsx)("img",{src:e.image,alt:"image",width:"200",height:"200"})}),Object(S.jsx)("div",{className:"title",children:e.title}),Object(S.jsxs)("div",{className:"price",children:["$",e.price]}),Object(S.jsx)(b.b,{to:"/viewing",children:Object(S.jsx)("input",{type:"button",value:"quick view","data-button-id":e.id,onClick:function(){return c((t=e.id,{type:h,payload:{id:t}}));var t}})})]},e.id)}));return Object(S.jsx)("div",{className:"Product",children:Object(S.jsx)("div",{className:"container",children:Object(S.jsx)("div",{className:"items",children:i})})})},F=c.p+"static/media/landingPage.4c7c9b4f.png",I=function(){var e=Object(o.c)((function(e){return e.cart.products})),t=e.filter((function(e){return Number(e.rating.rate)>3.5})),c=Math.ceil(0),i=Math.floor(19),a=Math.floor(Math.random()*(i-c+1));e.find((function(e){return e.id===a}));return Object(S.jsxs)("div",{className:"Home",children:[Object(S.jsx)("div",{className:"landing",style:{backgroundImage:'url("'.concat(F,'")')},children:Object(S.jsxs)("div",{className:"container",children:[Object(S.jsx)("div",{className:"text",children:Object(S.jsx)("p",{children:"Shop our awesome inventory of clothing, jewelry, and electronics "})}),Object(S.jsx)("div",{className:"btn",children:Object(S.jsx)(b.b,{to:"/shop",children:Object(S.jsx)("input",{type:"button",value:"Check Our Collection"})})})]})}),Object(S.jsx)("div",{className:"top-rated",children:"Top Rated: "}),Object(S.jsxs)("div",{className:"carousel",children:[Object(S.jsxs)("div",{className:"controllers",children:[Object(S.jsx)("div",{className:"prev",onClick:function(){return function(){var e=document.querySelector(".container").scrollWidth,t=document.querySelector(".item");document.querySelector(".items").scrollWidth,document.querySelector(".items").scrollLeft-=e+t.scrollWidth,console.log(t)}()},children:Object(S.jsx)(q.c,{})}),Object(S.jsx)("div",{className:"next",onClick:function(){return function(){console.log("working");var e=document.querySelector(".container"),t=document.querySelector(".item"),c=document.querySelector(".items").scrollWidth,i=0;c>=i&&(i=document.querySelector(".items").scrollLeft+=e.scrollWidth+42.5),console.log(t.scrollWidth)}()},children:Object(S.jsx)(q.b,{})})]}),Object(S.jsx)(k,{data:t})]})]})},T=function(e){var t=0;return e.map((function(e){var c,i;console.log(e.qty,e.price),t+=(c=e.qty,i=e.price,c*i)})),"$"+new Intl.NumberFormat("en-US").format(t)},M=function(e){var t=e.item,c=e.added,i=e.setAdded,a=(Object(o.c)((function(e){return e.cart.itemsInCart})),Object(o.c)((function(e){return e.cart.cart})));return Object(S.jsxs)("div",{className:"cartPreview",style:c?{display:"block"}:{display:"none"},children:[Object(S.jsx)("div",{className:"titles",children:Object(S.jsxs)("div",{className:"control-btn",children:[Object(S.jsx)(b.b,{to:"/shop",children:"Continue Shopping"}),Object(S.jsx)(b.b,{to:"/viewing",className:"close",onClick:function(){i(!c)},children:"X"})]})}),Object(S.jsx)("div",{className:"container",children:Object(S.jsxs)("div",{className:"added-item",children:[Object(S.jsx)("div",{className:"item-img",children:Object(S.jsx)("img",{src:t.image,alt:""})}),Object(S.jsxs)("div",{className:"added-item-info",children:[Object(S.jsxs)("div",{className:"added-item-qty",children:["QTY: ",t.qty]}),Object(S.jsxs)("div",{className:"added-item-price",children:["$",t.price]})]})]})}),Object(S.jsxs)("div",{className:"cart-container",children:[Object(S.jsxs)("div",{className:"cart-info",children:["Cart Subtotal (",C(a)," ",C(a)<2?"item":"items","): ",T(a)]}),Object(S.jsx)(b.b,{to:"/cart",children:Object(S.jsx)("input",{type:"button",value:"Go to Cart"})})]})]})},P=function(){var e=Object(o.c)((function(e){return e.cart.viewing})),t=Object(o.b)(),c=Object(i.useState)(!1),a=Object(g.a)(c,2),s=a[0],n=a[1],r=function(e){t(function(e){return{type:x,payload:{id:e}}}(e)),n(!s),setTimeout((function(){n(s)}),5e3)};return Object(S.jsxs)("div",{className:"SelectedProduct",children:[Object(S.jsx)("div",{className:"close",children:Object(S.jsx)(b.b,{to:"/shop",children:"X"})}),Object(S.jsxs)("div",{className:"container",id:"container",style:s?{filter:"blur(1px)"}:{},children:[Object(S.jsx)("div",{className:"image",children:Object(S.jsx)("img",{src:e.image,alt:"image"})}),Object(S.jsxs)("div",{className:"item-info",children:[Object(S.jsx)("div",{className:"title",children:e.title}),Object(S.jsxs)("div",{className:"price",children:["$",e.price]}),Object(S.jsx)("div",{className:"description",children:e.description}),Object(S.jsx)("div",{className:"qty",children:Object(S.jsx)("input",{type:"number",name:"add-qty",id:"add-qty",min:"1",max:"100",defaultValue:"1"})}),Object(S.jsx)("input",{type:"submit",value:"Add To Cart",className:"add-to-cart",onClick:function(){return r(e.id)}})]})]}),Object(S.jsx)(M,{added:s,setAdded:n,item:e}),";"]})},E=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.cart.filterBy})),c=Object(i.useState)(""),a=Object(g.a)(c,2),s=a[0],n=a[1],r=function(t){var c=t.target.value;e({type:N,payload:{type:c}})},l=function(){switch(s){case"asc":return t.slice().sort((function(e,t){return e.price-t.price}));case"desc":return t.slice().sort((function(e,t){return t.price-e.price}));default:return t}}();return Object(S.jsxs)("div",{className:"Shop",children:[Object(S.jsx)("div",{className:"filter",children:Object(S.jsxs)("select",{name:"filter-category",id:"filter-category",onChange:function(e){return r(e)},children:[Object(S.jsx)("option",{value:"default",children:"Filter By Category (Default): "}),Object(S.jsx)("option",{value:"women's clothing",children:"Women's Clothing"}),Object(S.jsx)("option",{value:"men's clothing",children:"Men's Clothing"}),Object(S.jsx)("option",{value:"jewelery",children:"Jewelery"}),Object(S.jsx)("option",{value:"electronics",children:"Electronics"})]})}),Object(S.jsx)("div",{className:"filter filter-price",children:Object(S.jsxs)("select",{name:"filter-price",id:"filter-price",onChange:function(e){return n(e.target.value)},children:[Object(S.jsx)("option",{value:"normal",children:"Filter By Price (Default) "}),Object(S.jsx)("option",{value:"desc",children:"Highest Price"}),Object(S.jsx)("option",{value:"asc",children:"Lowest Price"})]})}),Object(S.jsx)(k,{data:l})]})},L=function(){var e=Object(o.c)((function(e){return e.cart.cart})),t=Object(o.c)((function(e){return e.cart.total})),c=(Object(o.c)((function(e){return e.cart})),Object(o.b)());return console.log("cart",e),console.log("total",t.toFixed(2)),console.log(T(e)),Object(S.jsx)("div",{className:"Cart",children:e.length>0?Object(S.jsxs)("div",{className:"container",children:[Object(S.jsxs)("div",{className:"labels",children:[Object(S.jsx)("div",{className:"title",children:"Title"}),Object(S.jsx)("div",{className:"quantity",children:"Quantity"}),Object(S.jsx)("div",{className:"price",children:"Price"})]}),Object(S.jsxs)("div",{className:"items",children:[e.map((function(e){return Object(S.jsxs)("div",{className:"item",children:[Object(S.jsx)("div",{className:"remove",children:Object(S.jsx)("input",{type:"button",value:"X",onClick:function(){return c((t=e.id,{type:p,payload:{id:t}}));var t}})}),Object(S.jsxs)("div",{className:"info",children:[Object(S.jsx)("div",{className:"image",children:Object(S.jsx)("img",{src:e.image,alt:""})}),Object(S.jsx)("div",{className:"title",children:e.title})]}),Object(S.jsx)("div",{className:"qty",children:Object(S.jsx)("input",{type:"number",name:"qty",min:"1",max:"100",id:"qty",defaultValue:e.qty,"data-id":e.id,onChange:function(){return c((t=e.id,{type:y,payload:{id:t}}));var t}})}),Object(S.jsxs)("div",{className:"price",children:["$",e.price.toFixed(2)]})]},e.id)})),Object(S.jsxs)("div",{className:"subtotal",children:["Subtotal: ",T(e)," "]}),Object(S.jsx)("div",{className:"checkout",children:Object(S.jsx)("input",{type:"button",value:"checkout"})})]})]}):Object(S.jsxs)("div",{className:"msg",children:["The cart is empty, continue ",Object(S.jsx)(b.b,{to:"/shop",children:"Shopping"}),"."]})})},A=c.p+"static/media/logo.6e887384.jpg",B=c.p+"static/media/designers.0ed6b744.jpg",D=function(){return Object(S.jsxs)("div",{className:"About",children:[Object(S.jsx)("div",{className:"header",children:"Our Story"}),Object(S.jsxs)("div",{className:"container",children:[Object(S.jsxs)("div",{className:"brand",children:[Object(S.jsx)("div",{className:"title",children:"The brand"}),Object(S.jsx)("div",{className:"line"}),Object(S.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias consectetur atque quasi pariatur modi consequatur minus placeat doloremque, sed possimus repellat reiciendis deserunt beatae mollitia."}),Object(S.jsx)("p",{children:"Hic cumque quas autem dolore quaerat in eligendi rem? Ab vitae odio voluptatum iste soluta esse ratione ipsa. Deserunt quae error non, iure laboriosam amet."})]}),Object(S.jsx)("div",{className:"image",style:{backgroundImage:'url("'.concat(A,'")')}}),Object(S.jsxs)("div",{className:"designers",children:[Object(S.jsx)("div",{className:"title",children:"The Designers"}),Object(S.jsx)("div",{className:"line"}),Object(S.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque minima unde laudantium esse recusandae optio porro, sunt deserunt blanditiis voluptates vero asperiores quam cumque officia."}),Object(S.jsx)("p",{children:"Reiciendis quas consequuntur eligendi aliquam ab nulla officiis esse molestias ullam cupiditate praesentium doloremque atque dolorem, illum, fuga nihil? Tempora error earum nemo debitis labore!"})]}),Object(S.jsx)("div",{className:"image",id:"designer-image",style:{backgroundImage:'url("'.concat(B,'")')}})]})]})},H=function(){return Object(S.jsxs)("div",{className:"Contact",children:[Object(S.jsx)("div",{className:"header",children:"Get in touch"}),Object(S.jsxs)("div",{className:"container",children:[Object(S.jsx)("div",{className:"mini-header",children:"Customer Service"}),Object(S.jsx)("div",{className:"line"}),Object(S.jsxs)("div",{className:"info",children:[Object(S.jsxs)("div",{className:"store",children:[Object(S.jsx)("div",{className:"title",children:"Flagship Store"}),Object(S.jsx)("div",{className:"text",children:"Downtown Houston, Houston, TX"})]}),Object(S.jsxs)("div",{className:"hours",children:[Object(S.jsx)("div",{className:"title",children:"Opening Hours"}),Object(S.jsxs)("div",{className:"text",children:[Object(S.jsx)("div",{children:"Monday-Friday"}),Object(S.jsx)("div",{children:"9:00am - 7:00pm EST"})]})]}),Object(S.jsxs)("div",{className:"contact",children:[Object(S.jsx)("div",{className:"title",children:"Contact us"}),Object(S.jsxs)("div",{className:"text",children:[Object(S.jsx)("div",{className:"number",children:"1-9000-00-000"}),Object(S.jsx)("div",{className:"email",children:"info@store.com"})]})]})]}),Object(S.jsxs)("div",{className:"inquiries",children:[Object(S.jsx)("div",{className:"mini-header",children:"Inquiries"}),Object(S.jsx)("p",{children:"For questions regarding our products and services you can also contact us by filling out the form below."})]}),Object(S.jsx)("div",{className:"form",children:Object(S.jsxs)("form",{action:"",children:[Object(S.jsxs)("div",{className:"full-name",children:[Object(S.jsx)("label",{htmlFor:"name",children:"First Name"}),Object(S.jsx)("input",{type:"text",id:"input-first-name",className:"name"}),Object(S.jsx)("label",{htmlFor:"last-name",id:"last-name",children:"Last Name"}),Object(S.jsx)("input",{type:"text",className:"last-name"})]}),Object(S.jsx)("label",{htmlFor:"email",children:"Email"}),Object(S.jsx)("input",{type:"email",name:"email"}),Object(S.jsx)("label",{htmlFor:"subject",children:"Subject"}),Object(S.jsx)("input",{type:"text",name:"subject"}),Object(S.jsx)("label",{htmlFor:"message",children:"Message"}),Object(S.jsx)("textarea",{name:"message",id:"message",cols:"30",rows:"10"}),Object(S.jsx)("input",{type:"submit",value:"Submit"})]})})]})]})},W=function(){return Object(S.jsx)("div",{className:"Footer",children:Object(S.jsxs)("div",{className:"container",children:[Object(S.jsx)("div",{className:"logo",children:Object(S.jsx)(b.b,{to:"/",children:"Narvick's Luxury Store"})}),Object(S.jsxs)("div",{className:"links",children:[Object(S.jsxs)("div",{className:"nav-links",children:[Object(S.jsx)(b.b,{to:"/",children:"Home"}),Object(S.jsx)(b.b,{to:"/shop",children:"Shop "}),Object(S.jsx)(b.b,{to:"/about",children:"About "}),Object(S.jsx)(b.b,{to:"/contact",children:"Contact "})]}),Object(S.jsx)("div",{className:"info-links",children:Object(S.jsxs)("ul",{children:[Object(S.jsx)("li",{children:"FAQ"}),Object(S.jsx)("li",{children:"Shipping & Returns"}),Object(S.jsx)("li",{children:"Store Policy"})]})}),Object(S.jsx)("div",{className:"social-links",children:Object(S.jsxs)("ul",{children:[Object(S.jsx)("li",{children:"Instagram"}),Object(S.jsx)("li",{children:"Facebook"})]})})]}),Object(S.jsxs)("div",{className:"join",children:[Object(S.jsx)("div",{className:"header",children:"Join Us!"}),Object(S.jsxs)("form",{action:"",children:[Object(S.jsx)("label",{htmlFor:"email",children:"Email"}),Object(S.jsx)("input",{type:"email",name:"email",id:"email"}),Object(S.jsx)("input",{type:"submit",value:"Submit"})]})]})]})})};var X=function(){var e=Object(o.b)(),t=function(){var t=Object(d.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.get("https://fakestoreapi.com/products").then((function(t){var c;e((c=t.data,{type:O,payload:{products:c}}))})).catch((function(e){console.log("err",e)}));case 2:t.sent;case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(i.useEffect)((function(){t()}),[]),Object(S.jsx)(b.a,{children:Object(S.jsxs)("div",{className:"App",children:[Object(S.jsx)(w,{}),Object(S.jsxs)(m.a,{path:"/",exact:!0,children:[" ",Object(S.jsx)(I,{})]}),Object(S.jsx)(m.a,{path:"/shop",children:Object(S.jsx)(E,{})}),Object(S.jsx)(m.a,{path:"/viewing",component:P}),Object(S.jsx)(m.a,{path:"/cart",component:L}),Object(S.jsx)(m.a,{path:"/about",component:D}),Object(S.jsx)(m.a,{path:"/contact",component:H}),Object(S.jsx)(W,{})]})})},_=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,75)).then((function(t){var c=t.getCLS,i=t.getFID,a=t.getFCP,s=t.getLCP,n=t.getTTFB;c(e),i(e),a(e),s(e),n(e)}))},Q=c(12),$=c(25),J=c(2),R={products:[],cart:[],filterBy:[],viewing:"",itemsInCart:0,total:0},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(J.a)(Object(J.a)(Object(J.a)({},e),t.payload),{},{filterBy:t.payload.products});case x:var c=t.payload.id,i=e.products.find((function(e){return e.id===c})),a=Number(document.getElementById("add-qty").value);console.log(a);var s=e.cart.find((function(e){return e.id===c}));if(s)return Object(J.a)(Object(J.a)({},e),{},{total:e.total+i.price*a,cart:e.cart.map((function(e){return e.id===c?Object(J.a)(Object(J.a)({},e),{},{qty:e.qty+a}):e})),itemsInCart:e.itemsInCart+a});i.qty=a;var n=e.total+i.price*i.qty,r=e.itemsInCart+a;return Object(J.a)(Object(J.a)({},e),{},{cart:[].concat(Object($.a)(e.cart),[i]),itemsInCart:r,total:n});case p:var l=e.cart.find((function(e){return t.payload.id===e.id})),d=e.total-l.price*l.qty;return Object(J.a)(Object(J.a)({},e),{},{cart:e.cart.filter((function(e){return e.id!==t.payload.id})),total:d,itemsInCart:e.itemsInCart-l.qty});case v:var o=e.products.find((function(e){return e.id===t.payload.id}));o.qty+=1;var j=e.total+o.price;return Object(J.a)(Object(J.a)({},e),{},{total:j});case f:var u=e.products.find((function(e){return e.id===t.payload.id}));if(1===u.qty){var b=e.cart.filter((function(e){return e.id!==t.payload.id})),m=e.total-u.price;return Object(J.a)(Object(J.a)({},e),{},{cart:b,total:m})}u.qty-=1;var g=e.total-u.price;return Object(J.a)(Object(J.a)({},e),{},{total:g});case h:var q=t.payload.id,C=e.products.find((function(e){return e.id===q}));return Object(J.a)(Object(J.a)({},e),{},{viewing:C});case y:var S=e.cart.find((function(e){return e.id===t.payload.id})),w=S.qty,k=document.querySelector('[data-id="'.concat(S.id,'"]')).value,F=k-w,I=e.total+S.price*F;if(S.qty=k,0==S.qty){var T=e.total-S.price;return Object(J.a)(Object(J.a)({},e),{},{cart:e.cart.filter((function(e){return e.id!==t.payload.id})),total:T,itemsInCart:e.itemsInCart-1})}return Object(J.a)(Object(J.a)({},e),{},{cart:Object($.a)(e.cart),total:I,itemsInCart:e.itemsInCart+F});case N:switch(t.payload.type){case"default":return Object(J.a)(Object(J.a)({},e),{},{filterBy:e.products});case"women's clothing":case"men's clothing":case"jewelery":case"electronics":return Object(J.a)(Object(J.a)({},e),{},{filterBy:e.products.filter((function(e){return e.category===t.payload.type}))});default:return e}default:return e}},V=Object(Q.b)({cart:U}),G=c(37),Y=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Q.c,z=Object(Q.d)(V,Y(Object(Q.a)(G.a)));n.a.render(Object(S.jsx)(o.a,{store:z,children:Object(S.jsx)(a.a.StrictMode,{children:Object(S.jsx)(X,{})})}),document.getElementById("root")),_()}},[[74,1,2]]]);
//# sourceMappingURL=main.6bbafb9d.chunk.js.map