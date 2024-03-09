import{u as n,j as e,r as _,a as p,b as D,c as C,d as K,e as N,f as O,g as Y}from"./index-32e1754b.js";const T=t=>t.cars.cars,q=t=>t.isLoading,G=t=>t.favoriteCars.favorites,J=n.li`
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
`,Q=n.div`
  position: relative;
  margin-bottom: 14px;
`,U=n.img`
  width: 100%;
  object-fit: cover;
  border-radius: 14px;
`,V=n.svg`
  position: absolute;
  top: 14px;
  right: 14px;
  display: inline-block;
  width: 18px;
  height: 18px;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2.667px;
`,X=n.div`
  width: 100%;
  align-items: center;
  color: var(--dark);
  display: flex;
  justify-content: space-between;
  padding-right: 8px;
  margin-bottom: 8px;
`,R=n.h3`
  width: 100%;
  overflow: hidden;
  color: var(--dark);
  font-family: 'Manrope';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`,Z=n.p`
  color: var(--dark);
  font-family: 'Manrope';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`,z=n.ul`
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
`,ee=n.button`
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
`,te=t=>{const i=t.toString().length;if(i<=3)return t;const o=t.toString().split("");return o.splice(i-3,0,","),o.join("")},ie=t=>parseInt(t.replace("$","")),k="/Rent_Car/assets/no_img-5cfb04b7.jpg",ne=n.li`
display: flex;
height: auto;
flex-direction: column;
align-items: flex-start;
`,oe=n.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 14px;
  margin-bottom: 14px;

  @media screen and (min-width: 768px) {
    height: 248px;
  }
`,W=n.div`
  width: 100%;
  align-items: center;
  color: var(--dark);
  justify-content: space-between;
`,B=n.h4`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  margin-bottom: 8px;
  color: var(--dark);
`,re=n.p`
font-weight: 400;
font-size: 10px;
line-height: 1.43;
color: var(--dark);
margin-bottom: 14px;

