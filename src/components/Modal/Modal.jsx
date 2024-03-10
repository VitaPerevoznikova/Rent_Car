import {
  makeComaInMileage,
  makeNumberFromPrice,
} from '../../services/serviceFunc';

import Placeholder from '../../assets/no_img.jpg';

import { Description, Title } from '../CardItem/CardItem.style';

import {
  ConditionSpan,
  ConditionsItem,
  ConditionsList,
  ImageCarModal,
  ItemWrapperModal,
  ModalSecondTitle,
  RentalCar,
  SecondDescription,
  WrapperTitleModal,
} from './Modal.styled';

export const Modal = ({ car }) => {
  const {
    id,
    make,
    model,
    year,
    img,
    rentalPrice,
    mileage,
    type,
    address,
    fuelConsumption,
    engineSize,
    description,
    accessories,
    rentalConditions,
  } = car;
  const cityCountry = address?.split(', ').slice(-2);
  const arrOfConditions = rentalConditions.split('\n');

  const age = (conditionWithAge) => {
    const conditionWithAgeArr = conditionWithAge.split(': ');
    return conditionWithAgeArr;
  };

  const imageSrc = img || Placeholder;

  return (
    <ItemWrapperModal key={id}>
      <ImageCarModal
        src={imageSrc}
        alt={description}
        width={274}
        height={268}
        loading="lazy"
        onError={(e) => {
          e.target.src = Placeholder;
        }}
      />
      <WrapperTitleModal>
        <Title>
          {make}&nbsp;
          <span style={{ color: '#3470FF' }}>{model}</span>,&nbsp; {year}
        </Title>
        <WrapperTitleModal />

        <Description>
          <li>{cityCountry[0]}</li>
          <li>{cityCountry[1]}</li>
          <li>Id: {id}</li>
          <li>Year: {year}</li>
          <li>Type: {type}</li>
          <li>Fuel Consumption: {fuelConsumption}</li>
          <li>Engine Size:{engineSize}</li>
        </Description>
        <SecondDescription>{description}</SecondDescription>

        <ModalSecondTitle>Accessories and functionalities:</ModalSecondTitle>

        <Description>
          {accessories?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </Description>

        <ModalSecondTitle>Rental Conditions:</ModalSecondTitle>
        <div>
          <ConditionsList>
            <ConditionsItem>
              {age(arrOfConditions[0])[0]}:{' '}
              <ConditionSpan>{age(arrOfConditions[0])[1]}</ConditionSpan>
            </ConditionsItem>
            <ConditionsItem>{arrOfConditions[1]}</ConditionsItem>
          </ConditionsList>
          <ConditionsList>
            <ConditionsItem>{arrOfConditions[2]}</ConditionsItem>
            <ConditionsItem>
              Mileage: <ConditionSpan>{makeComaInMileage(mileage)}</ConditionSpan>
            </ConditionsItem>
            <ConditionsItem>
              Price: <ConditionSpan>{makeNumberFromPrice(rentalPrice)}$</ConditionSpan>
            </ConditionsItem>
          </ConditionsList>
        </div>
      </WrapperTitleModal>

      <RentalCar
        width="168px"
        onClick={() => (window.location.href = 'tel:+380730000000')}
      >
        Rental car
      </RentalCar>
    </ItemWrapperModal>
  );
};

export default Modal;


