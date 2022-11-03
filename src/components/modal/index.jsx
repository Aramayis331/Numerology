import { Modal as MuiModal } from "@mui/material";

const Modal = ({ children, onClose }) => {
  return (
    <MuiModal
      open
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <>{children}</>
    </MuiModal>
  );
};

export default Modal;
