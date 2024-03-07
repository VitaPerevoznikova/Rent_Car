import {
    HeroDescription,
  HeroWrapper,
  ImageHero,
  LinkRent,
  MainTitle,
  SectionWrapper,
} from './Hero.style';

const Hero = () => {
  return (
    <SectionWrapper>
      <HeroWrapper>
        <div>
          <MainTitle>The Best Platform for Car Rental</MainTitle>
          <HeroDescription>
            Ease of doing a car rental safely and reliably. Of course at a low
            price.
          </HeroDescription>
        </div>
        <div>
          <ImageHero />
         
        </div>
      </HeroWrapper> 
      <LinkRent to="/catalog">Reserve Now</LinkRent>
    </SectionWrapper>
  );
};

export default Hero;
