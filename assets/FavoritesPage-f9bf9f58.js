import{n as o,L as n,j as t}from"./index-b09ae76c.js";const r="/Rent_Car/assets/favorites__empty-308241bf.png",e=o.span`
font-weight: 500;
font-size: 18px;
line-height: 1,11;
color: var(--dark);
margin-top: 30px;
margin-bottom: 30px;
`,a=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,i=o(n)`
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
`,p=o.img`
  margin-top: 5px;
  border-radius: 14px;
  width: 40vw;
  content: url(${r});
`,s=()=>t.jsxs(a,{children:[t.jsx(e,{children:"Favorite is empty."}),t.jsx(p,{alt:"favorite-is-empty"}),t.jsx(i,{to:"/catalog",children:"Go to catalog"})]}),c=()=>t.jsx(t.Fragment,{children:t.jsx(s,{})});export{c as FavoritesPage,c as default};
