import{u as r,n,L as i,j as t,a as s}from"./index-f3d27b86.js";import{b as p,C as x}from"./CardItem-2ca52af4.js";const c=r.ul`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 50px 29px;
    justify-content: center;
`,l=r.section`
padding: 60px 0;
`,m="/Rent_Car/assets/favorites__empty-308241bf.png",g=n.span`
font-weight: 500;
font-size: 18px;
line-height: 1,11;
color: var(--dark);
margin-top: 30px;
margin-bottom: 30px;
`,d=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,f=n(i)`
  margin-top: 30px;
  margin-bottom: 30px;

  padding: 14px 34px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #3470ff;
  color: #fff;
 
  font-family: 'Manrope';
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.42;
  text-transform: none;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  &:hover {
    background-color: #0b44cd;
  }
`,u=n.img`
  margin-top: 5px;
  border-radius: 14px;
  width: 40vw;
  content: url(${m});
`,h=()=>t.jsxs(d,{children:[t.jsx(g,{children:"Favorite is empty."}),t.jsx(u,{alt:"favorite-is-empty"}),t.jsx(f,{to:"/catalog",children:"Go to catalog"})]}),j=()=>{const e=s(p);return t.jsx(l,{children:(e==null?void 0:e.length)>0?t.jsx(c,{children:e==null?void 0:e.map((o,a)=>t.jsx(x,{car:o,index:a},o.id))}):t.jsx(h,{})})};export{j as default};
