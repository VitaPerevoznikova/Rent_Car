import {
  Description,
  ImageCar,
  ItemWrapper,
  LearMoreBtn,
  Price,
  Title,
  WrapperImage,
  WrapperTitle,
} from './CardItem.style';
import Placeholder from '../../assets/no_img.jpg';

const CarsCard = ({ car }) => {
  const {
    img,
    description,
    make,
    model,
    rentalPrice,
    address,
    rentalCompany,
    type,
    year,
    mileage,
    functionalities,
  } = car;

  let parts = [];
  let country = '';
  let city = '';

  if (address) {
    parts = address?.split(',');
    country = parts[parts.length - 1].trim() || '';
    city = parts[parts.length - 2].trim() || '';
  }
  let premiumCar = description?.toLowerCase().includes('premium')
    ? 'Premium'
    : ' - ';

  const imageSrc = img || Placeholder;
  return (
    <>
      <ItemWrapper>
        <WrapperImage>
          <ImageCar
            src={imageSrc}
            alt={description}
            width={274}
            height={268}
            loading="lazy"
            onError={(e) => {
              e.target.src = Placeholder;
            }}
          />
        </WrapperImage>
        <WrapperTitle>
          <Title>
            {make}&nbsp;
            <span style={{ color: '#3470FF' }}>{model}</span>,&nbsp;
            {year}
          </Title>
          <Price>{rentalPrice}</Price>
        </WrapperTitle>
        <div>
          <Description>
            <li>{city}</li>
            <li>{country}</li>
            <li>{rentalCompany}</li>
            <li>{premiumCar}</li>
            <li>{type}</li>
            <li>{model}</li>
            <li>{mileage}</li>
            <li>{functionalities ? functionalities[0] : ''}</li>
          </Description>
        </div>
        <LearMoreBtn type="button">Learn more</LearMoreBtn>
      </ItemWrapper>
    </>
  );
};

export default CarsCard;
