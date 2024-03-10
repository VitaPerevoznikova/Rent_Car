import styled from 'styled-components';

export const BackdropModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(18, 20, 23, 0.5);
`;

export const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 40px;
  background-color: #fff;
  border-radius: 24px;
  width: 300px;
  height: auto;

  @media screen and (max-width: 424px) {
    max-height: 95%;
    overflow-y: auto;
  }

  @media screen and (min-width: 425px) {
    width: 415px;
  }

  @media screen and (min-width: 768px) {
    width: 540px;
  }
`;

export const CloseBtnWrapper = styled.svg`
  position: absolute;
  width: 24px;
  height: 24px;
  stroke: #121417;
  top: 12px;
  right: 7px;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2.4px;
  cursor: pointer;

  @media screen and (min-width: 1024px) {
    top: 12px;
    right: 6px;
  }
`;
