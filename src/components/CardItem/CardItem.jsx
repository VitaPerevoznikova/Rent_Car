import {
  Description,
  Heart,
  ImageCar,
  ItemWrapper,
  LearMoreBtn,
  Price,
  Title,
  WrapperImage,
  WrapperTitle,
} from './CardItem.style';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import { selectFavoriteCars } from '../../redux/cars_selectors';
import { addFavoriteCar, deleteFavoriteCar } from '../../redux/favorite_slice/favorite_slice';

import { Modal } from '../Modal/Modal';
import { ModalWindowWrap } from '../Modal/ModalWrap';

import Placeholder from '../../assets/no_img.jpg';

const CarsItem = ({ car }) => {
  const {
    id,
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
  } = car;

  const dispatch = useDispatch();
  const favoriteCarsId = useSelector(selectFavoriteCars);
  const [isCarFavorite, setIsCarFavorite] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (favoriteCarsId?.some((car) => car.id === id)) {
      setIsCarFavorite(true);
    } else {
      setIsCarFavorite(false);
    }
  }, [favoriteCarsId, id]);

  const onClickHeart = () => {
    isCarFavorite
      ? dispatch(deleteFavoriteCar(id))
      : dispatch(addFavoriteCar(car));
  };

  let parts = [];
  let country = '';
  let city = '';

  if (address) {
    parts = address?.split(',');
    country = parts[parts.length - 1].trim() || '';
    city = parts[parts.length - 2].trim() || '';
  }

  const premiumCar = description?.toLowerCase().includes('premium')
    ? 'Premium'
    : ' - ';

  const imageSrc = img || Placeholder;

  const toggleModal = () => {
    setShowModal((prevState) => !prevState);
  };


  return (
    <>
      <ItemWrapper  key={id}>
      {showModal && (
        <ModalWindowWrap onClick={toggleModal}>
          <Modal car={car} key={id} />
        </ModalWindowWrap>
      )}
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
           <Heart
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            onClick={onClickHeart}
            fill={isCarFavorite ? "#3470FF" : "none"}
            stroke={isCarFavorite ? "#3470FF" : "#FFF"}
          >
            <path d="M27.787 6.147a7.345 7.345 0 0 0-5.187-2.15 7.33 7.33 0 0 0-5.187 2.15L16 7.56l-1.413-1.413a7.333 7.333 0 0 0-10.374 0 7.333 7.333 0 0 0 0 10.374L16 28.308l11.787-11.787a7.345 7.345 0 0 0 2.15-5.187 7.33 7.33 0 0 0-2.15-5.187z" />
          </Heart>
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
          </Description>
        </div>
        <LearMoreBtn onClick={toggleModal}>Learn more</LearMoreBtn>
      </ItemWrapper>
    </>
  );
};

export default CarsItem;
