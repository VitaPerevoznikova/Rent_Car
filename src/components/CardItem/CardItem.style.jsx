import styled from 'styled-components';

export const ItemWrapper = styled.li`
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
`;

export const WrapperImage = styled.div`
  position: relative;
  margin-bottom: 14px;
  width: 100%;
`;

export const ImageCar = styled.img`
  width: 100%;
  height: 268px;
  object-fit: cover;
  border-radius: 14px;
`;

export const Heart = styled.svg`
  position: absolute;
  top: 14px;
  right: 14px;
  display: inline-block;
  width: 18px;
  height: 18px;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2.667px;
`;

export const WrapperTitle = styled.div`
  width: 100%;
  align-items: center;
  color: var(--dark);
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const Title = styled.h3`
  width: 100%;
  overflow: hidden;
  color: var(--dark);
  font-family: 'Manrope';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;

export const Price = styled.p`
  color: var(--dark);
  font-family: 'Manrope';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;

export const Description = styled.ul`
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
`;

export const LearMoreBtn = styled.button`
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
`;
