import { Icon } from "@iconify/react";
import { lazy, useState } from "react";

import { Modal } from "../../Modal";
import { Button } from "../../Form";

const ModalContent = lazy(() => import("./ModalContent"));

const NewColumnModal = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const onClose = () => setShowModal(!showModal);
  return (
    <>
      <Modal title="create new column" isOpen={showModal} onClose={onClose}>
        <ModalContent submitCallback={onClose} />
      </Modal>
      <Button variant="fab" onClick={handleClick}>
        <Icon icon="majesticons:plus-line" width="16" height="40" />
      </Button>
    </>
  );
};

export default NewColumnModal;
