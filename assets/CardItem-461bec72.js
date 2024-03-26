import{u as i,j as e,d as T,r as v,g as R,a as H,l as _,m as $}from"./index-d8850e03.js";const de=t=>t.cars.cars,ce=t=>t.isLoading,K=t=>t.favoriteCars.favorites,N=i.li`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: calc((100% - 30px) / 2);

    @media screen and (min-width: 1440px) {
      width: calc((100% - 90px) / 4);
    }
  }
`,O=i.div`
  position: relative;
  margin-bottom: 14px;
  width: 100%;
`,Y=i.img`
  width: 100%;
  height: 268px;
  object-fit: cover;
  border-radius: 14px;
`,q=i.svg`
  position: absolute;
  top: 14px;
  right: 14px;
  display: inline-block;
  width: 18px;
  height: 18px;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2.667px;
`,G=i.div`
  width: 100%;
  align-items: center;
  color: var(--dark);
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`,B=i.h3`
  width: 100%;
  overflow: hidden;
  color: var(--dark);
  font-family: 'Manrope';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`,J=i.p`
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
`,Q=i.button`
  width: 275px;
  height: 44px;
  padding: 12px 100px;
  outline: none;
  border: none;
  border-radius: 12px;
  background: var(--blue);
  font-weight: 600;
  font-size: 14px;
  line-height: 1.4;
  color: var(--white);
  margin: 0 auto;

  &:hover,
  &:focus {
    background-color: #224bac;
  }
`,U=t=>{const n=t.toString().length;if(n<=3)return t;const r=t.toString().split("");return r.splice(n-3,0,","),r.join("")},V=t=>parseInt(t.replace("$","")),b="/Rent_Car/assets/no_img-5cfb04b7.jpg",X=i.li`
display: flex;
height: auto;
flex-direction: column;
align-items: flex-start;
`,Z=i.img`
  width: 100%;
  height: 200px;
  // object-fit: cover;
  border-radius: 14px;
  margin-bottom: 14px;

  @media screen and (min-width: 768px) {
    height: 248px;
  }
`,L=i.div`
  width: 100%;
  align-items: center;
  color: var(--dark);
  justify-content: space-between;
`,W=i.h4`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  margin-bottom: 8px;
  color: var(--dark);
`,ee=i.p`
font-weight: 400;
font-size: 10px;
line-height: 1.43;
color: var(--dark);
margin-bottom: 14px;

@media screen and (min-width: 425px) {
  font-size: 14px;
  margin-bottom: 24px;
}
`,P=i.ul`
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
`,te=i.button`
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
`,ie=({car:t})=>{const{id:n,make:r,model:l,year:d,img:s,rentalPrice:y,mileage:c,type:k,address:p,fuelConsumption:C,engineSize:M,description:x,accessories:a,rentalConditions:g}=t,m=p==null?void 0:p.split(", ").slice(-2),h=g.split(`
`),j=o=>o.split(": "),F=s||b;return e.jsxs(X,{children:[e.jsx(Z,{src:F,alt:x,width:274,height:268,loading:"lazy",onError:o=>{o.target.src=b}}),e.jsxs(L,{children:[e.jsxs(B,{children:[r," ",e.jsx("span",{style:{color:"#3470FF"},children:l}),",  ",d]}),e.jsx(L,{}),e.jsxs(S,{children:[e.jsx("li",{children:m[0]}),e.jsx("li",{children:m[1]}),e.jsxs("li",{children:["Id: ",n]}),e.jsxs("li",{children:["Year: ",d]}),e.jsxs("li",{children:["Type: ",k]}),e.jsxs("li",{children:["Fuel Consumption: ",C]}),e.jsxs("li",{children:["Engine Size:",M]})]}),e.jsx(ee,{children:x}),e.jsx(W,{children:"Accessories and functionalities:"}),e.jsx(S,{children:a==null?void 0:a.map((o,w)=>e.jsx("li",{children:o},w))}),e.jsx(W,{children:"Rental Conditions:"}),e.jsxs("div",{children:[e.jsxs(P,{children:[e.jsxs(u,{children:[j(h[0])[0],":"," ",e.jsx(z,{children:j(h[0])[1]})]}),e.jsx(u,{children:h[1]})]}),e.jsxs(P,{children:[e.jsx(u,{children:h[2]}),e.jsxs(u,{children:["Mileage: ",e.jsx(z,{children:U(c)})]}),e.jsxs(u,{children:["Price: ",e.jsxs(z,{children:[V(y),"$"]})]})]})]})]}),e.jsx(te,{width:"168px",onClick:()=>window.location.href="tel:+380730000000",children:"Rental car"})]},n)},ne=i.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(18, 20, 23, 0.5);
`,oe=i.div`
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
`,re=i.svg`
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
`,se=({children:t})=>{const n=document.getElementById("modal");return n?T.createPortal(t,n):null},le=({onClick:t,children:n})=>{const r=s=>{s.code==="Escape"&&t()},l=()=>{t()},d=s=>{s.currentTarget===s.target&&t()};return v.useEffect(()=>(document.body.style.overflow="hidden",window.addEventListener("keydown",r),()=>{document.body.style.overflow="auto",window.removeEventListener("keydown",r)})),e.jsx(se,{children:e.jsx(ne,{onClick:d,children:e.jsxs(oe,{children:[e.jsx(re,{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",onClick:l,children:e.jsx("path",{d:"M24 8 8 24M8 8l16 16"})}),n]})})})},he=({car:t})=>{const{id:n,img:r,description:l,make:d,model:s,rentalPrice:y,address:c,rentalCompany:k,type:p,year:C,mileage:M}=t,x=R(),a=H(K),[g,m]=v.useState(!1),[h,j]=v.useState(!1);v.useEffect(()=>{a!=null&&a.some(f=>f.id===n)?m(!0):m(!1)},[a,n]);const F=()=>{x(g?_(n):$(t))};let o=[],w="",E="";c&&(o=c==null?void 0:c.split(","),w=o[o.length-1].trim()||"",E=o[o.length-2].trim()||"");const A=l!=null&&l.toLowerCase().includes("premium")?"Premium":" - ",D=r||b,I=()=>{j(f=>!f)};return e.jsx(e.Fragment,{children:e.jsxs(N,{children:[h&&e.jsx(le,{onClick:I,children:e.jsx(ie,{car:t},n)}),e.jsxs(O,{children:[e.jsx(Y,{src:D,alt:l,width:274,height:268,loading:"lazy",onError:f=>{f.target.src=b}}),e.jsx(q,{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",onClick:F,fill:g?"#3470FF":"none",stroke:g?"#3470FF":"#FFF",children:e.jsx("path",{d:"M27.787 6.147a7.345 7.345 0 0 0-5.187-2.15 7.33 7.33 0 0 0-5.187 2.15L16 7.56l-1.413-1.413a7.333 7.333 0 0 0-10.374 0 7.333 7.333 0 0 0 0 10.374L16 28.308l11.787-11.787a7.345 7.345 0 0 0 2.15-5.187 7.33 7.33 0 0 0-2.15-5.187z"})})]}),e.jsxs(G,{children:[e.jsxs(B,{children:[d," ",e.jsx("span",{style:{color:"#3470FF"},children:s}),", ",C]}),e.jsx(J,{children:y})]}),e.jsx("div",{children:e.jsxs(S,{children:[e.jsx("li",{children:E}),e.jsx("li",{children:w}),e.jsx("li",{children:k}),e.jsx("li",{children:A}),e.jsx("li",{children:p}),e.jsx("li",{children:s}),e.jsx("li",{children:M})]})}),e.jsx(Q,{onClick:I,children:"Learn more"})]},n)})};export{he as C,ce as a,K as b,de as s};
