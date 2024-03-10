import styled from '@emotion/styled';

export const FooterWrapper = styled.footer`
  background-color: var(--bg-white);

  @media screen and (min-width: 768px) {
    width: 100%;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Logo = styled.img`
  width: 100px;
`;
