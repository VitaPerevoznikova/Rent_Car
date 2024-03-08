import{u as i,j as t,a as x,b as L,r as p,f as k,c as z}from"./index-b09ae76c.js";const j=e=>e.cars.cars,M=e=>e.isLoading,P=i.li`
display: flex;
width: 274px;
height: auto;
flex-direction: column;
align-items: flex-start;
`,E=i.div`
  position: relative;
  width: 274px;
  height: 268px;
  margin-bottom: 14px;
`,I=i.img`
  width: 100%;
  height: 268px;
  object-fit: cover;
  border-radius: 14px;
`,S=i.div`
  width: 274px;
  align-items: center;
  color: #121417;
  display: flex;
  justify-content: space-between;
  padding-right: 8px;
  margin-bottom: 8px;
`,F=i.h3`
  width: 274px;
  height: 24px;
  overflow: hidden;
  color: #121417;
  font-family: 'Manrope';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`,W=i.p`
  color: #121417;
  font-family: 'Manrope';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`,B=i.ul`
  color: rgba(18, 20, 23, 0.5);
  display: flex;
  width: 274px;
  height: 40px;
  overflow: hidden;
  flex-direction: row;
  flex-wrap: wrap;
  font-weight: 400;
  line-height: 1.5;
  row-gap: 4px;
  width: fit-content;
  margin-bottom: 24px;

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
`,D=i.button`
  width: 100%;
  height: 44px;
  outline: none;
  border: none;
  border-radius: 12px;
  background: #3470ff;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.42857;
  color: #fff;
  &:hover,
  &:focus {
    background-color: #224bac;
  }
`,u="/Rent_Car/assets/no_img-5cfb04b7.jpg",R=({car:e})=>{const{img:o,description:r,make:s,model:a,rentalPrice:c,address:n,rentalCompany:h,type:d,year:b,mileage:w,functionalities:g}=e;let l=[],f="",m="";n&&(l=n==null?void 0:n.split(","),f=l[l.length-1].trim()||"",m=l[l.length-2].trim()||"");let y=r!=null&&r.toLowerCase().includes("premium")?"Premium":" - ";const C=o||u;return t.jsx(t.Fragment,{children:t.jsxs(P,{children:[t.jsx(E,{children:t.jsx(I,{src:C,alt:r,width:274,height:268,loading:"lazy",onError:v=>{v.target.src=u}})}),t.jsxs(S,{children:[t.jsxs(F,{children:[s," ",t.jsx("span",{style:{color:"#3470FF"},children:a}),", ",b]}),t.jsx(W,{children:c})]}),t.jsx("div",{children:t.jsxs(B,{children:[t.jsx("li",{children:m}),t.jsx("li",{children:f}),t.jsx("li",{children:h}),t.jsx("li",{children:y}),t.jsx("li",{children:d}),t.jsx("li",{children:a}),t.jsx("li",{children:w}),t.jsx("li",{children:g?g[0]:""})]})}),t.jsx(D,{type:"button",children:"Learn more"})]})})},T=i.ul`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 50px 29px;
    justify-content: center;
    padding: 80px 0;
`,_=()=>{const e=x(j);return t.jsx("div",{children:t.jsx(T,{children:e.map((o,r)=>t.jsx(R,{car:o},`${o.id}-${r}`))})})},$=i.button`
  background-color: var(--bg-white);
  padding: 14px 40px;
  outline: none;
  border-radius: 12px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: #3470ff;
  display: block;
  margin: 40px auto;

  &:hover,
  &:focus {
    color: var(--hover-btn-text);
    background: var(--blue);
  }
`,A=()=>{const e=L(),[o,r]=p.useState(0),[s]=p.useState(12),a=x(M),c=x(j);p.useEffect(()=>{o===0&&r(1),e(k({page:o,limit:s}))},[e,s,o]);const n=()=>{r(d=>d+1)},h=c.length;return t.jsxs("section",{children:[a&&t.jsx(z,{}),t.jsx(_,{}),h>=o*s&&t.jsx($,{type:"button",onClick:n,children:"Load more"})]})};export{A as default};
