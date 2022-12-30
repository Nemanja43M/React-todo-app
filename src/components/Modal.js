import { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TodoForm from "./TodoForm";
import styles from "./Modal.module.css";

function ModalEdit({ todoObj, setTodo, todo }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <button className={styles.buttonedit}>
        <i
          className="fa fa-edit"
          onClick={() => {
            handleOpen();
          }}
        />
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TodoForm
            todoObj={todoObj}
            mode={"Edit"}
            setTodo={setTodo}
            todo={todo}
            handleClose={handleClose}
          />
        </Box>
      </Modal>
    </div>
  );
}
export default ModalEdit;
