import{u as i,j as e,d as R,r as b,g as H,a as _,l as $,m as K}from"./index-836eef2d.js";const de=t=>t.cars.cars,he=t=>t.isLoading,N=t=>t.favoriteCars.favorites,O=i.li`
display: flex;
width: 100%;
height: auto;
flex-direction: column;
align-items: flex-start;
margin-bottom: 30px;

@media screen and (min-width: 768px) {
width: calc((100% - 30px) / 2);

@media screen and (min-width: 1440px) {
  width: calc((100% - 60px) / 3);
  }
}
`,Y=i.div`
  position: relative;
  margin-bottom: 14px;
  width: 100%;
`,q=i.img`
  width: 100%;
  object-fit: cover;
  border-radius: 14px;
`,G=i.svg`
  position: absolute;
  top: 14px;
  right: 14px;
  display: inline-block;
  width: 18px;
  height: 18px;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2.667px;
`,J=i.div`
  width: 100%;
  align-items: center;
  color: var(--dark);
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`,A=i.h3`
  width: 100%;
  overflow: hidden;
  color: var(--dark);
  font-family: 'Manrope';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`,Q=i.p`
  color: var(--dark);
  font-family: 'Manrope';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`,S=i.ul`
  color: var(--grey);
  display: flex;
  width: 100%;
  overflow: hidden;
  flex-direction: row;
  flex-wrap: wrap;
  font-weight: 400;
  line-height: 1.5;
  row-gap: 4px;
  width: fit-content;
  margin-bottom: 14px;

  & > li:not(:last-child) {
    border-right: 1px solid rgba(18, 20, 23, 0.1);
    margin-right: 6px;
    padding-right: 6px;
  }
  
  & li {
    color: rgba(18, 20, 23, 0.5);
    font-family: 'Manrope';
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
  }
`,U=i.button`
  width: 100%;
  height: 44px;
  outline: none;
  border: none;
  border-radius: 12px;
  background: var(--blue);
  font-weight: 600;
  font-size: 14px;
  line-height: 1.4;
  color: #fff;

  &:hover,
  &:focus {
    background-color: #224bac;
  }
`,V=t=>{const n=t.toString().length;if(n<=3)return t;const o=t.toString().split("");return o.splice(n-3,0,","),o.join("")},X=t=>parseInt(t.replace("$","")),v="/Rent_Car/assets/no_img-5cfb04b7.jpg",Z=i.li`
display: flex;
height: auto;
flex-direction: column;
align-items: flex-start;
`,ee=i.img`
  width: 100%;
  height: 200px;
  // object-fit: cover;
  border-radius: 14px;
  margin-bottom: 14px;

  @media screen and (min-width: 768px) {
    height: 248px;
  }
`,W=i.div`
  width: 100%;
  align-items: center;
  color: var(--dark);
  justify-content: space-between;
`,P=i.h4`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  margin-bottom: 8px;
  color: var(--dark);
`,te=i.p`
font-weight: 400;
font-size: 10px;
line-height: 1.43;
color: var(--dark);
margin-bottom: 14px;

@media screen and (min-width: 425px) {
  font-size: 14px;
  margin-bottom: 24px;
}
`,B=i.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  font-size: 12px;
`,u=i.li`
  border-radius: 35px;
  color: var(--withe-grey);
  background-color: #f9f9f9;
  padding: 4px 8px;

  @media screen and (min-width: 425px) {
  padding: 7px 14px;
  }
`,z=i.span`
  color: var(--blue);
  font-weight: 600;
`,ie=i.button`
  width: 100px;
  height: 34px;
  outline: none;
  border: none;
  border-radius: 12px;
  background:var(--blue);
  font-weight: 600;
  font-size: 14px;
  line-height: 1.4;
  color: var(--hover-btn-text);
  margin-top: 14px;

  @media screen and (min-width: 768px) {
    margin-top: 24px;
    width: 168px;
    height: 44px;
   }

  &:hover,
  &:focus {
    background-color: var(--hover-blue);
  }
