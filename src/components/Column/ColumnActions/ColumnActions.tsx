import { useState } from "react";
import { Icon } from "@iconify/react";

import { Button } from "../../Form/Button";
import { useAppState } from "../../../hooks";
import { NewTaskModal } from "../../ActionModals/NewTaskModal";
import { ConfirmModal } from "../../ActionModals/ConfirmModal";

const ColumnAction = ({ id }: { id: string }) => {
  const [showModal, setShowModal] = useState(false);
  const { dispatch } = useAppState();

  const handleSubmit = () => dispatch({ type: "DELETE_COLUMN", key: id });
  const handleClose = () => setShowModal(false);
  const handleButtonClick = () => setShowModal(true);

  return (
    <div className="flex gap-4">
      <Button variant="icon" onClick={handleButtonClick} title="delete column">
        <Icon
          icon="majesticons:close"
          width="20"
          height="20"
          className="text-red-300"
        />
      </Button>
      <ConfirmModal
        handleSubmit={handleSubmit}
        handleClose={handleClose}
        isOpen={showModal}
        title="Delete Column"
        description={`After delete (${id}) tasks within this column will delete.`}
      />
      <NewTaskModal id={id} />
    </div>
  );
};

export default ColumnAction;