@media screen and (min-width: 425px) {
  font-size: 14px;
  margin-bottom: 24px;
}
`,A=n.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  font-size: 12px;
`,v=n.li`
  border-radius: 35px;
  color: var(--withe-grey);
  background-color: #f9f9f9;
  padding: 4px 8px;

  @media screen and (min-width: 425px) {
  padding: 7px 14px;
  }
`,S=n.span`
  color: var(--blue);
  font-weight: 600;
`,se=n.button`
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
`,ae=({car:t})=>{const{id:i,make:o,model:r,year:a,img:s,rentalPrice:f,mileage:l,type:u,address:w,fuelConsumption:M,engineSize:F,description:j,accessories:x,rentalConditions:g}=t,m=w==null?void 0:w.split(", ").slice(-2),d=g.split(`
`),y=h=>h.split(": "),L=s||k;return e.jsxs(ne,{children:[e.jsx(oe,{src:L,alt:j,width:274,height:268,loading:"lazy",onError:h=>{h.target.src=k}}),e.jsxs(W,{children:[e.jsxs(R,{children:[o," ",e.jsx("span",{style:{color:"#3470FF"},children:r}),",  ",a]}),e.jsx(W,{}),e.jsxs(z,{children:[e.jsx("li",{children:m[0]}),e.jsx("li",{children:m[1]}),e.jsxs("li",{children:["Id: ",i]}),e.jsxs("li",{children:["Year: ",a]}),e.jsxs("li",{children:["Type: ",u]}),e.jsxs("li",{children:["Fuel Consumption: ",M]}),e.jsxs("li",{children:["Engine Size:",F]})]}),e.jsx(re,{children:j}),e.jsx(B,{children:"Accessories and functionalities:"}),e.jsx(z,{children:x==null?void 0:x.map((h,c)=>e.jsx("li",{children:h},c))}),e.jsx(B,{children:"Rental Conditions:"}),e.jsxs("div",{children:[e.jsxs(A,{children:[e.jsxs(v,{children:[y(d[0])[0],":"," ",e.jsx(S,{children:y(d[0])[1]})]}),e.jsx(v,{children:d[1]})]}),e.jsxs(A,{children:[e.jsx(v,{children:d[2]}),e.jsxs(v,{children:["Mileage: ",e.jsx(S,{children:te(l)})]}),e.jsxs(v,{children:["Price: ",e.jsxs(S,{children:[ie(f),"$"]})]})]})]})]}),e.jsx(se,{width:"168px",onClick:()=>window.location.href="tel:+380730000000",children:"Rental car"})]},i)},le=n.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(18, 20, 23, 0.5);
`,ce=n.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 30px;
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
`,de=n.svg`
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
`,he=({children:t})=>{const i=document.getElementById("modal");return i?_.createPortal(t,i):null},pe=({onClick:t,children:i})=>{const o=s=>{s.code==="Escape"&&t()},r=()=>{t()},a=s=>{s.currentTarget===s.target&&t()};return p.useEffect(()=>(document.body.style.overflow="hidden",window.addEventListener("keydown",o),()=>{document.body.style.overflow="auto",window.removeEventListener("keydown",o)})),e.jsx(he,{children:e.jsx(le,{onClick:a,children:e.jsxs(ce,{children:[e.jsx(de,{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",onClick:r,children:e.jsx("path",{d:"M24 8 8 24M8 8l16 16"})}),i]})})})},xe=({car:t})=>{const{id:i,img:o,description:r,make:a,model:s,rentalPrice:f,address:l,rentalCompany:u,type:w,year:M,mileage:F,functionalities:j}=t,x=D(),g=C(G),[m,d]=p.useState(!1),[y,L]=p.useState(!1);p.useEffect(()=>{g!=null&&g.some(b=>b.id===i)?d(!0):d(!1)},[g,i]);const h=()=>{x(m?K(i):N(t))};let c=[],E="",I="";l&&(c=l==null?void 0:l.split(","),E=c[c.length-1].trim()||"",I=c[c.length-2].trim()||"");const $=r!=null&&r.toLowerCase().includes("premium")?"Premium":" - ",H=o||k,P=()=>{L(b=>!b)};return e.jsx(e.Fragment,{children:e.jsxs(J,{children:[y&&e.jsx(pe,{onClick:P,children:e.jsx(ae,{car:t},i)}),e.jsxs(Q,{children:[e.jsx(U,{src:H,alt:r,width:274,height:268,loading:"lazy",onError:b=>{b.target.src=k}}),e.jsx(V,{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",onClick:h,fill:m?"#3470FF":"none",stroke:m?"#3470FF":"#FFF",children:e.jsx("path",{d:"M27.787 6.147a7.345 7.345 0 0 0-5.187-2.15 7.33 7.33 0 0 0-5.187 2.15L16 7.56l-1.413-1.413a7.333 7.333 0 0 0-10.374 0 7.333 7.333 0 0 0 0 10.374L16 28.308l11.787-11.787a7.345 7.345 0 0 0 2.15-5.187 7.33 7.33 0 0 0-2.15-5.187z"})})]}),e.jsxs(X,{children:[e.jsxs(R,{children:[a," ",e.jsx("span",{style:{color:"#3470FF"},children:s}),", ",M]}),e.jsx(Z,{children:f})]}),e.jsx("div",{children:e.jsxs(z,{children:[e.jsx("li",{children:I}),e.jsx("li",{children:E}),e.jsx("li",{children:u}),e.jsx("li",{children:$}),e.jsx("li",{children:w}),e.jsx("li",{children:s}),e.jsx("li",{children:F}),e.jsx("li",{children:j?j[0]:""})]})}),e.jsx(ee,{onClick:P,children:"Learn more"})]},i)})},ge=n.ul`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 50px 29px;
    justify-content: center;
    padding: 80px 0 0 0;
`,me=()=>{const t=C(T);return e.jsx("div",{children:e.jsx(ge,{children:t.map((i,o)=>e.jsx(xe,{car:i},`${i.id}-${o}`))})})},fe=n.button`
  background-color: var(--bg-white);
  padding: 14px 40px;
  outline: none;
  border-radius: 12px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: #3470ff;
  display: block;
  margin: 0 auto 30px;

  &:hover,
  &:focus {
    color: var(--hover-btn-text);
    background: var(--blue);
  }
`,we=()=>{const t=D(),[i,o]=p.useState(0),[r]=p.useState(12),a=C(q),s=C(T);p.useEffect(()=>{i===0&&o(1),t(O({page:i,limit:r}))},[t,r,i]);const f=()=>{o(u=>u+1)},l=s.length;return e.jsxs("section",{children:[a&&e.jsx(Y,{}),e.jsx(me,{}),l>=i*r&&e.jsx(fe,{type:"button",onClick:f,children:"Load more"})]})};export{we as default};
