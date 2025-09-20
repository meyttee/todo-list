import { useAppState } from "../../hooks";
import { Button } from "../Button";
import { Modal } from "../Modal";

const CardDetailModal = ({
  isOpen,
  onClose,
  description,
  status,
  title,
  id,
}: {
  onClose: () => void;
  isOpen: boolean;
  title: string;
  description: string;
  status: "done" | "todo";
  id: string;
}) => {
  const { dispatch } = useAppState();
  return (
    <Modal onClose={onClose} isOpen={isOpen} title="Detail">
      <div className="flex flex-col gap-5">
        <h2 className="border-b border-gray-600 text-xl dark:text-white">
          Title
        </h2>
        <h3
          onClick={() =>
            dispatch({ type: "MARK_AS_DONE", colId: "col 1", taskId: id })
          }
          className="text-lg dark:text-white/80"
        >
          {title}
        </h3>
        <h2 className="border-b border-gray-600 text-xl dark:text-white">
          Description
        </h2>
        <h5 className="text-lg dark:text-white/80">{description}</h5>
        <h2 className="border-b border-gray-600 text-xl dark:text-white">
          Status
        </h2>
        <h5 className="text-lg dark:text-white/80">{status}</h5>
        <div className="flex justify-end">
          <Button variant="normal" disabled={status === "done"}>
            Mark As Done
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default CardDetailModal;
