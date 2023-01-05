import "./Modal.css";
import { createPortal } from "react-dom";

const Backdrop = ({ onClose }) => {
  return <div className="backdrop" onClick={onClose} />;
};

const ModalOverlay = ({ children }) => {
  return (
    <div className="modal">
      <div className="content">{children}</div>
    </div>
  );
};

const modalRoot = document.getElementById("overlays");

export default function Modal({ onClose, children }) {
  return (
    <>
      {createPortal(<Backdrop onClose={onClose} />, modalRoot)}
      {createPortal(<ModalOverlay>{children}</ModalOverlay>, modalRoot)}
    </>
  );
}
