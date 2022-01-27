import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

function ContentModal({ open, handleClose, children }) {
  return (
    <Modal
      id="modal"
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <>
        <Box className="modal-container" >
          <section id="close-modal">
            <span>
              <FontAwesomeIcon
                onClick={() => handleClose()}
                icon={faTimes}
              ></FontAwesomeIcon>
            </span>
          </section>
          {children}
        </Box>
      </>
    </Modal>
  );
}

export default ContentModal;
