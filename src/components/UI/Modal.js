import "./Modal.css";
import { createPortal } from "react-dom";

const Backdrop = (props) => {
  return <div className="backdrop" />;
};

const ModalOverlay = (props) => {
  return (
    <div className="modal">
      <div className="content">{props.children}</div>
    </div>
  );
};

const modalRoot = document.getElementById("overlays");

export default function Modal(props) {
  return (
    <>
      {createPortal(<Backdrop />, modalRoot)}
      {createPortal(<ModalOverlay>{props.children}</ModalOverlay>, modalRoot)}
    </>
  );
}
