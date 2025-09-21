import { Modal } from "../../Modal";
import { Button } from "../../Form";

import type { IConfirmModalProps } from "./interface";

const ConfirmModal = ({
  title,
  description,
  handleSubmit,
  handleClose,
  isOpen,
}: IConfirmModalProps) => (
  <Modal title={title} isOpen={isOpen} onClose={handleClose}>
    <div className="flex flex-col gap-4">
      <h2 className="text-center text-xl font-semibold dark:text-white">
        Are you sure?
      </h2>
      <p className="text-center text-sm dark:text-white">{description}</p>
      <div className="flex justify-center gap-2">
        <Button variant="normal" onClick={handleSubmit}>
          approve
        </Button>
        <Button variant="normal" onClick={handleClose}>
          cancel
        </Button>
      </div>
    </div>
  </Modal>
);

export default ConfirmModal;
