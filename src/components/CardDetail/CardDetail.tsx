import { Modal } from "../Modal";
import { Button } from "../Button";
import { useAppState } from "../../hooks";

import type { ICardDetailProps } from "./interface";

const CardDetailModal = (props: ICardDetailProps) => {
  const { isOpen, onClose, description, status, title, id, columnId } = props;

  const { dispatch } = useAppState();

  const sectionBodyClasses = "text-lg dark:text-white/80";
  const titleClasses = "border-b border-gray-600 text-xl dark:text-white";

  const clickHandler = () => {
    const preparedData = {
      columnId,
      taskId: id,
    };

    if (status === "done") {
      dispatch({
        type: "MARK_AS_TODO",
        ...preparedData,
      });
    } else {
      dispatch({
        type: "MARK_AS_DONE",
        ...preparedData,
      });
    }
  };

  return (
    <Modal onClose={onClose} isOpen={isOpen} title="Detail">
      <div className="flex flex-col gap-5">
        <h2 className={titleClasses}>Title</h2>
        <h5 className={sectionBodyClasses}>{title}</h5>
        <h2 className={titleClasses}>Description</h2>
        <h5 className={sectionBodyClasses}>{description}</h5>
        <h2 className={titleClasses}>Status</h2>
        <h5 className={sectionBodyClasses}>{status}</h5>
        <div className="flex justify-end">
          <Button variant="normal" onClick={clickHandler}>
            {status === "done" ? "Mark As TODO" : "Mark As DONE"}
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default CardDetailModal;
