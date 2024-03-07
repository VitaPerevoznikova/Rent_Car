import styled from 'styled-components';

export const Container = styled.div`
  width: 320px;
  margin: 0 auto;
  padding: 0px 20px;
  
  @media screen and (min-width: 425px){
    width: 425px;
    padding: 0px 25px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0px 32px;
  }
  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding: 0 56px;
  }
`;
