import styled from "styled-components";

export const ItemWrapperModal = styled.li`
display: flex;
height: auto;
flex-direction: column;
align-items: flex-start;
`;

export const ImageCarModal = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 14px;
  margin-bottom: 14px;

  @media screen and (min-width: 768px) {
    height: 248px;
  }
`;

export const WrapperTitleModal = styled.div`
  width: 100%;
  align-items: center;
  color: var(--dark);
  justify-content: space-between;
`;

export const ModalSecondTitle = styled.h4`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  margin-bottom: 8px;
  color: var(--dark);
`;

export const SecondDescription = styled.p`
font-weight: 400;
font-size: 10px;
line-height: 1.43;
color: var(--dark);
margin-bottom: 14px;

@media screen and (min-width: 425px) {
  font-size: 14px;
  margin-bottom: 24px;
}
`;

export const ConditionsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  font-size: 12px;
`;

export const ConditionsItem = styled.li`
  border-radius: 35px;
  color: var(--withe-grey);
  background-color: #f9f9f9;
  padding: 4px 8px;

  @media screen and (min-width: 425px) {
  padding: 7px 14px;
  }
`;

export const ConditionSpan = styled.span`
  color: var(--blue);
  font-weight: 600;
`;

export const RentalCar = styled.button`
  width: 100px;
  height: 34px;
  outline: none;
  border: none;
  border-radius: 12px;
  background:var(--blue);
  font-weight: 600;
  font-size: 14px;
  line-height: 1.4;
  color: var(--hover-btn-text);
  margin-top: 14px;

  @media screen and (min-width: 768px) {
    margin-top: 24px;
    width: 168px;
    height: 44px;
   }

  &:hover,
  &:focus {
    background-color: var(--hover-blue);
  }
`;