`,ne=({car:t})=>{const{id:n,make:o,model:s,year:d,img:r,rentalPrice:y,mileage:h,type:k,address:m,fuelConsumption:C,engineSize:M,description:f,accessories:p,rentalConditions:x}=t,g=m==null?void 0:m.split(", ").slice(-2),a=x.split(`
`),j=c=>c.split(": "),F=r||v;return e.jsxs(Z,{children:[e.jsx(ee,{src:F,alt:f,width:274,height:268,loading:"lazy",onError:c=>{c.target.src=v}}),e.jsxs(W,{children:[e.jsxs(A,{children:[o," ",e.jsx("span",{style:{color:"#3470FF"},children:s}),",  ",d]}),e.jsx(W,{}),e.jsxs(S,{children:[e.jsx("li",{children:g[0]}),e.jsx("li",{children:g[1]}),e.jsxs("li",{children:["Id: ",n]}),e.jsxs("li",{children:["Year: ",d]}),e.jsxs("li",{children:["Type: ",k]}),e.jsxs("li",{children:["Fuel Consumption: ",C]}),e.jsxs("li",{children:["Engine Size:",M]})]}),e.jsx(te,{children:f}),e.jsx(P,{children:"Accessories and functionalities:"}),e.jsx(S,{children:p==null?void 0:p.map((c,l)=>e.jsx("li",{children:c},l))}),e.jsx(P,{children:"Rental Conditions:"}),e.jsxs("div",{children:[e.jsxs(B,{children:[e.jsxs(u,{children:[j(a[0])[0],":"," ",e.jsx(z,{children:j(a[0])[1]})]}),e.jsx(u,{children:a[1]})]}),e.jsxs(B,{children:[e.jsx(u,{children:a[2]}),e.jsxs(u,{children:["Mileage: ",e.jsx(z,{children:V(h)})]}),e.jsxs(u,{children:["Price: ",e.jsxs(z,{children:[X(y),"$"]})]})]})]})]}),e.jsx(ie,{width:"168px",onClick:()=>window.location.href="tel:+380730000000",children:"Rental car"})]},n)},oe=i.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(18, 20, 23, 0.5);
`,re=i.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 40px;
  background-color: #fff;
  border-radius: 24px;
  width: 300px;
  height: auto;

  @media screen and (max-width: 424px) {
    max-height: 95%;
    overflow-y: auto;
  }

  @media screen and (min-width: 425px) {
    width: 415px;
  }

  @media screen and (min-width: 768px) {
    width: 540px;
  }
`,se=i.svg`
  position: absolute;
  width: 24px;
  height: 24px;
  stroke: #121417;
  top: 12px;
  right: 7px;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2.4px;
  cursor: pointer;

  @media screen and (min-width: 1024px) {
    top: 12px;
    right: 6px;
  }
`,le=({children:t})=>{const n=document.getElementById("modal");return n?R.createPortal(t,n):null},ae=({onClick:t,children:n})=>{const o=r=>{r.code==="Escape"&&t()},s=()=>{t()},d=r=>{r.currentTarget===r.target&&t()};return b.useEffect(()=>(document.body.style.overflow="hidden",window.addEventListener("keydown",o),()=>{document.body.style.overflow="auto",window.removeEventListener("keydown",o)})),e.jsx(le,{children:e.jsx(oe,{onClick:d,children:e.jsxs(re,{children:[e.jsx(se,{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",onClick:s,children:e.jsx("path",{d:"M24 8 8 24M8 8l16 16"})}),n]})})})},pe=({car:t})=>{const{id:n,img:o,description:s,make:d,model:r,rentalPrice:y,address:h,rentalCompany:k,type:m,year:C,mileage:M,functionalities:f}=t,p=H(),x=_(N),[g,a]=b.useState(!1),[j,F]=b.useState(!1);b.useEffect(()=>{x!=null&&x.some(w=>w.id===n)?a(!0):a(!1)},[x,n]);const c=()=>{p(g?$(n):K(t))};let l=[],E="",I="";h&&(l=h==null?void 0:h.split(","),E=l[l.length-1].trim()||"",I=l[l.length-2].trim()||"");const D=s!=null&&s.toLowerCase().includes("premium")?"Premium":" - ",T=o||v,L=()=>{F(w=>!w)};return e.jsx(e.Fragment,{children:e.jsxs(O,{children:[j&&e.jsx(ae,{onClick:L,children:e.jsx(ne,{car:t},n)}),e.jsxs(Y,{children:[e.jsx(q,{src:T,alt:s,width:274,height:268,loading:"lazy",onError:w=>{w.target.src=v}}),e.jsx(G,{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",onClick:c,fill:g?"#3470FF":"none",stroke:g?"#3470FF":"#FFF",children:e.jsx("path",{d:"M27.787 6.147a7.345 7.345 0 0 0-5.187-2.15 7.33 7.33 0 0 0-5.187 2.15L16 7.56l-1.413-1.413a7.333 7.333 0 0 0-10.374 0 7.333 7.333 0 0 0 0 10.374L16 28.308l11.787-11.787a7.345 7.345 0 0 0 2.15-5.187 7.33 7.33 0 0 0-2.15-5.187z"})})]}),e.jsxs(J,{children:[e.jsxs(A,{children:[d," ",e.jsx("span",{style:{color:"#3470FF"},children:r}),", ",C]}),e.jsx(Q,{children:y})]}),e.jsx("div",{children:e.jsxs(S,{children:[e.jsx("li",{children:I}),e.jsx("li",{children:E}),e.jsx("li",{children:k}),e.jsx("li",{children:D}),e.jsx("li",{children:m}),e.jsx("li",{children:r}),e.jsx("li",{children:M}),e.jsx("li",{children:f?f[0]:""})]})}),e.jsx(U,{onClick:L,children:"Learn more"})]},n)})};export{pe as C,he as a,N as b,de as s};
