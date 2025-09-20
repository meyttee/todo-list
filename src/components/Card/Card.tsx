import clsx from "clsx";
import { Icon } from "@iconify/react";
import { useState, type MouseEvent } from "react";

import { Button } from "../Button";
import { useAppState } from "../../hooks";
import { valuesLabel } from "../../constants";
import { CardDetailModal } from "../CardDetail";

import type { ICardProps } from "./interface";
import { EditTask } from "../EditTaskModal";

const Card = (props: ICardProps) => {
  const { status, title, id, columnId, priority } = props;

  const { dispatch } = useAppState();
  const [showModal, setShowModal] = useState(false);

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

  const handleDelete = () => {
    dispatch({ type: "DELETE_TASK", columnId, taskId: id });
  };

  return (
    <div
      draggable
      onDragStart={(e) => handleDragStart(e, columnId, id)}
      className="flex w-full items-start rounded-xl border border-gray-200 bg-white p-5 dark:border-white/10 dark:bg-neutral-800"
    >
      <CardDetailModal
        {...props}
        isOpen={showModal}
        onClose={onClose}
        columnId={columnId}
      />
      <div
        className={clsx(
          "flex w-full cursor-pointer flex-col gap-1 dark:text-white",
          {
            "line-through": status === "done",
          },
        )}
        onClick={handleOpenModal}
      >
        <h4>{title}</h4>
        <h6
          className={clsx(
            "flex items-center gap-2 before:block before:size-4 before:rounded-full before:content-['']",
            {
              "before:!bg-red-400": priority === 3,
              "before:!bg-blue-400": priority === 2,
              "before:!bg-green-400": priority === 1,
            },
          )}
        >
          {valuesLabel[priority]}
        </h6>
      </div>
      <Button variant="icon" onClick={handleDelete} title="delete column">
        <Icon
          icon="majesticons:close"
          width="20"
          height="20"
          className="text-red-300"
        />
      </Button>
      <EditTask {...props} />
    </div>
  );
};
export default Card;
