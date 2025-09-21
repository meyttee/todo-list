import { Icon } from "@iconify/react";
import { lazy, useState } from "react";

import { Modal } from "../../Modal";
import { Button } from "../../Form";
import type { ICardProps } from "../../Card";

const ModalContent = lazy(() => import("./ModalContent"));

const EditTask = (props: ICardProps) => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);

  return (
    <>
      <Button
        variant="icon"
        onClick={() => {
          setShowModal(true);
        }}
        title="Edit task"
      >
        <Icon
          icon="majesticons:edit-pen-2"
          width="20"
          height="20"
          className="text-blue-300"
        />
      </Button>
      <Modal
        isOpen={showModal}
        onClose={handleClose}
        title={`Edit ${props.title}`}
      >
        <ModalContent submitCallback={handleClose} {...props} />
      </Modal>
    </>
  );
};

export default EditTask;
