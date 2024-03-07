import styled from 'styled-components';
import HeroImg from '../../assets/hero_img/image_hero.png';
import HeroImgRetina from '../../assets/hero_img/image_hero@2x.png';
import { Link } from 'react-router-dom';

export const SectionWrapper = styled.section`
  padding: 80px 0;
//background-color: #54A6FF;
`;

export const HeroWrapper = styled.div`
@media screen and (min-width: 1440px){
   display: flex;   
   justify-content: space-between;
}
`;

export const ImageHero = styled.img`
  width: 825px;
  flex-shrink: 0;
  content: url(${HeroImg});
  margin-top: 80px;
  margin-bottom: 20px;

  @media screen and (min-width: 1440px){
    margin-top: 0;
    margin-bottom: 0;
    content: url(${HeroImgRetina});
  }
`;

export const MainTitle = styled.h1`
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
`;

export const HeroDescription = styled.p`
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
`;

export const LinkRent = styled(Link)`
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
`;
