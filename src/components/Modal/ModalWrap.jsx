import { useEffect } from "react";
import {
  ModalContainer,
  CloseBtnWrapper,
  BackdropModal,
 
} from "./ModalWrap.styled";

import { ModalPortal } from "./Portal";

export const ModalWindowWrap = ({ onClick, children }) => {
  const onKeyDown = (e) => {
    if (e.code === "Escape") {
      onClick();
    }
  };

  const onClickClose = () => {
    onClick();
  };

  const onClickBackDrop = (e) => {
    if (e.currentTarget === e.target) {
      onClick();
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", onKeyDown);
    };
  });



  return (
    <ModalPortal>
      <BackdropModal onClick={onClickBackDrop}>
        <ModalContainer>
          <CloseBtnWrapper
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            onClick={onClickClose}
          >
            <path d="M24 8 8 24M8 8l16 16" />
          </CloseBtnWrapper>
          {children}
        </ModalContainer>
      </BackdropModal>
    </ModalPortal>
  );
};

