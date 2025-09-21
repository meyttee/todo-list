import clsx from "clsx";
import { Icon } from "@iconify/react";
import { useState, type MouseEvent } from "react";

import { Button } from "../Form";
import { useAppState } from "../../hooks";
import { EditTask, ConfirmModal } from "../ActionModals";
import { periorityMap, priorityColors, statusColor } from "../../constants";

import { CardDetailModal } from "./CardDetail";

import type { ICardProps } from "./interface";

const Card = (props: ICardProps) => {
  const { status, title, id, columnId, priority } = props;

  const { dispatch } = useAppState();
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const onClose = () => setShowModal(false);

  const handleDragStart = (
    e: React.DragEvent,
    fromColumn: string,
    id: string,
  ) => {
    e.dataTransfer.setData(
      "application/json",
      JSON.stringify({ fromColumn, id }),
    );
  };

  const handleOpenModal = (
    e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
  ) => {
    e.stopPropagation();
    setShowModal(true);
  };

  const onDeleteButtonClick = () => setShowDeleteModal(true);

  const handleSubmit = () =>
    dispatch({ type: "DELETE_TASK", columnId, taskId: id });

  const handleClose = () => setShowDeleteModal(false);

  return (
    <div
      draggable
      onDragStart={(e) => handleDragStart(e, columnId, id)}
      className="flex w-full items-start rounded-xl border border-gray-200 bg-white p-5 shadow shadow-zinc-600 dark:border-white/10 dark:bg-gray-700"
    >
      <CardDetailModal
        {...props}
        isOpen={showModal}
        onClose={onClose}
        columnId={columnId}
      />
      <div
        className={clsx(
          "flex w-full cursor-pointer flex-col justify-between gap-4 dark:text-white",
          {
            "line-through": status === "done",
          },
        )}
        onClick={handleOpenModal}
      >
        <h4>{title}</h4>
        <div className="flex items-center gap-5">
          <h6
            className={clsx(
              "flex items-center gap-2 before:block before:size-4 before:rounded-full before:content-['']",
              priorityColors[priority],
            )}
          >
            {periorityMap[priority]}
          </h6>
          <h6
            className={clsx(
              "flex items-center gap-2 before:block before:size-4 before:rounded-full before:content-['']",
              statusColor[status],
            )}
          >
            {status}
          </h6>
        </div>
      </div>
      <div className="flex flex-col">
        <Button
          variant="icon"
          onClick={onDeleteButtonClick}
          title="delete column"
        >
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
          isOpen={showDeleteModal}
          title="Delete Task"
          description={`After delete (${props.title}) all data will be lost`}
        />
        <EditTask {...props} />
      </div>
    </div>
  );
};
export default Card;
