import { createPortal } from "react-dom";

export const ModalPortal = ({ children }) => {
  const portal = document.getElementById("modal");

  if (!portal) {
    return null;
  }

  return createPortal(children, portal);
};