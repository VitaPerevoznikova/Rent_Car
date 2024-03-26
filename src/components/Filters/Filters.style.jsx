import styled from 'styled-components';

export const ContainerSearch = styled.div`
  margin-bottom: 30px;

  @media screen and (min-width: 425px) {
    display: flex;
    justify-content: center;
    align-items:flex-end;
    gap: 20px;
    -webkit-box-pack: center;

  }

    @media screen and (min-width: 768px) {
      justify-content: flex-start;
      margin-bottom: 50px;
    }
  }
`;

export const LabelSearch = styled.label`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  color: var(--grey);
`;

export const SearchButton = styled.button`
  width: 136px;
  height: 48px;
  outline: none;
  border: none;
  border-radius: 12px;
  background: var(--blue);
  font-weight: 600;
  font-size: 14px;
  line-height: 1.4;
  color: var(--white);
  display: inline-block;

  @media screen and (max-width: 424px) {
    margin-top: 8px;
  }

  &:hover,
  &:focus {
    background-color: #224bac;
  }
`;
