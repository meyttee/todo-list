import clsx from "clsx";

import { Modal } from "../../Modal";
import { Button } from "../../Form";
import { useAppState } from "../../../hooks";
import { periorityMap, statusColor } from "../../../constants";

import type { ICardDetailProps } from "./interface";

const CardDetailModal = (props: ICardDetailProps) => {
  const {
    isOpen,
    onClose,
    description,
    status,
    title,
    id,
    columnId,
    priority,
  } = props;

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
    <Modal onClose={onClose} isOpen={isOpen} title={title}>
      <div className="flex flex-col gap-5">
        <h2 className={titleClasses}>Description</h2>
        <h5 className={sectionBodyClasses}>{description}</h5>
        <div className="flex justify-between gap-10">
          <div className="w-full">
            <h2 className={titleClasses}>Status</h2>
            <h5
              className={clsx(
                sectionBodyClasses,
                "flex items-center gap-2 before:block before:size-4 before:rounded-full before:content-['']",
                statusColor[status],
              )}
            >
              {status}
            </h5>
          </div>
          <div className="w-full">
            <h2 className={titleClasses}>Priority</h2>
            <h5
              className={clsx(
                sectionBodyClasses,
                "flex items-center gap-2 before:block before:size-4 before:rounded-full before:content-['']",
                {
                  "before:!bg-red-400": priority === 3,
                  "before:!bg-blue-400": priority === 2,
                  "before:!bg-green-400": priority === 1,
                },
              )}
            >
              {periorityMap[priority]}
            </h5>
          </div>
        </div>
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
