import styled from 'styled-components';

export const ListCars = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;

  @media screen and (min-width: 768px) {
    gap: 30px 15px;
  }
  @media screen and (min-width: 768px) {
    gap: 50px 30px;
  }
`;
