import{u as n,L as t,j as e}from"./index-32e1754b.js";const i="/Rent_Car/assets/image_hero-bd3431ab.png",o="/Rent_Car/assets/image_hero@2x-542c4436.png",r=n.section`
  padding: 80px 0;
//background-color: #54A6FF;
`,a=n.div`
@media screen and (min-width: 1440px){
   display: flex;   
   justify-content: space-between;
}
`,s=n.img`
  width: 825px;
  flex-shrink: 0;
  content: url(${i});
  margin-top: 80px;
  margin-bottom: 20px;

  @media screen and (min-width: 1440px){
    margin-top: 0;
    margin-bottom: 0;
    content: url(${o});
  }
`,d=n.h1`
  font-weight: 700;
  font-size: 27px;
  line-height: 1.07;
  letter-spacing: 0.02em;
  color: var(--dark);
  max-width: 300px;
  margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    font-size: 56px;
    max-width: 600px;
    margin-bottom: 38px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 47px;
    max-width: 600px;
    margin-bottom: 48px;
  }
`,p=n.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.08;
  color: var(--grey);

  @media screen and (min-width: 768px) {
  font-size: 18px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 28px;
    margin-bottom: 48px;
  }
`,x=n(t)`
  display: inline-block;
  padding: 14px 48px;
  border-radius: 12px;
  background: var( --bg-white);
  color: var(--dark);
  font-family: 'Manrope';
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  margin: 0 auto;


 box-shadow: 0 0 10px rgba(0, 123, 255, 0.5);
  @media screen and (max-width: 425px) {
    padding: 10px 15px;
  }
  &:hover {
    color: var(--hover-btn-text);
    background: var(--blue);
  }
`,c=()=>e.jsxs(r,{children:[e.jsxs(a,{children:[e.jsxs("div",{children:[e.jsx(d,{children:"The Best Platform for Car Rental"}),e.jsx(p,{children:"Ease of doing a car rental safely and reliably. Of course at a low price."})]}),e.jsx("div",{children:e.jsx(s,{})})]}),e.jsx(x,{to:"/catalog",children:"Reserve Now"})]}),l=()=>e.jsx(e.Fragment,{children:e.jsx(c,{})});export{l as HomePage,l as default};
