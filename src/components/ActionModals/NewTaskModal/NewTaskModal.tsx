import { useState } from "react";
import { Icon } from "@iconify/react";

import { Modal } from "../../Modal";
import { Button } from "../../Form/Button";

import ModalContent from "./ModalContent";

const NewTaskModal = ({ id }: { id: string }) => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);

  return (
    <>
      <Button
        variant="icon"
        onClick={() => {
          setShowModal(true);
        }}
        title="add task"
      >
        <Icon
          icon="majesticons:plus"
          width="20"
          height="20"
          className="text-green-400"
        />
      </Button>
      <Modal isOpen={showModal} onClose={handleClose} title="Create New Task">
        <ModalContent submitCallback={handleClose} id={id} />
      </Modal>
    </>
  );
};

export default NewTaskModal;
